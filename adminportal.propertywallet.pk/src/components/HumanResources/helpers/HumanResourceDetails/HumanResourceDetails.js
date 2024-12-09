import React, { useEffect, useState, useRef } from 'react'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import { Spin } from 'antd'
import FreelancerInfo from './helpers/FreelancerInfo'
import backimg from '../../../assest/icon/back.png'
import SubscribersTable from './helpers/SubscribersTable'
import { getAllFreelancersByIdApi } from '../../../../redux/api/HR'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../utils/utils'

const HumanResourceDetails = () => {
  const dispatch = useDispatch()
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const params = useParams()
  const { id } = params
  // console.log('id',id)
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const debouncedGetAllFreelancersByIdApi = useRef(
    debounce((dispatch, pageLimit, id, search, selectedFilter) => {
      getAllFreelancersByIdApi(dispatch, pageLimit, id, search, selectedFilter)
    }, 500)
  ).current
  // useEffect(() => {
  //   if (params?.id) {
  //     getAllFreelancersByIdApi(
  //       dispatch,
  //       pageLimit,
  //       params?.id,
  //       search,
  //       selectedFilter
  //     );
  //   }
  // }, [params?.id, pageLimit]);
  useEffect(() => {
    scrollToTop()
    debouncedGetAllFreelancersByIdApi(
      dispatch,
      pageLimit,
      id,
      search,
      selectedFilter
    )
  }, [pageLimit, params?.id])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  useEffect(() => {
    setSearch('')
  }, [selectedFilter])
  // console.log('main',search)
  return (
    <PageContainer>
      <PageHeader
        route={-1}
        titleHeadBtn={backimg}
        title={'Subscribers'}
        subTitle={'Details and activities of the subscribers'}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[26%_minmax(74%,_1fr)] gap-5">
        <FreelancerInfo />
        <SubscribersTable
          search={search}
          selectedFilter={selectedFilter}
          setSearch={setSearch}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
        />
      </div>
    </PageContainer>
  )
}

export default HumanResourceDetails
