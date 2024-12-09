import TextArea from "antd/es/input/TextArea";
import { Button, Modal, Form, Row, Col, Select, Checkbox } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import type { SelectProps } from "antd";
import { InputLabel, TextInput } from "../../../../components";
import { useCallback, useEffect, useState } from "react";
import { getAllTopicApi } from "../../../../services/api/Dashboard/Topic";
import {
  getAllQuestionApi,
  getQuestionAdminApi,
  updateQuestionApi,
} from "../../../../services/api/Dashboard/Question";
interface Props {
  open: any;
  close: (e: any) => void;
  type?: string;
  pageLimit: any;
  selectedTopicId: any;
}

interface Props {
  open: any;
  close: (e: any) => void;
  type?: string;
}

const options: SelectProps["options"] = [];
const QuestionUpdateModal = ({
  open,
  close,
  type,
  pageLimit,
  selectedTopicId,
}: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const [isTabular, setIsTabular] = useState(form.getFieldValue("isTabular"));
  const [isLinked, setIsLinked] = useState(form.getFieldValue("isLinked"));
  const [isMcq, setIsMcq] = useState(form.getFieldValue("isMcq"));
  const [requirement, setRequirement] = useState(true);
  const [bpElementDisabled, setBpElementDisabled] = useState(false);
  const [optionsBpElementDisabled, setOptionsBpElementDisabled] = useState(false);
  const [isAutoSuggestion, setisAutoSuggestion] = useState(false);
  const [autoFill, setIsAutoFill] = useState(form.getFieldValue("autoFill"));
  const [isNumber, setIsNumber] = useState(false);
  const [filteredParentQuestion, setFilteredParentQuestion] = useState([]);
  const topic = useSelector((state: RootState) => state?.allTopics);
  const getAllQuestion = useSelector(
    (state: RootState) => state?.getAllQuestion
  );
  const question = useSelector((state: RootState) => state?.question);
  function onFinish(values: any) {
    const body = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined)
    );
    updateQuestionApi(dispatch, body, Number(open.id), onSuccess);
  }

  function onSuccess() {
    close(false);
    getQuestionAdminApi(
      dispatch,
      {
        page: pageLimit.page,
        limit: pageLimit.limit,
      },
      selectedTopicId
    );

    form.resetFields();
  }

  useEffect(() => {
    if (open) {
      const { mcqAnswers, tableRows, tableColumns, ...body } = open;
      const mcqAnswerArray: string[] = [];
      for (let i = 0; i < mcqAnswers?.length; i++) {
        const element = mcqAnswers[i];
        mcqAnswerArray.push(element?.answer);
      }
      const tableRowsArray: any[] = []
      for (let i = 0; i < tableRows?.length; i++) {
        const element = tableRows[i];
        tableRowsArray.push(element?.value);
      }
      const tableColumnsArray: any[] = []
      for (let i = 0; i < tableColumns?.length; i++) {
        const element = tableColumns[i];
        tableColumnsArray.push(element?.value);
      }

      setIsLinked(body?.isLinked);
      setIsAutoFill(body?.autoFill);
      setIsMcq(body?.isMCQ);
      setIsTabular(body?.isTabular);
      form.setFieldsValue(body);
      form.setFieldsValue({ mcqAnswers: mcqAnswerArray });
      form.setFieldsValue({ rowValues: tableRowsArray })
      form.setFieldsValue({ columnValues: tableColumnsArray })
      if (type) {
        form.setFieldsValue({});
        if (open) {
          getAllTopicApi(dispatch);
          getAllQuestionApi(dispatch);
        }
      }
    }
  }, [open]);
  const onSearch = (value: string) => { };

  const onChange = (value: string) => { };

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

  function handleValuesChange(changedValues: any, allValues: any) {
    if (changedValues.topicId) {
      const result = handleFilterParentQuestion(getAllQuestion);
      setFilteredParentQuestion(result);
    }
    if (changedValues.parentQuestionId) {
      setOptionsBpElementDisabled(!changedValues.OptionsBPElement);
      setBpElementDisabled(!changedValues.bpElement);
      form.setFieldsValue({ bpElement: false });
      form.setFieldsValue({ OptionsBPElement: false });
    } else if (changedValues.bpElement) {
      setOptionsBpElementDisabled(!!changedValues.bpElement);
    } else if (changedValues.OptionsBPElement) {
      setBpElementDisabled(!!changedValues.OptionsBPElement);
    } else if (!form.getFieldValue("parentQuestionId")) {
      setOptionsBpElementDisabled(false);
      setBpElementDisabled(false);
    } else if (changedValues.autoSuggestion) {
      setRequirement(false);
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
  return (
    <Modal
      width={"600px"}
      title={<h3 className="text-[18px] font-semibold">Update Question</h3>}
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form
        onFinish={onFinish}
        autoComplete="off"
        form={form}
        onValuesChange={handleValuesChange}
      >
        <Row gutter={16}>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Select Topic</InputLabel>
            <Form.Item
              name={"topicId"}
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
                showSearch
                placeholder="Search topics"
                optionFilterProp="children"
                onSearch={onSearch}
                onChange={onChange}
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
              size="large"
              rules={[{ required: true, message: "Question No is required" }]}
              className="rounded-[8px]"
              isNumber
            />
          </Col>
          <Col sm={24} md={24} lg={24} xl={24}>
            <div className="flex justify-between">
              <Form.Item name="isLinked" valuePropName="checked">
                <Checkbox
                  name="isLinked"
                  onChange={(e) => setIsLinked(e.target.checked)}
                >
                  Linked
                </Checkbox>
              </Form.Item>
              <Form.Item name="isMCQ" valuePropName="checked">
                <Checkbox
                  name="isMCQ"
                  onChange={(e) => setIsMcq(e.target.checked)}
                  disabled={form.getFieldValue("isTabular")}
                >
                  MCQ
                </Checkbox>
              </Form.Item>
              <Form.Item name="isTabular" valuePropName="checked">
                <Checkbox
                  name="isTabular"
                  onChange={(e) => setIsTabular(e.target.checked)}
                  disabled={form.getFieldValue("isMCQ")}
                >
                  Tabular
                </Checkbox>
              </Form.Item>
              <Form.Item name="autoSuggestion" valuePropName="checked">
                <Checkbox
                  name="autoSuggestion"
                  disabled={isNumber}
                  onChange={(e) => {
                    const checked = e.target.checked;

                    if (checked) {
                      setisAutoSuggestion(true);
                    } else {
                      setisAutoSuggestion(false);
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
                    required: false,
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
                  onSearch={onSearch}
                  onChange={onChange}
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
            <InputLabel>Select Options Bp Element</InputLabel>
            <Form.Item
              name={"optionsBPElement"}
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
                  // defaultValue={[]}
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
                  disabled={!topic?.data?.data?.length}
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
              rules={[
                {
                  required: true,
                  message: "Question is required",
                },
              ]}
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
            key="1"
            loading={question?.loading}
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

export default QuestionUpdateModal;
