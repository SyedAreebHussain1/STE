import React, { useEffect, useState } from "react";
import { InitialQuestionsContainer } from "./../InitialQuestionsContainer";
import { Button, Form } from "antd";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../../components/inputs/TextInput";
import FinalStageModal from "./../AllInitialQuestion/FinalStageModal";
import objectsGroup from "../../../../assets/question/Objects.png"
import { createStaffApi } from "../../../../services/api/BusinessPlanSetup/Staff";
const Staffings = ({ setCurrentComponent }: any) => {
    const [state, setState] = useState<any>({});
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const currentSelectedBusinessPlan = useSelector(
        (state: RootState) => state.currentSelectedBusinessPlan
    );
    const createStaff = useSelector(
        (state: RootState) => state.createStaff
    );
    const getBusinessPlanInfo = useSelector(
        (state: RootState) => state.getBusinessPlanInfo
    );

    useEffect(() => {
        setCurrent(0)
    }, [])
    const steps = [
        {
            step: <div>
                <div>
                    <span className="font-semibold text-[#212838] text-[2.375rem]">
                        1. What is the name of the staffing department or team?
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <TextInput
                            name="name"
                            placeholder="Type your answer here.."
                            className="w-full h-[50px]"
                            onChange={(e) => setState({ ...state, name: e.target.value })}
                            classNameFormItem={"m-0 p-0 mb-1"}
                            rules={[
                                {
                                    required: true,
                                    message: "This field is required",
                                },
                            ]}
                        />
                    </span>
                </div>
            </div>,
        },
        {
            step: <div>
                <div>
                    <span className="font-semibold text-[#212838] text-[2.375rem]">
                        2. How many staff members are in this department/team?
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <TextInput
                            name="noOfStaff"
                            placeholder="No Of Staff"
                            className="w-full h-[50px]"
                            classNameFormItem={"m-0 p-0 mb-1"}
                            maxLength={9}
                            onKeyDown={(e: any) => {
                                const regex = /[0-9]/;
                                if (e.code === "Space") {
                                    e.preventDefault();

                                    return;
                                }
                                const allowedKeys = [
                                    "Backspace",
                                    "Shift",
                                    "ArrowLeft",
                                    "ArrowRight",
                                    "ArrowUp",
                                    "ArrowDown",
                                    "Tab",
                                ];
                                if (allowedKeys.includes(e.key)) {
                                    return;
                                }
                                if (!regex.test(e.key)) {
                                    e.preventDefault();
                                    return;
                                }
                            }}
                            onChange={(e) => setState({ ...state, costPrice: e.target.value })}
                            rules={[
                                {
                                    required: true,
                                    message: "This field is required",
                                },
                            ]}
                        />
                    </span>
                </div>
            </div>,
        },
        {
            step: <div>
                <div>
                    <span className="font-semibold text-[#212838] text-[2.375rem]">
                        3. What is the average salary of the staff members? (per year)
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <TextInput
                            name="avgSalary"
                            placeholder="Avg Salary"
                            className="w-full h-[50px]"
                            classNameFormItem={"m-0 p-0 mb-1"}
                            maxLength={9}
                            onKeyDown={(e: any) => {
                                const regex = /[0-9]/;
                                if (e.code === "Space") {
                                    e.preventDefault();

                                    return;
                                }
                                const allowedKeys = [
                                    "Backspace",
                                    "Shift",
                                    "ArrowLeft",
                                    "ArrowRight",
                                    "ArrowUp",
                                    "ArrowDown",
                                    "Tab",
                                ];
                                if (allowedKeys.includes(e.key)) {
                                    return;
                                }
                                if (!regex.test(e.key)) {
                                    e.preventDefault();
                                    return;
                                }
                            }}
                            onChange={(e) => setState({ ...state, costPrice: e.target.value })}
                            rules={[
                                {
                                    required: true,
                                    message: "This field is required",
                                },
                            ]}
                        />
                    </span>
                </div>
            </div>,
        },

    ];
    const [current, setCurrent] = useState(0);
    const [toggleModal, setToggleModal] = useState(false);
    const [form] = Form.useForm();

    function onFinish(values: any) {
        const data = {
            ...state,
            avgSalary: Number(state?.avgSalary) || Number(form.getFieldValue("avgSalary")),
            noOfStaff: Number(state?.noOfStaff) || Number(form.getFieldValue("noOfStaff")),
            "businessPlanId":
                currentSelectedBusinessPlan?.businessPlan?.id
        };
        if (current == 2) {
            createStaffApi(dispatch, data, () => { }, onSuccess)
            return
        } else {
            next()
        }
    }
    function onSuccess() {
        setToggleModal(true);
        form.resetFields()
        setState({})
        setCurrent(0)
    }
    function next() {
        setCurrent((prevCurrent) => prevCurrent + 1);
    }
    function prev() {
        setCurrent((prevCurrent) => prevCurrent - 1);
    }
    return (
        <React.Fragment>
            {toggleModal && (
                <FinalStageModal
                    toggleOpen={setToggleModal}
                    open={toggleModal}
                    bpType={"staffing"}
                    opt={"Continue to business plan"}
                    yes={() => {
                        setCurrent(0)
                        form.resetFields()
                        setToggleModal(false)
                    }}
                    no={() => navigate(`/questions/${Number(getBusinessPlanInfo?.data?.chapters?.[0]?.topics?.[0]?.id)}`)}
                />
            )}
            <Form
                onFinish={(event: any) => onFinish(event)}
                name="questionAnswer"
                form={form}
                className=" !w-full"
                autoComplete="off"
                initialValues={{ remember: true }}
            >
                <div className="bg-[#f0f6f6] !w-full ">
                    <div className="mb-10 ml-3 mr-3 p-3">
                        <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
                            <div className="p-5">
                                <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                                    Staffing
                                </h1>
                            </div>
                            <div>
                                <img src={objectsGroup} alt="" />
                            </div>
                        </div>
                    </div>
                    <InitialQuestionsContainer>
                        <div >{steps[current].step}</div>
                    </InitialQuestionsContainer>
                    <div className="w-full flex justify-between p-8">
                        <div>
                            {current !== 0 && (
                                <Button
                                    onClick={prev}
                                    disabled={current === 0}
                                    className="bg-[#FFFFFF] text-[#4A5366] font-semibold"
                                    shape="round"
                                    size="large"
                                >
                                    <span className="text-xl">&#x2190;</span>{" "}
                                    <span>
                                        <h5>Previous</h5>
                                    </span>
                                </Button>
                            )}
                        </div>
                        <div>
                            <Button
                                className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                                shape="round"
                                size="large"
                                htmlType="submit"
                                loading={createStaff?.loading}
                            >
                                <span>Next</span>
                                <span className="text-xl">&#x2192;</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </React.Fragment>
    );
};

export default Staffings
