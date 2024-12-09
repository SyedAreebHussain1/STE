import { Button, Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextInput from "../../../../../components/inputs/TextInput";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getCompanyUserByIdApi,
  updateCompanyUserByIdApi,
} from "../../../../../services/api/CompanyUser";
import { getFromStorage, setInStorage } from "../../../../../utils/storage";
import { loginSuccess } from "../../../../../redux/slices/auth/authSlice";

interface UpdateEmailFormI {
  getCompanyUserById: number;
  userData: any;
}

const UpdateEmailForm = ({ getCompanyUserById, userData }: any) => {
  const [form] = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue({
      email: getCompanyUserById?.email,
    });
  }, [getCompanyUserById]);

  const onUpdateCompanyUser = (res: any) => {
    setInStorage("token", res?.data?.token);
    const user = getFromStorage("user");
    user.token = res?.data?.token;
    setInStorage("user", user);
    dispatch(loginSuccess(user));
    getCompanyUserByIdApi(dispatch, getCompanyUserById?.id);
  };

  const handleChangeEmail = (values: any) => {
    updateCompanyUserByIdApi(
      dispatch,
      getCompanyUserById?.id,
      values,
      onUpdateCompanyUser
    );
  };

  return (
    <div className="border border-stroke rounded-md flex flex-col p-2 gap-3 mb-4">
      <h1 className="input-label">Current Email:</h1>
      <Form
        autoComplete="off"
        form={form}
        onFinish={handleChangeEmail}
        name="overviewForm"
      >
        <TextInput
          className="w-full min-h-[48px] mt-2"
          name="email"
          id="email"
          placeholder="Enter email"
          suffix={
            <Button htmlType="submit" className="p-btn">
              {" "}
              Save
            </Button>
          }
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        />
      </Form>
    </div>
  );
};

export default UpdateEmailForm;
