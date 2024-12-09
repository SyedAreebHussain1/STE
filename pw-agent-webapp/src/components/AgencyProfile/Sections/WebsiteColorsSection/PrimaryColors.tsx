import { Button, ColorPicker, Form, FormInstance, Input } from "antd";
import ColorPickerIcon from "../../../../assets/color-picker-icon.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  form: FormInstance<any>;
};

const PrimaryColors = (props: Props) => {
  const getAgencyDetails = useSelector((state: any) => state.getAgencyDetails);

  useEffect(() => {
    if (getAgencyDetails?.data) {
      if (!colors.includes(`#${getAgencyDetails?.data?.primaryColor}`)) {
        setCustom(`#${getAgencyDetails?.data?.primaryColor}`);
      }
    }
  }, [getAgencyDetails]);
  const [custom, setCustom] = useState("");
  const colors: string[] = [
    "#AF425C",
    "#9747FF",
    "#7EDFF1",
    "#000000",
    "#12B76A",
    "#DE8447",
    "#185538",
    "#5142AF",
    "#20BCFF",
    "#3A3A3A",
  ];
  const primaryColor = Form.useWatch("primaryColor", props.form);

  return (
    <>
      <h5 className="text-[#292D35] text-base font-medium mb-4">
        Primary Colors
      </h5>
      <div className="grid grid-cols-6 gap-3">
        {colors.map((color, i) => {
          return (
            <div
              key={color}
              onClick={() => {
                props.form.setFieldValue("primaryColor", color);
              }}
              className={`flex cursor-pointer justify-center items-center rounded-full border-2 border-transparent w-[31.48px] h-[30.72px] ${
                color === primaryColor ? "!border-primary" : ""
              }`}
            >
              <div
                className={`w-[23.48px] h-[22.72px] rounded-full`}
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
        {custom && (
          <div
            key={custom}
            onClick={() => {
              props.form.setFieldValue("primaryColor", custom);
            }}
            className={`flex cursor-pointer justify-center items-center rounded-full border-2 border-transparent w-[31.48px] h-[30.72px] ${
              custom === primaryColor ? "!border-primary" : ""
            }`}
          >
            <div
              className={`w-[23.48px] h-[22.72px] rounded-full`}
              style={{ backgroundColor: custom }}
            />
          </div>
        )}
        <Form.Item
          rules={[{ required: true }]}
          name={"primaryColor"}
          initialValue={colors[0]}
        >
          <Input hidden />
        </Form.Item>
      </div>
      <ColorPicker
        value={primaryColor}
        onChange={(e) => {
          if (!colors.includes(e.toHexString())) {
            setCustom(e.toHexString());
          }

          props.form.setFieldValue("primaryColor", e.toHexString());
        }}
      >
        <Button className="h-[48px] px-4 flex items-center gap-1 text-base font-medium">
          <span>
            <img src={ColorPickerIcon} alt="" />
          </span>{" "}
          <span>Color Picker</span>
        </Button>
      </ColorPicker>
    </>
  );
};

export default PrimaryColors;
