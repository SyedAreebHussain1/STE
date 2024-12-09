import React, { useEffect } from "react";
import { Button, Form, Modal } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import {
  createDepartmentApi,
  updateDepartmentApi,
} from "../../../redux/api/Department";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../helpers/button/RoundedButton";

type AddDepartmentModalProps = {
  open?: any | undefined;
  onClose?: any;
};

const AddDepartmentModal: React.FC<AddDepartmentModalProps> = ({
  open,
  onClose,
}: AddDepartmentModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const createDepartment = useSelector((state: any) => state?.createDepartment);
  const updateDepartment = useSelector((state: any) => state?.updateDepartment);
  const [form] = Form.useForm();
  const title = (
    <h3 className="text-[25px] text-[#000000de] dark:text-white font-semibold">
      {typeof open?.id === "number" ? "Update Department" : "Add Department"}
    </h3>
  );
  const onFinish = (body: { title: string }) => {
    if (typeof open?.id === "number") {
      updateDepartmentApi(dispatch, open?.id, body, onClose);
    } else {
      createDepartmentApi(dispatch, body, onClose);
    }
  };
  useEffect(() => {
    if (open?.id) {
      form.setFieldsValue(open);
    }
  }, [open?.id]);
  return (
    <Modal
      title={title}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
    >
      <Form
        onFinish={onFinish}
        name="addDepartment"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div>
          <label
            htmlFor="title"
            className="text-[.975rem] font-medium text-[#667085] mb-2 dark-input-label"
          >
            Title
          </label>
          <TextInput
            rules={[
              {
                required: true,
                message: "Please input your Title!",
              },
            ]}
            id="title"
            name="title"
            className="min-h-[48px] dark-input"
          />
        </div>
        <div className="flex justify-end mt-[30px] gap-3 ">
          <RoundedButton
            onClick={() => onClose(false)}
            title={"Cancel"}
            className="dark:bg-dark-primary dark:text-white"
            sm
          />

          <RoundedButton
            loading={createDepartment.loading || updateDepartment.loading}
            title={typeof open?.id === "number" ? "Update" : "Add"}
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
            htmlType="submit"
            sm
          />
        </div>
      </Form>
    </Modal>
  );
};

export default AddDepartmentModal;
