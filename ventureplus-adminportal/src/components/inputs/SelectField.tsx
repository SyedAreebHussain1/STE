import React from 'react'
import { Form, Select, Button } from 'antd'

const SelectField = ({
    name,
    required = true,
    loadMore = false,
    loading,
    handleLoadMore,
    options,
    placeholder,
    ...rest
}: any) => {
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
                placeholder={placeholder || 'select'}
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
                {options?.map((opt: any, i: number) => (
                    <Select.Option key={i} value={opt.value}>
                        {opt.label}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

export default SelectField 
