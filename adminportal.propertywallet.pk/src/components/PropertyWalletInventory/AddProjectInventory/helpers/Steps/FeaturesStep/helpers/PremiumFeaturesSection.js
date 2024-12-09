import React from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { Col, Divider, Row } from 'antd'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import TextField from '../../../../../../../utils/components/InputFields/TextField'
import CheckboxField from '../../../../../../../utils/components/InputFields/CheckboxField'
import { SelectField } from '../../../../../../../utils/components/InputFields/SelectField'
import InfoIcon from '../../../../../../assest/icon/info.png'
import { getOptionsOfSelectByName } from '../../../../../../../utils/utils'

const PremiumFeaturesSection = ({ fields }) => {
  return fields.length > 0 ? (
    <>
      <SectionContainer
        title="Premium Features"
        subtitle="Set the features according to you property"
        extras={
          <div className="flex gap-[10px] bg-[#0000000f] justify-center py-[10px] mt-[18px] max-w-[266px]">
            <span>
              <img src={InfoIcon} alt="" />
            </span>
            <span className="text=[#667085] text-[12px]">
              Premium features are charged extra
            </span>
          </div>
        }
      >
        <Row gutter={16}>
          {fields &&
            fields.length > 0 &&
            fields.map((field, i) => {
              if (field.type === 'text') {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <InputLabel>{field.label}</InputLabel>
                    <TextField name={field.name} required={false} />
                  </Col>
                )
              } else if (field.type === 'number') {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <InputLabel>{field.label}</InputLabel>
                    <NumberField name={field.name} required={false} />
                  </Col>
                )
              } else if (field.type === 'select') {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <InputLabel>{field.label}</InputLabel>
                    <SelectField
                      name={field.name}
                      options={getOptionsOfSelectByName(field.name)}
                      required={false}
                    />
                  </Col>
                )
              }
            })}
        </Row>
        <Row gutter={16}>
          {fields &&
            fields.length > 0 &&
            fields.map((field, i) => {
              if (field.type === 'bool') {
                return (
                  <Col xs={24} lg={8} key={i}>
                    <CheckboxField
                      name={field.name}
                      options={[
                        {
                          label: field.label,
                          value: field.label,
                        },
                      ]}
                    />
                  </Col>
                )
              }
            })}
        </Row>
      </SectionContainer>
      <Divider />
    </>
  ) : (
    ''
  )
}

export default PremiumFeaturesSection
