import { Col } from "antd";
import WebEstateStatisticsCard from "./WebEstateStatisticsCard";
import userClickIcon from "../../../assets/user-click-icon.svg";
import userViewIcon from "../../../assets/user-views-icon.svg";
import responseTimeIcon from "../../../assets/response-time-icon.svg";
import leadsGenerateIcon from "../../../assets/leads-generate-icon.svg";
import { useEffect } from "react";
import { getWebEstateAnalyticsApi } from "../../../redux/api/WebEstate";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const WebEstateStatistics = (props: Props) => {
  const dispatch = useDispatch();
  const getWebEstateAnalytics = useSelector(
    (state: any) => state.getWebEstateAnalytics
  );
  const cards = [
    {
      title: "User click",
      value: getWebEstateAnalytics?.data?.data?.clickCount || 0,
      icon: userClickIcon,
    },
    {
      title: "User Views",
      value: getWebEstateAnalytics?.data?.data?.viewCount || 0,
      icon: userViewIcon,
    },
    {
      title: "Listing Count",
      value: getWebEstateAnalytics?.data?.data?.totalListingCount || 0,
      icon: responseTimeIcon,
    },
    {
      title: "Leads Generated",
      value: getWebEstateAnalytics?.data?.data?.leadCount || 0,
      icon: leadsGenerateIcon,
    },
  ];
  useEffect(() => {
    getWebEstateAnalyticsApi(dispatch);
  }, []);
  return (
    <>
      {cards.map((item: any, i) => {
        return (
          <Col key={i} xs={24} md={12} lg={12} xxl={6}>
            <WebEstateStatisticsCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default WebEstateStatistics;
