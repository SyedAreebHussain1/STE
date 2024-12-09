import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTeamDetailApi } from "../../../../redux/api/MeetOurTeam";
import { Empty, Row, Col, Spin } from "antd";
import Container from "../../../../components/Container";
import TeamAllCard from "../../../../components/Teams/TeamAllCard";
const NoData = () => {
  return <Empty description={"No data"} />;
};

const AllTeamMembers = () => {
  const params = useParams();
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
    <div className="mt-[3rem] mb-[3rem]">
      <Container>
        {data ? (
          <Row gutter={16}>
            {data?.data?.items?.length > 0 &&
              data?.data?.items?.map((item, i) => {
                return (
                  <Col className="mx-0" key={i} lg={12} xs={24} xl={8} md={12}>
                    <TeamAllCard
                      disabled={item?.isDisabled}
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
                      id={item?.id}
                      image={
                        item?.profile?.profile_picture_url
                          ? item?.profile?.profile_picture_url
                          : "https://placehold.co/107x107"
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
                  </Col>
                );
              })}
          </Row>
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

export default AllTeamMembers;
