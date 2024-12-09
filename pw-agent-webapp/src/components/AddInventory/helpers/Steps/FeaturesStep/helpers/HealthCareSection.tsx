import { Checkbox, Col, Form, Row } from "antd";
import { getOptionsOfSelectByName } from "../../../../../../utils/utils";
import TextInput from "../../../../../../helpers/inputs/TextInput";
import SectionContainer from "../../../../../SectionContainer";
import { SelectField } from "../../../../../../helpers/inputs/SelectField";

const HealthCareSection = ({ fields }: any) => {
  return fields.length > 0 ? (
    <>
      <SectionContainer
        title="Health and Care"
        subtitle="Set the features according to you property"
      >
        <Row gutter={16}>
          {fields &&
            fields.length > 0 &&
            fields.map((field: any, i: any) => {
              if (field.type === "text") {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <span className="text-[#292D35] font-medium text-base">
                      {field.label}
                    </span>
                    <TextInput name={field.name} className="h-[48px] mt-2" />
                  </Col>
                );
              } else if (field.type === "number") {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <span className="text-[#292D35] font-medium text-base">
                      {field.label}
                    </span>
                    <TextInput name={field.name} className="h-[48px] mt-2" />
                  </Col>
                );
              } else if (field.type === "select") {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <span className="text-[#292D35] font-medium text-base">
                      {field.label}
                    </span>
                    <SelectField
                      name={field.name}
                      options={getOptionsOfSelectByName(field.name)}
                      className="!h-[48px] mt-2"
                      rules={[{ required: false }]}
                    />
                  </Col>
                );
              }
            })}
        </Row>
        <Row gutter={16}>
          {fields &&
            fields.length > 0 &&
            fields.map((field: any, i: any) => {
              if (field.type === "bool") {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <Form.Item name={field.name}>
                      <Checkbox.Group style={{ width: "100%" }}>
                        <div className="flex flex-wrap">
                          <div className="relative">
                            <Checkbox value={field.label}>
                              {field.label}
                            </Checkbox>
                          </div>
                        </div>
                      </Checkbox.Group>
                    </Form.Item>
                  </Col>
                );
              }
            })}
        </Row>
      </SectionContainer>
    </>
  ) : (
    ""
  );
};

export default HealthCareSection;
