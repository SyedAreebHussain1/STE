import { Col, Divider, Form, Row } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import InputButton from "../../../helpers/inputs/InputButton";
import SelectAgencyLocation from "../SelectAgencyLocation";
import { createAgencyApi } from "../../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const CreateAgencyForm = () => {
  const [form] = Form.useForm();
  const { userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const createAgency = useSelector((state: any) => state.createAgency);
  function onFinish(values: any) {
    const body: any = {
      agencyName: values.agencyName,
      isFreelancer: false,
      city: values.city,
      longitude: values.location.split(",")[1],
      latitude: values.location.split(",")[0],
    };
    if (values.refCode) {
      body.refCode = values.refCode;
    }
    if (values.branches) {
      body.NoOfBranches = values.branches;
    }
    createAgencyApi(body, dispatch, userData, () => {}, "owner");
  }
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
            <span className="font-medium text-[.975rem] text-[#344054]">
              Agency Name
            </span>
            <span className="text-[red] ml-2">*</span>
            <TextInput
              name="agencyName"
              placeholder="Enter your Agency Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Agency Name!",
                },
              ]}
              className="w-full h-[50px]  "
            />
          </Col>
          <SelectAgencyLocation form={form} />
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              City
            </span>
            <span className="text-[red] ml-2">*</span>
            <TextInput
              name="city"
              placeholder="Enter your City"
              rules={[
                {
                  required: true,
                  message: "Please input your City!",
                },
              ]}
              className="w-full h-[50px]  "
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Branches
            </span>
            <TextInput
              name="branches"
              placeholder="Enter your branches"
              className="w-full h-[50px]  "
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Ref Code
            </span>
            <TextInput
              name="refCode"
              placeholder="Enter your branches"
              className="w-full h-[50px]  "
            />
          </Col>
        </Row>
        <div className="mt-[2.5rem] flex justify-between mb-[0]">
          <InputButton
            className="w-[97px] h-[50px] border border-borderColor  bg-white text-[#475467] text-[1rem] font-bold"
            name="Back"
          />
          <InputButton
            className="w-auto lg:w-[300px] h-[50px]  bg-primary text-[white] text-[1rem] font-bold"
            name="Create Agency"
            htmlType="submit"
            loading={createAgency.loading}
          />
        </div>
      </Form>
    </div>
  );
};

export default CreateAgencyForm;
