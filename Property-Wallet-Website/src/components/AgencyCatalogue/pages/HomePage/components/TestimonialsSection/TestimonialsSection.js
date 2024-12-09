import React, { useEffect } from "react";
import Container from "../../../../components/Container";
import Button from "../../../../components/Buttons/Button";
import QuoteIcon from "./../../../../assets/images/testimonial-quote.png";
import { Popover, Rate, Tooltip } from "antd";
import LeaveReviewModal from "../../../../components/AgencyReview/LeaveReviewModal";
import { useModal } from "../../../../hooks/useModal";
import { getReviewForAgencyByIdApi } from "../../../../redux/api/Testinomials";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SliderItem from "../../../../components/Slider/SliderItem";
import Slider from "../../../../components/Slider/Slider";
import { Spin } from "antd";
import { Empty } from "antd";
import { analyticClickApi } from "../../../../redux/api/Analytic";
import TestiImage from "./../../../../assets/images/testi-bg.svg";

const NoData = () => {
  return <Empty description={false} />;
};

const TestimonialsSection = ({ primaryColor }) => {
  const [visible, toggle] = useModal();
  const dispatch = useDispatch();
  const { id } = useParams();
  const customOverlayStyle = {
    color: "black",
  };
  const pageLimit = {
    page: 1,
    limit: 10,
  };
  const { data, loading } = useSelector(
    (state) => state?.getReviewForAgencyById
  );
  const createReviewForAgency = useSelector(
    (state) => state.createReviewForAgency
  );

  useEffect(() => {
    if (id) {
      getReviewForAgencyByIdApi(dispatch, id, pageLimit);
    }
  }, [dispatch, id, createReviewForAgency?.data]);
  return (
    <>
      {visible && <LeaveReviewModal visible={visible} toggle={toggle} />}
      <div
        className="my-[4rem] md:my-[3rem]  sm:mt-[3rem] py-20 overflow-hidden relative"
        style={{
          backgroundColor: `#${primaryColor}0D`,
        }}
      >
        <img
          alt=""
          src={TestiImage}
          className="absolute left-0 bottom-2/4 translate-y-[50%] -z-10 opacity-"
        />
        <Container>
          <div className="flex justify-between items-center  mb-[3rem] flex-col lg:flex-row">
            <div>
              <img src={QuoteIcon} alt="" />
              <h4
                className="text-base mt-3 mb-[0.625rem] tracking-[0.2rem]"
                style={{
                  color: primaryColor || "#7C47FF",
                }}
              >
                TESTINOMIALS
              </h4>
              <h1 className="text-[#344054] text-3xl mb-3 md:mb-0 md:text-[2.5rem] font-semibold">
                What Our Clients Say
              </h1>
            </div>

            <div className="flex gap-2 flex-col lg:flex-row">
              <Button
                variant={"filled-inverse"}
                label="Leave a Review"
                onClick={() => {
                  toggle();
                  analyticClickApi(dispatch, id);
                }}
              />
            </div>
          </div>
        </Container>
        {data ? (
          <Slider
            gap={47}
            totalItems={data?.data?.items?.length || 0}
            primaryColor={primaryColor}
          >
            {data?.data?.items?.length > 0 &&
              data?.data?.items?.map((item, i) => {
                return (
                  <SliderItem key={i} width={300}>
                    <div
                      className="fancy_card p-3 bg-white  "
                      style={{ height: "300px" }}
                    >
                      <div className="my-3">
                        <Rate value={item?.rateStar} disabled={true} />
                      </div>
                      <div className=" italic text-[#344054] text-base mb-[1.375rem]  overflow-hidden w-[100%] ">
                        {/* <Popover
                          placement="top"
                          title={
                            item?.comment.length > 70 ? (
                              <h3 className="max-w-[100%] md:max-w-[400px]">
                                {item?.comment}
                              </h3>
                            ) : (
                              false
                            )
                          }
                        >
                          
                            {item?.comment.length > 70
                              ? `${item?.comment.substring(0, 70)}...`
                              : item?.comment}
                          </p>
                        </Popover> */}
                        <Tooltip
                          placement="top"
                          color={"white"}
                          title={
                            item?.comment.length > 90 && (
                              <span style={{ color: "black" }}>
                                {item?.comment}
                              </span>
                            )
                          }
                        >
                          <p className="text-[#667085] text-base  font-medium mb-6 break-words ">
                            {item?.comment.length > 90
                              ? `${item?.comment.substring(0, 90)}...`
                              : item?.comment || "-"}
                          </p>
                        </Tooltip>
                      </div>
                      <div
                        className="flex items-end "
                        style={{
                          position: "fixed",
                          bottom: "20px",
                          width: "100%",
                        }}
                      >
                        <div>
                          <h3 className="text-[#344054] text-2xl font-semibold">
                            {item?.name || "-"}
                          </h3>
                          <p className="text-[#40444d] text-lg">
                            {item?.email || "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SliderItem>
                );
              })}
          </Slider>
        ) : (
          <div className="m-20 mb-20 p-30 px-50 text-center rounded-4">
            <Spin spinning={loading} size="large" tip="Loading...">
              <div className="p-50 bg-opacity-5 bg-black bg-opacity-5/100 bg-opacity-50/100 border rounded-4" />
            </Spin>
          </div>
        )}
        {!loading && !data?.data?.items.length ? <NoData /> : ""}
      </div>
    </>
  );
};

export default TestimonialsSection;
