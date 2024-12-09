import React, { useEffect, useState, useRef } from 'react'
import PageContainer from '../../../../../../../utils/components/PageContainer'
import PageHeader from '../../../../../../../utils/components/PageHeader'
import backimg from '../../../../../../assest/icon/back.png'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import AffiliateTable from './helpers/AffiliateTable'
import AffiliateInfo from './helpers/AffiliateInfo'
import { getAffiliateDetailsApi } from '../../../../../../../redux/api/BDUsers'
import SignupList from './helpers/SignupList'
import { scrollToTop } from '../../../../../../../utils/utils'
import { debounce } from 'lodash'

const AffiliateUsersDetails = () => {
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
  //   if (params?.id) {
  //     getAffiliateDetailsApi(dispatch, pageLimit, params?.id)
  //   }
  // }, [params?.id, pageLimit])

  const debouncedGetAffiliateDetailsApi = useRef(
    debounce((dispatch, pageLimit, id, search, selectedFilter) => {
      getAffiliateDetailsApi(dispatch, pageLimit, id, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    if (params?.id) {
      debouncedGetAffiliateDetailsApi(
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
        <AffiliateInfo />
        <AffiliateTable
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          search={search}
          setSearch={setSearch}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {params?.id && <SignupList id={params?.id} />}
      </div>
    </PageContainer>
  )
}

export default AffiliateUsersDetails
