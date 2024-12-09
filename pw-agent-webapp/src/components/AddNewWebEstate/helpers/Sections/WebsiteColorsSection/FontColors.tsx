import { Form, FormInstance, Input } from "antd";
import React from "react";

type Props = {
  form: FormInstance<any>;
};

const FontColors = (props: Props) => {
  const colors: string[] = ["#000000", "#ffffff"];
  const fontColor = Form.useWatch("fontColor", props.form);

  return (
    <div className="pl-4">
      <h5 className="text-[#292D35] text-base font-medium mb-4">Font Colors</h5>
      <div className="grid grid-cols-6 gap-8">
        {colors.map((color, i) => {
          return (
            <div
              key={color}
              onClick={() => {
                props.form.setFieldValue("fontColor", color);
              }}
              className={`flex cursor-pointer justify-center items-center rounded-full border-2 border-transparent w-[31.48px] h-[30.72px] ${
                color === fontColor ? "!border-primary" : ""
              }`}
            >
              <div
                className={`w-[23.48px] h-[22.72px] rounded-full border`}
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
        <Form.Item
          rules={[{ required: true }]}
          name={"fontColor"}
          initialValue={colors[0]}
        >
          <Input hidden />
        </Form.Item>
      </div>
    </div>
  );
};

export default FontColors;
