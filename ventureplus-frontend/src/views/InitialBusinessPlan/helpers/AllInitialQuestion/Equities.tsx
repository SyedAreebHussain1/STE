import React, { useEffect, useState } from "react";
import { InitialQuestionsContainer } from "./../InitialQuestionsContainer";
import { Button, Form, } from "antd";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../components/inputs/TextInput";
import FinalStageModal from "./../AllInitialQuestion/FinalStageModal";
import objectsGroup from "../../../../assets/question/Objects.png"
import { createEquityApi } from "../../../../services/api/BusinessPlanSetup/Equity";
const Equities = ({ setCurrentComponent }: any) => {
    const [state, setState] = useState<any>({});
    const dispatch: AppDispatch = useDispatch()
    const currentSelectedBusinessPlan = useSelector(
        (state: RootState) => state.currentSelectedBusinessPlan
    );
    const createEquity = useSelector(
        (state: RootState) => state.createEquity
    );
    useEffect(() => {
        setCurrent(0)
    }, [])
    const steps = [
        {
            step: <div>
                <div>
                    <span className="font-semibold text-[#212838] text-[2.375rem]">
                        1. What is the name of the equity holder or entity?
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
                        2. What percentage of equity does this entity hold?
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <TextInput
                            name="share"
                            placeholder="Share"
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
                            onChange={(e) => {
                                if (Number(e.target.value) >= 100) {
                                    setState({ ...state, share: 100 })
                                } else if (
                                    Number(e.target.value) < 100 &&
                                    Number(e.target.value) > 0
                                ) {
                                    setState({ ...state, share: Number(e.target.value) })
                                }
                            }}
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
        }
    ];
    const [current, setCurrent] = useState(0);
    const [toggleModal, setToggleModal] = useState(false);
    const [form] = Form.useForm();
    function onFinish(values: any) {
        const data = {
            ...state,
            share: Number(state.share) || form.getFieldValue("share"),
            "businessPlanId":
                currentSelectedBusinessPlan?.businessPlan?.id
        };
        if (current == 1) {
            createEquityApi(dispatch, data, () => { }, onSuccess)
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
                    bpType={"Equities"}
                    opt={"No"}
                    yes={() => {
                        setCurrent(0)
                        form.resetFields()
                        setToggleModal(false)
                    }}
                    no={() => [setCurrentComponent(3), setCurrent(0)]}
                />
            )}
            <Form
                onFinish={(event: any) => onFinish(event)}
                name="equities"
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
                                    Equities
                                </h1>
                            </div>
                            <div>
                                <img src={objectsGroup} alt="" />
                            </div>
                        </div>
                    </div>
                    <InitialQuestionsContainer>
                        <div>{steps[current].step}</div>
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
                                loading={createEquity?.loading}
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

export default Equities;
