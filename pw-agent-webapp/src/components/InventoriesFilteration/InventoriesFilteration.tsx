import Button from "../../helpers/inputs/Button";
import FilterDropdown from "./helpers/FilterDropdown";
import { Form, Select } from "antd";
import PriceRangeFilter from "./helpers/PriceRangeFilter";
import PropertyTypeFilter from "./helpers/PropertyTypeFilter";
import BedsAndBathsFilter from "./helpers/BedsAndBathsFilter";
import AreaRangeFilter from "./helpers/AreaRangeFilter";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getProjectSubTypeApi,
  getProjectTypeApi,
} from "../../redux/api/InventoryManagement";

type Props = { filterHandler: any };

const InventoriesFilteration = (props: Props) => {
  const cityArray = ["Karachi", "Lahore", "Peshawar", "Islamabad"];
  const categoryArray = ["Home", "Plots", "Commercial"];
  const [form] = useForm();

  const onFinish = (val: any) => {
    props.filterHandler(val);
  };
  const [filterButtonDisable, setFilterButtonDisable] = useState(false);
  const dispatch = useDispatch();
  const getProjectType = useSelector((state: any) => state.getProjectType);
  const getProjectSubType = useSelector(
    (state: any) => state.getProjectSubType
  );

  useEffect(() => {
    getProjectTypeApi(dispatch, { page: 1, limit: 10 });
    getProjectSubTypeApi(dispatch, { page: 1, limit: 10 });
  }, []);

  return (
    <div className="bg-white mt-3 rounded-xl">
      <Form form={form} onFinish={onFinish}>
        <div className="flex items-center p-3 justify-between border-b border-borderColor">
          <h5 className="text-[#667085] font-medium text-base">Filters</h5>
          <div className="flex gap-3 items-center">
            <button
              className={`text-[#F04438] text-base font-medium ${
                !filterButtonDisable ? "hidden" : "block"
              }`}
              onClick={(e: any) => {
                setFilterButtonDisable(false);
                e.stopPropagation();
                form.resetFields();
              }}
            >
              Reset
            </button>
            <Button
              label="Apply"
              variant="filled"
              className="!p-3"
              disabled={!filterButtonDisable}
            />
          </div>
        </div>
        <FilterDropdown label="Locations">
          <Form.Item name="city" required={false}>
            <Select
              labelInValue
              className="w-full h-[50px]"
              onChange={(val) => val && setFilterButtonDisable(true)}
            >
              {cityArray.map((val: any, i: any) => (
                <Select.Option key={i} value={val}>
                  {val}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </FilterDropdown>
        <FilterDropdown label="Price Range">
          <PriceRangeFilter form={form} setState={setFilterButtonDisable} />
        </FilterDropdown>
        <FilterDropdown label="Property Type">
          <Form.Item name="projectType" required={false}>
            <Select
              labelInValue
              className="w-full h-[50px]"
              onChange={(val) => val && setFilterButtonDisable(true)}
            >
              {getProjectType?.data?.items.map((val: any, i: any) => (
                <Select.Option key={i} value={val.id}>
                  {val.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </FilterDropdown>
        <FilterDropdown label="Project Sub Type">
          <Form.Item name="projectSubType" required={false}>
            <Select
              labelInValue
              className="w-full h-[50px]"
              onChange={(val) => val && setFilterButtonDisable(true)}
            >
              {getProjectSubType?.data?.items.map((val: any, i: any) => (
                <Select.Option key={i} value={val.id}>
                  {val.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </FilterDropdown>
        <FilterDropdown label="Beds and Baths">
          <BedsAndBathsFilter form={form} setState={setFilterButtonDisable} />
        </FilterDropdown>
        <FilterDropdown label="Area Range">
          <AreaRangeFilter form={form} setState={setFilterButtonDisable} />
        </FilterDropdown>
      </Form>
    </div>
  );
};

export default InventoriesFilteration;
