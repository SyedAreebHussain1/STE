import { Button, Col, DatePicker, Drawer, Form, Row, Select, Spin } from "antd";
import { IoMdClose } from "react-icons/io";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { useEffect } from "react";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import { editEvaluationFormApi } from "../../../../../redux/api/Evolution";
interface Props {
  open: boolean;
  onClose: () => void;
  data: any;
};

export const EditEvalutionDrawer: React.FC<Props> = ({
  open,
  onClose,
  data,
}: Props) => {
  const { editEvaluationForm } = useSelector((state: any) => state);
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    editEvaluationFormApi(
      dispatch,
      { title: values?.title },
      Number(data?.id),
      onClose
    );
  };
  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        deparment: data?.companyDepartment?.title,
        title: data?.title,
      });
    }
  }, [data]);

  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">Update Evaluation</h2>}
      placement="right"
      width={400}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          padding: 0,
        },
      }}
      open={open}
      extra={
        <Button
          onClick={onClose}
          className="border-[0] text-[1rem] flex justify-center items-center"
        >
          <IoMdClose className="w-[30px] h-[30px]" />
        </Button>
      }
    >
      <Form
        className="p-4"
        onFinish={onFinish}
        name="updateEvaluation"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div>
          <label
            htmlFor="deparment"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label "
          >
            Deparment
          </label>
          <TextInput
            rules={[
              {
                required: true,
                message: "Please input your Deparment!",
              },
            ]}
            disabled
            id="deparment"
            name="deparment"
            className="min-h-[48px] dark-input"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label "
          >
            Evaluation Title
          </label>
          <TextInput
            rules={[
              {
                required: true,
                message: "Please input your Evaluation!",
              },
            ]}
            onKeyDown={(event) => {
              if (/[0-9,.]/.test(event.key)) {
                event.preventDefault();
                return;
              }
            }}
            id="title"
            name="title"
            className="min-h-[48px] dark-input"
          />
        </div>

        <div className="flex justify-between gap-2 fixed bottom-1 right-1">
          <RoundedButton
            onClick={onClose}
            title={"Cancel"}
            className="dark:bg-dark-primary dark:text-white w-full"
          />
          <RoundedButton
            title={"Update"}
            loading={editEvaluationForm?.loading}
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white w-full"
            htmlType="submit"
          />
        </div>
      </Form>
    </Drawer>
  );
};
