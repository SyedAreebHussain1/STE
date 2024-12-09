import React, { ReactElement, useState } from "react";
import RoundedButton from "../button/RoundedButton";

const BlankSection = ({
  children,
  chapterNumber,
  chapterTitle,
  handleClick,
  checkSaveChanges,
  saveChanges = true,
  saveChangesDisabled,
}: {
  children?: ReactElement | null;
  chapterNumber?: number;
  chapterTitle?: string;
  handleClick?: () => void;
  checkSaveChanges: boolean;
  saveChanges?: boolean;
  saveChangesDisabled: any;
}) => {

  return (
    <div>
      <div className=" flex w-full justify-between items-center  text-[36px] font-medium p-[0] m-[0] leading-9">
        <div className="flex">
          <h1>{chapterNumber}</h1>
          <div className="mx-[10px] bg-[#CDD4DF] w-[2px] h-[36px] "></div>
          <div className="flex-1">
            <h1 className=" w-full min-h-8 capitalize">{chapterTitle}</h1>
          </div>
        </div>
        {saveChanges && (
          <RoundedButton
            title={"Save Changes"}
            sm
            type="primary"
            onClick={handleClick}
            disabled={saveChangesDisabled && checkSaveChanges}
          />
        )}
      </div>
      {children}
    </div>
  );
};
const TopicSection = ({
  children,
  headingNumber,
  heading,
  editAnswerHandler,
  chapterTitle,
  edit = true,
}: {
  children: ReactElement | null;
  headingNumber: string;
  chapterTitle?: string;
  heading: string;
  editAnswerHandler?: () => void;
  edit?: boolean;
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`mt-[20px] transition-all duration-300 ${
        edit && hover ? "p-[10px] bg-[#F2F4F8]" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className=" flex w-full justify-between items-center  text-[20px] font-medium p-[0] m-[0] leading-9">
        <div className="flex ">
          <h1>{headingNumber}</h1>
          <div className="flex-1 ml-[20px]">
            <h1 className=" w-full min-h-8 capitalize">{heading}</h1>
          </div>
        </div>
      </div>
      {children}
      {chapterTitle == "Executive Summary" || chapterTitle == "Appendix" ? (
        ""
      ) : (
        <div className="flex justify-end">
          {edit && hover && (
            <RoundedButton
              title={"Regenerate Topic"}
              type="primary"
              className="mt-[10px]"
              sm
              onClick={editAnswerHandler}
            />
          )}
        </div>
      )}
    </div>
  );
};

export { BlankSection, TopicSection };
