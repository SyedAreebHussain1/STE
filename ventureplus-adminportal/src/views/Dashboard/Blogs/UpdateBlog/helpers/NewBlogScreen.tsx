

import { Modal, Form, Select, Row, Col } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, RoundedButton, TextInput } from "../../../../../components";
import { getCreatePackageAdminApi } from "../../../../../services/api/Dashboard/CreatePackage";
import { useEffect, useState } from "react";
import { getBlogsCategoryApi } from "../../../../../services/api/Dashboard/Blogs/blogsCategory";
import {
    getAllBlogsApi,
    postAllBlogsApi,
    updateAllBlogsApi,
} from "../../../../../services/api/Dashboard/Blogs/allBlogs";
import deleteWhiteIcon from "../../../../../assets/deleteWhiteIcon.svg";
import Upload from "../../../../../utils/helpers/Upload/Upload";
import { useUpload } from "../../../../../hooks/useUpload";
import { errorMessage } from "../../../../../utils/message";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface Props {
    htmlString: string
}

const NewBlogScreen = ({ htmlString }: Props) => {
    const [form] = useForm();
    const [
        images,
        setImages,
        imagesPreviews,
        deleteImages,
        fileUploadLimit,
        filesCount,
    ] = useUpload();
    const location = useLocation()
    const blogsCategory = useSelector((state: RootState) => state?.blogsCategory);
    const allBlogs = useSelector((state: RootState) => state?.allBlogs);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    useEffect(() => {
        getBlogsCategoryApi(dispatch);
    }, [])
    function onFinish(values: {
        title: string;
        blog: string;
        blogCategoryId: number;
        author: string;
        type: string;
    }) {
        const formData = new FormData();

        formData.append("title", values.title);
        formData.append("type", values.type);
        // 
        {/* Blog Content Input */ }
        formData.append("blog", htmlString);
        // 
        formData.append("blogCategoryId", String(values?.blogCategoryId));
        formData.append("author", values.author);

        images.forEach((image: File) => {
            formData.append("blogPhotos", image);
        });
        if (htmlString !== "") {
            updateAllBlogsApi(dispatch, formData, Number(params?.id), onSuccess);;

        } else {
            errorMessage("Please create Template")
        }
    }

    function onSuccess() {
        navigate('/blogs')
        getAllBlogsApi(dispatch, { page: 1, limit: 10 });
        form.resetFields();
    }

    useEffect(() => {
        if (location?.state) {
            form.setFieldsValue(location?.state)
        }
    }, [location?.state])
    console.log(location?.state);

    return (
        <Form
            form={form}
            onFinish={onFinish}
            name="updateBlog"
            autoComplete="off"
            initialValues={{ remember: true }}
        >
            <Row gutter={16}>
                <Col sm={24} md={12} lg={12}>
                    <InputLabel>Select Category</InputLabel>
                    <Form.Item
                        name={"blogCategoryId"}
                        className="w-full h-[48px]"
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
                            disabled={!blogsCategory?.data?.data.length}
                            showSearch
                            placeholder="Select Category"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                String(option?.children)
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                        >
                            {blogsCategory?.data?.data?.map((opt: any, i: number) => (
                                <Select.Option key={i} value={opt?.id}>
                                    {opt?.title}
                                </Select.Option>
                            ))}
                        </Select>

                    </Form.Item>
                </Col>
                <Col sm={24} md={12} lg={12}>
                    <InputLabel>Select Blog Banner Type</InputLabel>
                    <Form.Item
                        name={"type"}
                        className="w-full min-h-[48px]"
                        rules={[
                            {
                                required: true,
                                message: "required",
                            },
                        ]}
                    >
                        <Select className="rounded-[8px]" size="large" allowClear>
                            {["PitchDeck", "BMC", "BusinessPlan", "ALL"].map(
                                (opt: any, i: number) => (
                                    <Select.Option key={i} value={opt}>
                                        {opt}
                                    </Select.Option>
                                )
                            )}
                        </Select>
                    </Form.Item>
                </Col>
                {/* Author Input */}
                <Col sm={24} md={12} lg={12}>
                    <label htmlFor="author" className="text-md font-semibold">
                        Enter Author
                    </label>
                    <TextInput
                        id="author"
                        name="author"
                        className="min-h-[48px] w-[100%]"
                        placeholder="Enter author name"
                        rules={[{ required: true, message: "This field is required" }]}
                    />
                </Col>
                {/* Blog Banner Type */}
                <Col sm={24} md={12} lg={12}>
                    {/* Title Input */}

                    <label htmlFor="title" className="text-md font-semibold">
                        Enter Title
                    </label>
                    <TextInput
                        id="title"
                        name="title"
                        className="h-[48px] w-[100%]"
                        placeholder="Enter blog title"
                        rules={[{ required: true, message: "This field is required" }]}
                    />
                </Col>

                {/* Image Upload and Previews */}
                <Col sm={24} md={12} lg={12}>
                    <div className="mt-3">
                        {" "}
                        <Upload
                            name="blogImages"
                            files={images}
                            setFiles={setImages}
                            supportedFileTypes={["png", "jpg", "jpeg"]}
                            supportedText={"Files Supported  JPG,JPEG,PNG"}
                            fileName="BLOGS_IMAGES"
                            fileUploadLimit={5}
                            filesCount={filesCount}
                            multiple
                        />
                        {imagesPreviews?.length > 0 && (
                            <div className="flex gap-3 flex-wrap">
                                {imagesPreviews?.map((image) => (
                                    <div
                                        key={image.url}
                                        className="rounded-xl w-[90px] h-[90px] overflow-hidden relative mt-4"
                                    >
                                        <div
                                            className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center"
                                            onClick={() => deleteImages(image?.name)}
                                        >
                                            <img src={deleteWhiteIcon} alt="" />
                                        </div>
                                        <img
                                            key={image?.url}
                                            src={image?.url}
                                            alt="preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Col>
                {/* Submit Button */}
                <div className="flex w-full justify-end mt-4">
                    <div className="flex gap-2 items-center">
                        <RoundedButton
                            title={"Update Blog"}
                            loading={allBlogs?.loading}
                            type="primary"
                            sm
                            htmlType="submit"
                        />
                    </div>
                </div>
            </Row>
        </Form>
    );
};

export default NewBlogScreen;
