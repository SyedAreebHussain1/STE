import { Button, Form, Input, Select } from "antd";
import React, { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  onChange?: (data: { value: string; label: React.ReactNode }) => void;
  loading?: boolean;
  loadmore?: () => void;
  option?: ReactNode;
  name?: string;
  data: any[];
  disable?: boolean;
  multiple?: boolean;
  searching?: boolean;
  onSearch?: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchValue?: string | undefined;
  placeholder?: any;
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
  searching,
  onSearch,
  searchValue,
  placeholder,
}: Props) => {
  return (
    <Form.Item
      className="dark:bg-transparent"
      name={name}
      rules={[
        {
          required: true,
          message: `Please input your ${name}!`,
        },
      ]}
    >
      <Select
        placeholder={placeholder ? placeholder : ""}
        className="w-full h-[50px] dark:bg-transparent dark:border-dark-borderColor"
        onChange={onChange}
        disabled={
          data?.length > 0 && !disable
            ? false
            : searching && searchValue != undefined
            ? false
            : true
        }
        mode={multiple ? "multiple" : undefined}
        dropdownRender={(menu) => {
          return (
            <>
              {searching ? (
                <Input
                  className="mb-[10px] dark:bg-transparent"
                  suffix={<CiSearch />}
                  value={searchValue}
                  onChange={(e) => {
                    onSearch?.(e.target.value);
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                />
              ) : null}

              {menu}
              <div className="flex justify-center items-center">
                <Button
                  className="custom-btn mt-2 mb-2 dark:bg-dark-primary dark:text-white"
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
