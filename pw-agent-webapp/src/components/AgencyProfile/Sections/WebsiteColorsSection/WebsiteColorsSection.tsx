import { Col, FormInstance } from "antd";
import SectionContainer from "../../SectionContainer";
import PrimaryColors from "./PrimaryColors";
import SecondaryColors from "./SecondaryColors";

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
      <Col xs={24} md={12} xl={12}>
        <PrimaryColors form={props.form} />
      </Col>
      <Col className="md:mt-0 mt-3" xs={24} md={12} xl={12}>
        <SecondaryColors form={props.form} />
      </Col>
    </SectionContainer>
  );
};

export default WebsiteColorsSection;
