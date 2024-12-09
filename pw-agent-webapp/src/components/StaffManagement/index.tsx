import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import type { TabsProps } from "antd";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import StaffManagementTable from "./helpers/StaffManagementTable";
import shareIcon from "../../assets/share.svg";
import { Col, Row, Tabs } from "antd";
import AddNewStaffDrawer from "./helpers/AddNewStaffDrawer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { errorMessage, successMessage } from "../../utils/message";
import {
  getAgencyCodeApi,
  getAgencyStaffRequestListApi,
  getStaffApi,
} from "../../redux/api/StaffManagement";
import StaffRequestTable from "./helpers/StaffRequestTable";
const StaffManagement = () => {
  const [open, setOpen] = useState<boolean | undefined | null>(false);
  const dispatch: AppDispatch = useDispatch();
  const getAgencyCode = useSelector((state: any) => state.getAgencyCode);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Staff Management`,
      children: <StaffManagementTable />,
    },
    {
      key: "2",
      label: `Staff Request`,
      children: <StaffRequestTable />,
    },
  ];
  const onChange = (key: string) => {
    if (key === "1") {
      getStaffApi(dispatch, { page: 1, limit: 10 });
    } else {
      getAgencyStaffRequestListApi(dispatch);
    }
  };
  useEffect(() => {
    getAgencyCodeApi(dispatch);
  }, []);
  const handleClick = () => {
    const text = getAgencyCode.data;
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    const successFull = document.execCommand("copy");
    textField.remove();
    if (successFull) {
      successMessage("Copied");
    } else {
      errorMessage("Try Again");
    }
  };
  return (
    <PageContainer>
      <PageHeader
        title="Staff Management"
        subTitle="Staff Management"
        extra={
          <div
            onClick={() => setOpen(true)}
            className="bg-[#27A3A3] gap-[8px] sm:w-[146px] w-[140px] h-[40px] sm:h-[48px] border rounded-lg flex justify-center items-center cursor-pointer"
          >
            <span className="text-[#F9FAFB] text-sm sm:text-[1rem] font-semibold">
              Add New Staff
            </span>
          </div>
        }
      />
      {open && <AddNewStaffDrawer open={open} setOpen={setOpen} />}
      <div className="mt-2 mb-1">
        <div className="bg-[#FFFFFF] p-[20px] rounded-xl border border-gray-300">
          <p className="text-[#1D2939]  text-[1rem] font-medium">
            Agency Invitation Code
          </p>
          <div className="flex gap-2 mt-2 justify-start items-start sm:flex-row flex-col sm:items-center">
            <div className="text-[#344054] lg:text-[1.2rem] md:text-sm font-medium p-[8px] rounded-[8px] flex items-center   h-[39px] border-dashed border-2 border-gray-300 cursor-pointer tracking-[3px] ">
              {getAgencyCode.data}
            </div>
            <button
                className="border border-gray-300 rounded-[8px] p-[10px] flex items-center font-medium   h-[39px] text-[1rem] gap-1  cursor-pointer  justify-center "
                onClick={handleClick}
              >
                <img src={shareIcon} alt="" /> Copy
              </button>
          </div>
        </div>
      </div>
      <Row gutter={16}>
        <Col sm={24} lg={24} md={24} xl={24}>
          <div className="mt-2 bg-[#FFFFFF] p-[15px] rounded-xl mr-2  ">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default StaffManagement;
