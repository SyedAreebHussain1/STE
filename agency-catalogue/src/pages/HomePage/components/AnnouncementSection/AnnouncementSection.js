import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import Container from "../../../../components/Container";
import { getAnnouncementDetailApi } from "../../../../redux/api/Announcements";
import moment from "moment/moment";
import { Empty } from "antd";
import { Spin } from "antd";

const NoData = () => {
  return <Empty description={false} />;
};

const AnnouncementSection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const pageLimit = {
    page: 1,
    limit: 3,
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
    <div className="py-[11.938rem] bg-[#6C47FF0D]">
      <Container>
        <div className="flex justify-between items-center  mb-[3rem] flex-col lg:flex-row">
          <h1 className="text-[#344054] text-[2.5rem] font-semibold">
            Announcements
          </h1>
          <Button variant={"outlined"} label="Check All Announcements" />
        </div>
        {data ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
            {data?.data?.items.length > 0 &&
              data?.data?.items.map((item, i) => {
                return (
                  <div key={i} className="bg-[#fff] rounded-lg p-7 relative">
                    <span className="bg-[#667085] rounded-t-lg text-white px-4 py-3 absolute left-0 top-0">
                      {item?.createdAt
                        ? moment(item?.createdAt).format("dddd, Do MMM YYYY")
                        : "-"}
                    </span>
                    <h3 className="text-[#344054] text-2xl font-bold leading-[2.306rem] mb-2  mt-11">
                      {item?.heading && item?.heading}
                    </h3>
                    <p className="text-base text-[#667085] leading-[1.635rem] font-medium">
                      {item?.description && item?.description}
                    </p>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="m-20 mb-20 p-30 px-50 text-center rounded-4">
            <Spin spinning={loading} size="large" />
          </div>
        )}
        {!loading && !data?.data?.items.length ? <NoData /> : ""}
      </Container>
    </div>
  );
};

export default AnnouncementSection;
