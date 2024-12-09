import { Form, Select, Button } from 'antd'
import React from 'react'

const SelectField = ({
  name,
  required = true,
  loadMore = false,
  loading,
  handleLoadMore,
  options,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      className="mt-[10px]"
      rules={[
        {
          required: required,
          message: 'required',
        },
      ]}
    >
      <Select
        className="rounded-[8px]"
        size="large"
        dropdownRender={(menu) => {
          return (
            <>
              {menu}
              {loadMore && (
                <div className="flex justify-center items-center">
                  <Button
                    className="custom-btn mt-2 mb-2"
                    loading={loading}
                    onClick={handleLoadMore}
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          )
        }}
        {...rest}
      >
        {options?.map((opt, i) => (
          <Select.Option key={i} value={opt.value}>
            {opt.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export { SelectField }
