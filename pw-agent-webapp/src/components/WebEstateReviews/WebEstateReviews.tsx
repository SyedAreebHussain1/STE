import { Col, Row } from "antd";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import AgencyReviews from "./helpers/AgencyReviews";
import CompanyReview from "./helpers/CompanyReview";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const WebEstateReviews = () => {
  const navigate = useNavigate()
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
        subTitle={`WebEstate / Reviews`}
      />
      <CompanyReview />
      <AgencyReviews />
    </PageContainer>
  );
};

export default WebEstateReviews;
