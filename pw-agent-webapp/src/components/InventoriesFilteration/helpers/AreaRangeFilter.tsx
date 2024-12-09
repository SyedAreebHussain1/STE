import { Col, Form, Row, Select } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import { Slider, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLandAreaApi } from "../../../redux/api/InventoryManagement";

type Props = {
  form: any;
  setState: any;
};

const AreaRangeFilter = ({ form, setState }: Props) => {
  const [rangeValue, setRangeValue] = useState([0, 0]);
  const [rangeLimit] = useState({ min: 0, max: 10000 });

  const handleStartAreaChange = (e: any) => {
    let number = parseInt(e.target.value);
    if (rangeLimit.max < number) {
      setRangeValue([rangeLimit.max, rangeValue[1]]);
      form.setFieldValue("startArea", rangeLimit.max);
      form.setFieldValue("area-range", [rangeLimit.max, rangeValue[1]]);
    } else if (rangeValue[1] < number) {
      form.setFieldValue("startArea", rangeValue[0]);
      return;
    } else if (number < 0 || Number.isNaN(number)) {
      form.setFieldValue("startArea", 0);
      setRangeValue([0, rangeValue[1]]);
      return;
    } else if (number > 0) {
      setRangeValue([number, rangeValue[1]]);
      form.setFieldValue("startArea", number);
      form.setFieldValue("area-range", [number, rangeValue[1]]);
      return;
    }
  };

  const handleEndAreaChange = (e: any) => {
    let number = parseInt(e.target.value);
    if (rangeLimit.max < number) {
      setRangeValue([rangeValue[0], rangeLimit.max]);
      form.setFieldValue("endArea", rangeLimit.max);
      form.setFieldValue("area-range", [rangeValue[0], rangeLimit.max]);
    } else if (rangeValue[0] > number) {
      form.setFieldValue("endArea", rangeValue[1]);
      return;
    } else if (number < 0 || Number.isNaN(number)) {
      form.setFieldValue("endArea", 0);
      setRangeValue([rangeValue[0], 0]);
      return;
    } else if (number > 0) {
      setRangeValue([rangeValue[0], number]);
      form.setFieldValue("endArea", number);
      form.setFieldValue("area-range", [rangeValue[0], number]);
      return;
    }
  };

  const handleRangeFieldChange = (value: any) => {
    if (value[0] || value[1]) {
      setState(true);
    }
    setRangeValue(value);
    form.setFieldValue("startArea", value[0]);
    form.setFieldValue("endArea", value[1]);
  };
  useEffect(() => {
    form.setFieldValue("area-range", [...rangeValue]);
    form.setFieldValue("startArea", rangeValue[0]);
    form.setFieldValue("endArea", rangeValue[1]);
  }, []);

  const dispatch = useDispatch();
  const getLandArea = useSelector((state: any) => state.getLandArea);
  useEffect(() => {
    getLandAreaApi(dispatch, { page: 1, limit: 10 });
  }, []);
  return (
    <>
      <Row gutter={12} justify={"center"} align={"middle"}>
        <Col span={24}>
          <Form.Item name="landAreaUnit" required={false}>
            <Select
              labelInValue
              className="w-full h-[50px]"
              placeholder="Select Land Area Unit"
              onChange={(val) => val && setState(true)}
            >
              {getLandArea?.data?.items.map((val: any, i: any) => (
                <Select.Option key={i} value={val.id}>
                  {val.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={11}>
          <TextInput
            name="startArea"
            isNumber
            disabled
            classNameFormItem="m-0"
            maxLength={rangeLimit.max.toString().length}
            onChange={(val: any) => handleStartAreaChange(val)}
          />
        </Col>
        <Col span={2}>
          <p className="text-center text-xs text-[#3D4350] font-medium">To</p>
        </Col>
        <Col span={11}>
          <TextInput
            name="endArea"
            isNumber
            disabled
            classNameFormItem="m-0"
            onChange={(val: any) => handleEndAreaChange(val)}
            maxLength={rangeLimit.max.toString().length}
          />
        </Col>
      </Row>
      <div className="mt-6">
        <Form.Item name={"area-range"}>
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

export default AreaRangeFilter;
