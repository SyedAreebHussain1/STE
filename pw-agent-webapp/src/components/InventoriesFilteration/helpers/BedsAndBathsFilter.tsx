import { Form } from "antd";
import { useState } from "react";

type Props = { form: any; setState?: any };

const BedsAndBathsFilter = ({ form, setState }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Form.Item name="Bedrooms" required={false}>
        <Selection
          onChange={(val: any) => val && setState(true)}
          label="Bedrooms"
          items={["1", "2", "3", "4", "5", "6", "7", "8", "8+"]}
          form={form}
        />
      </Form.Item>
      <Form.Item name="Baths" required={false}>
        <Selection
          onChange={(val: any) => val && setState(true)}
          label="Baths"
          items={["1", "2", "3", "4", "5", "6", "7", "8", "8+"]}
          form={form}
        />
      </Form.Item>
    </div>
  );
};

function Selection(props: {
  label: string;
  items: string[];
  form: any;
  onChange?: any;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedClasses = "bg-primary text-white border-primary";
  const changeHandler = (index: any, val: any) => {
    setSelected(index);
    props.form.setFieldsValue({ [props.label]: val });
    props.onChange(index);
  };
  return (
    <div>
      <h5 className="mb-3 text-[1.0625rem] text-[#344054] font-medium">
        {props.label}
      </h5>
      <div className="flex flex-wrap items-center gap-[.625rem]">
        {props.items.map((item, i) => (
          <span
            key={item + i}
            onClick={() => changeHandler(i, item)}
            className={`cursor-pointer border ${
              selected === i
                ? selectedClasses
                : "border-borderColor text-[#344054]"
            } text-[1.0625rem] font-semibold w-[40px] h-[40px] rounded-full flex justify-center items-center`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BedsAndBathsFilter;
