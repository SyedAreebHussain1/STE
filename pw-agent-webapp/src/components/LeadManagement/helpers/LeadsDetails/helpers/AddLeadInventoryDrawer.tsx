import React, { useEffect, useState } from "react";
import { Button, Col, Drawer, Form, Row, Select, Space, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import singlePropertyIcon from "../../../../../assets/homeIcon.png";
import projectIcon from "../../../../../assets/building.png";
import {
    assignInventoryApi,
    getAvailableInventoriesByProjectIdApi,
    getEnumsforleadInvntoryModuleApi,
    getPWPlotInventoryByProjectIdApi,
    pwpGetAllProductListApi,
    pwpGetAllProjectListForAddInventoryApi,
} from "../../../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const { Option } = Select;

type FinishType = {
    propertyWalletInventoryPlotId?: number[] | number;
    inventoryId?: number | number[];
    propertyWalletInventoryPlotIdSelect: any
};
type AddLeadInventoryDrawerProps = {
    toggle: boolean;
    setToggle: (e: boolean) => void | undefined | null;
    generalInventory: boolean
};

const AddLeadInventoryDrawer: React.FC<AddLeadInventoryDrawerProps> = ({
    toggle,
    setToggle,
    generalInventory
}: AddLeadInventoryDrawerProps) => {
    const [index, setIndex] = useState(0);
    const dispatch: AppDispatch = useDispatch();
    let { id } = useParams();
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    });
    const [projectId, setProjectId] = useState(0);
    const [form] = useForm();
    const [projectSearch, setProjectSearch] = useState("");
    const pwpGetAllProjectList = useSelector(
        (state: any) => state?.pwpGetAllProjectList
    );
    const getPWPlotInventoryByProjectId = useSelector(
        (state: any) => state?.getPWPlotInventoryByProjectId
    );
    const getEnumsforleadInvntoryModule = useSelector(
        (state: any) => state?.getEnumsforleadInvntoryModule
    );
    const assignInventory = useSelector((state: any) => state?.assignInventory);

    useEffect(() => {
        if (index == 0) {
            pwpGetAllProjectListForAddInventoryApi(
                dispatch,
                pageLimit,
                projectSearch, generalInventory
            );
        } else if (index == 1) {
            getEnumsforleadInvntoryModuleApi(dispatch, pageLimit, id, generalInventory);
        }
    }, [projectSearch, index]);
    useEffect(() => {
        if (projectId) {
            getPWPlotInventoryByProjectIdApi(
                dispatch,
                pageLimit,
                projectId,
                id, generalInventory)
        }
    }, [projectId]);
    const onFinish = (value: FinishType) => {
        const { propertyWalletInventoryPlotIdSelect, ...body } = value
        assignInventoryApi(dispatch, body, id, onSuccess)
    };
    function onSuccess() {
        setToggle(false);
        setIndex(0);
        form.setFieldValue("propertyWalletInventory", null);
        form.setFieldValue("inventoryId", null);
        form.setFieldValue("propertyWalletProductId", null);
        form.setFieldValue("propertyWalletInventoryPlotId", null)
        form.setFieldValue("propertyWalletInventoryPlotIdSelect", null)
    }
    useEffect(() => {
        if (index === 1) {
            form.setFieldValue("propertyWalletProductId", null)
        }
        form.setFieldValue("propertyWalletInventoryPlotId", null)
        form.setFieldValue("propertyWalletInventoryPlotIdSelect", null)
    }, [index])

    return (
        <>
            <Drawer
                title={
                    <h3 className="text-[1.2rem] font-medium text-[#475467]">
                        Update
                    </h3>
                }
                placement="right"
                width={700}
                open={toggle}
                closable={false}
                onClose={() => setToggle(false)}
                extra={
                    <Space>
                        <CloseOutlined onClick={() => setToggle(false)} />
                    </Space>
                }
            >
                <Form
                    onFinish={onFinish}
                    name="addNewLead"
                    form={form}
                    autoComplete="off"
                    initialValues={{ remember: true }}
                >
                    <Row gutter={16}>
                        <Col sm={24} xs={24} lg={24} md={14}>
                            <p className="text-[.8125rem]  font-medium text-[#344054]">
                                Select Inventory for the Lead
                            </p>
                            <Row gutter={16}>
                                {[
                                    {
                                        title: "Project",
                                        description: "Select the inventories from project",
                                        icon: projectIcon,
                                    },
                                    {
                                        title: "Single Property",
                                        description: "Attach the single listing Property",
                                        icon: singlePropertyIcon,
                                    },
                                ].map((item, i) => {
                                    return (
                                        <Col sm={24} xs={12} lg={12} md={12}>
                                            <div
                                                style={{
                                                    border:
                                                        index === i ? "1px solid rgb(39,163,163)" : "",
                                                }}
                                                className="rounded-[12px] p-[16px] mt-2 border border-gray-300 cursor-pointer"
                                                onClick={() => setIndex(i)}
                                            >
                                                <div className="flex justify-between">
                                                    <div>
                                                        <img src={item.icon} alt="" />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            className={
                                                                index === i
                                                                    ? `rounded-full w-4 h-4 bg-[rgb(39,163,163)] align-middle border border-gray-300 appearance-none outline-none cursor-pointer`
                                                                    : `rounded-full w-4 h-4 bg-white align-middle border border-gray-300 appearance-none outline-none cursor-pointer`
                                                            }
                                                            checked={index === i}
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-[1rem] text-[rgb(29,41,57)] font-medium mt-1 mb-1">
                                                    {item.title}
                                                </p>
                                                <div>
                                                    <p className="text-[.8125rem] text-[rgb(71,84,103)] font-normal">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                                {index === 0 ? (
                                    <>
                                        <Col sm={24} xs={24} lg={24} md={24}>
                                            <div className="mt-1 mb-1">
                                                <p className="text-[#667085] font-medium text-[.8125rem]">
                                                    Select Project
                                                </p>
                                            </div>
                                            <Form.Item
                                                name={
                                                    "propertyWalletInventoryPlotIdSelect"
                                                }
                                            >
                                                <Select
                                                    className="w-full h-[44px]"
                                                    placeholder="Select"
                                                    onChange={(e) => setProjectId(e)}
                                                    dropdownRender={(menu) => (
                                                        <div>
                                                            <Input
                                                                placeholder="Search"
                                                                className="p-[5px]"
                                                                value={projectSearch}
                                                                onChange={(e) =>
                                                                    setProjectSearch(e.target.value)
                                                                }
                                                                style={{ marginBottom: 10 }}
                                                            />
                                                            {menu}
                                                        </div>
                                                    )}
                                                    filterOption={(input, option: any) =>
                                                        option?.children.toLowerCase().indexOf(2) >= 0
                                                    }
                                                >
                                                    {pwpGetAllProjectList?.data?.items?.map(
                                                        (item: any) => {
                                                            return (
                                                                <Option value={item.id}>
                                                                    <p className="mt-0 mb-0">
                                                                        {item?.projectName}
                                                                    </p>
                                                                </Option>
                                                            );
                                                        }
                                                    )}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col sm={24} xs={24} lg={24} md={24}>
                                            <div className="mt-1 mb-1">
                                                <p className="text-[#667085] font-medium text-[.8125rem]">
                                                    Select Project Inventory
                                                </p>
                                            </div>
                                            <Form.Item
                                                name={
                                                    generalInventory ? "inventoryId" : "propertyWalletInventoryPlotId"
                                                }
                                            >
                                                <Select
                                                    placeholder="Select"
                                                    mode="multiple"
                                                    className="w-full min-h-[44px]"
                                                    tokenSeparators={[","]}
                                                >
                                                    {getPWPlotInventoryByProjectId?.data?.items?.map(
                                                        (item: any) => {
                                                            return (
                                                                <Option key={item.value} value={item?.id}>
                                                                    <div className="flex items-center">
                                                                        <div className="flex gap-2 items-center justify-center">
                                                                            <div>
                                                                                <p className="text-[#667085] text-[.8125rem] font-medium">

                                                                                    {
                                                                                        generalInventory ? item?.project?.projectName : item?.
                                                                                            propertyWalletInventory?.propertyWalletProject?.projectName
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-[#667085] text-[.8125rem] font-medium">
                                                                                    {generalInventory ? "type:" : "Lansize"}
                                                                                    {
                                                                                        generalInventory ? `${item?.landSize} ${item?.landArea?.title}` : item?.propertyWalletInventory
                                                                                            ?.projectSubType?.title
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Option>
                                                            );
                                                        }
                                                    )}
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                    </>
                                ) : (
                                    <>
                                        <Col sm={24} xs={24} lg={24} md={24}>
                                            <div className="mt-1 mb-1">
                                                <p className="text-[#667085] font-medium text-[.8125rem]">
                                                    Select Property
                                                </p>
                                            </div>
                                            {generalInventory ? <Form.Item
                                                name={
                                                    "inventoryId"
                                                }
                                            >
                                                <Select
                                                    className="w-full min-h-[44px]"
                                                    allowClear
                                                    placeholder="Select"
                                                    mode="multiple"
                                                    style={{ width: "100%" }}
                                                    options={getEnumsforleadInvntoryModule?.data?.items?.map(
                                                        (val: any) => ({
                                                            label: <>
                                                                {`Title: ${val?.title} , Landsize: ${val?.landSize} ${val?.landArea?.title}`}

                                                            </>,
                                                            value: val?.id,
                                                        })
                                                    )}
                                                    filterOption={(input, option: any) =>
                                                        option?.children.toLowerCase().indexOf(2) >= 0
                                                    }
                                                />
                                            </Form.Item> :
                                                <Form.Item
                                                    name={
                                                        "propertyWalletProductId"
                                                    }
                                                >
                                                    <Select
                                                        className="w-full min-h-[44px]"
                                                        allowClear
                                                        placeholder="Select"
                                                        mode="multiple"
                                                        style={{ width: "100%" }}
                                                        options={getEnumsforleadInvntoryModule?.data?.items?.map(
                                                            (val: any) => ({
                                                                label: <>
                                                                    {/* {`Owner Name: ${val?.ownerName} , Landsize: ${val?.landSize} ${val?.landArea?.title}`} */}
                                                                    {`Title: ${val?.title} , Landsize: ${val?.landSize} ${val?.landArea?.title}`}

                                                                </>,
                                                                value: val?.id,
                                                            })
                                                        )}
                                                        filterOption={(input, option: any) =>
                                                            option?.children.toLowerCase().indexOf(2) >= 0
                                                        }
                                                    />
                                                </Form.Item>
                                            }
                                        </Col>
                                    </>
                                )}
                            </Row>
                        </Col>
                    </Row>
                    <div className="flex justify-end gap-2 mt-3">
                        <Button
                            onClick={() => setToggle(false)}
                            className=" text-[#475467] border-none h-[48px] bg-transparent text-[1rem] font-semibold border"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={assignInventory.loading}
                            className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-semibold"
                        >
                            Update
                        </Button>
                    </div>
                </Form>
            </Drawer>
        </>
    );
};

export default AddLeadInventoryDrawer;
