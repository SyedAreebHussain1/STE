import { useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { leftArrowGreenIcon } from "../../../../assets";
import { Form, InputNumber } from "antd";
import Tag from "../../../../components/tag/tag";
import TextArea from "antd/es/input/TextArea";
import RoundedButton from "../../../../components/button/RoundedButton";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../../redux/store";
import {
  createServiceApi,
  editServiceApi,
  getServiceByIdApi,
} from "../../../../services/api/BusinessPlanSetup/Services";
import TextInput from "../../../../components/inputs/TextInput";
import { errorMessage } from "../../../../utils/message";

interface Props {}

const AddService = (props: Props) => {
  const { id } = useParams();
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  const getServiceById = useSelector(
    (state: RootState) => state.getServiceById?.data?.data
  );

  useEffect(() => {
    if (id) getServiceByIdApi(dispatch, Number(id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      name: getServiceById?.name,
      description: getServiceById?.description,
      turnover:
        getServiceById?.turnover === null
          ? 0
          : Number(getServiceById?.turnover),
    });
  }, [getServiceById]);

  const onFinish = (values: any) => {
    if (loading) return;
    const data = { ...values };

    setLoading(true);
    if (Number(id)) {
      editServiceApi(
        dispatch,
        Number(id),
        {
          ...data,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        },
        onSuccess
      );
    } else {
      setLoading(false);
      errorMessage("Service not found");
    }
  };

  const onSuccess = (res: boolean) => {
    if (res) {
      navigate("/business-plan-setups");
    }
    setLoading(res);
  };
  return (
    <PageContainer>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={leftArrowGreenIcon} alt="" />
        <h1 className="text-primary font-medium heading-m">Back</h1>
      </div>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="addServiceForm"
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="heading-s font-semibold">Business Plan Setup</h1>
          <p className="body-s text-para mb-12">
            In-depth Analysis of Products, Staffing, Equity, and Services
          </p>
          <div className="flex flex-col w-full border rounded-xl border-strokes p-6 gap-3">
            <Tag title={"Services"} type="primary" bold />
            <div>
              <label htmlFor="name" className="input-label-sm">
                1. What is the name of the service offered?
              </label>
              <TextInput
                name="name"
                placeholder="Type your answer here ..."
                className="w-full h-[48px]"
                maxLength={35}
                rules={[
                  {
                    required: true,
                    message: "This field is required!",
                  },
                ]}
              />
            </div>

            <div>
              <label htmlFor="description" className="input-label-sm">
                2. Can you provide a description of the service?
              </label>
              <Form.Item
                className="w-full mb-2"
                name="description"
                id="description"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <TextArea
                  maxLength={300}
                  placeholder="Type your answer here ..."
                  style={{ height: 80, resize: "none" }}
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mt-6">
          <RoundedButton
            title={"Update Service"}
            type="primary"
            sm
            bold
            htmlType="submit"
            loading={loading}
            className={`${loading ? "!cursor-not-allowed" : "!cursor-pointer"}`}
          />
        </div>
      </Form>
    </PageContainer>
  );
};

export default AddService;
