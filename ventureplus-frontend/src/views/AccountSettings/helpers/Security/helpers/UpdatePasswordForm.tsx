import { Col, Form, Row } from "antd";
import TextInput from "../../../../../components/inputs/TextInput";
import RoundedButton from "../../../../../components/button/RoundedButton";
import { useForm } from "antd/es/form/Form";
import { updateCompanyUserPasswordApi } from "../../../../../services/api/CompanyUser";
import { useDispatch } from "react-redux";

const UpdatePasswordForm = ({ getCompanyUserById }: any) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const handleChangePassword = (values: any) => {
    if (values.confirmPassword !== values.newPassword) {
      form.setFields([
        {
          name: "confirmPassword",
          errors: ["Password Not match"],
        },
      ]);
      return;
    }
    updateCompanyUserPasswordApi(
      dispatch,
      getCompanyUserById?.id,
      { oldPassword: values.oldPassword, newPassword: values.newPassword },
      onSuccess
    );
  };

  const onSuccess = () => {
    form.resetFields();
  };
  return (
    <div className="border border-stroke rounded-md flex flex-col p-2 gap-3">
      <h1 className="input-label">Change Password:</h1>
      <Form
        autoComplete="off"
        form={form}
        onFinish={handleChangePassword}
        name="changePassword"
      >
        <Row gutter={16} className="!w-full">
          {/* left side of form */}
          <Col span={24}>
            <TextInput
              className="w-full min-h-[48px]"
              name="oldPassword"
              id="oldPassword"
              isPassword
              placeholder="Old Password"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            />
          </Col>{" "}
          <Col xl={12} lg={24} sm={24} span={24}>
            <TextInput
              className="w-full min-h-[48px]"
              name="newPassword"
              id="newPassword"
              isPassword
              placeholder="New Password"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            />
          </Col>
          <Col xl={12} lg={24} sm={24} span={24}>
            <TextInput
              className="w-full min-h-[48px]"
              name="confirmPassword"
              id="confirmPassword"
              isPassword
              placeholder="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            />
          </Col>
          <Col span={24}>
            <RoundedButton
              htmlType="submit"
              title={"Save"}
              type="primary"
              className="!w-full"
              sm
            />
          </Col>
        </Row>{" "}
      </Form>
    </div>
  );
};

export default UpdatePasswordForm;
