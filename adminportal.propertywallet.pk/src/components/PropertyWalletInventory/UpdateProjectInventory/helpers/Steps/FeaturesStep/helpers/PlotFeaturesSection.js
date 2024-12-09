import React, { useState, useEffect } from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { Col, Row } from 'antd'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import Divider from 'antd'
import CheckboxField from '../../../../../../../utils/components/InputFields/CheckboxField'
import TextField from '../../../../../../../utils/components/InputFields/TextField'
import { getOptionsOfSelectByName } from '../../../../../../../utils/utils'
import { SelectField } from '../../../../../../../utils/components/InputFields/SelectField'

const PlotFeaturesSection = ({ fields }) => {
  return fields.length > 0 ? (
    <SectionContainer
      title="Plot Features"
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
      {/* <Row gutter={16}>
            <Col xs={24}  lg={24}>
                <CheckboxField
                    name={"featuresList4"}
                    options={[
                        {
                            label: "Broadband Internet Access",
                            value: "Broadband Internet Access",
                        },
                        {
                            label: "Satellite or Cable TV Ready",
                            value: "Satellite or Cable TV Ready",
                        },
                        {
                            label: "Intercom",
                            value: "Intercom",
                        },
                        {
                            label: "ATM Machine",
                            value: "ATM Machine",
                        },
                        {
                            label: "Conference Room",
                            value: "Conference Room",
                        }
                    ]}
                />
                <CheckboxField
                    name={"featuresList5"}
                    options={[
                        {
                            label: "Business Center or Media Room",
                            value: "Business Center or Media Room",
                        },
                    ]}
                />
            </Col>
        </Row> */}
    </SectionContainer>
  ) : (
    ''
  )
}

export default PlotFeaturesSection
