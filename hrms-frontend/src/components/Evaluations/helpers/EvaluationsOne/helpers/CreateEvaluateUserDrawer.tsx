import { CloseOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Col,
  Drawer,
  Form,
  Row,
  Select,
  Space
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  assignEvaluationFormApi,
  getDepartmentForEvaluationApi,
  getDepartmentUsersIdApi,
  getEvaluationsByDepartmenIdApi
} from "../../../../../redux/api/Evolution";
import { clearGetDepartmentUsersId } from "../../../../../redux/slices/evolution/getDepartmentUsersIdSlice";
import { clearGetEvaluationsByDepartmenId } from "../../../../../redux/slices/evolution/getEvaluationsByDepartmenIdSlice";
import { errorMessage } from "../../../../../utils/message";

interface CreateEvaluateUserDrawerProps {
  open?: boolean;
  onClose?: (() => void) | undefined;
}
const { Option } = Select;

const CreateEvaluateUserDrawer: React.FC<CreateEvaluateUserDrawerProps> = ({
  open,
  onClose,
}: CreateEvaluateUserDrawerProps) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [departmentId, setDepartmentId] = useState<number | null>(null);
  const [onChangeValue, setOnChangeValue] = useState<any>([]);
  const [evaluationForms, setEvaluationForms] = useState<any>([]);
  const getDepartmentForEvaluation = useSelector(
    (state: any) => state?.getDepartmentForEvaluation
  );
  const getDepartmentUsersId = useSelector(
    (state: any) => state?.getDepartmentUsersId
  );
  const getEvaluationsByDepartmenId = useSelector(
    (state: any) => state?.getEvaluationsByDepartmenId
  );
  const assignEvaluationForm = useSelector(
    (state: any) => state?.assignEvaluationForm
  );

  useEffect(() => {
    getDepartmentForEvaluationApi(dispatch);
  }, []);
  useEffect(() => {
    if (departmentId) {
      getDepartmentUsersIdApi(dispatch, departmentId);
      getEvaluationsByDepartmenIdApi(dispatch, departmentId);
    }
  }, [departmentId]);
  useEffect(() => {
    dispatch(clearGetDepartmentUsersId(""));
    dispatch(clearGetEvaluationsByDepartmenId(""));
  }, [open]);

  const handleCheckboxChange = (e: any, id: any) => {
    setOnChangeValue((prev: any) => {
      if (e.target.checked) {
        return [...prev, id];
      } else {
        return prev.filter((value: any) => value !== id);
      }
    });

    if (e.target.checked) {
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
  function onFinish(values: any) {
    if (evaluationForms.length > 0) {
      const body = {
        userId: values.userId,
        evaluationForms: evaluationForms,
      };

      assignEvaluationFormApi(dispatch, body, onClose);
    } else {
      errorMessage("Select one Evaluation");
    }
  }

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem]  font-bold">
            Create New Evaluation
          </span>
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
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Row gutter={10} className="p-4 w-full">
            <Col xs={24} lg={24} sm={24} md={24}>
              <div>
                <label className="text-[.975rem] font-medium text-[#667085] dark-input-label ">
                  Department
                </label>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please select your Department!",
                    },
                  ]}
                >
                  <Select
                    className="w-full min-h-[48px]"
                    placeholder="Select"
                    onChange={setDepartmentId}
                  >
                    {getDepartmentForEvaluation?.data?.map(
                      (item: any, i: number) => {
                        return (
                          <Option key={i} value={item?.id}>
                            {item?.title}
                          </Option>
                        );
                      }
                    )}
                  </Select>
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
                <Form.Item
                  name="userId"
                  rules={[
                    {
                      required: true,
                      message: "Please select your Company User!",
                    },
                  ]}
                >
                  <Select className="w-full min-h-[48px]" placeholder="Select">
                    {getDepartmentUsersId?.data?.map((item: any, i: number) => {
                      return (
                        <Option key={i} value={item?.id}>
                          {item?.companyUserProfile?.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
            </Col>

            <Col xs={24} lg={24} sm={24} md={24}>
              {getEvaluationsByDepartmenId?.data?.map((item: any, i: any) => {
                const { title, id }: any = item;
                const isChecked = onChangeValue.includes(id);

                return (
                  <div key={i}>
                    <div>
                      <Form.Item name={id}>
                        <Checkbox
                          onChange={(e) => handleCheckboxChange(e, id)}
                          checked={isChecked}
                        >
                          <p className="font-bold dark:text-white"> {title}</p>
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
                              name={`achievedScore${id}`}
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Achieved Score!",
                                },
                              ]}
                              isNumber
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
              })}
            </Col>
          </Row>
          <div className="flex gap-3 w-full  ">
            <RoundedButton
              onClick={onClose}
              title={"Cancel"}
              className="dark:bg-dark-primary dark:text-white w-full"
            />

            <RoundedButton
              title={"Create Evaluation"}
              loading={assignEvaluationForm.loading}
              className="dark:bg-white dark:text-dark-primary w-full  bg-light-primary text-white"
              htmlType="submit"
            />
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateEvaluateUserDrawer;
