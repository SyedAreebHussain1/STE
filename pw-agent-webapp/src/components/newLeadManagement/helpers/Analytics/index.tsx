import React, { useEffect, useState } from "react";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../../helpers/PageHeader/PageHeader";
import { IoIosArrowBack } from "react-icons/io";
import { Col, Row } from "antd";
import TotalLead from "./helpers/TotalLead";
import LeadSource from "./helpers/LeadSource";
import { Value } from "react-phone-number-input/core";
import {
  LeadSourceField,
  LeadbyStatusField,
  LeadsByCompaignChart,
  LeadsStatisticsChart,
} from "../..";
import LeadByStatus from "./helpers/LeadByStatus";
import LeadsByCompaigns from "./helpers/LeadsByCompaigns";
import LeadsStatistics from "./helpers/LeadsStatistics";
import RecentLeads from "./helpers/RecentLeads";
import {
  getLeadStatusByCampaignIdApi,
  getTotalLeadAndLeadSourceByCampaignIdApi,
} from "../../../../redux/api/Campaigns";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../../utils/storage";
import useSelection from "antd/es/table/hooks/useSelection";
import { RootState } from "../../../../redux/store";

type Props = {};

const Analytics = (props: Props) => {
  const dispatch = useDispatch();
  const [totalLeadsValue, setTotalLeadsValue] = useState(0);
  const [totalLeadsByStatusValue, setTotalLeadsByStatusValue] = useState(0);

  const [leadSourceFields, SetleadSourceFields] = useState<LeadSourceField[]>(
    []
  );

  const [leadbyStatusFields, SetLeadbyStatusFields] = useState<
    LeadbyStatusField[]
  >([]);

  const getTotalLeadAndLeadSourceByCampaignId = useSelector(
    (state: RootState) => state.getTotalLeadAndLeadSourceByCampaignId
  );
  const getLeadStatusByCampaignId = useSelector(
    (state: RootState) => state.getLeadStatusByCampaignId
  );

  useEffect(() => {
    if (getTotalLeadAndLeadSourceByCampaignId?.data) {
      const data = getTotalLeadAndLeadSourceByCampaignId?.data;

      setTotalLeadsValue(data?.totalLeads);
      SetleadSourceFields([
        {
          id: 1,
          title: "Agent Network Leads",
          color: "#12B76A",
          value: data?.agentNetworkLeads,
        },
        {
          id: 2,
          title: "App Leads",
          color: "#7A5AF8",
          value: data?.appLeads,
        },
        {
          id: 3,
          title: "WebEstate Leads",
          color: "#27A3A3",
          value: data?.digitelCatatlogLeads,
        },
        {
          id: 4,
          title: "WebEstate Appointment Leads",
          color: "#27A3A3",
          value: data?.digitelCatatlog_AppointmentLeads,
        },
        {
          id: 5,
          title: "WebEstate Chat Leads",
          color: "#27A3A3",
          value: data?.digitelCatatlog_ChatLeads,
        },
        {
          id: 6,
          title: "WebEstate Requirement Leads",
          color: "#27A3A3",
          value: data?.digitelCatatlog_RequirementLeads,
        },
        {
          id: 7,
          title: "WebEstate Review Leads",
          color: "#27A3A3",
          value: data?.digitelCatatlog_ReviewLeads,
        },
        {
          id: 8,
          title: "WebApp",
          color: "#27A3A3",
          value: data?.webLeads,
        },
        {
          id: 9,
          title: "App Excel Leads",
          color: "#27A3A3",
          value: data?.appExcelLeads,
        },
      ]);
    }
  }, [getTotalLeadAndLeadSourceByCampaignId]);

  useEffect(() => {
    if (getLeadStatusByCampaignId?.data) {
      const data = getLeadStatusByCampaignId?.data;
      setTotalLeadsByStatusValue(
        getLeadStatusByCampaignId?.data?.totalLeadByStatusCount
      );
      SetLeadbyStatusFields([
        {
          id: 1,
          title: "Interested",
          color: "#2E90FA",
          value: data?.interestedLeads,
        },
        {
          id: 2,
          title: "Not Interested",
          color: "#93370D",
          value: data?.notInterestedLeads,
        },
        {
          id: 3,
          title: "Untouched",
          color: "#BDB4FE",
          value: data?.untouchedLeads,
        },
        {
          id: 4,
          title: "Appointment",
          color: "#12B76A",
          value: data?.appointmentAlignedLeads,
        },
        {
          id: 5,
          title: "Top-Priority",
          color: "#7A5AF8",
          value: data?.topPriorityLeads,
        },
        {
          id: 6,
          title: "Wrong No",
          color: "#F04438",
          value: data?.wrongNoLeads,
        },
        {
          id: 7,
          title: "Pending",
          color: "#F79009",
          value: data?.pendingLeads,
        },
        {
          id: 8,
          title: "Not Connected",
          color: "#475467",
          value: data?.notConnectedLeads,
        },
        {
          id: 9,
          title: "Completed",
          color: "#27A3A3",
          value: data?.completedLeads,
        },
        {
          id: 10,
          title: "Inprogress",
          color: "#84CAFF",
          value: data?.inProgressLeads,
        },
      ]);
    }
  }, [getLeadStatusByCampaignId]);

  useEffect(() => {
    getTotalLeadAndLeadSourceByCampaignIdApi(dispatch, "");
    getLeadStatusByCampaignIdApi(dispatch, "");
  }, []);

  return (
    <>
      <PageContainer>
        <Row gutter={16}>
          <Col xs={24} lg={8} xl={7}>
            <div>
              <TotalLead leadCount={totalLeadsValue} />
            </div>
            <div className="mt-[20px]">
              <LeadSource fields={leadSourceFields} />
            </div>
            <div className="mt-[20px] mb-[20px]">
              <LeadByStatus
                fields={leadbyStatusFields}
                totalLeadsByStatus={totalLeadsByStatusValue}
              />
            </div>
          </Col>
          <Col xs={24} lg={16} xl={17}>
            <Row gutter={16}>
              <Col xs={24} lg={24}>
                <LeadsByCompaigns />
              </Col>
            </Row>
            <div className="mt-[20px]">
              <RecentLeads />
            </div>
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default Analytics;
