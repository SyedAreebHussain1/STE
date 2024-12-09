import SlideList from "../../EditableSlideContent/Temp1EditableComponents/SlideList";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide5 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_5`
          ? {
              [`slide_5`]: item[`slide_5`].map((innerItem: any, i: number) =>
                i === index
                  ? {
                      ...innerItem,
                      position: { x: data.x, y: data.y },
                    }
                  : innerItem
              ),
            }
          : item
      )
    );
  };

  const handleResize = (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => {
    {
      setSlideContent((prevData: any) =>
        prevData.map((item: any) =>
          Object.keys(item)[0] === `slide_5`
            ? {
                [`slide_5`]: item[`slide_5`].map((innerItem: any, i: number) =>
                  i === index
                    ? {
                        ...innerItem,
                        dimensions: {
                          width:
                            delta.width === 0
                              ? innerItem.dimensions.width
                              : innerItem.dimensions.width + delta.width,
                          height:
                            delta.height === 0
                              ? innerItem.dimensions.height
                              : innerItem.dimensions.height + delta.height,
                        },
                        position,
                      }
                    : innerItem
                ),
              }
            : item
        )
      );
    }
  };

  return (
    <div id={"Slide#7"} className="slide-wrapper flex gap-2 overflow-hidden">
      <SlideList
        apiData={slideContent?.[0]}
        setSlideContent={setSlideContent}
        slideNo="slide_5"
        index={0}
        onDrag={handleDrag}
        onResize={handleResize}
        minWidth={345}
        minHeight={369}
      />
      <SlideList
        apiData={slideContent?.[1]}
        setSlideContent={setSlideContent}
        slideNo="slide_5"
        index={1}
        onDrag={handleDrag}
        onResize={handleResize}
        minWidth={345}
        minHeight={369}
      />
    </div>
  );
};

export default Temp1Slide5;
