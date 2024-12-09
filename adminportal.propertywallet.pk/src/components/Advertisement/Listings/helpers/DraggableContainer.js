import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { CloseOutlined } from '@ant-design/icons'
import ListingPreviewsSingle from './ListingPreviewsSingle'

// fake data generator

const DraggableContainer = ({
  setSourceAndDestionation,
  selectedList,
  removeProjectAndProductFromList,
  setSelectedList,
}) => {
  // const getItems = (count) => {
  //   return [
  //     ...selectedList.map((list) => ({ id: `item-${list.id}`, ...list })),
  //   ];
  // };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const grid = 8

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    margin: `0 0 ${grid}px 0`,

    ...draggableStyle,
  })

  const getListStyle = (isDraggingOver) => ({
    width: '100%',
  })
  const [items, setItems] = useState([])
  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    setSourceAndDestionation(result.source.index, result.destination.index)
    const itemsUpdated = reorder(
      selectedList,
      result.source.index,
      result.destination.index
    )
    setSelectedList(itemsUpdated)
  }
  useEffect(() => {
    setItems((prev) => uniqueObjects([...selectedList]))
  }, [selectedList])
  function uniqueObjects(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.map((ar) => ar.id).includes(arr[i].id)) {
        continue
      }
      newArr.push(arr[i])
    }
    return newArr
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              ...getListStyle(snapshot.isDraggingOver),
            }}
          >
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div className="flex gap-[6px] mt-5">
                      <div className="py-[8px] px-[10px] rounded-[8px] border-2 border-[#E0E2E7] flex justify-center items-center bg-white  h-[34px] w-[34px]">
                        <div className="flex gap-[2px]">
                          <div className="w-[5px] h-[5px] bg-[#C2C6CE]" />
                          <div className="w-[5px] h-[5px] bg-[#C2C6CE]" />
                          <div className="w-[5px] h-[5px] bg-[#C2C6CE]" />
                        </div>
                      </div>
                      <div className="py-[8px] px-[10px] text-[#444B54] border-2 border-[#E0E2E7] rounded-[8px] max-w-[394px] relative w-full bg-white h-[34px] flex items-center">
                        {item?.projectName
                          ? item?.projectName?.length >= 38
                            ? `${item?.projectName?.substring(0, 38)}...`
                            : item?.projectName
                          : item?.title?.length >= 38
                          ? `${item?.title?.substring(0, 38)}...`
                          : item?.title}
                        <span
                          className="absolute right-[-20px] top-[2px] cursor-pointer"
                          onClick={() => {
                            removeProjectAndProductFromList(item.id)
                            setItems((prev) =>
                              prev.filter((i) => i.id !== item.id)
                            )
                          }}
                        >
                          <CloseOutlined />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {/* {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <div className="flex gap-[10px] mt-5">
                      <div className="py-[8px] px-[10px] rounded-[8px] border-2 border-[#E0E2E7] flex justify-center items-center">
                        <div className="flex gap-[2px]">
                          <div className="w-[5px] h-[5px] bg-[#C2C6CE]" />
                          <div className="w-[5px] h-[5px] bg-[#C2C6CE]" />
                          <div className="w-[5px] h-[5px] bg-[#C2C6CE]" />
                        </div>
                      </div>
                      <div className="py-[8px] px-[10px] text-[#444B54] border-2 border-[#E0E2E7] rounded-[8px] max-w-[394px] relative w-full">
                        {item?.projectName || item?.title}

                        <span
                          className="absolute right-[-25px] top-2 cursor-pointer"
                          onClick={() => {
                            removeProjectAndProductFromList(
                              Number(item.id.split("-")[1])
                            );
                            setItems((prev) =>
                              prev.filter((i) => i.id !== item.id)
                            );
                          }}
                        >
                          <CloseOutlined />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))} */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DraggableContainer
