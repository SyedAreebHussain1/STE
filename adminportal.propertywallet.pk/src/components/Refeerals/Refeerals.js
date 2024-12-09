import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageContainer from '../../utils/components/PageContainer'
import PageHeadRefeerals from './helpers/PageHeadRefeerals'
import RefeeralsTable from './helpers/RefeeralsTable'
import { clearGetReferral } from '../../redux/slices/Refeerals/getReferralSlice'

const Refeerals = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearGetReferral())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeadRefeerals
        title={'Referrals'}
        subTitle={'Find all of your projects'}
      />
      <RefeeralsTable />
    </PageContainer>
  )
}

export default Refeerals
