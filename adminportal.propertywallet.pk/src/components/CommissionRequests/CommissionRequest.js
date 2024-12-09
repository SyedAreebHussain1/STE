import React from 'react'
import { Button } from 'antd'
import CommissionRequestsTable from './helpers/CommissionRequestsTable'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import couldIcon from '../../components/assest/icon/cloud.png'
import PageHeadCommissionRequests from './helpers/PageHeadCommissionRequests'
import { useSelector } from 'react-redux'
import { downloadExcelFile } from '../../utils/utils'
import moment from 'moment'
import { withDrawRequetNoPaginationApi } from '../../redux/api/CommissionRequest'
import { useDispatch } from 'react-redux'

const CommissionRequest = () => {
  const dispatch = useDispatch()
  function onSuccess(data) {
    // downloadExcelFile(data?.data, 'commission')
    downloadExcelFile(
      data?.data?.map((item) => {
        return {
          agentId: item?.createdBy,
          commissionAmount: item?.amount,
          bankName: item?.bankName,
          accountHolderName: item?.accountTitleName,
          accountNo: item?.accountNo,
        }
      }),
      'commission'
    )
  }

  const handleOnClick = () => {
    // toggleAdd()
    withDrawRequetNoPaginationApi(dispatch, onSuccess)
  }
  const exportCould = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handleOnClick}
      >
        <img style={{ filter: 'saturate(3)' }} src={couldIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'Commission Requests'}
        subTitle={'Find all of your commission requests'}
        extra={exportCould}
      />
      <CommissionRequestsTable />
    </PageContainer>
  )
}

export default CommissionRequest
