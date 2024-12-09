import { useState } from "react";
import { Col, Row, Form } from "antd";
import TextInput from "../../helpers/inputs/TextInput";

type Props = {};
type SizeType = Parameters<typeof Form>[0]["size"];

const InviteByEmailOrPhoneNoTabChildren = (props: Props) => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <Form
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <Row gutter={16}>
          <Col xs={24} sm={24} lg={8} md={12}>
            <TextInput placeholder="Name" className="w-full  h-[50px] " />
          </Col>
          <Col xs={24} sm={24} lg={8} md={12}>
            <TextInput placeholder="Email" className="w-full  h-[50px] " />
          </Col>
          <Col xs={24} sm={24} lg={8} md={12}>
            <TextInput placeholder="Phone" className="w-full h-[50px] " />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default InviteByEmailOrPhoneNoTabChildren;
