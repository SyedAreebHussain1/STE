import { Col, Form, FormInstance, Input } from "antd";
import SectionContainer from "../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";

type Props = {};

const WebsiteDetailsSection = (props: Props) => {
  return (
    <SectionContainer
      title="Website Details"
      subtitle="Provide your Real Estate Agency Details"
    >
      <Col xs={24} md={12} xl={8}>
        <label
          htmlFor="agencyTagline"
          className="text-[#667085] mb-2 text-base font-medium"
        >
          Agency Tagline
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Agency Tagline"
          name="agencyTagline"
          id="agencyTagline"
          className="h-[48px] mt-2"
        />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <label
          htmlFor="agencyEmail"
          className="text-[#667085] text-base font-medium"
        >
          Agency Email
        </label>
        <TextInput
          rules={[{ required: false }]}
          placeholder="Agency Email"
          name="agencyEmail"
          id="agencyEmail"
          className="h-[48px] mt-2"
        />
      </Col>
      <Col xs={24} md={12} xl={8}>
        <label
          htmlFor="aboutAgency"
          className="text-[#667085] text-base font-medium"
        >
          About Agency
        </label>
        <Form.Item
          name="aboutAgency"
          rules={[{ required: false }]}
          className="mt-2"
        >
          <Input.TextArea
            placeholder="Details Here"
            id="aboutAgency"
            rows={4}
          ></Input.TextArea>
        </Form.Item>
      </Col>
    </SectionContainer>
  );
};

export default WebsiteDetailsSection;
