import React from "react";
import { Col, Row } from "antd";
import blurImg from "../../../../../assets/blurImg.png";
import metaIconWithBg from "../../../../../assets/metaIconbg2.png";
import arrowRightIcon from "../../../../../assets/arrowRightIcon.png";
import excelIcon from "../../../../../assets/excelIcon.png";
import tiktokIcon from "../../../../../assets/tiktokIcon.png";
import manuallyIcon from "../../../../../assets/manually.png";
import AddCompaignsModal from "./AddCompaignsModal";
import useToggle from "../../../../../hooks/useToggle";
import uploadIcon from "../../../../../assets/uploadLogo.png";
import UploadLeadExcelFormModal from "./UploadLeadExcelFormModal";
import AddNewLeadDrawer from "../../../../LeadManagement/helpers/AddNewLeadDrawer";
import CreateNewCampaignsModal from "./CreateNewCampaignsModal";

const CreateCompaignsCard = ({ setBgBlurBox, setSearchValue }: any) => {
  const [addCompaignsModal, toggleAddCompaignsModal] = useToggle();
  const [uploadLeadExcel, toggleUploadLeadExcel] = useToggle();
  const [addNewCampaign, toggleAddNewCampaign] = useToggle();

  return (
    <React.Fragment>
      {addCompaignsModal && (
        <AddCompaignsModal
          setBgBlurBox={setBgBlurBox}
          open={addCompaignsModal}
          close={toggleAddCompaignsModal}
        />
      )}
      {uploadLeadExcel && (
        <UploadLeadExcelFormModal
          setBgBlurBox={setBgBlurBox}
          open={uploadLeadExcel}
          close={toggleUploadLeadExcel}
          setSearchValue={setSearchValue}
        />
      )}
      {addNewCampaign && (
        <CreateNewCampaignsModal
          setBgBlurBox={setBgBlurBox}
          open={addNewCampaign}
          close={toggleAddNewCampaign}
        />
      )}
      <div className="relative">
        <img src={blurImg} alt="" className="w-full h-full absolute" />
        <div className=" top-4 left-1 px-4 py-4  w-full">
          <Row gutter={16}>
            {[
              {
                name: "New Campaign",
                title: "Create your new Campaign with few clicks.",
                icon: manuallyIcon,
                color: "rgb(246,255,255)",
              },
              {
                name: "Efficient Meta Lead Management",
                title:
                  "Streamline Lead Generation and Management with Meta Integration",
                icon: metaIconWithBg,
                color: "rgb(245,251,255)",
              },
              {
                name: "Tiktok Lead Mangement",
                title:
                  "Streamline Lead Generation and Management with Meta Integration",
                icon: tiktokIcon,
                color: "rgb(242,242,242)",
              },
              {
                name: "Create Campaign From Excel Sheet",
                title:
                  "Import your Excel lead file, File must be in CSV format",
                icon: excelIcon,
                color: "rgb(255,255,255)",
              },
            ].map((item: any, i: number) => {
              return (
                <Col
                  key={i}
                  md={8}
                  lg={8}
                  sm={24}
                  xs={24}
                  xl={8}
                  className="mt-7 "
                >
                  {item.name === "Tiktok Lead Mangement" ?
                    <div
                      style={{ backgroundColor: item.color }}
                      className={`h-[231px] p-[24px]  rounded-[10px]`}
                    >
                      <div className="flex justify-between">
                        <img src={item.icon} alt="" />
                        <p className=" p-1 flex justify-end">Coming Soon</p>
                      </div>
                      <h2 className="text-[#344054] text-[16px] font-semibold mt-2">
                        {item.name}
                      </h2>
                      <p className="text-[.8125rem] font-medium text-[#667085] mt-2">
                        {item.title}
                      </p>
                      <button
                        className="mt-5"
                        disabled={item.name === "Tiktok Lead Mangement"}
                      >
                        <div className="flex border p-[10px] rounded-[8px]">
                          <div className="flex items-center gap-2">
                            <span className="text-[.9375rem] font-medium text-[#104141]">
                              {item.name === "Create Campaign From Excel Sheet"
                                ? "Upload file"
                                : "Create"}
                            </span>
                            <img
                              src={
                                item.name === "Create Campaign From Excel Sheet"
                                  ? uploadIcon
                                  : arrowRightIcon
                              }
                              alt=""
                            />{" "}
                          </div>
                        </div>
                      </button>
                    </div> : <div
                      style={{ backgroundColor: item.color }}
                      className={`h-[231px] p-[24px]  rounded-[10px]`}
                    >
                      <img src={item.icon} alt="" />
                      <h2 className="text-[#344054] text-[16px] font-semibold mt-2">
                        {item.name}
                      </h2>
                      <p className="text-[.8125rem] font-medium text-[#667085] mt-2">
                        {item.title}
                      </p>
                      <button
                        className="mt-5"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          item.name === "Create Campaign From Excel Sheet"
                            ? toggleUploadLeadExcel()
                            : item.name === "New Campaign"
                              ? toggleAddNewCampaign()
                              : toggleAddCompaignsModal();
                        }}
                      >
                        <div className="flex border p-[10px] rounded-[8px]">
                          <div className="flex items-center gap-2">
                            <span className="text-[.9375rem] font-medium text-[#104141]">
                              {item.name === "Create Campaign From Excel Sheet"
                                ? "Upload file"
                                : "Create"}
                            </span>
                            <img
                              src={
                                item.name === "Create Campaign From Excel Sheet"
                                  ? uploadIcon
                                  : arrowRightIcon
                              }
                              alt=""
                            />{" "}
                          </div>
                        </div>
                      </button>
                    </div>}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateCompaignsCard;
