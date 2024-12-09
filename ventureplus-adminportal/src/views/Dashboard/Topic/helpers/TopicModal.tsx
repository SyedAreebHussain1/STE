import { Button, Checkbox, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, TextInput } from "../../../../components";
import { getAllChapterApi } from "../../../../services/api/Dashboard/Chatper";
import {
  getTopicAdminApi,
  postTopicApi,
} from "../../../../services/api/Dashboard/Topic";
import { AppDispatch, RootState } from "../../../../store/store";
interface Props {
  open: boolean;
  close: (e: boolean) => void;
  type?: string;
}
export interface BodyType {
  name?: string;
  chapterId?: string | number;
  isGPT?: boolean;
  isUsedForBMC?: boolean;
  isSummary?: boolean;
  isUsedForSummary?: number;
  minNoOfLines?: string | number;
  minNoOfParas?: string | number;
  description?: string;
}
const TopicModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const [isUsedforSummaryDisabled, setIsUsedforSummaryDisabled] =
    useState(false);
  const chapter = useSelector((state: RootState) => state?.chapter);
  const topic = useSelector((state: RootState) => state?.topic);
  const allTopics = useSelector((state: RootState) => state?.allTopics);

  function onFinish(values: BodyType) {
    postTopicApi(dispatch, values, onSuccess);
  }

  function onSuccess() {
    close(false);
    getTopicAdminApi(dispatch, { page: 1, limit: 10 }, null);
    form.resetFields();
  }
  useEffect(() => {
    if (open) {
      getAllChapterApi(dispatch);
    }
  }, [open]);

  const onSearch = (value: string) => {};

  const onChange = (value: string) => {};

  return (
    <Modal
      width={"600px"}
      title={
        <h3 className="text-[18px] font-semibold">
          {type ? "Update" : "Add"} Topic
        </h3>
      }
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16}>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Name</InputLabel>
            <TextInput
              name="name"
              className="w-full min-h-[48px]"
              rules={[{ required: true, message: "Name is required" }]}
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
                  required: true,
                  message: "required",
                },
              ]}
            >
              <Select
                className="rounded-[8px]"
                size="large"
                allowClear
                showSearch
                placeholder="Search parent question"
                optionFilterProp="children"
                onSearch={onSearch}
                onChange={onChange}
                filterOption={(input, option) =>
                  String(option?.children)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                {chapter?.data?.data?.map((opt: any, i: number) => (
                  <Select.Option key={i} value={opt?.id}>
                    {opt?.title}
                  </Select.Option>
                ))}
              </Select>
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
              <Checkbox
                name="isSummary"
                onChange={(e: any) => {
                  if (e.target.checked) {
                    setIsUsedforSummaryDisabled(true);
                  } else {
                    setIsUsedforSummaryDisabled(false);
                  }
                }}
              >
                Summary
              </Checkbox>
            </Form.Item>
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="isAppendix" valuePropName="checked">
              <Checkbox name="isAppendix">Appendix</Checkbox>
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
                <Select
                  className="rounded-[8px]"
                  size="large"
                  disabled={isUsedforSummaryDisabled}
                >
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
              rules={[{ required: true, message: "No Of Lines is required" }]}
            />
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>No Of Paras</InputLabel>
            <TextInput
              isNumber
              name="minNoOfParas"
              className="w-full min-h-[48px]"
              rules={[{ required: true, message: "No Of Paras is required" }]}
            />
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Description</InputLabel>
            <Form.Item
              name="description"
              className="mt-[10px]"
              rules={[
                {
                  required: true,
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
            {type ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default TopicModal;
