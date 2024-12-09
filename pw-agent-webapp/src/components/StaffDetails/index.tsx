import { IoIosArrowBack } from "react-icons/io";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { Col, Row, Spin } from "antd";
import Details from "./helpers/Details";
import BookedSlots from "./helpers/BookedSlots";
import Ratings from "./helpers/Ratings";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserApi } from "../../redux/api/StaffManagement";
import AllStaffByManagerIdTable from "./helpers/AllStaffByManagerIdTable";

const StaffDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const dispatch = useDispatch();
  const onSuccess = () => {
    navigate(-1);
  };
  const deleteUser = () => {
    deleteUserApi(data?.id, dispatch, onSuccess);
  };
  const deleteStaff = useSelector((state: any) => state.deleteStaff);

  return (
    <PageContainer>
      <div
        className={`flex justify-between bg-[#FFFFFF] items-center p-[15px] rounded-xl `}
      >
        <div>
          <div
            className="text-[1rem] flex gap-1 items-center font-semibold text-[#27A3A3] cursor-pointer "
            onClick={() => navigate(-1)}
          >
            <span>
              <IoIosArrowBack />
            </span>
            Back to Home
          </div>
          <div className="flex text-[1rem]">
            <span className="text-textColor  ">Staff Management /</span>
            <p className="text-textColor font-semibold">
              {data?.profile?.fullName} Profile
            </p>
          </div>
        </div>
        <div className="border-[#F04438]  gap-[8px] w-[146px] h-[48px] border rounded-lg flex justify-center items-center cursor-pointer">
          <span>
            <Spin spinning={deleteStaff.loading} />
          </span>
          <span
            className="text-[#F04438] text-[1rem] font-semibold"
            onClick={deleteUser}
          >
            Delete User
          </span>
        </div>
      </div>
      <div className="mt-[20px]">
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Details data={data} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={16}>
            <BookedSlots data={data} />
            <br></br>
            <Ratings data={data} />
            {data?.role?.title !== "agentStaff" && (
              <>
                <AllStaffByManagerIdTable data={data} />
              </>
            )}
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default StaffDetails;
