import React, { useEffect, useState } from "react";
import {
  Drawer,
  Space,
  Col,
  Row,
  Button,
  Form,
  Select,
  Checkbox,
  Input,
  Spin,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import dayjs from "dayjs";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import {
  getAssignedEvaluationsForUserApi,
  getDepartmentForEvaluationApi,
  getEvaluationsByDepartmenIdApi,
  updateEvaluationsForUserApi,
} from "../../../../../redux/api/Evolution";
import { clearGetDepartmentUsersId } from "../../../../../redux/slices/evolution/getDepartmentUsersIdSlice";
import { clearGetEvaluationsByDepartmenId } from "../../../../../redux/slices/evolution/getEvaluationsByDepartmenIdSlice";
import { errorMessage } from "../../../../../utils/message";

interface UpdateEvaluatedDrawerProps {
  open?: boolean;
  onClose?: any;
  forUpdateUserId: any;
};
const { Option } = Select;

const UpdateEvaluatedDrawer: React.FC<UpdateEvaluatedDrawerProps> = ({
  open,
  onClose,
  forUpdateUserId,
}: UpdateEvaluatedDrawerProps) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [assignedEvaluationForms, setAssignedEvaluationForms] = useState<any>(
    []
  );
  const [onChangeValue, setOnChangeValue] = useState<any>([]);
  const [evaluationForms, setEvaluationForms] = useState<any>([]);
  const getEvaluationsByDepartmenId = useSelector(
    (state: any) => state?.getEvaluationsByDepartmenId
  );
  const updateEvaluationsForUser = useSelector(
    (state: any) => state?.updateEvaluationsForUser
  );

  useEffect(() => {
    if (forUpdateUserId?.companyDepartment?.id || open) {
      getEvaluationsByDepartmenIdApi(
        dispatch,
        forUpdateUserId?.companyDepartment?.id
      );
      getAssignedEvaluationsForUserApi(dispatch, forUpdateUserId?.id);
    }
  }, [forUpdateUserId?.companyDepartment?.id, open]);

  useEffect(() => {
    dispatch(clearGetDepartmentUsersId(""));
    dispatch(clearGetEvaluationsByDepartmenId(""));
    setAssignedEvaluationForms([]);
  }, [open]);

  const handleCheckboxChange = (e: any, id: any) => {
    setOnChangeValue((prev: any) => {
      if (e) {
        return [...prev, id];
      } else {
        return prev.filter((value: any) => value !== id);
      }
    });

    if (e) {
      setEvaluationForms((prev: any) => {
        return [
          ...prev,
          { id, targetScore: "", achievedScore: "", weightage: "" },
        ];
      });
    } else {
      setEvaluationForms((prev: any) =>
        prev.filter((form: any) => form.id !== id)
      );
    }
  };

  const handleInputChange = (e: any, field: any, id: any) => {
    setEvaluationForms((prev: any) =>
      prev.map((form: any) =>
        form.id === id ? { ...form, [field]: e.target.value } : form
      )
    );
  };

  useEffect(() => {
    if (forUpdateUserId) {
      form.setFieldsValue({
        department: forUpdateUserId?.companyDepartment?.title,
        userId: forUpdateUserId?.companyUserProfile?.name,
      });
    }
  }, [forUpdateUserId]);

  useEffect(() => {
    let array: any = [];
    if (
      forUpdateUserId?.assignedEvaluationForms?.length > 0 &&
      getEvaluationsByDepartmenId?.data
    ) {
      for (
        let i = 0;
        i < forUpdateUserId?.assignedEvaluationForms?.length;
        i++
      ) {
        const maping = getEvaluationsByDepartmenId?.data?.map((val: any) => {
          if (
            val?.id == forUpdateUserId?.assignedEvaluationForms[i]?.CEFormId
          ) {
            const newAssignedEvaluation = {
              title: val?.title,
              assignedEvaluationForms:
                forUpdateUserId?.assignedEvaluationForms?.[i],
            };
            return newAssignedEvaluation;
          }
        });
        array.push(
          ...array,
          maping?.filter((val: any) => val?.title)
        );
      }
    }
    if (array?.length > 0) {
      let uniq = [...new Set(array?.flat())];
      setAssignedEvaluationForms((prev: any) => {
        return [...prev, uniq];
      });
    }
  }, [forUpdateUserId, getEvaluationsByDepartmenId?.data]);

  useEffect(() => {
    if (assignedEvaluationForms.length > 0) {
      for (let index = 0; index < assignedEvaluationForms[0].length; index++) {
        const element = assignedEvaluationForms[0][index];
        handleCheckboxChange(true, element.assignedEvaluationForms.CEFormId);
        form.setFieldsValue({
          [element.title.replace(/ +/g, "") +
            element.assignedEvaluationForms.CEFormId]: true,
          ["achievedScore" + element.assignedEvaluationForms.CEFormId]:
            element.assignedEvaluationForms.achievedScore,
          ["targetScore" + element.assignedEvaluationForms.CEFormId]:
            element.assignedEvaluationForms.targetScore,
          ["weightage" + element.assignedEvaluationForms.CEFormId]:
            element.assignedEvaluationForms.weightage,
        });
      }
    }
  }, [assignedEvaluationForms]);
  function extractNumber(str: any) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }
  const transformData = (values: any) => {
    const evaluationForms = [];
    for (const key in values) {
      if (values[key] === true) {
        const id = extractNumber(key);
        if (id !== null) {
          evaluationForms.push({
            id,
            targetScore: values[`targetScore${id}`],
            achievedScore: values[`achievedScore${id}`],
            weightage: values[`weightage${id}`],
          });
        }
      }
    }
    return {
      evaluationForms,
    };
  };
  function onFinish(values: any) {
    const transformedData = transformData(values);
    if (evaluationForms.length > 0) {
      updateEvaluationsForUserApi(
        dispatch,
        transformedData,
        forUpdateUserId?.id,
        onClose
      );
    } else {
      errorMessage("Select one evaluation");
    }
  }

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem]  font-bold">Update Evaluation</span>
        }
        closable={false}
        placement="right"
        width={448}
        onClose={onClose}
        open={open}
        className="bg-[#fff]"
        styles={{
          body: {
            padding: 0,
          },
        }}
        extra={
          <Space>
            <CloseOutlined onClick={onClose} />
          </Space>
        }
      >
        <Form
          wrapperCol={{ span: 24 }}
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <Row gutter={10} className="p-4">
            <Col xs={24} lg={24} sm={24} md={24}>
              <div>
                <label className="text-[.975rem] font-medium text-[#667085] dark-input-label ">
                  Department
                </label>
                <Form.Item name="department">
                  <Select
                    className="w-full min-h-[48px]"
                    placeholder="Select"
                    disabled
                  ></Select>
                </Form.Item>
              </div>
            </Col>
            <Col xs={24} lg={24} sm={24} md={24}>
              <div>
                <label
                  htmlFor="userId"
                  className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                >
                  Select User
                </label>
                <Form.Item name="userId">
                  <Select
                    disabled
                    className="w-full min-h-[48px]"
                    placeholder="Select"
                  ></Select>
                </Form.Item>
              </div>
            </Col>
            <Col xs={24} lg={24} sm={24} md={24}>
              {getEvaluationsByDepartmenId?.loading ? (
                <div className="flex justify-center mt-1 mb-4">
                  <Spin size="large" />
                </div>
              ) : (
                getEvaluationsByDepartmenId?.data?.map((item: any, i: any) => {
                  const { title, id }: any = item;
                  const isChecked = onChangeValue.includes(id);
                  return (
                    <div key={i}>
                      <div>
                        <Form.Item
                          name={title.replace(/ +/g, "") + id}
                          valuePropName="checked"
                        >
                          <Checkbox
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, id)
                            }
                            checked={isChecked}
                          >
                            {title}
                          </Checkbox>
                        </Form.Item>
                      </div>
                      {isChecked && (
                        <Col xs={24} lg={24} sm={24} md={24}>
                          <div className="flex gap-1">
                            <div>
                              <p>Target Score</p>

                              <TextInput
                                name={`targetScore${id}`}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your Target Score!",
                                  },
                                ]}
                                isNumber
                                onChange={(e) =>
                                  handleInputChange(e, "targetScore", id)
                                }
                                className="w-full min-h-[48px]"
                              />
                            </div>
                            <div>
                              <p>Achieved Score</p>
                              <TextInput
                                isNumber
                                name={`achievedScore${id}`}
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please input your Achieved Score!",
                                  },
                                ]}
                                onChange={(e) =>
                                  handleInputChange(e, "achievedScore", id)
                                }
                                className="w-full min-h-[48px]"
                              />
                            </div>
                            <div>
                              <p>Weightage(%)</p>
                              <TextInput
                                name={`weightage${id}`}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your Weightage!",
                                  },
                                ]}
                                isNumber
                                onChange={(e) =>
                                  handleInputChange(e, "weightage", id)
                                }
                                className="w-full min-h-[48px]"
                              />
                            </div>
                          </div>
                        </Col>
                      )}
                    </div>
                  );
                })
              )}
            </Col>
            <Col xs={24} lg={24} sm={24} md={24}>
              <div className="flex justify-end  gap-3 w-full">
                <RoundedButton
                  onClick={onClose}
                  title={"Cancel"}
                  className="dark:bg-dark-primary dark:text-white w-full"
                />

                <RoundedButton
                  title={"Update Evaluation "}
                  loading={updateEvaluationsForUser?.loading}
                  className="dark:bg-white dark:text-dark-primary w-full  bg-light-primary text-white"
                  htmlType="submit"
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default UpdateEvaluatedDrawer;
