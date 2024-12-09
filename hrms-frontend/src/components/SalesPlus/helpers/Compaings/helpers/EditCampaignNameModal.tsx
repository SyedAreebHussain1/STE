import { Button, Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { updateCampaignsApi } from "../../../../../redux/api/SalesPlus/Campaigns";
import { RootState } from "../../../../../redux/store";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
// import { getAllAgencyCampaignApi, patchCampaignNameApi } from "../../../../../redux/api/Campaigns";

type Props = {
  open: boolean;
  close: () => void;
  campaignData: any;
};

const EditCampaignNameModal = ({ open, close, campaignData }: Props) => {
  const [upload, setUpload] = useState(false);
  const [form] = useForm();
  const dispatch = useDispatch();
  const updateCampaigns = useSelector(
    (state: RootState) => state?.updateCampaigns
  );
  const onFinish = (values: any) => {
    if (campaignData.id) {
      updateCampaignsApi(
        dispatch,
        { title: values.title },
        campaignData.id,
        onSuccess
      );
    }
  };

  useEffect(() => {
    if (campaignData?.id) {
      form.setFieldValue("title", campaignData?.title);
    }
  }, [campaignData]);

  const onSuccess = () => {
    close();
  };

  return (
    <Modal
      title={
        <span className="text-[1rem] font-medium">Edit Campaign Name</span>
      }
      centered
      width={561}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="editCampaignName"
      >
        <Row gutter={16} className="py-1">
          <Col sm={24} className="mt-5">
            <label
              htmlFor="title"
              className="text-[.8125rem] font-medium text-[#667085] dark-input-label"
            >
              Campaign Name
            </label>

            <TextInput
              name="title"
              id="title"
              className="h-[48px] mt-2 dark-input"
              placeholder="Enter Name"
              rules={[
                { required: true, message: "Please Enter Compaign Name" },
              ]}
            />
          </Col>
        </Row>
        <div className="flex justify-end w-[100%] mt-10">
          <RoundedButton
            title={"Edit Campaign Name"}
            loading={updateCampaigns?.loading}
            htmlType="submit"
            type="primary"
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
            sm
          />
        </div>
      </Form>
    </Modal>
  );
};
export default EditCampaignNameModal;
