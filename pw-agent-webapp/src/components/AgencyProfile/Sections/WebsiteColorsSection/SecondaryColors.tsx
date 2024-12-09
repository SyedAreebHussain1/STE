import { Button, ColorPicker, Form, FormInstance, Input } from "antd";
import ColorPickerIcon from "../../../../assets/color-picker-icon.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  form: FormInstance<any>;
};

const SecondaryColors = (props: Props) => {
  const [custom, setCustom] = useState("");
  const getAgencyDetails = useSelector((state: any) => state.getAgencyDetails);

  useEffect(() => {
    if (getAgencyDetails?.data) {
      if (!colors.includes(`#${getAgencyDetails?.data?.secondaryColor}`)) {
        setCustom(`#${getAgencyDetails?.data?.secondaryColor}`);
      }
    }
  }, [getAgencyDetails]);

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
  const secondaryColor = Form.useWatch("secondaryColor", props.form);

  return (
    <>
      <h5 className="text-[#292D35] text-base font-medium mb-4">
        Secondary Colors
      </h5>
      <div className="grid grid-cols-6 gap-3">
        {colors.map((color, i) => {
          return (
            <div
              key={color}
              onClick={() => {
                props.form.setFieldValue("secondaryColor", color);
              }}
              className={`flex cursor-pointer justify-center items-center rounded-full border-2 border-transparent w-[31.48px] h-[30.72px] ${
                color === secondaryColor ? "!border-primary" : ""
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
            onClick={() => {
              props.form.setFieldValue("secondaryColor", custom);
            }}
            className={`flex cursor-pointer justify-center items-center rounded-full border-2 border-transparent w-[31.48px] h-[30.72px] ${
              custom === secondaryColor ? "!border-primary" : ""
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
          name={"secondaryColor"}
          initialValue={colors[0]}
        >
          <Input hidden />
        </Form.Item>
      </div>
      <ColorPicker
        value={secondaryColor}
        onChange={(e) => {
          if (!colors.includes(e.toHexString())) {
            setCustom(e.toHexString());
          }
          props.form.setFieldValue("secondaryColor", e.toHexString());
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

export default SecondaryColors;
