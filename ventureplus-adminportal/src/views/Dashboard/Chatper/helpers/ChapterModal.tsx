import TextArea from "antd/es/input/TextArea";
import { Button, Modal, Form, Row, Col } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, TextInput } from "../../../../components";
import {
  getChapterAdminApi,
  postChapterApi,
  updateChapterApi,
} from "../../../../services/api/Dashboard/Chatper";
import { useEffect } from "react";
interface Props {
  open: any;
  close: (e: any) => void;
  type?: string;
}
const ChapterModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const chapter = useSelector((state: RootState) => state?.chapter);

  function onFinish(values: { name: string; description: string }) {
    if (type) {
      updateChapterApi(dispatch, values, Number(open.id), onSuccess);
    } else {
      postChapterApi(dispatch, values, onSuccess);
    }
  }
  function onSuccess() {
    close(false);
    getChapterAdminApi(dispatch, { page: 1, limit: 10 });
    form.resetFields();
  }
  useEffect(() => {
    if (type) {
      form.setFieldsValue({
        title: open.title,
        chapterNo: open.chapterNo,
        description: open?.description,
      });
    }
  }, [open]);
  return (
    <Modal
      width={"600px"}
      title={
        <h3 className="text-[18px] font-semibold">
          {type ? "Update" : "Add"} Chapter
        </h3>
      }
      open={open}
      onCancel={() => close(false)}
      footer={null}
      centered={true}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16}>
          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Name</InputLabel>
            <TextInput
              name={type ? "title" : "name"}
              placeholder="Name"
              className="w-full min-h-[48px] dark-input"
              rules={[{ required: true, message: "Name is required" }]}
            />
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Chapter No.</InputLabel>
            <TextInput
              name="chapterNo"
              rules={[{ required: true, message: "Chapter No is required" }]}
              size="large"
              className="rounded-[8px]"
              isNumber
            />
          </Col>

          <Col sm={24} md={24} lg={24} xl={24}>
            <InputLabel>Description</InputLabel>
            <Form.Item
              name="description"
              className="mt-[10px]"
              rules={[
                {
                  required: true,
                  message: "Description is required",
                },
              ]}
            >
              <TextArea
                className="rounded-[8px]"
                placeholder="Description"
                autoSize={{ minRows: 4, maxRows: 5 }}
                style={{ padding: "10px, 14px, 10px, 14px" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end mt-[30px] gap-2">
          <Button
            size="middle"
            key="1"
            loading={chapter.loading}
            type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            htmlType="submit"
          >
            {type ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ChapterModal;
