import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextInput from "../../../../components/inputs/TextInput";
import {
  affilateUserProfileApi,
  affilateUserProfileUpdateApi,
} from "../../../../services/api/Dashboard/Profile";
import { RootState } from "../../../../store/store";

const Profiledetails = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const affilateUserProfile = useSelector(
    (state: RootState) => state?.affilateUserProfile
  );

  const onFinish = (values: any) => {
    const formData = new FormData();
    formData.append(
      "name",
      values?.name ? values?.name : affilateUserProfile?.data?.name
    );
    formData.append(
      "email",
      values?.email ? values?.email : affilateUserProfile?.data?.email
    );
    formData.append(
      "phoneNo",
      values?.phoneNo ? values?.phoneNo : affilateUserProfile?.data?.phoneNo
    );
    affilateUserProfileUpdateApi(dispatch, formData, success);
  };
  function success() {
    affilateUserProfileApi(dispatch);
  }
  useEffect(() => {
    if (affilateUserProfile?.data) {
      form.setFieldsValue(affilateUserProfile?.data);
    }
  }, [affilateUserProfile.data]);
  return (
    <div className="bg-[#ffffff] rounded-lg ">
      <div className="p-[20px] flex items-center border-b">
        <h1 className="text-[#212838] font-semibold text-[1.125rem]">
          Profile Details
        </h1>
      </div>
      <div className="p-[20px]">
        <Form
          name="Profiledetails"
          initialValues={{ remember: true }}
          form={form}
          onFinish={onFinish}
          className="w-full"
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Name
              </span>
              <TextInput
                name={"name"}
                placeholder="Name"
                className="h-[48px] bg-[#EAECF0]"
                rules={[{ required: true, message: "Please input your name!" }]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Email
              </span>
              <TextInput
                name={"email"}
                placeholder="Email"
                disabled={true}
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Phone No
              </span>
              <TextInput
                name={"phoneNo"}
                placeholder="Phone no"
                isNumber
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  { required: true, message: "Please input your phone no!" },
                ]}
              />
            </Col>
          </Row>
          <div className="flex justify-end">
            <Button
              htmlType="submit"
              disabled={affilateUserProfile?.loading}
              loading={affilateUserProfile?.loading}
              className="text-[#01555A] font-semibold text-[.9375rem]"
            >
              Save changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profiledetails;
