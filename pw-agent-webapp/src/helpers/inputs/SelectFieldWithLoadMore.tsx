import { Button, Form, Select } from "antd";
import React, { ReactNode } from "react";

type Props = {
  onChange?: (data: { value: string; label: React.ReactNode }) => void;
  loading?: boolean;
  loadmore?: () => void;
  option?: ReactNode;
  name?: string;
  data: any[];
  disable?: boolean;
  multiple?: boolean;
  required: any;
};

const SelectFieldWithLoadMore = ({
  onChange,
  loading,
  loadmore,
  option,
  name,
  data,
  disable,
  multiple = false,
  required,
}: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: required,
          message: `Please input your ${name}!`,
        },
      ]}
    >
      <Select
        labelInValue
        allowClear
        className="w-full h-[50px]"
        onChange={onChange}
        disabled={data?.length > 0 && !disable ? false : true}
        mode={multiple ? "multiple" : undefined}
        dropdownRender={(menu) => {
          return (
            <>
              {menu}
              <div className="flex justify-center items-center">
                <Button
                  className="custom-btn mt-2 mb-2"
                  loading={loading}
                  onClick={loadmore}
                >
                  Load More
                </Button>
              </div>
            </>
          );
        }}
      >
        {option}
      </Select>
    </Form.Item>
  );
};
export default SelectFieldWithLoadMore;
