import { Col, Form, Row } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import { Slider, Switch } from "antd";
import { useEffect, useState } from "react";

type Props = { form: any; setState?: any };

const PriceRangeFilter = ({ form, setState }: Props) => {
  const [rangeValue, setRangeValue] = useState([0, 0]);
  const [rangeLimit] = useState({ min: 0, max: 1000000 });

  const handleMinPriceChange = (e: any) => {
    let number = parseInt(e.target.value);
    if (rangeLimit.max < number) {
      setRangeValue([rangeLimit.max, rangeValue[1]]);
      form.setFieldValue("startPrice", rangeLimit.max);
      form.setFieldValue("price-range", [rangeLimit.max, rangeValue[1]]);
    } else if (rangeValue[1] < number) {
      form.setFieldValue("startPrice", rangeValue[0]);
      return;
    } else if (number < 0 || Number.isNaN(number)) {
      form.setFieldValue("startPrice", 0);
      setRangeValue([0, rangeValue[1]]);
      return;
    } else if (number > 0) {
      setRangeValue([number, rangeValue[1]]);
      form.setFieldValue("startPrice", number);
      form.setFieldValue("price-range", [number, rangeValue[1]]);
      return;
    }
  };

  const handleMaxPriceChange = (e: any) => {
    let number = parseInt(e.target.value);
    if (rangeLimit.max < number) {
      setRangeValue([rangeValue[0], rangeLimit.max]);
      form.setFieldValue("endPrice", rangeLimit.max);
      form.setFieldValue("price-range", [rangeValue[0], rangeLimit.max]);
    } else if (rangeValue[0] > number) {
      form.setFieldValue("endPrice", rangeValue[1]);
      return;
    } else if (number < 0 || Number.isNaN(number)) {
      form.setFieldValue("endPrice", 0);
      setRangeValue([rangeValue[0], 0]);
      return;
    } else if (number > 0) {
      setRangeValue([rangeValue[0], number]);
      form.setFieldValue("endPrice", number);
      form.setFieldValue("price-range", [rangeValue[0], number]);
      return;
    }
  };

  const handleRangeFieldChange = (value: any) => {
    if (value[0] || value[1]) {
      setState(true);
    }
    setRangeValue(value);
    form.setFieldValue("startPrice", value[0]);
    form.setFieldValue("endPrice", value[1]);
  };
  useEffect(() => {
    form.setFieldValue("price-range", [...rangeValue]);
    form.setFieldValue("startPrice", rangeValue[0]);
    form.setFieldValue("endPrice", rangeValue[1]);
  }, []);

  return (
    <>
      <Row gutter={12} justify={"center"} align={"middle"}>
        <Col span={11}>
          <TextInput
            name="startPrice"
            isNumber
            disabled
            classNameFormItem="m-0"
            maxLength={rangeLimit.max.toString().length}
            onChange={(val: any) => handleMinPriceChange(val)}
          />
        </Col>
        <Col span={2}>
          <p className="text-center text-xs text-[#3D4350] font-medium">To</p>
        </Col>
        <Col span={11}>
          <TextInput
            name="endPrice"
            isNumber
            disabled
            classNameFormItem="m-0"
            maxLength={rangeLimit.max.toString().length}
            onChange={(val: any) => handleMaxPriceChange(val)}
          />
        </Col>
      </Row>
      <div className="mt-6">
        <Form.Item name={"price-range"}>
          <Slider
            range
            defaultValue={[0, 0]}
            min={rangeLimit.min}
            max={rangeLimit.max}
            onChange={(val: any) => handleRangeFieldChange(val)}
          />
        </Form.Item>
      </div>
    </>
  );
};

export default PriceRangeFilter;
