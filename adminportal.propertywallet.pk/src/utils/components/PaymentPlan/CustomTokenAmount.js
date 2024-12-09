import { Checkbox, Col, Form, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import CheckboxField from '../InputFields/CheckboxField'
import NumberField from '../InputFields/NumberField'
import InputLabel from '../InputFields/InputLabel'
import { CloseOutlined } from '@ant-design/icons'
import { errorMessage } from '../../message'

const CustomTokenAmount = ({
  selectedOptions,
  setSelectedOptions,
  optionsPrev,
  dep,
}) => {
  const [options, setOptions] = useState([])
  const [tokenVal, setTokenVal] = useState('')

  useEffect(() => {
    if (optionsPrev) {
      setOptions([...optionsPrev])
      setSelectedOptions([...optionsPrev])
    }
  }, [dep])
  console.log(optionsPrev)
  function handleCheckboxChange(e) {
    if (selectedOptions.includes(e.target.value)) {
      setSelectedOptions([
        ...selectedOptions.filter((item) => item !== e.target.value),
      ])
    } else {
      setSelectedOptions((prev) => [...prev, e.target.value])
    }
  }
  function handleDelete(value) {
    if (selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions.filter((item) => item !== value)])
    }
    setOptions([...options.filter((item) => item !== value)])
  }

  return (
    <>
      <Row gutter={16}>
        <Col xs={12} lg={12}>
          <InputLabel>Custom Token Amount</InputLabel>
          <Input
            className="w-full lg:w-[] h-[] rounded-[8px]"
            size="large"
            onKeyPress={(event) => {
              if (!/[0-9,.]/.test(event.key)) {
                event.preventDefault()
              }
            }}
            value={tokenVal}
            onChange={(e) => {
              setTokenVal(e.target.value)
            }}
            onPressEnter={(e) => {
              if (options.filter((i) => i === e.target.value).length > 0) {
                errorMessage('Already Exists')
                return
              }
              const value = e.target.value
              setOptions((prev) => [...prev, value])
              setTokenVal('')
            }}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} lg={24}>
          <div
            className="flex flex-wrap mt-3"
            style={{
              gap: 30,
            }}
          >
            {options.map((option, i) => {
              return (
                <div className="relative">
                  <Checkbox
                    key={option}
                    value={option}
                    id={option}
                    checked={selectedOptions.includes(option)}
                    onChange={handleCheckboxChange}
                    style={
                      selectedOptions.includes(option)
                        ? {
                            borderRadius: '44px',
                            color: '#292D35',
                            padding: '10px 20px',
                            marginBottom: '30px',
                            fontSize: '15px',
                            backgroundColor: 'rgba(39, 163, 163, 0.05)',
                            border: '1px solid #27A3A3',
                          }
                        : {
                            border: '1px solid #E3E3E3',
                            borderRadius: '44px',
                            color: '#292D35',
                            padding: '10px 20px',
                            backgroundColor: '#fff',
                            marginBottom: '30px',
                            fontSize: '15px',
                          }
                    }
                  >
                    PKR {option}
                  </Checkbox>

                  <span
                    className="absolute cursor-pointer"
                    style={{
                      transform: 'translateY(-50%)',
                      top: '30%',
                      right: '9px',
                    }}
                    onClick={() => {
                      handleDelete(option)
                    }}
                  >
                    <CloseOutlined />
                  </span>
                </div>
              )
            })}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CustomTokenAmount
