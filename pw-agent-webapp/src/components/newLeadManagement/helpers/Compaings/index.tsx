import { Col, Row } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";
import {
  getAllAgencyCampaignApi,
  getLeadStatsApi,
  getLeadStatsForChartApi,
} from "../../../../redux/api/Campaigns";
import { RootState } from "../../../../redux/store";
import CompaignsContainer from "./helpers/CompaignsContainer";
import CompaignsFilter from "./helpers/CompaignsFilter";
import CompaignsLeft from "./helpers/CompaignsLeft";
import CompaignsTable from "./helpers/CompaignsTable";
import CreateCompaignsCard from "./helpers/CreateCompaignsCard";
import Head from "./helpers/Head";
import LeadByStatus from "./helpers/LeadByStatus";
import LeadsCard from "./helpers/LeadsCard";

const Compaings = ({ active, setActive }: any) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [bgBlurBox, setBgBlurBox] = useState(false);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 5 });
  const [data, setData] = useState([]);
  const [selectCampaign, setSelectCampaign] = useState<any>(null);
  // const [selectedCampaignLeadStats, setselectedCampaignLeadStats] = useState<any>();

  const dispatch = useDispatch();
  const getAllAgencyCampaign = useSelector(
    (state: RootState) => state.getAllAgencyCampaign
  );
  const getSelectedLeadStats = useSelector(
    (state: RootState) => state.getLeadStats
  );
  const leadStatsForChart = useSelector(
    (state: RootState) => state.getLeadStatsForChart
  );

  // first Time Api CAll
  useEffect(() => {
    getAllAgencyCampaignApi(dispatch, pageLimit);
  }, []);

  useEffect(() => {
    if (getAllAgencyCampaign?.data?.items?.length > 0) {
      setSelectCampaign(getAllAgencyCampaign?.data?.items?.[0]);
      setData(getAllAgencyCampaign?.data?.items);
    }
  }, [getAllAgencyCampaign]);

  // when campaign page Change
  const onChange = (pageNumber: number) => {
    setSelectCampaign(null);
    setPageLimit((pre: any) => ({ ...pre, page: pageNumber }));
    getAllAgencyCampaignApi(dispatch, {
      page: pageNumber,
      limit: pageLimit.limit,
    });
  };

  useEffect(() => {
    if (selectCampaign?.id) {
      getLeadStatsApi(dispatch, selectCampaign?.id);
    }
  }, [selectCampaign]);

  useEffect(() => {
    if (selectCampaign?.id) {
      getLeadStatsForChartApi(dispatch, selectCampaign?.id);
    }
  }, [selectCampaign]);

  // when campaign search
  const onSearch = (search: any) => {
    setSelectCampaign(null);
    setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    getAllAgencyCampaignApi(
      dispatch,
      {
        page: 1,
        limit: pageLimit.limit,
      },
      search
    );
  };
  return (
    <React.Fragment>
      <PageContainer>
        {!bgBlurBox ? (
          <Row gutter={16}>
            <Col xs={24} sm={24} lg={5} md={24} xl={5}>
              <CompaignsLeft
                loading={getAllAgencyCampaign?.loading}
                onSearch={onSearch}
                totalItems={getAllAgencyCampaign?.data?.meta?.totalItems}
                selectCampaign={selectCampaign}
                setSelectCampaign={setSelectCampaign}
                setBgBlurBox={setBgBlurBox}
                pageLimit={pageLimit}
                onChange={onChange}
                items={data}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </Col>
            <Col lg={19} md={24} xl={19} sm={24} xs={24}>
              <CompaignsContainer
                title={selectCampaign?.title}
                subTitle={"Check your all campaign details"}
                extra={
                  <Head
                    items={["All", "Weekly", "Monthly", "Yearly"]}
                    campaignData={selectCampaign}
                  />
                }
                leadCard={
                  <LeadsCard
                    items={[
                      {
                        lead: "Total Leads",
                        count:
                          getSelectedLeadStats?.data?.length > 0
                            ? getSelectedLeadStats?.data[0]?.totalleadcounts
                            : 0,
                        new: 10,
                      },
                      {
                        lead: "Assign to team",
                        count:
                          getSelectedLeadStats?.data?.length > 0
                            ? getSelectedLeadStats?.data[0]?.assignedleadcount
                            : 0,
                        new: 10,
                      },
                    ]}
                    selectCampaign={selectCampaign}
                    setActive={setActive}
                  />
                }
                leadByStatus={<LeadByStatus stats={leadStatsForChart?.data} />}
                compaignsTable={
                  <>
                    <CompaignsTable selectCampaign={selectCampaign} />
                  </>
                }
              />
            </Col>
          </Row>
        ) : (
          <CreateCompaignsCard
            setBgBlurBox={setBgBlurBox}
            setSearchValue={setSearchValue}
          />
        )}
      </PageContainer>
    </React.Fragment>
  );
};

export default Compaings;
