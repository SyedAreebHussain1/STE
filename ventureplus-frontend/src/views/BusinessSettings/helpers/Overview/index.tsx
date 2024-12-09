import { SelectedCardType } from "../..";
import BusinessSettingsLayout from "../BusinessSettingsLayout";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { Col, Row, Select } from "antd";
import RoundedButton from "../../../../components/button/RoundedButton";
import { Form } from "antd/lib";
import TextInput from "../../../../components/inputs/TextInput";
import {
  getBusinessByIdApi,
  getBusinessesApi,
  updateBusinessOverviewApi,
} from "../../../../services/api/Business";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import TextArea from "antd/es/input/TextArea";
import { getIndustryApi } from "../../../../services/api/onBoardingRoleAndIndustry";
import { setCurrentSelectedBusiness } from "../../../../redux/slices/SelectedBusiness/selectedBusinessSlice";
import { setInStorage } from "../../../../utils/storage";

type OverViewContentI = {
  headerTitle: SelectedCardType;
  headerDescription: string;
  headerTagTitle: string;
};

type OnFinishType = {
  name: string;
  description: string;
  stage: string;
  industry: string;
};

const overViewContent: OverViewContentI = {
  headerTitle: "Overview",
  headerDescription:
    "A snapshot of the company's mission, vision, and core values",
  headerTagTitle: "Company Info",
};

interface OverviewI {
  selectedCard: SelectedCardType;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const stages = ["Idea", "Startup", "Business"];

const Overview = ({ selectedCard, setSelectedCard }: OverviewI) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const getBusinessById = useSelector(
    (state: RootState) => state.getBusinessById.data
  );
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const getonBoardingIndustry = useSelector(
    (state: RootState) => state.getonBoardingIndustry?.data
  );

  useEffect(() => {
    if (currentSelectedBusiness?.business?.id)
      getBusinessByIdApi(dispatch, currentSelectedBusiness?.business?.id);
  }, []);

  useEffect(() => {
    if (getBusinessById?.data) {
      form.setFieldsValue({
        name: getBusinessById?.data?.name,
        description: getBusinessById?.data?.description,
        stage: getBusinessById?.data?.stage,
        industry: getBusinessById?.data?.industry,
      });
    }
  }, [getBusinessById]);

  const onSuccess = () => {
    getBusinessByIdApi(
      dispatch,
      currentSelectedBusiness?.business?.id,
      onBusinessUpdate
    );
  };

  const onBusinessUpdate = (res: any) => {
    dispatch(setCurrentSelectedBusiness(res?.data));
    getBusinessesApi(dispatch);
    setInStorage("business", res?.data);
  };

  const onFinish = (values: OnFinishType) => {
    updateBusinessOverviewApi(
      dispatch,
      currentSelectedBusiness?.business?.id,
      values,
      onSuccess
    );
  };
  useEffect(() => {
    if (!getonBoardingIndustry) getIndustryApi(dispatch);
  }, []);

  return (
    <BusinessSettingsLayout
      {...overViewContent}
      selectedCard={selectedCard}
      setSelectedCard={setSelectedCard}
    >
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="overviewForm"
      >
        <Row gutter={16} className="!w-full">
          <Col xl={14} md={24} xs={24}>
            <div>
              <label htmlFor="name" className="input-label">
                Business Name
              </label>
              <TextInput
                className="w-full min-h-[48px] mt-2"
                name="name"
                id="name"
                placeholder="Enter Business Name"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              />
            </div>
          </Col>

          <Col xl={14} md={24} xs={24}>
            <label htmlFor="description" className="input-label">
              Description
            </label>
            <Form.Item
              className="w-full mt-2"
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
                placeholder="Enter Description"
                style={{ height: 100 }}
              />
            </Form.Item>
          </Col>

          <Col xl={14} md={24} xs={24}>
            <div>
              <label htmlFor="stage" className="input-label">
                Stage
              </label>
              <Form.Item
                className="w-full min-h-[48px] mt-2"
                name="stage"
                id="stage"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  className="w-full min-h-[48px]"
                  placeholder="Select Stage"
                >
                  {stages.map((stage) => (
                    <Select.Option key={stage} value={stage}>
                      {stage}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Col>

          <Col xl={14} md={24} xs={24}>
            <div>
              <label htmlFor="industry" className="input-label">
                Industry Classification
              </label>
              <Form.Item
                className="w-full min-h-[48px] mt-2"
                name="industry"
                id="industry"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  className="w-full min-h-[48px]"
                  placeholder="Select Industry Classification"
                >
                  {getonBoardingIndustry?.length > 0 &&
                    getonBoardingIndustry?.map((opt: any, i: number) => (
                      <Select.Option value={opt?.name} key={i}>
                        {opt?.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
          </Col>
          <Col xl={14} md={24} xs={24}>
            <RoundedButton
              htmlType="submit"
              title={"Save"}
              type="primary"
              className="!w-full"
              sm
            />
          </Col>
        </Row>
      </Form>
    </BusinessSettingsLayout>
  );
};
export default Overview;
