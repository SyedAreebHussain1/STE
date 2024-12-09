import { Modal, Form, Radio, Button, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { RoundedButton, TextInput } from "../../../../components";
import {
  postCreatePackageApi,
  updateCreatePackageApi,
} from "../../../../services/api/Dashboard/CreatePackage";
import { useEffect } from "react";

interface Props {
  open: any;
  close: (e: any) => void;
  type?: any;
}

const AddOnModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const chapter = useSelector((state: RootState) => state?.chapter);

  function onFinish(values: any) {
    const payload = {
      ...values,
      title: values.title,
      addOn: values.title,
      description: values.description,
      isSubscriptionPlan: false,
      isFree: false,
      noOfBusinesses: 0,
      noOfBusinessPlans: 0,
      iconUrl: null,
      noOfchapters: 0,
      ...(values.creditCounts ? { creditCounts: values.creditCounts } : {}),
      ...(values.interval ? { interval: values.interval } : {}),
    };

    if (type) {
      updateCreatePackageApi(dispatch, payload, Number(open.id), onSuccess);
    } else {
      postCreatePackageApi(dispatch, payload, onSuccess);
    }
  }

  function onSuccess() {
    close(false);
    form.resetFields();
  }

  useEffect(() => {
    if (type) {
      form.setFieldsValue({
        title: open.title,
        description: open?.description,
        iconUrl: open?.iconUrl,
        isFree: open?.isFree ? true : false,
        noOfBusinesses: open?.noOfBusinesses,
        noOfBusinessPlans: open?.noOfBusinessPlans,
        noOfchapters: open?.noOfchapters,
        price: open?.price,
        isRecurring: open?.isRecurring ? true : false,
        interval: open?.interval,
        isSubscriptionPlan: open?.isSubscriptionPlan ? true : false,
        creditCounts: open?.creditCounts ?? null,
      });
    }
  }, [open]);

  const handleValuesChange = (changedValues: any, allValues: any) => {
    if (changedValues.isSubscriptionPlan === false) {
      form.setFieldsValue({ interval: null });
    }
  };

  return (
    <Modal
      width={"600px"}
      title={
        <h3 className="text-[18px] font-semibold">
          {type ? "Update" : "Add"} Add On
        </h3>
      }
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form
        form={form}
        onFinish={onFinish}
        name="createPackage"
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="title" className="text-md font-semibold">
              Enter Title
            </label>
            <Form.Item name={"title"} className="w-full min-h-[48px]">
              <Select
                className="rounded-[8px]"
                placeholder="Select title"
                size="large"
                allowClear
                disabled={type == "update" ? true : false}
              >
                {["IdeaValidation", "Business", "User", "CreditCounts"].map(
                  (opt: any, i: number) => (
                    <Select.Option key={i} value={opt}>
                      {opt}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="price" className="text-md font-semibold">
              Enter Price
            </label>
            <TextInput
              id="price"
              name="price"
              className="min-h-[48px] w-[100%]"
              type="number"
              placeholder="Enter price"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="price" className="text-md font-semibold">
              Enter Credit Counts (Leave empty if not applicable)
            </label>
            <TextInput
              id="creditCounts"
              name="creditCounts"
              className="min-h-[48px] w-[100%]"
              type="number"
              placeholder="Enter Credit Counts"
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="description" className="text-md font-semibold">
              Enter Description
            </label>
            <TextInput
              id="description"
              name="description"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter description"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="isRecurring" className="text-md font-semibold">
              Recurring
            </label>
            <Form.Item name="isRecurring">
              <Radio.Group disabled={type == "update" ? true : false}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="interval" className="text-md font-semibold">
              Enter Interval
            </label>
            <Form.Item name={"interval"} className="w-full min-h-[48px]">
              <Select
                className="rounded-[8px]"
                placeholder="Select interval"
                size="large"
                allowClear
                disabled={type == "update" ? true : false}
              >
                {["year", "month"].map((opt: any, i: number) => (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <RoundedButton type="primary" title={"Cancel"} sm />
          <div className="flex gap-2 items-center">
            <RoundedButton
              title={type ? "Update" : "Add"}
              type="primary"
              sm
              htmlType="submit"
            />
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default AddOnModal;
