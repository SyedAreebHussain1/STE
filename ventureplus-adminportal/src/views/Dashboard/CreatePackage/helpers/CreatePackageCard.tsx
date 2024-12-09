import { Modal, Form, Radio, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { RoundedButton, TextInput } from "../../../../components";
import {
  getCreatePackageAdminApi,
  postCreatePackageApi,
  updateCreatePackageApi,
} from "../../../../services/api/Dashboard/CreatePackage";
import { useEffect } from "react";

interface Props {
  open: any;
  close: (e: any) => void;
  type?: any;
}

const CreatePackageCard = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();

  function onFinish(values: {
    title: string;
    description: string;
    isFree: boolean;
    noOfBusinesses: number;
    noOfBusinessPlans: number;
    noOfchapters: number;
    price: number;
    creditCounts: number;
    isRecurring: boolean;
    interval: string;
    isSubscriptionPlan: boolean;
  }) {
    if (type) {
      updateCreatePackageApi(dispatch, values, Number(open.id), onSuccess);
    } else {
      postCreatePackageApi(dispatch, values, onSuccess);
    }
  }

  function onSuccess() {
    close(false);
    getCreatePackageAdminApi(dispatch)
    form.resetFields();
  }

  useEffect(() => {
    if (type) {
      form.setFieldsValue({
        title: open.title,
        description: open?.description,
        isFree: open?.isFree ? true : false,
        noOfBusinesses: open?.noOfBusinesses,
        noOfBusinessPlans: open?.noOfBusinessPlans,
        noOfchapters: open?.noOfchapters,
        price: open?.price,
        isRecurring: open?.isRecurring ? true : false,
        interval: open?.interval,
        isSubscriptionPlan: open?.isSubscriptionPlan ? true : false,
        creditCounts: open?.creditCounts,
      });
    }
  }, [open]);

  return (
    <Modal
      width={"600px"}
      title={
        <h3 className="text-[18px] font-semibold">
          {type ? "Update" : "Add"} Package
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
            <TextInput
              id="title"
              name="title"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter plan name"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="description" className="text-md font-semibold">
              Enter Description here
            </label>
            <TextInput
              id="description"
              name="description"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter icon URL"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="isFree" className="text-md font-semibold">
              Free
            </label>
            <Form.Item name="isFree">
              <Radio.Group disabled={type == "update" ? true : false}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="noOfBusinesses" className="text-md font-semibold">
              Enter No of Businesses
            </label>
            <TextInput
              id="noOfBusinesses"
              name="noOfBusinesses"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter no of businesses"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label
              htmlFor="noOfBusinessPlans"
              className="text-md font-semibold"
            >
              Enter No of Business Plans
            </label>
            <TextInput
              id="noOfBusinessPlans"
              name="noOfBusinessPlans"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter no of business plans"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="noOfchapters" className="text-md font-semibold">
              Enter No Of Chapters
            </label>
            <TextInput
              id="noOfchapters"
              name="noOfchapters"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter no of chapters"
              rules={[{ required: true, message: "This field is required" }]}
            />
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
              placeholder="Enter price"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="creditCounts" className="text-md font-semibold">
              Enter Credits
            </label>
            <TextInput
              id="creditCounts"
              name="creditCounts"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter credit counts"
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
            <Form.Item
              name={"interval"}
              className="w-full min-h-[48px]"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <Select
                className="rounded-[8px]"
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

        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label
              htmlFor="isSubscriptionPlan"
              className="text-md font-semibold"
            >
              Subscription Plan
            </label>
            <Form.Item name="isSubscriptionPlan">
              <Radio.Group disabled={type == "update" ? true : false}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
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

export default CreatePackageCard;