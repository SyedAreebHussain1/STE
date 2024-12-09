import { Modal, Form, Radio, Select, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { RoundedButton, TextInput } from "../../../../components";
import { getCreatePackageAdminApi } from "../../../../services/api/Dashboard/CreatePackage";
import { getBlogsCategoryApi, postBlogsCategoryApi } from "../../../../services/api/Dashboard/Blogs/blogsCategory";

interface Props {
  open: any;
  close: (e: any) => void;
  type?: any;
}

const AddCategoryModal = ({ open, close }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();

  function onFinish(values: { title: string }) {
    postBlogsCategoryApi(dispatch, values, onSuccess);
  }

  function onSuccess() {
    close(false);
    getBlogsCategoryApi(dispatch);
    form.resetFields();
  }

  return (
    <Modal
      width={"600px"}
      title={<h3 className="text-[18px] font-semibold">Add Blogs Category</h3>}
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form
        form={form}
        onFinish={onFinish}
        name="category"
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-[100%]">
            <label htmlFor="title" className="text-md font-semibold">
              Enter Category
            </label>
            <TextInput
              id="title"
              name="title"
              className="min-h-[48px] w-[100%]"
              placeholder="Enter category name"
              rules={[{ required: true, message: "This field is required" }]}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <RoundedButton title="Add Category" type="primary" sm htmlType="submit" />
        </div>
      </Form>
    </Modal>
  );
};

export default AddCategoryModal;
