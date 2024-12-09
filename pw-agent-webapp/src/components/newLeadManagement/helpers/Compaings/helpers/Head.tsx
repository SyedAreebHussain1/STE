import React, { useState } from "react";
import importLeadIcon from "../../../../../assets/importLeadIcon.png";
import penIcon from "../../../../../assets/penIcon.png";
import useToggle from "../../../../../hooks/useToggle";
import AddNewLeadDrawer from "../../../../LeadManagement/helpers/AddNewLeadDrawer";
import EditCampaignNameModal from "./EditCampaignNameModal";
import UploadLeadExcelFormModal from "./UploadLeadExcelFormModal";
import ImportLeadModal from "./ImportLeadModal";
import { getFromStorage } from "../../../../../utils/storage";
type HeadType = {
  items: string[];
  campaignData: any;
};
const Head = ({ items, campaignData }: HeadType) => {
  const [calander, setCalander] = React.useState(0);
  const [editCampaignNameModal, toggleEditCampaignNameModal] = useToggle();
  const [importLeadModal, toggleImportLeadModal] = useToggle();
  const [toggle, setToggle] = useState(false);
  const userRole = getFromStorage("user")?.role;
  return (
    <>
      {toggle && (
        <AddNewLeadDrawer
          toggle={toggle}
          setToggle={setToggle}
          campaignData={campaignData}
        />
      )}
      {editCampaignNameModal && (
        <EditCampaignNameModal
          open={editCampaignNameModal}
          close={toggleEditCampaignNameModal}
          campaignData={campaignData}
        />
      )}

      {importLeadModal && (
        <ImportLeadModal
          open={importLeadModal}
          close={toggleImportLeadModal}
          setBgBlurBox={false}
          campaignId={campaignData?.id}
        />
      )}

      <div className="flex gap-2">
        <div className="flex gap-2">
          {userRole !== "agentStaff" && (
            <button
              className="h-[36px] border rounded-lg flex justify-center items-center cursor-pointer p-[10px]"
              onClick={toggleEditCampaignNameModal}
            >
              <span className="text-[#475467] text-[.8125rem] font-medium flex items-center gap-1">
                <img
                  src={penIcon}
                  alt=""
                  className="h-[12px] w-[12px] min-w-[15px]"
                />{" "}
                <span className="hidden lg:inline-block whitespace-nowrap">
                  Edit Campaign Name
                </span>
              </span>
            </button>
          )}
          <button
            className="h-[36px] border rounded-lg flex justify-center items-center cursor-pointer p-[10px]"
            onClick={toggleImportLeadModal}
          >
            <span className="text-[#475467] text-[.8125rem] font-medium flex items-center gap-1">
              <img
                src={importLeadIcon}
                alt=""
                className="h-[12px] w-[15px] min-w-[15px]"
              />{" "}
              <span className="hidden lg:inline-block whitespace-nowrap">
                Import Leads
              </span>
            </span>
          </button>
          <button className="h-[36px] border rounded-lg flex justify-center items-center cursor-pointer  p-[10px]">
            <span className="text-[#27A3A3] text-[.8125rem] font-medium flex items-center gap-1">
              <span className="font-normal text-[1.4375rem]">+</span>{" "}
              <span
                className="hidden lg:inline-block whitespace-nowrap"
                onClick={() => setToggle(true)}
              >
                Add New Lead
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Head;
