import { useCallback, useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Button, Modal, Form, Row, Col, Select, Checkbox } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import type { SelectProps } from "antd";
import { InputLabel, TextInput } from "../../../../components";
import { getAllTopicApi } from "../../../../services/api/Dashboard/Topic";
import {
  getAllQuestionApi,
  getQuestionAdminApi,
  postQuestionApi,
} from "../../../../services/api/Dashboard/Question";

interface Props {
  open: any;
  close: (e: any) => void;
  type?: string;
}

const options: SelectProps["options"] = [];

const QuestionModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const [isTabular, setIsTabular] = useState(form.getFieldValue("isTabular"));
  const [isLinked, setIsLinked] = useState(form.getFieldValue("isLinked"));
  const [isMcq, setIsMcq] = useState(form.getFieldValue("isMcq"));
  const [requirement, setRequirement] = useState(true);
  const [bpElementDisabled, setBpElementDisabled] = useState(false);
  const [optionsBpElementDisabled, setOptionsBpElementDisabled] =
    useState(false);
  const [isAutoSuggestion, setisAutoSuggestion] = useState(false);
  const [autoFill, setIsAutoFill] = useState(form.getFieldValue("autoFill"));
  const [isNumber, setIsNumber] = useState(false);
  const [parentQuestionDisabled, setParentQuestionDisabled] = useState(false);
  const [filteredParentQuestion, setFilteredParentQuestion] = useState([]);
  const topic = useSelector((state: RootState) => state?.allTopics);
  const getAllQuestion = useSelector(
    (state: RootState) => state?.getAllQuestion
  );
  const question = useSelector((state: RootState) => state?.question);

  const handleFilterParentQuestion = useCallback(
    (questions: any) => {
      if (!questions?.data?.data) return [];

      const topicId = form.getFieldValue("topicId");
      return questions.data.data.filter((item: any) => {
        if (topicId) {
          return (
            item?.OptionsBPElement == null &&
            item?.topicId === parseInt(topicId)
          );
        }
        return item?.OptionsBPElement == null;
      });
    },
    [form]
  );

  function onFinish(values: any) {
    const body = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );
    postQuestionApi(dispatch, body, onSuccess);
  }

  function onSuccess() {
    close(false);
    getQuestionAdminApi(dispatch, { page: 1, limit: 10 });
    form.resetFields();
  }

  function handleValuesChange(changedValues: any, allValues: any) {
    if (changedValues.topicId) {
      const result = handleFilterParentQuestion(getAllQuestion);
      setFilteredParentQuestion(result);
    }
    if (changedValues.parentQuestionId) {
      setOptionsBpElementDisabled(!changedValues.optionsBPElement);
      setBpElementDisabled(!changedValues.bpElement);
    } else if (changedValues.bpElement) {
      setOptionsBpElementDisabled(!!changedValues.bpElement);
    } else if (changedValues.optionsBPElement) {
      setBpElementDisabled(!!changedValues.optionsBPElement);
      form.setFieldsValue({ autoSuggestion: false });
      setRequirement(false);
    } else if (!form.getFieldValue("parentQuestionId")) {
      setOptionsBpElementDisabled(false);
      setBpElementDisabled(false);
    }

    if (changedValues.mcqAnswers) {
      const mcqAnswersLength = changedValues.mcqAnswers?.length || 0;
      if (mcqAnswersLength < 2) {
        form.setFieldsValue({ autoSuggestion: true });
      } else {
        form.setFieldsValue({ autoSuggestion: false });
      }
    }
  }

  useEffect(() => {
    if (open) {
      getAllTopicApi(dispatch);
      getAllQuestionApi(dispatch);
    }
  }, [open]);

  return (
    <Modal
      width={"600px"}
      title={<h3 className="text-[18px] font-semibold">Add Question</h3>}
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form
        onFinish={onFinish}
        onValuesChange={handleValuesChange}
        autoComplete="off"
        form={form}
      >
        <Row gutter={16}>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Select Topic</InputLabel>
            <Form.Item
              name={"topicId"}
              className="w-full min-h-[48px]"
              rules={[{ required: true, message: "required" }]}
            >
              <Select
                className="rounded-[8px]"
                size="large"
                showSearch
                placeholder="Search topics"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  String(option?.children)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                disabled={!topic?.data?.data?.length}
              >
                {topic?.data?.data?.length > 0 &&
                  topic?.data?.data?.map((opt: any, i: number) => (
                    <Select.Option key={i} value={opt?.id}>
                      {opt?.title}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Question No</InputLabel>
            <TextInput
              name="questionNo"
              rules={[{ required: true, message: "Question No is required" }]}
              size="large"
              className="rounded-[8px]"
              isNumber
            />
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <div className="flex justify-between">
              <Form.Item name="isLinked" valuePropName="checked">
                <Checkbox onChange={(e) => setIsLinked(e.target.checked)}>
                  Linked
                </Checkbox>
              </Form.Item>
              <Form.Item name="isMCQ" valuePropName="checked">
                <Checkbox
                  onChange={(e) => setIsMcq(e.target.checked)}
                  disabled={form.getFieldValue("isTabular")}
                >
                  MCQ
                </Checkbox>
              </Form.Item>
              <Form.Item name="isTabular" valuePropName="checked">
                <Checkbox
                  onChange={(e) => setIsTabular(e.target.checked)}
                  disabled={form.getFieldValue("isMCQ")}
                >
                  Tabular
                </Checkbox>
              </Form.Item>

              <Form.Item name="autoSuggestion" valuePropName="checked">
                <Checkbox
                  disabled={isNumber}
                  onChange={(e) => {
                    const checked = e.target.checked;

                    form.setFieldsValue({ autoSuggestion: checked });
                    if (checked) {
                      setisAutoSuggestion(true);
                      form.resetFields(["mcqAnswers"]);
                      setRequirement(false);
                    } else {
                      setisAutoSuggestion(false);
                      if (
                        form.getFieldValue("optionsBPElement") !== null &&
                        form.getFieldValue("optionsBPElement") !== undefined
                      ) {
                        setRequirement(false);
                      } else {
                        setRequirement(true);
                      }
                    }
                  }}
                >
                  Auto Suggestion
                </Checkbox>
              </Form.Item>
              <Form.Item name="isNumber" valuePropName="checked">
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setIsNumber(true);
                    } else {
                      setIsNumber(false);
                    }
                  }}
                  disabled={isAutoSuggestion}
                >
                  Number
                </Checkbox>
              </Form.Item>
              <Form.Item name="autoFill" valuePropName="checked">
                <Checkbox
                  disabled={!isTabular}
                  onChange={(e) => {
                    const checked = e.target.checked;

                    form.setFieldsValue({ autoFill: checked });
                    if (checked) {
                      setIsAutoFill(true);
                      form.resetFields(["mcqAnswers"]);
                      setRequirement(false);
                    } else {
                      setIsAutoFill(false);
                      if (
                        form.getFieldValue("optionsBPElement") !== null &&
                        form.getFieldValue("optionsBPElement") !== undefined
                      ) {
                        setRequirement(false);
                      } else {
                        setRequirement(true);
                      }
                    }
                  }}
                >
                  Auto Fill
                </Checkbox>
              </Form.Item>
            </div>
          </Col>
          {isMcq && (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Select MCQ Type</InputLabel>
              <Form.Item
                name={"mcqType"}
                className="w-full min-h-[48px]"
                rules={[
                  {
                    required: false,
                    message: "required",
                  },
                ]}
              >
                <Select className="rounded-[8px]" size="large" allowClear>
                  {["Single", "Multiple"].map((opt: any, i: number) => (
                    <Select.Option key={i} value={opt}>
                      {opt}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          )}

          {isMcq && (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Enter MCQ Answers</InputLabel>
              <Form.Item
                name={"mcqAnswers"}
                className="w-full min-h-[48px] rounded-[8px]"
                rules={[
                  {
                    required: requirement,
                    message:
                      "This field is required when autoSuggestion is false.",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  size="large"
                  className="w-full min-h-[48px]"
                  defaultValue={[]}
                  style={{ width: "100%" }}
                  options={options}
                />
              </Form.Item>
            </Col>
          )}
          {!isLinked && (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Select Parent Question</InputLabel>
              <Form.Item
                name={"parentQuestionId"}
                className="w-full min-h-[48px]"
                rules={[
                  {
                    required: false,
                    message: "required",
                  },
                ]}
              >
                <Select
                  className="rounded-[8px]"
                  size="large"
                  showSearch
                  placeholder="Search Parent Question"
                  optionFilterProp="children"
                  allowClear
                  filterOption={(input, option) =>
                    String(option?.children)
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  disabled={!topic?.data?.data?.length}
                >
                  {filteredParentQuestion?.length > 0 &&
                    filteredParentQuestion?.map((opt: any, i: number) => (
                      <Select.Option key={i} value={opt?.id}>
                        {opt?.question}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
          )}

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Select Bp Element</InputLabel>
            <Form.Item
              name={"bpElement"}
              className="w-full min-h-[48px]"
              rules={[{ required: false, message: "required" }]}
            >
              <Select
                className="rounded-[8px]"
                size="large"
                allowClear
                disabled={bpElementDisabled}
              >
                {["Product", "Staffing", "Equity", "Services"].map(
                  (opt: any, i: number) => (
                    <Select.Option key={i} value={opt}>
                      {opt}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Options Bp Element</InputLabel>
            <Form.Item
              name={"optionsBPElement"}
              className="w-full min-h-[48px]"
              rules={[{ required: false, message: "required" }]}
            >
              <Select
                className="rounded-[8px]"
                size="large"
                allowClear
                disabled={optionsBpElementDisabled}
              >
                {[
                  "Product",
                  "Staffing",
                  "Equity",
                  "Services",
                  "ProductAndService",
                ].map((opt: any, i: number) => (
                  <Select.Option key={i} value={opt}>
                    {opt}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          {isTabular && (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Select Row</InputLabel>
              <Form.Item
                name={"rowValues"}
                className="w-full min-h-[48px] rounded-[8px]"
                rules={[
                  {
                    required: isTabular ? true : false,
                    message: "required",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  size="large"
                  className="w-full min-h-[48px]"
                  defaultValue={[]}
                  style={{ width: "100%" }}
                  options={options}
                />
              </Form.Item>
            </Col>
          )}
          {isTabular && (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Select Column</InputLabel>
              <Form.Item
                name={"columnValues"}
                className="w-full min-h-[48px] rounded-[8px]"
                rules={[
                  {
                    required: isTabular ? true : false,
                    message: "required",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  size="large"
                  className="w-full min-h-[48px]"
                  defaultValue={[]}
                  style={{ width: "100%" }}
                  options={options}
                />
              </Form.Item>
            </Col>
          )}
          {isLinked ? (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Select Linked Question</InputLabel>
              <Form.Item
                name={"linkedQuestionId"}
                className="w-full min-h-[48px]"
                rules={[
                  {
                    required: false,
                    message: "required",
                  },
                ]}
              >
                <Select
                  className="rounded-[8px]"
                  size="large"
                  showSearch
                  placeholder="Select Linked Question"
                  optionFilterProp="children"
                  allowClear
                  filterOption={(input, option) =>
                    String(option?.children)
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  disabled={
                    !topic?.data?.data?.length || parentQuestionDisabled
                  }
                >
                  {getAllQuestion?.data?.data?.length > 0 &&
                    getAllQuestion?.data?.data?.map((opt: any, i: number) => (
                      <Select.Option key={i} value={opt?.id}>
                        {opt?.question}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
          ) : (
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Preferred Answer</InputLabel>
              <TextInput
                name="preferredAnswer"
                className="w-full min-h-[48px] dark-input"
                rules={[{ required: false }]}
              />
            </Col>
          )}

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Question</InputLabel>
            <Form.Item
              name="question"
              className="mt-[10px]"
              rules={[{ required: true, message: "Question is required" }]}
            >
              <TextArea
                className="rounded-[8px]"
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ padding: "10px, 14px, 10px, 14px" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end mt-[30px] gap-2">
          <Button
            size="middle"
            loading={question.loading}
            type="primary"
            htmlType="submit"
            className="bg-[#016A70] hover:bg-[#d93682] text-[15px] font-semibold"
          >
            Add Question
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default QuestionModal;
