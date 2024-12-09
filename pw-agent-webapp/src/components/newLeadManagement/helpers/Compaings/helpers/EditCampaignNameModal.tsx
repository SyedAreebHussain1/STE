import { Button, Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { getAllAgencyCampaignApi, patchCampaignNameApi } from "../../../../../redux/api/Campaigns";

type Props = {
  open: boolean;
  close: () => void;
  campaignData: any
};

const EditCampaignNameModal = ({ open, close, campaignData }: Props) => {
  const [upload, setUpload] = useState(false);
  const [form] = useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    patchCampaignNameApi( {title: values.campaignName}, campaignData.id, dispatch, onSuccess)
  };

  useEffect(() => {
    if(campaignData?.id){
         form.setFieldValue("campaignName", campaignData?.title)
    }
  }, [])

  const onSuccess = () => { 
    close()
    getAllAgencyCampaignApi(dispatch, {page: 1, limit: 10});
   }
  

  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          Edit Campaign Name
        </span>
      }
      centered
      width={561}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form autoComplete="off" form={form} onFinish={onFinish} name="editCampaignName">
        <Row gutter={16} className="py-1">
          <Col sm={24} className="mt-5">
            <label
              htmlFor="campaignName"
              className="text-[.8125rem] font-medium text-[#667085]"
            >
              Campaign Name
            </label>
            
            <TextInput
              name="campaignName"
              id="campaignName"
              className="h-[48px] mt-2"
              placeholder="Enter Name"
              rules={[
                { required: true, message: "Please Enter Compaign Name" },
              ]}
            />
           
          </Col>
        </Row>
        <div className="flex justify-end w-[100%] mt-10">
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
          >
            Edit Campaign Name
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default EditCampaignNameModal;
