import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import LetterComponent from "./helpers/LetterComponent";

const LetterHead = () => {
  return (
    <>
      <PageContainer>
        <PageHeader
          title="Letter Heads"
          subTitleElement={
            <p className=" text-[#667085] dark:text-[#D0D5DD]">
              Create Professional Office Correspondence: Design Resignation
              Letters and More
            </p>
          }
          className="dark:bg-dark-grayprimary dark:text-dark-secondary"
        />
        <div className="mt-5">
          <LetterComponent />
        </div>
      </PageContainer>
    </>
  );
};

export default LetterHead;
