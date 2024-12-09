import TextArea from "antd/es/input/TextArea";
import { Button, Modal, Form, Row, Col, Select, Checkbox } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, TextInput } from "../../../../components";
import { getAllChapterApi } from "../../../../services/api/Dashboard/Chatper";
import { useEffect } from "react";
import {
  getTopicAdminApi,
  postTopicApi,
  updateTopicApi,
} from "../../../../services/api/Dashboard/Topic";
interface Props {
  open: any;
  close: (e: any) => void;
  type?: string;
}
export interface BodyType {
  name?: string;
  chapterId?: number;
  isGPT?: boolean;
  isUsedForBMC?: boolean;
  isSummary?: boolean;
  isUsedForSummary?: number;
  minNoOfLines?: string;
  minNoOfParas?: string;
  description?: string;
}
const TopicUpdateModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const chapter = useSelector((state: RootState) => state?.chapter);
  const topic = useSelector((state: RootState) => state?.topic);
  const allTopics = useSelector((state: RootState) => state?.allTopics);

  function onSuccess() {
    close(null);
    getTopicAdminApi(dispatch, { page: 1, limit: 10 }, null);
    form.resetFields();
  }

  useEffect(() => {
    if (open) {
      getAllChapterApi(dispatch);
    }
  }, [open]);

  useEffect(() => {
    if (type) {
      form.setFieldsValue(open);
    }
  }, [open]);

  function onFinish(values: BodyType) {
    updateTopicApi(dispatch, values, Number(open.id), onSuccess);
  }
  return (
    <Modal
      width={"600px"}
      title={<h3 className="text-[18px] font-semibold">Update Topic</h3>}
      open={open}
      onCancel={() => close(null)}
      footer={null}
      centered={true}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16}>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Name</InputLabel>
            <TextInput
              name={"title"}
              className="w-full min-h-[48px]"
              rules={[{ required: false, message: "Name is required" }]}
            />
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Topic No.</InputLabel>
            <TextInput
              name="topicNo"
              rules={[{ required: true, message: "Topic No is required" }]}
              size="large"
              className="rounded-[8px]"
              isNumber
            />
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Select Chapter</InputLabel>
            <Form.Item
              name={"chapterId"}
              className="w-full min-h-[48px]"
              rules={[
                {
                  required: false,
                  message: "required",
                },
              ]}
            >
              {chapter?.data?.data.length > 0 && (
                <Select className="rounded-[8px]" size="large">
                  {chapter?.data?.data?.map((opt: any, i: number) => (
                    <Select.Option key={i} value={opt?.id}>
                      {opt?.title}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="isGPT" valuePropName="checked">
              <Checkbox name="isGPT">GPT</Checkbox>
            </Form.Item>
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="isUsedForBMC" valuePropName="checked">
              <Checkbox name="isUsedForBMC">
                BMC (Use for AI business generated model)
              </Checkbox>
            </Form.Item>
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="isSummary" valuePropName="checked">
              <Checkbox name="isSummary">Summary</Checkbox>
            </Form.Item>
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>
              Select which ES topic to save this topic's summary in
            </InputLabel>
            <Form.Item
              name={"isUsedForSummary"}
              className="w-full min-h-[48px]"
              rules={[
                {
                  required: false,
                  message: "required",
                },
              ]}
            >
              {allTopics?.data?.data.length > 0 && (
                <Select className="rounded-[8px]" size="large">
                  {allTopics?.data?.data
                    ?.filter((item: any) => item.isSummary)
                    .map((opt: any, i: number) => (
                      <Select.Option key={i} value={opt?.id}>
                        {opt?.title}
                      </Select.Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>No Of Lines</InputLabel>
            <TextInput
              isNumber
              name="minNoOfLines"
              className="w-full min-h-[48px]"
              rules={[{ required: false, message: "No Of Lines is required" }]}
            />
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>No Of Paras</InputLabel>
            <TextInput
              isNumber
              name="minNoOfParas"
              className="w-full min-h-[48px]"
              rules={[{ required: false, message: "No Of Paras is required" }]}
            />
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Description</InputLabel>
            <Form.Item
              name="description"
              className="mt-[10px]"
              rules={[
                {
                  required: false,
                  message: "Description is required",
                },
              ]}
            >
              <TextArea
                className="rounded-[8px]"
                autoSize={{ minRows: 4, maxRows: 5 }}
                style={{ padding: "10px, 14px, 10px, 14px" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end mt-[30px] gap-2">
          <Button
            size="middle"
            key="1"
            loading={topic.loading}
            type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            htmlType="submit"
          >
            Update
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default TopicUpdateModal;
