import { getOptionsOfSelectByName } from "../../../../../../utils/utils";
import { Checkbox, Col, Form, Row } from "antd";
import InfoIcon from "./../../../../../../assets/info.png";
import TextInput from "../../../../../../helpers/inputs/TextInput";
import SectionContainer from "../../../../../SectionContainer";
import { SelectField } from "../../../../../../helpers/inputs/SelectField";

const PremiumFeaturesSection = ({ fields, disabled, state }: any) => {
  return fields.length > 0 ? (
    <>
      <SectionContainer
        title="Premium Features"
        subtitle="Set the features according to you property"
        extras={
          <div className="flex gap-[10px] bg-[#0000000f] justify-center py-[10px] mt-[18px] max-w-[266px]">
            <span>
              <img src={InfoIcon} alt="" />
            </span>
            <span className="text=[#667085] text-[12px]">
              Premium features are charged extra
            </span>
          </div>
        }
      >
        <Row gutter={16}>
          {fields &&
            fields.length > 0 &&
            fields.map((field: any, i: number) => {
              if (field.type === "text") {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <span className="text-[#292D35] font-medium text-base">
                      {field.label}
                    </span>
                    <TextInput
                      name={field.name}
                      disabled={disabled}
                      className="h-[48px] mt-2"
                    />
                  </Col>
                );
              } else if (field.type === "number") {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <span className="text-[#292D35] font-medium text-base">
                      {field.label}
                    </span>
                    <TextInput
                      name={field.name}
                      disabled={disabled}
                      className="h-[48px] mt-2"
                    />
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
                      disabled={disabled}
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
                      {disabled && state?.[field.name?.split("_")?.[0]] ? (
                        <Checkbox
                          value={field.label}
                          disabled={disabled}
                          checked={true}
                        >
                          {field.label}
                        </Checkbox>
                      ) : (
                        <Checkbox.Group style={{ width: "100%" }}>
                          <div className="flex flex-wrap">
                            <div className="relative">
                              <Checkbox value={field.label} disabled={disabled}>
                                {field.label}
                              </Checkbox>
                            </div>
                          </div>
                        </Checkbox.Group>
                      )}
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

export default PremiumFeaturesSection;
