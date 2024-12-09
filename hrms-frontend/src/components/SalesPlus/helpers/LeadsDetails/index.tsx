import { Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import LogsDetails from "./helpers/LogsDetails";
import ProfileDetail from "./helpers/ProfileDetail";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../../helpers/PageHeader/PageHeader";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import penIcon from "../../../../assets/penIcon.png";
import { getLeadsLeadByIdApi } from "../../../../redux/api/SalesPlus/LeadDetails";
import UpdateLeadsModal from "./helpers/UpdateLeadsModal";
const LeadsDetails = () => {
  let { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const getLeadDataById = useSelector((state: any) => state?.getLeadsLeadById);
  const deleteLeadInventory = useSelector(
    (state: any) => state?.deleteLeadInventory
  );
  const updateLeadStatusSlice = useSelector(
    (state: any) => state?.updateLeadStatus
  );
  const addNewLeadFollowUp = useSelector(
    (state: any) => state?.addNewLeadFollowUp
  );
  const updateLeadDataById = useSelector(
    (state: any) => state.updateLeadDataById
  );
  const leadRemoveLeadPermission = useSelector(
    (state: any) => state?.removeleadPermission
  );
  const assignInventory = useSelector((state: any) => state?.assignInventory);
  const updateLeadsLead = useSelector((state: any) => state?.updateLeadsLead);

  useEffect(() => {
    if (
      id ||
      deleteLeadInventory?.data ||
      updateLeadStatusSlice?.data ||
      addNewLeadFollowUp?.data ||
      updateLeadDataById?.data ||
      leadRemoveLeadPermission?.data ||
      assignInventory?.data ||
      updateLeadsLead?.data
    ) {
      getLeadsLeadByIdApi(dispatch, Number(id));
    }
  }, [
    id,
    deleteLeadInventory?.data,
    updateLeadStatusSlice?.data,
    addNewLeadFollowUp?.data,
    updateLeadDataById?.data,
    leadRemoveLeadPermission?.data,
    assignInventory?.data,
    updateLeadsLead?.data,
  ]);

  return (
    <>
      {toggle && (
        <UpdateLeadsModal
          toggle={toggle}
          setToggle={setToggle}
          data={getLeadDataById}
        />
      )}
      <PageContainer>
        <PageHeader
          title={
            <>
              <div
                className="text-[1rem]  flex gap-1 items-center font-semibold text-[rgb(95,116,184)] dark:text-dark-secondary cursor-pointer "
                onClick={() => navigate(-1)}
              >
                <span>
                  <IoIosArrowBack />
                </span>
                Back to Home
              </div>
            </>
          }
          subTitle={`Lead Management / ${getLeadDataById?.data?.client?.name}`}
        />
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <ProfileDetail
              data={getLeadDataById}
              edit={
                <img
                  className="cursor-pointer"
                  src={penIcon}
                  alt=""
                  onClick={() => setToggle(true)}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <LogsDetails />
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};
export default LeadsDetails;
