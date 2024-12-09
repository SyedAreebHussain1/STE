import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { useEffect, useMemo, useState } from "react";
import DndEditorChild from "./DndEditorChild";
import { useEdges } from "reactflow";

const DndEditor = ({
  pushObject,
  setPushObject,
  index,
  headingNumber,
  setSaveChangesDisabled,
}: any) => {
  const pushObjectId = useMemo(
    () => pushObject?.[index]?.map((col: any) => col.id),
    [pushObject?.[index]]
  );
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: `Receiver${index}`,
    data: {
      type: "Receiver",
    },
  });
  const [arr, setArr] = useState<any>([]);
  useEffect(() => {
    let subHeadingArr = [];
    let count = 0;
    for (let i = 0; i < pushObject?.[index]?.length; i++) {
      const element = pushObject?.[index]?.[i];
      if (element?.type === "Sub Title") {
        count += 1;
        subHeadingArr.push(count);
      } else {
        subHeadingArr.push(count);
      }
    }
    setArr([...subHeadingArr]);
  }, [pushObject]);


  return (
    <div ref={setNodeRef}>
      <SortableContext items={pushObjectId}>
        {pushObject?.[index]?.length > 0 &&
          arr?.length > 0 &&
          pushObject?.[index]?.map((items: any, key: number) => (
            <DndEditorChild
              item={items}
              key={key}
              pushObject={pushObject}
              setPushObject={setPushObject}
              index={index}
              innerIndex={key}
              subheadingNumber={`${headingNumber}.${arr[key]}`}
              setSaveChangesDisabled={setSaveChangesDisabled}
            />
          ))}
      </SortableContext>
    </div>
  );
};

export default DndEditor;
