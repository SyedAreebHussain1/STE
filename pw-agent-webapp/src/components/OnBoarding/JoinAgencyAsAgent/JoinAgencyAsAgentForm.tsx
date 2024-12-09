import { Button, Col, Divider, Form, Row } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import InputButton from "../../../helpers/inputs/InputButton";
import {
  createAgencyApi,
  getAgencyByAgencyCodeApi,
  joinAgencyByAgencyCodeApi,
} from "../../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

const JoinAgencyAsAgentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const agencyCode = Form.useWatch("agencyCode", form);
  const agencyRef = useRef<any>();
  const getAgencyByAgencyCode = useSelector(
    (state: any) => state.getAgencyByAgencyCode
  );
  const joinAgencyByAgencyCode = useSelector(
    (state: any) => state.joinAgencyByAgencyCode
  );
  const { userData } = useSelector((state: RootState) => state.user);
  function onFinish(values: any) {
    const body = {
      agencyId: getAgencyByAgencyCode?.data?.id,
      experience: values.experience,
    };
    joinAgencyByAgencyCodeApi(body, dispatch, userData, () => navigate("/"));
  }

  useEffect(() => {
    if (getAgencyByAgencyCode?.data) {
      form.setFieldValue("agencyName", getAgencyByAgencyCode?.data?.agencyName);
    } else {
      form.setFieldValue("agencyName", null);
    }
  }, [getAgencyByAgencyCode?.data]);
  return (
    <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[10px]">
      <Form
        name="login"
        initialValues={{ remember: true }}
        className="w-full"
        form={form}
        onFinish={onFinish}
      >
        <Divider />

        <Row gutter={28}>
          <Col xs={24} sm={24} xl={12}>
            <div className="flex items-center justify-between">
              <span className="font-medium text-[.975rem] text-[#344054]">
                Agency Code
              </span>
              <Button
                type="link"
                className="text-primary p-0"
                onClick={() => getAgencyByAgencyCodeApi(agencyCode, dispatch)}
              >
                Verify Now
              </Button>
            </div>
            <TextInput
              name="agencyCode"
              placeholder="Enter your Agency Code"
              rules={[
                {
                  required: true,
                  message: "Please input your Agency Code!",
                },
              ]}
              className="w-full h-[50px]  "
              suffix={
                getAgencyByAgencyCode?.data ? (
                  <IoIosCheckmarkCircle fontSize={20} color="green" />
                ) : (
                  <FaCircleXmark color="red" fontSize={20} />
                )
              }
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Agency Name
            </span>
            <TextInput
              name="agencyName"
              placeholder="Enter your Agency Name"
              disabled
              rules={[
                {
                  required: false,
                },
              ]}
              className="w-full h-[50px]  "
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Experience
            </span>
            <TextInput
              name="experience"
              placeholder="Enter your Experience"
              rules={[
                {
                  required: true,
                  message: "Please input your Experience!",
                },
              ]}
              className="w-full h-[50px]  "
            />
          </Col>
        </Row>
        <div className="mt-[12.5rem] flex justify-between">
          <InputButton
            className="w-[97px] h-[50px] border border-borderColor  bg-white text-[#475467] text-[1rem] font-bold"
            name="Back"
          />
          <InputButton
            className="w-auto lg:w-[300px]  h-[50px]  bg-primary text-[white] text-[1rem] font-bold"
            name="Join Agency Now"
            htmlType="submit"
            loading={joinAgencyByAgencyCode.loading}
          />
        </div>
        <Divider />
      </Form>
    </div>
  );
};

export default JoinAgencyAsAgentForm;
