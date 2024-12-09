import { useEffect, useState } from "react";
import Ratingimage from "../../../assets/Rating.png";
import RatingsCards from "./RatingsCards";
import Slider from "../../../helpers/Slider/Slider";
import SliderItem from "../../../helpers/Slider/SliderItems";
import { getStaffReviewApi } from "../../../redux/api/StaffManagement";
import { useDispatch, useSelector } from "react-redux";
const Ratings = ({ data }: { data: any }) => {
  const getStaffReview = useSelector((state: any) => state.getStaffReview);
  const [reviews, setReviews] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getStaffReviewApi(dispatch, data?.id);
  }, []);

  useEffect(() => {
    if (getStaffReview?.data) {
      setReviews([...getStaffReview?.data?.items]);
    }
  }, [getStaffReview?.data]);

  return (
    <div
      className={` justify-between bg-[#FFFFFF] items-center p-[20px] rounded-xl `}
    >
      <div className="flex items-center gap-1">
        <img src={Ratingimage} className="w-[25px] h-[25px]" />
        <h1 className="text-[1rem] font-medium">Ratings</h1>
      </div>
      <div className="mt-[20px]">
        {reviews.length > 0 && (
          <Slider
            gap={30}
            totalItems={getStaffReview?.data?.meta?.totalItems}
            itemsPerScreen={2}
          >
            {reviews.map((val: any) => (
              <SliderItem key={val?.id}>
                <RatingsCards data={val} />
              </SliderItem>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Ratings;
