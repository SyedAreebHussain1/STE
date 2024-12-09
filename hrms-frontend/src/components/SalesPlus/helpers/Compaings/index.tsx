import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";
import { RootState } from "../../../../redux/store";
import CompaignsContainer from "./helpers/CompaignsContainer";
import CompaignsFilter from "./helpers/CompaignsFilter";
import CompaignsLeft from "./helpers/CompaignsLeft";
import CompaignsTable from "./helpers/CompaignsTable";
import CreateCompaignsCard from "./helpers/CreateCompaignsCard";
import Head from "./helpers/Head";
import LeadByStatus from "./helpers/LeadByStatus";
import LeadsCard from "./helpers/LeadsCard";
import {
  getCampaignsApi,
  getLeadStatsApi,
  getLeadStatsForChartApi,
} from "../../../../redux/api/SalesPlus/Campaigns";

const Compaings = ({ active, setActive }: any) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [bgBlurBox, setBgBlurBox] = useState(false);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 5 });
  const [data, setData] = useState([]);
  const [selectCampaign, setSelectCampaign] = useState<any>(null);
  const createLeads = useSelector((state: any) => state?.createLeads);
  const dispatch = useDispatch();
  const getCampaigns = useSelector((state: RootState) => state?.getCampaigns);
  const updateCampaigns = useSelector(
    (state: RootState) => state?.updateCampaigns
  );
  const getSelectedLeadStats = useSelector(
    (state: RootState) => state.getLeadStats
  );
  const leadStatsForChart = useSelector(
    (state: RootState) => state.getLeadStatsForChart
  );

  // first Time Api CAll
  useEffect(() => {
    getCampaignsApi(dispatch, pageLimit);
  }, [updateCampaigns]);

  useEffect(() => {
    if (getCampaigns?.data?.items?.length > 0) {
      setSelectCampaign(getCampaigns?.data?.items?.[0]);
      setData(getCampaigns?.data?.items);
    }
  }, [getCampaigns.data]);

  // when campaign page Change
  const onChange = (pageNumber: number) => {
    setSelectCampaign(null);
    setPageLimit((pre: any) => ({ ...pre, page: pageNumber }));
    getCampaignsApi(dispatch, {
      page: pageNumber,
      limit: pageLimit.limit,
    });
  };
  useEffect(() => {
    if (selectCampaign?.id) {
      getLeadStatsApi(dispatch, selectCampaign?.id);
      getLeadStatsForChartApi(dispatch, selectCampaign?.id);
    }
  }, [selectCampaign]);

  // when campaign search
  const onSearch = (search: any) => {
    // setSelectCampaign(null);
    setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    if (search) {
      getCampaignsApi(
        dispatch,
        {
          page: 1,
          limit: pageLimit.limit,
        },
        search
      );
    }
  };
  return (
    <React.Fragment>
      <PageContainer>
        {!bgBlurBox ? (
          <Row gutter={16}>
            <Col xs={24} sm={24} lg={5} md={24} xl={5}>
              <CompaignsLeft
                loading={getCampaigns?.loading}
                onSearch={onSearch}
                totalItems={getCampaigns?.data?.meta?.totalItems}
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
                          getSelectedLeadStats?.data?.totalLeadCounts
                            ? getSelectedLeadStats?.data?.totalLeadCounts
                            : 0,
                      },
                      {
                        lead: "Assign to team",
                        count:
                          getSelectedLeadStats?.data?.assignedLeadResult
                            ? getSelectedLeadStats?.data?.assignedLeadResult
                            : 0,
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
