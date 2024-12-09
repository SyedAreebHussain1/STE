import { useSelector } from "react-redux";
import { dropDownGreenIcon } from "../../../assets/ViewPlanDownloadPdf";
import { RootState } from "../../../redux/store";

interface Props {
  chapters: any[];
}

const TableOfContents = ({ chapters }: Props) => {
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount?.data?.data
  );
  return (
    <div className=" w-full px-12 pt-6 pb-20 mb-4 bg-[white] flex flex-col  relative printable-component">
      <h1 className="text-para font-medium heading mb-5">Table Of Contents</h1>
      <div className="border-l-4 border-primary pl-4 flex flex-col gap-1 flex-1">
        {chapters
          ?.slice(0, getBusinessCount?.allowed?.chapters)
          ?.map((chapter, i) => (
            <div
              key={chapter?.id}
              className={`${i != 0 ? "mt-2" : ""} printable-component`}
            >
              <div className="flex gap-2 items-center">
                <img src={dropDownGreenIcon} alt="" />
                <h1 className="font-medium text-body paragraph">
                  Chapter {chapter?.chapterNo}: {chapter?.title}
                </h1>
              </div>
              {chapter?.topics?.map((topic: any) => (
                <li
                  key={topic?.id}
                  className="body-s text-para font-medium ml-2"
                >
                  {topic?.title}
                </li>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TableOfContents;
