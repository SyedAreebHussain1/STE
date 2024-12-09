import {
  temp1LeftBottomImg,
  verticalLineUpsideDown,
} from "../../../../../../../assets/PicthDeckTemplateAssets";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import StaticComponent from "../../EditableSlideContent/StaticComponent";
import SlideDualList from "../../EditableSlideContent/Temp1EditableComponents/SlideDualList";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide9 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_9`
          ? {
              [`slide_9`]: item[`slide_9`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_9`
            ? {
                [`slide_9`]: item[`slide_9`].map((innerItem: any, i: number) =>
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
    <div id={"Slide#12"} className="slide-wrapper flex flex-col overflow-hidden">
      <img
        src={temp1LeftBottomImg}
        alt=""
        className="absolute bottom-0 left-0 h-[150px]"
        draggable={false}
      />
      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={60}
        minWidth={100}
        index={2}
      >
        <div className="flex w-full pl-4 h-[100px] gap-2 items-end">
          <img
            src={verticalLineUpsideDown}
            alt=""
            className="h-full"
            draggable={false}
          />
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
            use of funds
          </h1>
        </div>
      </StaticComponent>

      <SlideParagraph
        apiData={slideContent?.[0]}
        slideNo={"slide_9"}
        index={0}
        setSlideContent={setSlideContent}
        onResize={handleResize}
        onDrag={handleDrag}
      />

      <SlideDualList
        isLeftEditable={false}
        isRightEditable={true}
        listStyle="Box"
        apiData={slideContent?.[1]}
        slideNo={"slide_9"}
        index={1}
        setSlideContent={setSlideContent}
        onDrag={handleDrag}
        onResize={handleResize}
        minWidth={480}
        minHeight={200}
      />
    </div>
  );
};

export default Temp1Slide9;
