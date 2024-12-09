import { Checkbox, ColorPicker, Form, Select } from "antd";
import { CheckboxProps } from "antd/lib";
import RoundedButton from "../../../../../button/RoundedButton";
import TextInput from "../../../../../inputs/TextInput";
import CollapsibleInputList from "../../../../ReusableComponents/CollapsibleInputList";
import { ColType, FormContentT } from "../../initialChartData";

type OnFinishType = {
  title: string;
  subtitle: string;
};

interface AreaChartModalFormI {
  form: any;
  onFinish: (values: OnFinishType) => void;
  formContent: FormContentT;
  setFormContent: React.Dispatch<React.SetStateAction<FormContentT>>;
}

const AreaChartModalForm = ({
  form,
  onFinish,
  formContent,
  setFormContent,
}: AreaChartModalFormI) => {
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

        <CollapsibleInputList title="X Axis">
          <TextInput
            name="xLabel"
            placeholder="Label"
            className="w-full h-[30px] mb-1"
            classNameFormItem={"m-0 p-0 mb-1"}
            value={formContent.xLabel}
            onChange={handleChange}
            maxLength={25}
          />
        </CollapsibleInputList>

        <CollapsibleInputList title="Y Axis">
          <TextInput
            defaultValue={formContent.minimum}
            name="minimum"
            placeholder="minimum"
            className="w-full h-[30px]"
            classNameFormItem={"m-0 p-0 mb-1"}
            isNumber
            onChange={handleChange}
          />
          <TextInput
            defaultValue={formContent.maximum}
            name="maximum"
            placeholder="maximum"
            className="w-full h-[30px]"
            classNameFormItem={"m-0 p-0 mb-1"}
            isNumber
            onChange={handleChange}
          />
          <TextInput
            name="yLabel"
            placeholder="Label"
            className="w-full h-[30px] mb-1"
            classNameFormItem={"m-0 p-0 mb-1"}
            value={formContent.yLabel}
            onChange={handleChange}
            maxLength={25}
          />
        </CollapsibleInputList>

        <CollapsibleInputList title="Legend">
          <Form.Item className="w-full mb-2" name="align" id="align">
            <Checkbox
              className="mb-2"
              onChange={onChange}
              checked={formContent.showLegend}
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

        <CollapsibleInputList title="Stack">
          <Form.Item className="w-full mb-2" name="stackId" id="stackId">
            <Select
              defaultValue={"None"}
              className="w-full min-h-[30px]"
              placeholder="Stacking"
              onChange={(e) => {
                setFormContent({ ...formContent, stackId: e });
              }}
            >
              <Select.Option key={undefined} value={undefined}>
                None
              </Select.Option>
              <Select.Option key={"stacked"} value={"stacked"}>
                Stacked
              </Select.Option>
            </Select>
          </Form.Item>
        </CollapsibleInputList>

        <CollapsibleInputList title="Series">
          {Object.keys(formContent.series).map((item, i) => (
            <div
              key={i}
              className="flex mb-2 gap-2 items-center justify-evenly"
            >
              <h1 className="inline-block whitespace-nowrap overflow-hidden w-[50%] text-ellipsis ">
                {item.toUpperCase()}
              </h1>
              <Form.Item className="w-full mb-2" name={"series" + i}>
                <Select
                  defaultValue={formContent.series[item]}
                  className="w-full min-h-[30px]"
                  placeholder="series type"
                  onChange={(e) => {
                    setFormContent({
                      ...formContent,
                      series: { ...formContent.series, [item]: e },
                    });
                  }}
                >
                  <Select.Option key={"bar"} value={"bar"}>
                    Bar
                  </Select.Option>
                  <Select.Option key={"area"} value={"area"}>
                    Area
                  </Select.Option>
                  <Select.Option key={"line"} value={"line"}>
                    Line
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
          ))}
        </CollapsibleInputList>
      </div>
      <RoundedButton
        title={"Save"}
        className="w-full mt-2"
        type="secondary"
        htmlType="submit"
        sm
      />
    </Form>
  );
};

export default AreaChartModalForm;
