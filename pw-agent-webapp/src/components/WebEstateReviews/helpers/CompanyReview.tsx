import React, { useEffect } from "react";
import SliderItem from "../../../helpers/Slider/SliderItems";
import Slider from "../../../helpers/Slider/Slider";
import ReviewCard from "./ReviewCard";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { getAllAgentReviewsApi } from "../../../redux/api/WebEstate";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../utils/storage";

const CompanyReview = () => {
  const dispatch = useDispatch();
  const user = getFromStorage("user");
  const getAllAgentReviews = useSelector(
    (state: any) => state.getAllAgentReviews
  );
  useEffect(() => {
    getAllAgentReviewsApi(dispatch, { page: 1, limit: 10 }, user.userId);
  }, []);
  return (
    <div className="bg-white rounded-xl mt-4 p-6">
      <div className="flex items-center justify-between">
        <h4 className="text-[1.2rem] font-medium mb-4">Your Reviews</h4>
        <Link
          to={"/webestate/reviews/all?type=myself"}
          type="link"
          className="text-primary"
        >
          View All
        </Link>
      </div>
      <Slider gap={30} totalItems={5}>
        {getAllAgentReviews?.data?.data?.items?.map(
          (item: any, key: number) => {
            return (
              <SliderItem width={391} key={key}>
                <ReviewCard
                  email={item.email}
                  name={item.name}
                  rate={item.rateStar}
                  comment={item.comment}
                />
              </SliderItem>
            );
          }
        )}
      </Slider>
    </div>
  );
};

export default CompanyReview;
