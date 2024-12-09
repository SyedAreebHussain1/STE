import { Col, FormInstance } from "antd";
import SectionContainer from "../../SectionContainer";
import PrimaryColors from "./PrimaryColors";
import FontColors from "./FontColors";
import Preview from "./Preview";

type Props = {
  form: FormInstance<any>;
};

export function extractHexColor(input: string): string | null {
  const hexColorRegex = /#(?:[0-9a-fA-F]{3}){1,2}\b/;
  const match = input.match(hexColorRegex);
  return match ? match[0] : null;
}

const WebsiteColorsSection = (props: Props) => {
  return (
    <SectionContainer
      title="Website Colors"
      subtitle="Ensure selected must be checked
  through Preview before publishing it."
    >
      <Col xs={24} md={12} xl={6}>
        <PrimaryColors form={props.form} />
      </Col>
      <Col xs={24} md={12} xl={6}>
        <FontColors form={props.form} />
      </Col>
      <Col xs={24} md={24} xl={12}>
        <Preview form={props.form} />
      </Col>
    </SectionContainer>
  );
};

export default WebsiteColorsSection;
