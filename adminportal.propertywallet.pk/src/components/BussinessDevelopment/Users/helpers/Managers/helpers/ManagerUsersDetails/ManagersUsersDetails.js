import React, { useEffect, useState, useRef } from 'react'
import PageContainer from '../../../../../../../utils/components/PageContainer'
import PageHeader from '../../../../../../../utils/components/PageHeader'
import backimg from '../../../../../../assest/icon/back.png'
import SubscribersTable from './helpers/SubscribersTable'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ManagerInfo from './helpers/ManagerInfo'
import { getManagerDetailsApi } from '../../../../../../../redux/api/BDUsers'
import AffiliateList from './helpers/AffliatesList'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../../../../utils/utils'

const ManagersUsersDetails = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const { id } = params
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  // useEffect(() => {
  //   getManagerDetailsApi(dispatch, pageLimit, params?.id)
  // }, [pageLimit, params?.id])

  const debouncedGetManagerDetailsApi = useRef(
    debounce((dispatch, pageLimit, id, search, selectedFilter) => {
      getManagerDetailsApi(dispatch, pageLimit, id, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    if (params?.id) {
      debouncedGetManagerDetailsApi(
        dispatch,
        pageLimit,
        params?.id,
        search,
        selectedFilter
      )
    }
  }, [pageLimit, search, params?.id])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])
  return (
    <PageContainer>
      <PageHeader
        route={-1}
        titleHeadBtn={backimg}
        title={'Subscribers'}
        subTitle={'Details and activities of the subscribers'}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[26%_minmax(74%,_1fr)] gap-5">
        <ManagerInfo />
        <SubscribersTable pageLimit={pageLimit} setPageLimit={setPageLimit} />
        {params?.id && <AffiliateList id={params?.id} />}
      </div>
    </PageContainer>
  )
}

export default ManagersUsersDetails
