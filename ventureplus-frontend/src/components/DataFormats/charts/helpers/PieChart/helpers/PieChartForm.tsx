import { Checkbox, ColorPicker, Form, Select } from "antd";
import { CheckboxProps } from "antd/lib";
import RoundedButton from "../../../../../button/RoundedButton";
import TextInput from "../../../../../inputs/TextInput";
import CollapsibleInputList from "../../../../ReusableComponents/CollapsibleInputList";
import { ColType, FormContentT } from "../../initialChartData";
import { useEffect } from "react";

type OnFinishType = {
  title: string;
  subtitle: string;
};

interface PieChartFormI {
  form: any;
  onFinish: (values: OnFinishType) => void;
  formContent: FormContentT;
  setFormContent: React.Dispatch<React.SetStateAction<FormContentT>>;
}

const PieChartForm = ({
  form,
  onFinish,
  formContent,
  setFormContent,
}: PieChartFormI) => {

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    if (name === "minimum" || name === "maximum") {
      setFormContent({ ...formContent, [name]: Number(value) });
      return;
    }
    setFormContent({ ...formContent, [name]: value });
  };

  const onChange: CheckboxProps["onChange"] = (e) => {
    setFormContent({ ...formContent, showLegend: e.target.checked });
  };

  const handleColorChange = (e: any, hex: any, key: string) => {
    setFormContent({
      ...formContent,
      colors: { ...formContent.colors, [key]: hex },
    });
  };

  return (
    <Form
      autoComplete="off"
      form={form}
      onFinish={onFinish}
      name="barchartForm"
      className="flex flex-col gap-2 h-full"
    >
      <div className="flex-1 flex flex-col gap-2">
        <CollapsibleInputList title="Heading">
          <TextInput
            name="title"
            placeholder="Title"
            className="w-full h-[30px]"
            classNameFormItem={"m-0 p-0 mb-1"}
            onChange={handleChange}
          />
          <TextInput
            name="subtitle"
            placeholder="Subtitle"
            className="w-full h-[30px]"
            classNameFormItem={"m-0 p-0 mb-2"}
            onChange={handleChange}
          />
        </CollapsibleInputList>

        <CollapsibleInputList title="Colors">
          <div className="flex flex-col gap-2 p-2">
            <div className="flex gap-2 flex-wrap">
              {Object.keys(formContent.colors).map((key) => (
                <ColorPicker
                 value={formContent.colors[key]}
                  format={"hex"}
                  onChange={(e, hex) => handleColorChange(e, hex, key)}
                />
              ))}
            </div>
          </div>
        </CollapsibleInputList>

        <CollapsibleInputList title="Legend">
          <Form.Item className="w-full mb-2" name="align" id="align">
            <Checkbox
              checked={formContent.showLegend}
              className="mb-2"
              onChange={onChange}
            >
              Show Legend
            </Checkbox>
            <Select
              defaultValue={formContent.align}
              className="w-full min-h-[30px]"
              placeholder="Select Aligment"
              onChange={(e) => {
                setFormContent({ ...formContent, align: e });
              }}
            >
              <Select.Option key={"left"} value={"left"}>
                Left
              </Select.Option>
              <Select.Option key={"center"} value={"center"}>
                Center
              </Select.Option>
              <Select.Option key={"right"} value={"right"}>
                Right
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="w-full mb-2"
            name="verticalAlignment"
            id="verticalAlignment"
          >
            <Select
              defaultValue={formContent.verticalAlignment}
              className="w-full min-h-[30px]"
              placeholder="Select Vertical Aligment"
              onChange={(e) => {
                setFormContent({ ...formContent, verticalAlignment: e });
              }}
            >
              <Select.Option key={"top"} value={"top"}>
                Top
              </Select.Option>
              <Select.Option key={"bottom"} value={"bottom"}>
                Bottom
              </Select.Option>
              <Select.Option key={"middle"} value={"middle"}>
                Middle
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="w-full mb-2" name="layout" id="layout">
            <Select
              defaultValue={formContent.layout}
              className="w-full min-h-[30px]"
              placeholder="Select layout"
              onChange={(e) => {
                setFormContent({ ...formContent, layout: e });
              }}
            >
              <Select.Option key={"horizontal"} value={"horizontal"}>
                Horizontal
              </Select.Option>
              <Select.Option key={"vertical"} value={"vertical"}>
                Vertical
              </Select.Option>
            </Select>
          </Form.Item>
        </CollapsibleInputList>
      </div>
      <RoundedButton
        title={"Save"}
        className="w-full my-2"
        type="secondary"
        htmlType="submit"
        sm
      />
    </Form>
  );
};

export default PieChartForm;
