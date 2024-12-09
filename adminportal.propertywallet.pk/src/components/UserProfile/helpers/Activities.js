import React from 'react'
import { Row, Spin } from 'antd'
import ActivitiesCards from './ActivitiesCards'
// icon
import brochuregenterator from '../../assest/icon/brochuregenterator.png'
import paymentplancreator from '../../assest/icon/paymentplancreator.png'
import salequotation from '../../assest/icon/salequotation.png'
const Activities = () => {
  return (
    <div className="">
      <div className="p-[10px]">
        <div className="border bg-[#FFFFFF]" style={{ padding: '10px' }}>
          <div>
            <div className="font-semibold text-[18.75px] text-textcolor2">
              Activities
            </div>
          </div>
          <br />
          <Spin spinning="" delay={500}>
            <Row style={{ marginTop: '1%', width: '' }}>
              <ActivitiesCards
                title={'Payment Plan Creator'}
                img={paymentplancreator}
              />
              <ActivitiesCards
                title={'Brochure Generator'}
                img={brochuregenterator}
              />
              <ActivitiesCards title={'Post Creator'} img={salequotation} />
              <ActivitiesCards
                title={'Sale Quotation Maker'}
                img={salequotation}
              />
            </Row>
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default Activities
