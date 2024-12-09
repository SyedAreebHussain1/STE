import React, { useEffect, useState } from "react";
import { InitialQuestionsContainer } from "./../InitialQuestionsContainer";
import { Button, Form } from "antd";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../components/inputs/TextInput";
import TextArea from "antd/es/input/TextArea";
import { useUpload } from "../../../../hooks/useUpload";
import Upload from "../../../../components/inputs/UpLoad";
import { deleteWhiteIcon, imagesIcon } from "../../../../assets/ProductPromotions";
import { createProductApi } from "../../../../services/api/BusinessPlanSetup/Products";
import { infoMessage } from "../../../../utils/message";
import FinalStageModal from "./../AllInitialQuestion/FinalStageModal";
import objectsGroup from "../../../../assets/question/Objects.png"
const Product = ({ setCurrentComponent }: any) => {
    const [
        images,
        setImages,
        imagesPreviews,
        deleteImages,
        resetImages,
        filesCount,
    ] = useUpload();
    const [state, setState] = useState({});
    const dispatch: AppDispatch = useDispatch()
    const currentSelectedBusinessPlan = useSelector(
        (state: RootState) => state.currentSelectedBusinessPlan
    );
    const createProduct = useSelector(
        (state: RootState) => state.createProduct
    );
    useEffect(() => {
        setCurrent(0)
    }, [])
    const steps = [
        {
            step: <div>
                <div>
                    <span className="font-semibold text-[#212838] text-[2.375rem]">
                        1. What is the name of the product?
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
                        2. What is the cost price of the product?
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <TextInput
                            name="costPrice"
                            placeholder="Cost Price"
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
                        3. What is the selling price of the product?
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <TextInput
                            required
                            name="sellingPrice"
                            placeholder="Selling Price"
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
                            onChange={(e) => setState({ ...state, sellingPrice: e.target.value })}
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
                        4. Can you describe the product?
                    </span>
                </div>
                <div className="mt-4">
                    <span>
                        <Form.Item name={"description"}
                            rules={[
                                {
                                    required: true,
                                    message: "This field is required",
                                },
                            ]}
                        >
                            <TextArea
                                placeholder="Type your answer here.."
                                autoSize={{ minRows: 6, maxRows: 5 }}
                                required
                                onChange={(e) => setState({ ...state, description: e.target.value })}
                                className="min-h-[48px] dark-input"
                            />
                        </Form.Item>
                    </span>
                </div>
            </div>,
        },
        {
            step: <div>
                <div>
                    <span className="font-semibold text-[#212838] text-[2.375rem]">
                        5. Can you provide a photo or image of the product?
                    </span>
                </div>
                <div className="mt-4">
                    <div>
                        <Upload
                            name="productImages"
                            files={images}
                            setFiles={setImages}
                            supportedFileTypes={["png", "jpg", "jpeg"]}
                            supportedText={"Files Supported  JPG,JPEG,PNG"}
                            fileName="PRODUCT_IMAGES"
                            fileUploadLimit={1}
                            filesCount={filesCount}
                            icon={imagesIcon}
                        />
                    </div>
                    <div className="mt-3">
                        {imagesPreviews?.length > 0 && (
                            <div className="flex gap-3 flex-wrap">
                                {imagesPreviews?.map((image) => (
                                    <div className="rounded-xl w-[90px] h-[90px] overflow-hidden relative">
                                        <div
                                            className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center"
                                            onClick={() => deleteImages(image?.name)}
                                        >
                                            <img src={deleteWhiteIcon} alt="" />
                                        </div>
                                        <img
                                            key={image?.url}
                                            src={image?.url}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>,
        },
    ];

    const [current, setCurrent] = useState(0);
    const [toggleModal, setToggleModal] = useState(false);
    const [form] = Form.useForm();
    const getQuestion = useSelector((state: RootState) => state?.getQuestion);

    function onFinish(values: any) {
        if (current == 4 && images?.length == 0) {
            infoMessage("Please provide product image");
            return;
        }
        const data = {
            ...state
        };
        const body: any = new FormData();
        for (let [key, value] of Object.entries(data)) {
            if (value) {
                body.append(key, value);
            }
        }

        body.append(
            "businessPlanId",
            currentSelectedBusinessPlan?.businessPlan?.id
        );
        body.append("file", images[0]);
        if (body.get("file") !== "undefined" && body.get("businessPlanId") && body.get("name") && body.get("description") && body.get("sellingPrice") && body.get("costPrice")) {
            createProductApi(dispatch, body, () => { }, onSuccess);
        }
        if (current == 4) {
            return
        } else {
            next()
        }
    }
    function onSuccess() {
        setToggleModal(true);
        form.resetFields()
        setImages([])
        setState({})
        setCurrent(0)
    }



    function next(body?: any) {
        if (current == getQuestion?.data?.length - 1) {
            setToggleModal(true);
        } else {
            setCurrent((prevCurrent) => prevCurrent + 1);
        }
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
                    bpType={"product"}
                    opt={"No"}
                    yes={() => {
                        setCurrent(0)
                        form.resetFields()
                        setToggleModal(false)
                        setImages([])
                    }}
                    no={() => [setCurrentComponent(1), setCurrent(0)]}
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
                                    Product
                                </h1>
                            </div>
                            <div>
                                <img src={objectsGroup} alt="" />
                            </div>
                        </div>
                    </div>
                    <InitialQuestionsContainer>
                        <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                            Products
                        </h1>
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
                                loading={createProduct?.loading}
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

export default Product;
