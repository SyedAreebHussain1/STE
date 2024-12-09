import { Button, Col, Divider, Form, Modal, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../../components/button/RoundedButton";
import TextInput from "../../../../../components/inputs/TextInput";
import TextArea from "antd/es/input/TextArea";
import { RootState } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import { getCountriesApi } from "../../../../../services/api/country";
import { getCurrenciesApi } from "../../../../../services/api/currency";
import { createBusinessApi } from "../../../../../services/api/auth";
import { getBusinessesApi } from "../../../../../services/api/Business";
import { getBusinessCountApi } from "../../../../../services/api/GetBusinessCount";
import axios from "axios";
import { errorMessage } from "../../../../../utils/message";

interface NewBusinessModalProps {
  open?: any | undefined;
  onClose?: any;
}

type OnFinishType = {
  name: "string";
  description: "string";
  stage: "Idea";
  industry: "string";
  currencyId: 0;
  country: "string";
};

const NewBusinessModal = ({ open, onClose }: NewBusinessModalProps) => {
  const [form] = Form.useForm();
  const [aiLoading, setAiLoading] = useState(false);
  const [AiResponse, setAiResponse] = useState({});
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    createBusinessApi(values, dispatch, onSuccess);
  };
  const onSuccess = () => {
    onClose(false);
    getBusinessesApi(dispatch);
    getBusinessCountApi(dispatch);
  };

  const stageOptions: { label: string; value: string }[] = [
    {
      label: "Idea",
      value: "Idea",
    },
    {
      label: "Startup",
      value: "Startup",
    },
    {
      label: "Business",
      value: "Business",
    },
  ];

  const countriesList = useSelector(
    (state: RootState) => state.getCountries?.data
  );
  const currenciesList = useSelector(
    (state: RootState) => state.getCurrencies?.data
  );

  const handleAi = async (des: string) => {
    if (des) {
      setAiLoading(true);
      fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/industry?des=${des}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (res: any) {
          setAiResponse(res);
        })
        .catch(function (res) {
          setAiLoading(false);
          errorMessage("Something went wrong!");
        });
    }
  };

  useEffect(() => {
    if (!countriesList) getCountriesApi(dispatch);
    if (!currenciesList) getCurrenciesApi(dispatch);
  }, []);

  return (
    <Modal
      title={"Create New Business"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
      className="relative z-50"
    >
      <Divider />
      <Form
        onFinish={onFinish}
        name="addNewUsers"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
        className="!w-full"
      >
        <Row gutter={16} className="!w-full">
          <Col lg={24} sm={24} md={24} span={24}>
            <label htmlFor="name" className="input-label-sm">
              Business Name
            </label>
            <TextInput
              classNameFormItem={"mb-3"}
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              id="name"
              name="name"
              className="min-h-[40px]"
              placeholder="Enter business name"
            />
          </Col>
          <Col lg={24} sm={24} md={24} span={24}>
            <label htmlFor="description" className="input-label-sm">
              Business Description
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
              <TextArea maxLength={500} placeholder="Enter Description" />
            </Form.Item>
          </Col>
          <Col lg={12} md={12} sm={24} xl={12}>
            <label htmlFor="stage" className="input-label-sm">
              Stage
            </label>
            <Form.Item
              className="w-full mb-2"
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
                className="w-full min-h-[40px]"
                placeholder="Please Select"
              >
                {stageOptions?.map((stage: any) => (
                  <Select.Option key={stage.label} value={stage.value}>
                    {stage.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col lg={12} md={12} sm={24} xl={12}>
            <label htmlFor="country" className="input-label-sm">
              Country
            </label>
            <Form.Item
              className="w-full mb-2"
              name="country"
              id="country"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Select
                className="w-full min-h-[40px]"
                placeholder="Please Select"
                showSearch
                filterOption={(input: any, option: any) => {
                  return option?.children
                    ?.toLowerCase()
                    .includes(input.toLowerCase());
                }}
              >
                {countriesList?.length > 0 &&
                  countriesList?.map((country: any) => (
                    <Select.Option key={country?.id} value={country?.name}>
                      {country?.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>

          <Col lg={12} md={12} sm={24} xl={12}>
            <label htmlFor="currencyId" className="input-label-sm">
              Currency
            </label>
            <Form.Item
              className="w-full mb-2"
              name="currencyId"
              id="currencyId"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Select
                className="w-full min-h-[40px]"
                placeholder="Please Select"
                showSearch
                filterOption={(input: any, option: any) => {
                  return option?.children
                    ?.toLowerCase()
                    .includes(input.toLowerCase());
                }}
              >
                {currenciesList?.length > 0 &&
                  currenciesList?.map((currency: any) => (
                    <Select.Option key={currency?.id} value={currency?.id}>
                      {currency?.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col sm={16}>
            <label htmlFor="industry" className="input-label-sm">
              Industry Classification
            </label>

            <Form.Item className="w-full" name="industry" id="industry">
              <TextInput
                classNameFormItem={"mb-2"}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                id="industry"
                name="industry"
                className="min-h-[40px]"
                suffix={
                  <>
                    <Button type="primary" className="p-btn sm:block hidden">
                      Save
                    </Button>
                    <Button
                      className="purple-btn min-h-[38px] sm:hidden block"
                      onClick={() => handleAi(form.getFieldValue("industry"))}
                    >
                      Suggest with AI
                    </Button>
                  </>
                }
                placeholder="Enter business name"
              />
            </Form.Item>
          </Col>
          <Col sm={8} className="mt-6">
            {" "}
            <Button
              type="primary"
              className="purple-btn min-h-[38px] sm:block hidden"
              onClick={() => handleAi(form.getFieldValue("industry"))}
            >
              Suggest with AI
            </Button>
          </Col>
          {Object.values(AiResponse)?.length > 0 && (
            <Col sm={24} className="flex gap-1 flex-wrap mb-4">
              {Object.values(AiResponse).map((val: any) => (
                <div
                  className="bg-primary flex items-center justify-center py-1 px-2 text-[white] w-fit rounded-full cursor-pointer"
                  onClick={() => form.setFieldValue("industry", val)}
                >
                  {val}
                </div>
              ))}
            </Col>
          )}
        </Row>
        <Row>
          <Col span={4}>
            <RoundedButton
              title={"Cancel"}
              type="danger"
              sm
              onClick={() => onClose()}
            />
          </Col>
          <Col span={16}></Col>
          <Col span={4}>
            <RoundedButton
              title={"Create"}
              type="primary"
              sm
              htmlType="submit"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default NewBusinessModal;
