import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import TeamCard from "../../../../components/Teams/TeamCard";
import Container from "../../../../components/Container";
import { getTeamDetailApi } from "../../../../redux/api/MeetOurTeam";
import { Empty } from "antd";
import { Spin } from "antd";
import { analyticClickApi } from "../../../../redux/api/Analytic";
import StaffImage from "../../../../assets/images/staff-bg.svg";

const NoData = () => {
  return <Empty description={false} />;
};

const TeamsSection = ({ primaryColor }) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const pageLimit = {
    page: 1,
    limit: 6,
  };
  const { data, loading } = useSelector((state) => state?.getTeamDetail);
  const createReview = useSelector((state) => state.createReview);
  useEffect(() => {
    if (params?.id) {
      getTeamDetailApi(dispatch, pageLimit, params?.id);
    }
  }, [dispatch, params?.id, createReview?.data]);
  return (
    <div
      className=" mt-[5rem]  sm:mt-[3rem] relative overflow-hidden py-20"
      style={{
        backgroundColor: `#${primaryColor}0D`,
      }}
    >
      <img alt="" src={StaffImage} className="absolute left-0 bottom-0 -z-10" />
      <Container>
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center  mb-[3rem]">
          <h1 className="text-[#344054] text-3xl md:text-[2.5rem] font-semibold">
            Meet our Team
          </h1>
          <Button
            variant={"outlined"}
            onClick={() => {
              history.push(`/${params?.name}/${params?.id}/meet-our-team`);
              analyticClickApi(dispatch, params?.id);
            }}
            label="See All Agents"
          />
        </div>
      </Container>
      {data ? (
        <Slider gap={47} totalItems={data?.data?.items?.length || 0}>
          {data?.data?.items?.length > 0 &&
            data?.data?.items?.map((item, i) => {
              return (
                <SliderItem key={i} width={400}>
                  <TeamCard
                    disabled={item?.isDisabled}
                    id={item?.id}
                    image={
                      item?.profile?.profile_picture_url
                        ? item?.profile?.profile_picture_url
                        : "https://placehold.co/107x107"
                    }
                    rating={
                      item?.agentReview?.length > 0
                        ? Math.round(
                            item?.agentReview
                              ?.map((item) => item.rateStar)
                              ?.reduce((prev, curr) => prev + curr) /
                              item?.agentReview?.length
                          )
                        : "0"
                    }
                    name={item?.profile?.fullName && item?.profile?.fullName}
                    experience={
                      item?.profile?.yearOfExperience &&
                      item?.profile?.yearOfExperience
                    }
                    designation={item?.role?.title}
                    desc={
                      item?.profile?.shortDescription &&
                      item?.profile?.shortDescription
                    }
                  />
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

export default TeamsSection;
