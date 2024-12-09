import { Divider } from "antd";
import {
  chapterCoverBottom,
  chapterCoverTop,
} from "../../../assets/ViewPlanDownloadPdf";

type Props = {
  item: any;
  index: number;
};

const ChapterCoverPage = ({ item, index }: Props) => {
  return (
    <div className="page-break border-[5px] border-strokes h-[1040px] w-full p-4 mb-4 bg-[white] flex flex-col items-center justify-center relative">
      <img src={chapterCoverTop} alt="" className="absolute left-0 top-0" />
      <img
        src={chapterCoverBottom}
        alt=""
        className="absolute right-0 bottom-0"
      />
      <div className="flex gap-2 items-center">
        <h1 className="heading-l text-primary font-bold">
          Chapter {item?.chapterNo}
        </h1>
        <Divider type="vertical" className="!border-strokes !h-[80%]" />
        <h1 className="heading-l text-title font-bold ">{item?.title}</h1>
      </div>
      <h1 className="heading-xs text-primary font-semibold">
        {item?.description}
      </h1>
    </div>
  );
};

export default ChapterCoverPage;
