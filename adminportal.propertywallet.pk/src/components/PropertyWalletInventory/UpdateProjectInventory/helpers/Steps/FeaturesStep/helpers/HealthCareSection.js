import React, { useState, useEffect } from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { Col, Row, Divider } from 'antd'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import CheckboxField from '../../../../../../../utils/components/InputFields/CheckboxField'
import TextField from '../../../../../../../utils/components/InputFields/TextField'
import { getOptionsOfSelectByName } from '../../../../../../../utils/utils'
import { SelectField } from '../../../../../../../utils/components/InputFields/SelectField'

const HealthCareSection = ({ fields }) => {
  return fields.length > 0 ? (
    <>
      <SectionContainer
        title="Health and Care"
        subtitle="Set the features according to you property"
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
                          value: field.name.split('_')[0],
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

export default HealthCareSection
