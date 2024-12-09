import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import RoundedButton from "../../../../../../components/button/RoundedButton";

interface Props {
  apiData: any;
  slideNo: string;
  setSlideContent: React.Dispatch<React.SetStateAction<any[]>>;
  index: any;
  onResize: (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => void;
  onDrag: (e: any, data: any, index: number) => void;
}

const SlideImage = ({
  apiData,
  slideNo,
  setSlideContent,
  index,
  onResize,
  onDrag,
}: Props) => {
  const fileInputRef = useRef<any>();
  const [image, setImage] = useState<any>(null);
  const [hold, setHold] = useState(true);
  const [showUploadButton, setShowUploadButton] = useState(false);

  const handleImageUpload = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === slideNo
          ? {
              [slideNo]: item[slideNo].map((innerItem: any, i: number) =>
                i === index
                  ? {
                      ...innerItem,
                      data: { ...innerItem.data, image: e.target.files[0] },
                    }
                  : innerItem
              ),
            }
          : item
      )
    );
  };

  return (
    <Rnd
      size={{
        width: apiData?.dimensions?.width,
        height: apiData?.dimensions?.height,
      }}
      position={{
        x: apiData?.position?.x,
        y: apiData?.position?.y,
      }}
      // disableDragging={hold}
      onDragStop={(e, data) => onDrag(e, data, index)}
      onResizeStop={(e, data, ref, delta, position) =>
        onResize(e, data, ref, delta, position, index)
      }
      minWidth={100}
      minHeight={100}
      bounds="parent"
      className="hover:border hover:border-blue-500 rounded-lg overflow-hidden"
    >
      <div
        className="relative h-full w-full"
        onMouseEnter={() => setShowUploadButton(true)}
        onMouseLeave={() => setShowUploadButton(false)}
      >
        {showUploadButton && (
          <RoundedButton
            title={"upload"}
            sm
            className="!absolute right-2 top-2"
            onClick={() => fileInputRef?.current?.click()}
          />
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".png,.jpg,.jpeg"
          className="hidden"
          onChange={handleImageUpload}
        />
        {
          <img
            draggable={false}
            src={image ? image : apiData?.data?.image}
            alt=""
            className="h-full w-full object-cover"
          />
        }
      </div>
    </Rnd>
  );
};

export default SlideImage;
