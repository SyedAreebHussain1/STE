import shareIcon from "../../../assets/share.png";
import activeIcon from "../../../assets/active.png";
import rejectIcon from "../../../assets/reject.png";
import { Col, Row, Spin } from "antd";
import { errorMessage, successMessage } from "../../../utils/message";
import { useEffect, useState } from "react";
import {
  getAgencyCodeApi,
  getAgencyStaffRequestListApi,
} from "../../../redux/api/StaffManagement";
import { useDispatch, useSelector } from "react-redux";
import AcceptRequestModal from "./AcceptRequestModal";
import RejectRequestModal from "./RejectRequestModal";

const StaffRequest = () => {
  const dispatch = useDispatch();
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);

  const [modalData, setModalData] = useState<any>();

  const getAgencyStaffRequestList = useSelector(
    (state: any) => state.getAgencyStaffRequestList
  );
  const rejectStaffRequest = useSelector(
    (state: any) => state.rejectStaffRequest
  );
  const acceptStaffRequest = useSelector(
    (state: any) => state.acceptStaffRequest
  );

  useEffect(() => {
    getAgencyStaffRequestListApi(dispatch);
  }, [rejectStaffRequest, acceptStaffRequest]);
  const handleReject = (data: any) => {
    setRejectOpen(true);
    setModalData(data);
  };

  const handleAccept = (data: any) => {
    setAcceptOpen(true);
    setModalData(data);
  };

  return (
    <div className="bg-[#FFFFFF] p-[15px] rounded-xl border border-gray-300 mt-3">
      {acceptOpen && (
        <AcceptRequestModal
          open={acceptOpen}
          setOpen={setAcceptOpen}
          data={modalData}
        />
      )}
      {rejectOpen && (
        <RejectRequestModal
          open={rejectOpen}
          setOpen={setRejectOpen}
          data={modalData}
        />
      )}
      <p className="text-[#1D2939] text-[1rem] font-medium">Staff Request</p>
      <div className="mt-4">
        {getAgencyStaffRequestList.loading ? (
          <div className="flex justify-center">
            <Spin tip="Loading..." size="large" spinning={true}></Spin>
          </div>
        ) : (
          getAgencyStaffRequestList?.data?.map((item: any) => {
            return (
              <div
                key={item?.profile?.fullName}
                className="flex gap-2 w-full items-center py-[10px]"
              >
                <div className="w-[45px] h-[40px] rounded-full bg-gray-500 text-center text-[white] align-middle pt-[3px] text-[1.5rem]">
                  {item?.profile?.fullName.substring(0, 1).toUpperCase()}
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-[1rem] font-medium text-[#344054]">
                      {item?.profile?.fullName}
                    </p>
                    <p className="text-[#667085] text-[1rem] font-medium">
                      {item?.email}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    {item.role.title == "pending" && (
                      <>
                        <button onClick={() => handleAccept(item)}>
                          <img
                            src={activeIcon}
                            alt=""
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </button>
                        <button onClick={() => handleReject(item)}>
                          <img
                            src={rejectIcon}
                            alt=""
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const AgencyInvitation = () => {
  const dispatch = useDispatch();
  const getAgencyCode = useSelector((state: any) => state.getAgencyCode);

  const handleClick = () => {
    const text = getAgencyCode.data;
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    const successFull = document.execCommand("copy");
    textField.remove();
    if (successFull) {
      successMessage("Text Copied");
    } else {
      errorMessage("Try Again");
    }
  };

  useEffect(() => {
    getAgencyCodeApi(dispatch);
  }, []);
  return (
    <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl   ">
      <div className="bg-[#FFFFFF] p-[20px] rounded-xl border border-gray-300">
        <p className="text-[#1D2939]  text-[1rem] font-medium">
          Agency Invitation Code
        </p>
        <Row gutter={16} className="mt-2">
          <Col sm={12} lg={16} md={12}>
            <span className="text-[#344054] text-[1.2rem] font-medium p-[8px] rounded-[8px] flex items-center   h-[53px] border-dashed border-2 border-gray-300 cursor-pointer tracking-[3px]">
              {getAgencyCode.data}
            </span>
          </Col>
          <Col sm={12} lg={8} md={12}>
            <button
              className="border border-gray-300 rounded-[8px] p-[10px] flex items-center font-medium   h-[53px] text-[1rem] gap-1  cursor-pointer w-[100%] justify-center "
              onClick={handleClick}
            >
              <img src={shareIcon} alt="" /> Share
            </button>
          </Col>
        </Row>
      </div>
      <StaffRequest />
    </div>
  );
};
export default AgencyInvitation;
