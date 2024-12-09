import { Col, Divider, Form, Input, Row } from "antd";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../../utils/helpers/PageHeader/PageHeader";
import { useEffect } from "react";
import { getCustomerByIdApi } from "../../../../services/api/Dashboard/Customers";
import { AppDispatch } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import noProfile from "../../../../assets/NoProfile.png";
import PhoneNumberIcon from "../../../../assets/phone.png";
import WhatsappNumberIcon from "../../../../assets/whatsapp.png";
import EmailIcon from "../../../../assets/gmail.png";
const CustomerDetailPage = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const getCustomerById = useSelector((state: any) => state.getCustomerById);
  useEffect(() => {
    getCustomerByIdApi(dispatch, id);
  }, [dispatch, id]);

  return (
    <PageContainer>
      <PageHeader title="Customer Detail" />
      <div className="flex justify-center w-full md:w-[50%] mx-auto bg-white items-center">
        <Row gutter={24}>
          <Col span={24} sm={24} md={24}>
            <div className="h-60 flex flex-col gap-3 justify-center items-center">
              <img
                className="w-20 h-20"
                src={
                  getCustomerById?.data?.data?.customerProfile
                    ?.profilePictureUrl
                    ? getCustomerById?.data?.data?.customerProfile
                        ?.profilePictureUrl
                    : noProfile
                }
                alt=""
              />
              <h1 className="font-bold text-[18px]">
                {getCustomerById?.data?.data?.customerProfile?.fullName}
              </h1>
            </div>
            <div className="w-[100%]">
              <Divider />
            </div>
          </Col>

          <Col span={24} sm={24} md={12}>
            <div className="flex justify-center items-center">
              <img className="w-7 h-7" src={PhoneNumberIcon} alt="" />
              <h1 className="font-bold">Phone Number</h1>
            </div>
            <p className="text-center">
              {getCustomerById?.data?.data?.phone
                ? getCustomerById?.data?.data?.phone
                : "-"}
            </p>
          </Col>
          <Col span={24} sm={24} md={12}>
            <div className="flex justify-center items-center">
              <img className="w-7 h-7" src={WhatsappNumberIcon} alt="" />
              <h1 className="font-bold"> Whatsapp Number</h1>
            </div>
            <p className="text-center">
              {" "}
              {getCustomerById?.data?.data?.whatsapp_no
                ? getCustomerById?.data?.data?.whatsapp_no
                : "-"}
            </p>
          </Col>
          <Col className="md:mt-8 mt-0 ml-0 md:ml-12 " sm={24} md={12}>
            <div className="flex gap-2 ml-0 md:ml-20">
              <img className="w-5 h-5" src={EmailIcon} alt="" />
              <h1 className="font-bold">Email</h1>
            </div>
            <p className="md:ml-20 ml-0">
              {" "}
              {getCustomerById?.data?.data?.email
                ? getCustomerById?.data?.data?.email
                : "-"}
            </p>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default CustomerDetailPage;
