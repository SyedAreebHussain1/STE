import ReactQuill from "react-quill";
import { Rnd } from "react-rnd";
import "./../../../PitchDeckEditor/helpers/EditableSlideContent/SlideParagraph.css";

interface data {
  id: number;
  type: string;
  paragraph: string;
}

interface Props {
  apiData: any;
}

const SlideParagraphForPdf = ({ apiData }: Props) => {
  const getTextContent = (data: any) => {
    const keys = Object.keys(data || {});
    if (keys.length > 0) {
      return data[keys[0]];
    }
    return "";
  };

  const resizeDirections = {
    bottom: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false,
  };

  return (
    <Rnd
      enableResizing={resizeDirections}
      size={{
        width: apiData?.dimensions?.width,
        height: apiData?.dimensions?.height,
      }}
      position={{
        x: apiData?.position?.x,
        y: apiData?.position?.y,
      }}
      disableDragging={true}
      bounds="parent"
      className="rounded-lg overflow-visible"
    >
      <div className="w-full h-full relative">
        <div
          className={`bg-transparent  p-4 relative rounded-lg h-full w-full`}
        >
          <ReactQuill
            theme="snow"
            readOnly={true}
            className={`h-max  quillNotFocus`}
            placeholder="write your content ...."
            value={getTextContent(apiData?.data)}
          ></ReactQuill>
        </div>
      </div>
    </Rnd>
  );
};

export default SlideParagraphForPdf;
