import { useNavigate, useSearchParams } from "react-router-dom";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import AllReviews from "./helpers/AllReviews";
import { IoIosArrowBack } from "react-icons/io";

const WebEstateAllReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams?.get("type");
  const title = type === "agency" ? "Agency Reviews" : "Your Reviews";
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
        subTitle={`WebEstate / ${title}`}

      />
      <AllReviews type={title} />
    </PageContainer>
  );
};

export default WebEstateAllReviews;
