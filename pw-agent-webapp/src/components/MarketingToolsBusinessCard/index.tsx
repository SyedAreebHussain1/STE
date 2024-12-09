import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import PreviewCard from "./helpers/PreviewCard";

const BusinessCard = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageHeader
        title={
          <>
            <div
              className="text-[1rem] flex gap-1 items-center font-semibold text-[#27A3A3] cursor-pointer "
              onClick={() => navigate(-1)}
            >
              <span>
                <IoIosArrowBack />
              </span>
              Back to Home
            </div>
          </>
        }
        subTitle={`Business Card Creator`}
      />
      <PreviewCard />
      
    </PageContainer>
  );
};

export default BusinessCard;
