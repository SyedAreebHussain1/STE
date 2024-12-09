import { Modal, Row, Col } from "antd";
type ShowPhoneNumberType = {
  toggle: string;
  setToggle: any;
};

const ShowPhoneNumberModal = ({ toggle, setToggle }: ShowPhoneNumberType) => {
  return (
    <Modal
      title="Phone no"
      centered
      width={553}
      open={toggle ? true : false}
      onOk={() => setToggle(null)}
      onCancel={() => setToggle(null)}
      footer={null}
    >
      <Row gutter={16}>
        <Col xs={24} sm={24} lg={24} md={24}>
          <p className="text-[#344054] text-[.8125rem] font-medium mt-2 mb-2">
            Phone
          </p>
          <div className="border border-spacing-0 p-[10px] rounded-lg">
            {toggle}
          </div>
        </Col>
      </Row>
    </Modal>
  );
};
export default ShowPhoneNumberModal;
