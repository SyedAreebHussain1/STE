import { useNavigate } from "react-router-dom";
import { fileIcon } from "../../../../../assets/filledPlanSetupAssets";
import Tag from "../../../../../components/tag/tag";
import { editWithStrokeIcon, rightArrowIcon } from "../../../../../assets";
import RoundedButton from "../../../../../components/button/RoundedButton";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";
import { lockIcon } from "../../../../../assets/viewPlanAssets";
import { getFromStorage } from "../../../../../utils/storage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

interface BusinessPlanCardI {
  data: any;
  index: number;
  locked: boolean;
  chapters: any[];
}

const CardBack = ({ data, index, locked, chapters }: BusinessPlanCardI) => {
  // const businessCount = getFromStorage("businessCount");
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const businessCount = getBusinessCount?.data?.data;

  const ChaptersCount = businessCount?.allowed?.chapters;
  const navigate = useNavigate();
  return (
    <div
      className="relative"
      onClick={() => {
        if (locked) {
          return;
        }
        navigate(`/edit-plan/${data?.id}`, {
          state: { data, index, locked, chapters },
        });
      }}
    >
      <div
        className={`min-w-full h-[462px] bg-foreground text-body rounded-xl p-[30px] z-10 relative`}
      >
        <div className="flex gap-2 items-center mb-[36px]">
          <img src={fileIcon} alt="" />
          <div className="flex flex-col gap-[2px]">
            <h1 className="leading-3 font-medium paragraph tracking-widest">
              CHAPTER {data.chapterNo}
            </h1>
            <h1 className="text-primary font-bold heading-xs">{data?.title}</h1>
          </div>
        </div>
        {locked ? (
          <div
            className="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))",
            }}
          >
            <img src={lockIcon} className="mb-[20px]" />
            <ButtonWithSvg
              icon={rightArrowIcon}
              type="primary"
              sm
              className="text-[14px] font-medium"
              title={
                index < ChaptersCount
                  ? "Complete the initial plan setup"
                  : "Upgrade to premium to unlock"
              }
              onClick={() =>
                navigate(
                  index < ChaptersCount
                    ? "/initial-business-plan"
                    : "/subscription-plan"
                )
              }
            />
          </div>
        ) : (
          <div>
            <div className="flex gap-[21px] h-[280px] flex-col overflow-y-auto">
              {data?.topics?.length > 0 &&
                data?.topics?.map((topic: any, i: number) => (
                  <div
                    key={i}
                    className="flex justify-between items-center font-medium"
                  >
                    <div className="flex items-center gap-2 leading-[16.32px] body-s">
                      <p className="text-paraLight">
                        {data?.chapterNo}.{topic.topicNo}
                      </p>
                      <h1>{topic?.title}</h1>
                    </div>
                    {topic.completionStatus ? (
                      <Tag
                        remarks=""
                        title={"Complete"}
                        className={"bg-info"}
                        bold
                      />
                    ) : (
                      <Tag title={"Incomplete"} remarks="" type="danger" />
                    )}
                  </div>
                ))}
            </div>
            <div className="flex py-[10px] gap-[10px] justify-end">
              <div className="cursor-pointer flex items-center gap-1">
                <p className="body-s font-medium text-body">Edit</p>
                <img src={editWithStrokeIcon} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-green-200 absolute min-w-[350px] h-[462px] top-[4px] left-[4px] rounded-xl"></div>
    </div>
  );
};
export default CardBack;
