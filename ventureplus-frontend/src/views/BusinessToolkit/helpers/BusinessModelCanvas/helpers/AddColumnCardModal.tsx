import { Col, Divider, Form, Modal, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import RoundedButton from "../../../../../components/button/RoundedButton";
import TextInput from "../../../../../components/inputs/TextInput";
import {
  getBusinessModelCanvasColumnsApi,
  postCanvasColumnItemApi,
} from "../../../../../services/api/BusinessToolkit";

interface AddColumnCardModalProps {
  open?: any | undefined;
  onClose?: any;
  bpdAndCanvasIds: {
    bpdResourcesId: number | null;
    businessModalCanvasId: number | null;
  };
  route: string;
}

type OnFinishType = {
  name: "string";
  description: "string";
};

const AddColumnCardModal = ({
  open,
  onClose,
  bpdAndCanvasIds,
  route,
}: AddColumnCardModalProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    postCanvasColumnItemApi(
      dispatch,
      route,
      {
        ...values,
        businessModalCanvasId: bpdAndCanvasIds.businessModalCanvasId,
      },
      onSuccess
    );
  };

  const onSuccess = () => {
    if (bpdAndCanvasIds.bpdResourcesId) {
      getBusinessModelCanvasColumnsApi(
        dispatch,
        bpdAndCanvasIds.bpdResourcesId
      );
    }
    onClose(false);
  };

  return (
    <Modal
      title={"Add Content"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
      className="relative z-50"
    >
      <Divider />
      <Form
        onFinish={onFinish}
        name="addColumnCardForm"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
        className="!w-full"
      >
        <Row gutter={16} className="!w-full">
          <Col span={24}>
            <label htmlFor="title" className="input-label-sm">
              Title
            </label>
            <TextInput
              classNameFormItem={"mb-3"}
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
              id="title"
              name="title"
              className="min-h-[40px]"
              placeholder="Enter title"
            />
          </Col>
          <Col span={24}>
            <label htmlFor="value" className="input-label-sm">
              Description
            </label>
            <Form.Item
              className="w-full mb-2"
              name="value"
              id="value"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <TextArea
                maxLength={100}
                placeholder="Enter Description"
                style={{ height: 80, resize: "none" }}
              />
            </Form.Item>
          </Col>

          <Col span={4} className="mt-2">
            <RoundedButton
              title={"Cancel"}
              type="danger"
              sm
              onClick={() => onClose()}
            />
          </Col>
          <Col span={16}></Col>
          <Col span={4}>
            <RoundedButton
              title={"Create"}
              type="primary"
              sm
              htmlType="submit"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddColumnCardModal;
