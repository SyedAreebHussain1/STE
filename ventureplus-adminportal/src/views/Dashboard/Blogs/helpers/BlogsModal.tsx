import { Modal, Form, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, RoundedButton, TextInput } from "../../../../components";
import { getCreatePackageAdminApi } from "../../../../services/api/Dashboard/CreatePackage";
import { useEffect, useState } from "react";
import { getBlogsCategoryApi } from "../../../../services/api/Dashboard/Blogs/blogsCategory";
import {
  getAllBlogsApi,
  postAllBlogsApi,
} from "../../../../services/api/Dashboard/Blogs/allBlogs";
import deleteWhiteIcon from "../../../../assets/deleteWhiteIcon.svg";
import Upload from "../../../../utils/helpers/Upload/Upload";
import { useUpload } from "../../../../hooks/useUpload";
import TextArea from "antd/es/input/TextArea";

interface Props {
  open: any;
  close: (e: any) => void;
  type?: any;
}

const BlogsModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const [
    images,
    setImages,
    imagesPreviews,
    deleteImages,
    fileUploadLimit,
    filesCount,
  ] = useUpload();
  const blogsCategory = useSelector((state: RootState) => state?.blogsCategory);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    getBlogsCategoryApi(dispatch);
  }, []);

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
    formData.append("blog", values.blog);
    formData.append("blogCategoryId", String(values?.blogCategoryId));
    formData.append("author", values.author);

    images.forEach((image: File) => {
      formData.append("blogPhotos", image);
    });

    postAllBlogsApi(dispatch, formData, onSuccess);
  }

  function onSuccess() {
    close(false);
    getAllBlogsApi(dispatch, { page: 1, limit: 10 });
    form.resetFields();
  }

  const onSearch = (value: string) => { };
  const onChange = (value: string) => { };

  return (
    <Modal
      width={"600px"}
      title={
        <h3 className="text-[18px] font-semibold">
          {type ? "Update" : "Add"} Blogs
        </h3>
      }
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form
        form={form}
        onFinish={onFinish}
        name="addBlog"
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <InputLabel>Select Category</InputLabel>
            <Form.Item
              name={"blogCategoryId"}
              className="w-full min-h-[48px]"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              {blogsCategory?.data?.data.length > 0 && (
                <Select
                  className="rounded-[8px]"
                  size="large"
                  allowClear
                  showSearch
                  placeholder="Search Category"
                  optionFilterProp="children"
                  onSearch={onSearch}
                  onChange={onChange}
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
              )}
            </Form.Item>
          </div>
        </div>

        {/* Title Input */}
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="title" className="text-md font-semibold">
              Enter Title
            </label>
            <TextInput
              id="title"
              name="title"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter blog title"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>

        {/* Blog Content Input */}
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <InputLabel>Enter Blog Description</InputLabel>
            <Form.Item
              name="blog"
              className="mt-[10px]"
              rules={[
                {
                  required: true,
                  message: "blog is required",
                },
              ]}
            >
              <TextArea
                className="rounded-[8px]"
                placeholder='Enter Blog para in " " '
                autoSize={{ minRows: 4 }}
              />
            </Form.Item>
          </div>
        </div>

        {/* Author Input */}
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
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
          </div>
        </div>

        {/* Blog Banner Type */}
        <div className="flex flex-col gap-2 w-full">
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
        </div>

        {/* Image Upload and Previews */}
        <div className="mt-5">
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
                  className="rounded-xl w-[90px] h-[90px] overflow-hidden relative"
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

        {/* Submit Button */}
        <div className="flex justify-between gap-2">
          <RoundedButton type="primary" title={"Cancel"} sm />
          <div className="flex gap-2 items-center">
            <RoundedButton
              title={"Add Blog"}
              type="primary"
              sm
              htmlType="submit"
            />
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default BlogsModal;
