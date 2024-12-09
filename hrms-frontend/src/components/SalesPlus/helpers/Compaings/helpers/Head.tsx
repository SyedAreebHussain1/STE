import React, { useState } from "react";
import importLeadIcon from "../../../../../assets/importLeadIcon.png";
import penIcon from "../../../../../assets/penIcon.png";
import useToggle from "../../../../../hooks/useToggle";
// import AddNewLeadDrawer from "../../../../LeadManagement/helpers/AddNewLeadDrawer";
import EditCampaignNameModal from "./EditCampaignNameModal";
import UploadLeadExcelFormModal from "./UploadLeadExcelFormModal";
import ImportLeadModal from "./ImportLeadModal";
import { getFromStorage } from "../../../../../utils/storage";
import AddNewLeadDrawer from "./AddNewLeadDrawer";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import { MdOutlineEdit } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
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
            <RoundedButton
              onClick={toggleEditCampaignNameModal}
              title={
                <div className=" text-[.8125rem] font-medium flex items-center gap-1 ">
                  <MdOutlineEdit />
                  <span className="hidden lg:inline-block whitespace-nowrap">
                    Edit Campaign Name
                  </span>
                </div>
              }
              className="dark:bg-dark-primary dark:text-white rounded-md"
              sm
            />
          )}
          <RoundedButton
            onClick={toggleImportLeadModal}
            title={
              <div className=" text-[.8125rem] font-medium flex items-center gap-1 ">
                <FiUpload />
                <span className="hidden lg:inline-block whitespace-nowrap">
                  Import Leads
                </span>
              </div>
            }
            className="dark:bg-dark-primary dark:text-white rounded-md"
            sm
          />

          <RoundedButton
            onClick={() => setToggle(true)}
            title={
              <span className="flex items-center">
                <span className="text-[16px] pr-1">+</span>
                Add New Lead
              </span>
            }
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white rounded-md"
            sm
          />
        </div>
      </div>
    </>
  );
};

export default Head;
