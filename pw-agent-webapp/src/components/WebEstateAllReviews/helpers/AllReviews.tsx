import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../WebEstateReviews/helpers/ReviewCard";
import {
  getAllAgencyReviewsApi,
  getAllAgentReviewsApi,
} from "../../../redux/api/WebEstate";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../utils/storage";

type Props = {
  type: string;
};

const AllReviews = ({ type }: Props) => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 9,
  });
  const getAllAgentReviews = useSelector(
    (state: any) => state.getAllAgentReviews
  );
  const getAllAgencyReviews = useSelector(
    (state: any) => state.getAllAgencyReviews
  );
  const user = getFromStorage("user");
  const dispatch = useDispatch();
  useEffect(() => {
    if (type === "agency") {
      getAllAgencyReviewsApi(dispatch, pageLimit);
    } else {
      getAllAgentReviewsApi(dispatch, pageLimit, user.userId);
    }
  }, [pageLimit]);
  return (
    <div className="bg-white rounded-xl mt-4 p-4">
      <Row gutter={16}>
        {type === "agency" ? (
          <>
            {getAllAgencyReviews?.data?.data?.items?.map(
              (item: any, i: number) => (
                <Col xs={8} key={i}>
                  <ReviewCard
                    email={item.email}
                    name={item.name}
                    rate={item.rateStar}
                    comment={item.comment}
                  />
                </Col>
              )
            )}
          </>
        ) : (
          <>
            {getAllAgentReviews?.data?.data?.items?.map(
              (item: any, i: number) => (
                <Col xs={8} key={i}>
                  <ReviewCard
                    email={item.email}
                    name={item.name}
                    rate={item.rateStar}
                    comment={item.comment}
                  />
                </Col>
              )
            )}
          </>
        )}

        <Col sm={24}>
          <div className="flex justify-center py-[20px] mt-6">
            <Pagination
              showSizeChanger={false}
              current={pageLimit.page}
              pageSize={pageLimit.limit}
              total={
                type === "agency"
                  ? getAllAgencyReviews?.data?.data?.meta?.totalItems
                  : getAllAgentReviews?.data?.data?.meta?.totalItems
              }
              onChange={(page) =>
                setPageLimit({ page: page, limit: pageLimit.limit })
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllReviews;
