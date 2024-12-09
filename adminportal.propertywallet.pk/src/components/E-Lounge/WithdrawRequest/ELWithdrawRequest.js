import React, { useState } from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import WithdrawRequestTable from './helpers/WithdrawRequestTable'
import { Tabs } from 'antd'
import ManagmentWithdrawRequestTable from './helpers/ManagmentWithdrawRequestTable'
const ELWithdrawRequest = () => {
  const [excelSheetData, setExcelSheetData] = useState([])

  // const withdrawList = useSelector((state) => state.withdrawList)

  // const exportExcel = (
  //   <div>
  //     <Button
  //       className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
  //       onClick={() => {
  //         if (excelSheetData.length > 0) {
  //           downloadExcelFile(
  //             withdrawList?.data?.data?.items.map((item) => {
  //               return {
  //                 id: item?.id,
  //                 accountNumber: item?.accountNumber,
  //                 accountTitle: item?.accountTitle,
  //                 freeLancer: item?.freeLancer?.refCode,
  //                 bankName: item?.bankName,
  //                 withdrawDate: item?.createdAt?.split('T')[0],
  //                 amount: item?.freeLancerWalletReserveAmount?.amount,
  //               }
  //             }),
  //             'FreelanceRequests'
  //           )
  //         } else {
  //           errorMessage('Data not found')
  //         }
  //       }}
  //     >
  //       <img style={{ filter: 'saturate(3)' }} src={couldIcon} alt="" />
  //       <span>Export</span>
  //     </Button>
  //   </div>
  // )
  // console.log('excelSheetData', excelSheetData)
  const items = [
    {
      label: 'Sales User Withdraw Requests',
      key: '1',
      children: <WithdrawRequestTable setExcelSheetData={setExcelSheetData} />,
    },
    {
      label: 'Managment User Withdraw Requests',
      key: '2',
      children: <ManagmentWithdrawRequestTable />,
    },
  ]
  return (
    <PageContainer>
      <PageHeader
        title={'E-Lounge Withdraw Requests'}
        subTitle={'Find all of your withdraw requests'}
        // extra={exportExcel}
      />
      <Tabs size="large" defaultActiveKey="1" items={items} />
      {/* <WithdrawRequestTable setExcelSheetData={setExcelSheetData} /> */}
    </PageContainer>
  )
}

export default ELWithdrawRequest
