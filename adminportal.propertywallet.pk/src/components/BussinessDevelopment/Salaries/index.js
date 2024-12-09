import React, { useEffect, useState } from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import { Button, Spin, Tabs } from 'antd'
import { useModal } from '../../../utils/hooks/useModal'
import addIcon from '../../assest/icon/addicon.png'
import RealeaseHistory from './helpers/RealeaseHistory/RealeaseHistory'
import ReleaseSalaries from './helpers/ReleaseSalaries/ReleaseSalaries'
import { postReleaseSalariesrApi } from '../../../redux/api/BDSalary'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { downloadExcelFile } from '../../../utils/utils'
import moment from 'moment'

const Salaries = () => {
  const [tabKey, setTabKey] = useState(1)
  const [rowIdRelease, setRowIdRelease] = useState([])
  const postReleaseSalaries = useSelector((state) => state?.postReleaseSalaries)
  const getReleaseHistory = useSelector((state) => state?.getReleaseHistory)

  const dispatch = useDispatch()
  const onSuccess = () => {
    setRowIdRelease([])
  }
  function handler() {
    const body = { bdUserIds: rowIdRelease }
    postReleaseSalariesrApi(dispatch, body, onSuccess)
  }

  function ExcelSheetHandler() {
    downloadExcelFile(
      getReleaseHistory?.data?.data?.items?.map((item, i) => {
        return {
          key: item?.id,
          sno: i + 1 || '-',
          name: item?.bdUser?.fullName || '-',
          amount: item?.amount,
          refCode: item?.bdUser?.refCode || '-',
          accountNumber: item?.bdUser?.accountNumber || '-',
          bankName: item?.bankName || '-',
          date: moment(item.createdAt).format('DD-MM-YYYY') || '-',
        }
      }),
      'Release History'
    )
  }

  const items = [
    {
      label: 'Release Salaries',
      key: '1',
      children: (
        <ReleaseSalaries setRowId={setRowIdRelease} rowId={rowIdRelease} />
      ),
    },
    {
      label: 'Release History',
      key: '2',
      children: <RealeaseHistory />,
    },
  ]
  const extra1 = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handler}
        disabled={rowIdRelease.length <= 0}
        loading={postReleaseSalaries?.loading}
      >
        <img src={addIcon} alt="" />
        <span>Release</span>
      </Button>
    </div>
  )
  const extra2 = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={ExcelSheetHandler}
        disabled={getReleaseHistory?.data ? false : true}
      >
        <img src={addIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  return (
    <div style={{ userSelect: 'none' }}>
      <PageContainer>
        <PageHeader
          title={'Salaries'}
          subTitle={'All Bussiness Development Salaries'}
          extra={tabKey == 1 ? extra1 : extra2}
        />
        <Tabs
          size="large"
          onChange={(e) => setTabKey(e)}
          defaultActiveKey="1"
          items={items}
        />
      </PageContainer>
    </div>
  )
}
export default Salaries
