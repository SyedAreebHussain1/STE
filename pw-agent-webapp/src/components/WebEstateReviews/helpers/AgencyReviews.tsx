import React, { useEffect, useState } from "react";
import { Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgencyReviewsApi } from "../../../redux/api/WebEstate";
import SliderItem from "../../../helpers/Slider/SliderItems";
import Slider from "../../../helpers/Slider/Slider";
import ReviewCard from "./ReviewCard";
import ReviewShowAddHideModal from "./ReviewShowAddHideModal";

const AgencyReviews = () => {
  const dispatch = useDispatch();
  const [checkValue, setCheckValue] = useState<any>()
  const agencyReviewVisibility = useSelector((state: any) => state?.agencyReviewVisibility)
  const getAllAgencyReviews = useSelector(
    (state: any) => state.getAllAgencyReviews
  );
  useEffect(() => {
    getAllAgencyReviewsApi(dispatch, { page: 1, limit: 10 });
  }, [agencyReviewVisibility.data]);
  return (
    <React.Fragment>
      {checkValue && <ReviewShowAddHideModal checkValue={checkValue}
        setCheckValue={setCheckValue}
      />}
      <div className="bg-white rounded-xl mt-4 p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-[1.2rem] font-medium mb-4">Agency Reviews</h4>
          <Link
            to={"/webestate/reviews/all?type=agency"}
            type="link"
            className="text-primary"
          >
            View All
          </Link>
        </div>
        <Slider gap={30} totalItems={5}>
          {getAllAgencyReviews?.data?.data?.items?.map(
            (item: any, key: number) => {
              return (
                <SliderItem width={391} key={key}>
                  <ReviewCard
                    email={item.email}
                    name={item.name}
                    rate={item.rateStar}
                    comment={item.comment}
                    checkbox={<div className="mt-2">
                      <Checkbox onChange={() => setCheckValue(item)} checked={item?.reviewVisibilty} name="reviewVisibilty" />
                    </div>}
                  />
                </SliderItem>
              );
            }
          )}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default AgencyReviews;
