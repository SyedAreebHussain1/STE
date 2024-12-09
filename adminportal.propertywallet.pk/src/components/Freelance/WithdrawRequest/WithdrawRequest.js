import React, { useState } from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import WithdrawRequestTable from './helpers/WithdrawRequestTable'
import { Button } from 'antd'
import couldIcon from '../../../components/assest/icon/cloud.png'
import { downloadExcelFile } from '../../../utils/utils'
import { errorMessage } from '../../../utils/message'
import { useSelector } from 'react-redux'
import moment from 'moment'
const WithdrawRequest = () => {
  const [excelSheetData, setExcelSheetData] = useState([])

  const withdrawList = useSelector((state) => state.withdrawList)

  console.log(withdrawList)
  const exportExcel = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={() => {
          if (excelSheetData.length > 0) {
            downloadExcelFile(
              withdrawList?.data?.data?.items.map((item) => {
                return {
                  id: item?.id,
                  accountNumber: item?.accountNumber,
                  accountTitle: item?.accountTitle,
                  freeLancer: item?.freeLancer?.refCode,
                  bankName: item?.bankName,
                  withdrawDate: item?.createdAt?.split('T')[0],
                  amount: item?.freeLancerWalletReserveAmount?.amount,
                }
              }),
              'FreelanceRequests'
            )
          } else {
            errorMessage('Data not found')
          }
        }}
      >
        <img style={{ filter: 'saturate(3)' }} src={couldIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  // console.log('excelSheetData', excelSheetData)
  return (
    <PageContainer>
      <PageHeader
        title={'Request List'}
        subTitle={'Find all of your withdraw requests'}
        extra={exportExcel}
      />
      <WithdrawRequestTable setExcelSheetData={setExcelSheetData} />
    </PageContainer>
  )
}

export default WithdrawRequest
