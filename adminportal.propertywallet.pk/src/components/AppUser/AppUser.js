import React, { useState } from 'react'
import { Button } from 'antd'
import PageHeader from '../../utils/components/PageHeader'
import PageContainer from '../../utils/components/PageContainer'
import AppUserTable from './helpers/AppUserTable'
import couldIcon from '../../components/assest/icon/cloudicongreen.png'
import { useSelector } from 'react-redux'
import { downloadExcelFile } from '../../utils/utils'
import moment from 'moment'
import { getAllAuthUserNoPaginationApi } from '../../redux/api/AppUsers'
import { useDispatch } from 'react-redux'

const AppUser = () => {
  const dispatch = useDispatch()
  const [exportExcel, setExportExcel] = useState(false)
  function setExportExcelFalse() {
    setExportExcel(false)
  }
  const exportCould = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2 "
        onClick={() => {
          setExportExcel(true)
        }}
      >
        <img src={couldIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'All Users'}
        subTitle={'Details of All Mobile Users'}
        extra={exportCould}
      />
      <AppUserTable
        exportExcel={exportExcel}
        setExportExcelFalse={setExportExcelFalse}
      />
    </PageContainer>
  )
}

export default AppUser
