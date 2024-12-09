import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import Container from "../../../../components/Container";
import { getAnnouncementDetailApi } from "../../../../redux/api/Announcements";
import moment from "moment/moment";
import { Empty, Popover, Tooltip } from "antd";
import { Spin } from "antd";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import AnnImage from "./../../../../assets/images/ann-bg.svg";

const NoData = () => {
  return <Empty description={false} />;
};

const AnnouncementSection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const pageLimit = {
    page: 1,
    limit: 5,
  };
  const { data, loading } = useSelector(
    (state) => state?.getAnnouncementDetail
  );
  useEffect(() => {
    if (params?.id) {
      getAnnouncementDetailApi(dispatch, pageLimit, params?.id);
    }
  }, [dispatch, params?.id]);
  return (
    <div className="py-[5rem]  md:py-32 bg-[#6C47FF0D] relative">
      <img alt="" src={AnnImage} className="absolute right-0 top-0 -z-10" />
      <Container>
        <div className="flex justify-between items-center  mb-[3rem]">
          <h1 className="text-[#344054] text-3xl md:text-[2.5rem] font-semibold">
            Announcements
          </h1>
        </div>
      </Container>
      {data ? (
        <Slider
          gap={30}
          totalItems={data?.data?.items.length || 0}
          itemsPerScreen={3}
        >
          {data?.data?.items.length > 0 &&
            data?.data?.items.map((item, i) => {
              return (
                <SliderItem key={i}>
                  <div className="bg-[#fff] rounded-lg p-7 relative m-[5px] fancy_card">
                    <span className="bg-[#667085] rounded-t-lg text-white px-4 py-3 absolute left-0 top-0">
                      {item?.createdAt
                        ? moment(item?.createdAt).format("dddd, Do MMM YYYY")
                        : "-"}
                    </span>
                    <Tooltip
                      placement="top"
                      color={"white"}
                      title={
                        item?.heading.length > 18 && (
                          <span style={{ color: "black" }}>
                            {item?.heading}
                          </span>
                        )
                      }
                    >
                      <h3 className="text-[#344054] text-2xl font-bold leading-[2.306rem] mb-2  mt-11 cardDesLength">
                        {item?.heading.length > 18
                          ? `${item?.heading.substring(0, 18)}...`
                          : item?.heading}
                      </h3>
                    </Tooltip>
                    <Tooltip
                      placement="top"
                      color={"white"}
                      title={
                        item?.description.length > 79 && (
                          <span style={{ color: "black" }}>
                            {item?.description}
                          </span>
                        )
                      }
                    >
                      <p className="text-base text-[#667085] leading-[1.635rem] font-medium mb-6  break-words line-clamp-2 cardDesLength">
                        {item?.description.length > 79
                          ? `${item?.description.substring(0, 79)}...`
                          : item?.description || "-"}
                      </p>
                    </Tooltip>
                    {/* {item?.description.length > 20 ? (
                      <Popover
                        placement="top"
                        title={
                          <p className="max-w-[100%] md:max-w-[400px]">
                            {item?.description.length}
                          </p>
                        }
                      >
                        <p className="text-base text-[#667085] leading-[1.635rem] font-medium mb-6  break-words line-clamp-2 cardDesLength">
                          {item?.description}
                        </p>
                      </Popover>
                    ) : (
                      <p className="text-base text-[#667085] leading-[1.635rem] font-medium mb-6 break-words line-clamp-2 cardDesLength">
                        {item?.description || "-"}
                      </p>
                    )} */}
                  </div>
                </SliderItem>
              );
            })}
        </Slider>
      ) : (
        <div className="m-20 mb-20 p-30 px-50 text-center rounded-4">
          <Spin spinning={loading} size="large" />
        </div>
      )}
      {!loading && !data?.data?.items.length ? <NoData /> : ""}
    </div>
  );
};

export default AnnouncementSection;
