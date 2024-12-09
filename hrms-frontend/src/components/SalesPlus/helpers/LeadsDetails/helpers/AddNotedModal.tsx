import { Button, Modal, Input, Form, Row, Col } from "antd";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addNewLeadlogNoteApi } from "../../../../../redux/api/SalesPlus/LeadDetails";
import RoundedButton from "../../../../../helpers/button/RoundedButton";

const { TextArea } = Input;

type AddNotedModal = {
  toggleId: boolean | number | string | null | any | undefined;
  setToggleId: (e: null | number | string | boolean) => void;
};

const AddNotedModal = ({ toggleId, setToggleId }: AddNotedModal) => {
  const dispatch: AppDispatch = useDispatch();
  const addNewLeadlogNote = useSelector(
    (state: any) => state?.addNewLeadlogNote
  );
  function onFinish(value: any) {
    const body = {
      ...value,
      leadLogId: toggleId,
    };
    addNewLeadlogNoteApi(dispatch, body, onSuccess);
  }
  function onSuccess() {
    setToggleId(null);
  }
  return (
    <Modal
      title="Add Note"
      centered
      width={553}
      open={toggleId}
      onOk={() => setToggleId(null)}
      onCancel={() => setToggleId(null)}
      footer={null}
    >
      <Form onFinish={onFinish} name="addNote">
        <Row gutter={16}>
          <Col xs={24} sm={24} lg={24} md={24}>
            <p className="text-[#344054] dark:text-white text-[.8125rem] font-medium mt-2 mb-2">
              Write your comments{" "}
            </p>
            <Form.Item name="note">
              <TextArea
                required
                className="dark-input"
                style={{ height: 100, resize: "none" }}
                rows={6}
                name="note"
                placeholder="Enter here"
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-end gap-2 mt-2">
              <RoundedButton
                title={"Add Note"}
                loading={addNewLeadlogNote?.loading}
                htmlType="submit"
                className="dark:bg-dark-primary bg-light-primary text-white border-none h-[40px] font-normal"
              />
        
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default AddNotedModal;
