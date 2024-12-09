import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Buttons/Button";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import TeamCard from "../../../../components/Teams/TeamCard";
import Container from "../../../../components/Container";
import { getTeamDetailApi } from "../../../../redux/api/MeetOurTeam";
import { Empty } from "antd";
import { Spin } from "antd";

const NoData = () => {
  return <Empty description={false} />;
};

const TeamsSection = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageLimit = {
    page: 1,
    limit: 6,
  };
  const { data, loading } = useSelector((state) => state?.getTeamDetail);

  useEffect(() => {
    if (params?.id) {
      getTeamDetailApi(dispatch, pageLimit, params?.id);
    }
  }, [dispatch, params?.id]);
  return (
    <div className="mt-[11.938rem]">
      <Container>
        <div className="flex justify-between items-center  mb-[3rem]">
          <h1 className="text-[#344054] text-[2.5rem] font-semibold">
            Meet our Team
          </h1>
          <Button
            variant={"outlined"}
            onClick={() => navigate(`/meet-our-team/${params?.id}`)}
            label="See All Agents"
          />
        </div>
      </Container>
      {data ? (
        <Slider gap={47}>
          {data?.data?.items?.length > 0 &&
            data?.data?.items?.map((item, i) => {
              return (
                <SliderItem key={i} width={400}>
                  <TeamCard
                    image={
                      item?.profile?.profile_picture_url
                        ? item?.profile?.profile_picture_url
                        : "https://placehold.co/107x107"
                    }
                    rating={
                      item?.agentReview?.[0] && item?.agentReview?.[0]?.rateStar
                    }
                    name={item?.profile?.fullName && item?.profile?.fullName}
                    experience={
                      item?.profile?.pastExperience &&
                      item?.profile?.pastExperience
                    }
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
