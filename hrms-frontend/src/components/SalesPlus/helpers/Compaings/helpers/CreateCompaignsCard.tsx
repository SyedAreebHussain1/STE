import React, { useEffect } from "react";
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
import blurimgdark from "../../../../../assets/blurbgdark.png";
import CreateNewCampaignsModal from "./CreateNewCampaignsModal";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import { useSelector } from "react-redux";
const CreateCompaignsCard = ({ setBgBlurBox, setSearchValue }: any) => {
  const [addCompaignsModal, toggleAddCompaignsModal] = useToggle();
  const [uploadLeadExcel, toggleUploadLeadExcel] = useToggle();
  const [addNewCampaign, toggleAddNewCampaign] = useToggle();
  const theme = useSelector((state: any) => state?.theme);

  const getsrc = () => {
    if (theme?.darkMode === "light") {
      return blurImg;
    } else if (theme?.darkMode === "dark") {
      return blurimgdark;
    }
  };
  useEffect(() => {
    getsrc();
  }, [theme]);
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
      <div className="relative  ">
        <img src={getsrc()} alt="" className="w-full   h-full absolute" />
        <div className=" top-4 left-1 px-4 py-4  w-full">
          <Row gutter={16}>
            {[
              {
                name: "New Campaign",
                title: "Create your new Campaign with few clicks.",
                icon: manuallyIcon,
                color: "bg-white dark:bg-[#282828] ",
              },
              {
                name: "Efficient Meta Lead Management",
                title:
                  "Streamline Lead Generation and Management with Meta Integration",
                icon: metaIconWithBg,
                color: "bg-white dark:bg-[#282828]",
              },
              {
                name: "Tiktok Lead Mangement",
                title:
                  "Streamline Lead Generation and Management with Meta Integration",
                icon: tiktokIcon,
                color: "bg-white dark:bg-[#282828]",
              },
              {
                name: "Create Campaign From Excel Sheet",
                title:
                  "Import your Excel lead file, File must be in CSV format",
                icon: excelIcon,
                color: "bg-white dark:bg-[#282828]",
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
                  className="mt-7  "
                >
                  {item.name === "Tiktok Lead Mangement" ? (
                    <div
                      className={`h-[231px] p-[24px] ${item.color} rounded-[10px]`}
                    >
                      <div className="flex justify-between">
                        <img src={item.icon} alt="" />
                        <p className=" p-1 dark:text-white flex justify-end">
                          Coming Soon
                        </p>
                      </div>
                      <h2 className="text-[#344054] dark:text-white text-[16px] font-semibold mt-2">
                        {item.name}
                      </h2>
                      <p className="text-[.8125rem]  dark:text-white font-medium text-[#667085] mt-2">
                        {item.title}
                      </p>
                      <button
                        className="mt-5"
                        disabled={item.name === "Tiktok Lead Mangement"}
                      >
                        <ButtonWithSvg
                          title={
                            <span className="text-[.9375rem] font-medium text-[#104141] ">
                              {item.name === "Create Campaign From Excel Sheet"
                                ? "Upload file"
                                : "Create"}
                            </span>
                          }
                          icon={
                            item.name === "Create Campaign From Excel Sheet"
                              ? uploadIcon
                              : arrowRightIcon
                          }
                        />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`h-[231px] p-[24px] ${item.color}  rounded-[10px]`}
                    >
                      <img src={item.icon} alt="" />
                      <h2 className="text-[#344054]  dark:text-white text-[16px] font-semibold mt-2">
                        {item.name}
                      </h2>
                      <p className="text-[.8125rem]  dark:text-white font-medium text-[#667085] mt-2">
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
                        <ButtonWithSvg
                          title={
                            <span className="text-[.9375rem] font-medium text-[#104141]">
                              {item.name === "Create Campaign From Excel Sheet"
                                ? "Upload file"
                                : "Create"}
                            </span>
                          }
                          icon={
                            item.name === "Create Campaign From Excel Sheet"
                              ? uploadIcon
                              : arrowRightIcon
                          }
                        />
                      </button>
                    </div>
                  )}
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
