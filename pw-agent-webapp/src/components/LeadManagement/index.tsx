import { useRef, useState } from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import LeadManagementTable from "./helpers/LeadManagementTable";
import { Button, Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import FilterLead from "./helpers/FilterLead";
import { useDispatch, useSelector } from "react-redux";
import FollowUpTable from "./helpers/FollowUpTable";
import {
  getAllLeadApi,
  getAllLeadsFollowUpApi,
  uploadLeadApi,
} from "../../redux/api/LeadManagement";
import { AppDispatch } from "../../redux/store";
import AddNewLeadDrawer from "./helpers/AddNewLeadDrawer";
import { downloadExcelFile } from "../../utils/utils";
import ExportIcon from "../../assets/export-Icon.png";
import { infoMessage, successMessage } from "../../utils/message";
import { useForm } from "antd/es/form/Form";

const LeadManagement = () => {
  const dispatch: AppDispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [tabIndex, setTabIndex] = useState("1");
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (key: string) => {
    setTabIndex(key);
    if (key === "1") {
      getAllLeadApi(dispatch, { page: 1, limit: 10 });
    } else {
      getAllLeadsFollowUpApi(dispatch, { page: 1, limit: 10 });
    }
  };
  const { getAllLead, getAllLeadsFollowUp } = useSelector(
    (state: any) => state
  );

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `All Leads (${
        getAllLead?.data?.meta?.totalItems
          ? getAllLead?.data?.meta?.totalItems
          : 0
      })`,
      children: <LeadManagementTable />,
    },
    {
      key: "2",
      label: `Follow-up Leads (${
        getAllLeadsFollowUp?.data?.meta?.totalItems
          ? getAllLeadsFollowUp?.data?.meta?.totalItems
          : 0
      })`,
      children: <FollowUpTable />,
    },
  ];

  const uploadHandler = () => {
    inputRef?.current?.click();
  };
  const changeHandler = (e: any) => {
    const { files } = e.target;
    const fileName = files[0]?.name;

    if (!fileName.includes(".xlsx")) {
      infoMessage("File Not Support");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }
    const formData = new FormData();
    formData.append("Excel", files[0]);
    uploadLeadApi(dispatch, formData, onSuccess);
  };
  const onSuccess = () => {
    successMessage("File Upload Success");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      {/* {toggle && <AddNewLeadDrawer toggle={toggle} setToggle={setToggle} />} */}

      <PageContainer>
        <PageHeader
          title="Lead Management"
          subTitle="Lead Management"
          extra={
            <div className="flex gap-2">
              <Button
                onClick={uploadHandler}
                className=" gap-[8px] w-[146px] h-[48px] border rounded-lg flex justify-center items-center cursor-pointer"
              >
                <input
                  type="file"
                  ref={inputRef}
                  onChange={changeHandler}
                ></input>
                <span className="text-[#475467] text-[1rem] font-semibold">
                  import Leads
                </span>
              </Button>
              <div
                onClick={() => setToggle(true)}
                className="bg-[#27A3A3] gap-[8px] w-[146px] h-[48px] border rounded-lg flex justify-center items-center cursor-pointer"
              >
                <span className="text-[#F9FAFB] text-[1rem] font-semibold">
                  Add New Lead
                </span>
              </div>
            </div>
          }
        />
        <Row gutter={16}>
          <Col sm={24} lg={6} md={8}>
            <FilterLead />
          </Col>
          <Col sm={24} lg={18} md={16}>
            <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2  ">
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};
export default LeadManagement;
