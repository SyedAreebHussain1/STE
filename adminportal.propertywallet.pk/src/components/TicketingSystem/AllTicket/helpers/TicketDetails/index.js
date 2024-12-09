import React, { useEffect } from 'react'
import PageContainer from '../../../../../utils/components/PageContainer'
import PageHeader from '../../../../../utils/components/PageHeader'
import TicketInfo from './helpers/TicketInfo'
import TicketUserList from './helpers/TicketUserList'
import { useParams } from 'react-router-dom'
import { getTicketDataByIdApi } from '../../../../../redux/api/TicketingSystem/AllTicket'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import backimg from '../../../../assest/icon/back.png'

import ImageSlider from './helpers/ImageSlider'

const TicketDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const getTicketDataById = useSelector((state) => state?.getTicketDataById)
  useEffect(() => {
    if (id) {
      getTicketDataByIdApi(dispatch, id)
    }
  }, [id, dispatch])
  return (
    <PageContainer>
      <PageHeader
        route={-1}
        titleHeadBtn={backimg}
        title={'Ticket Details'}
        subTitle={'Details and activities of the Tickets'}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[26%_minmax(74%,_1fr)] gap-5">
        <TicketInfo data={getTicketDataById?.data?.data} />
        {getTicketDataById?.data?.data?.ticketDocs?.length > 0 && (
          <ImageSlider data={getTicketDataById?.data?.data} />
        )}

        <TicketUserList dataGet={getTicketDataById?.data?.data?.ticketAssign} />
      </div>
    </PageContainer>
  )
}

export default TicketDetails
