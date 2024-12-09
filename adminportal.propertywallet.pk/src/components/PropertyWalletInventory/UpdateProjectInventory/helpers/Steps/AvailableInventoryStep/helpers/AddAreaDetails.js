import React, { useEffect, useRef, useState } from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { Button, Col, Row } from 'antd'
import CheckboxField from '../../../../../../../utils/components/InputFields/CheckboxField'
import {
  deletePlotApi,
  getAllPlotsApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import PlusIcon from '../../../../../../assest/icon/plus-icon.png'
import { useModal } from '../../../../../../../utils/hooks/useModal'
import AddPlotDetail from './AddPlotDetail'
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons'
import * as XLSX from 'xlsx'

const AddAreaDetails = ({ current }) => {
  const [visible, toggle] = useModal()
  const createPlot = useSelector((state) => state.createPlot)
  const dispatch = useDispatch()
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updateProjectInventoryStepOne = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const deletePlot = useSelector((state) => state.deletePlot)
  const getAllPlots = useSelector((state) => state.getAllPlots)
  const projectId =
    updateProjectInventoryStepOne?.data?.data?.propertyWalletProjectId ||
    createProjectInventoryStepOne?.data?.data?.propertyWalletProjectId
  const noOfUnit =
    updateProjectInventoryStepOne?.data?.data?.noOfUnit ||
    createProjectInventoryStepOne?.data?.data?.noOfUnit
  const propertyWalletInventoryId =
    updateProjectInventoryStepOne?.data?.data?.id ||
    createProjectInventoryStepOne?.data?.data?.id
  useEffect(() => {
    if (current === 3) {
      getAllPlotsApi(dispatch, projectId)
    }
  }, [current, createPlot, deletePlot])

  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  useEffect(() => {
    if (getAllPlots?.data) {
      setOptions(
        getAllPlots?.data?.data.map((item) => {
          return {
            label: item.title,
            value: item.id,
            premiumCharges: item.premiumCharges ? item.premiumCharges : false,
            checked: false,
            props: {
              style: selectedOptions.includes(item.id)
                ? {
                    borderRadius: '44px',
                    color: '#292D35',
                    padding: '10px 20px',
                    marginBottom: '30px',
                    fontSize: '15px',
                    backgroundColor: 'rgba(39, 163, 163, 0.05)',
                    border: '1px solid #27A3A3',
                  }
                : {
                    border: '1px solid #E3E3E3',
                    borderRadius: '44px',
                    color: '#292D35',
                    padding: '10px 20px',
                    backgroundColor: '#fff',
                    marginBottom: '30px',
                    fontSize: '15px',
                  },
              extras: (
                <>
                  <span
                    className="absolute cursor-pointer"
                    style={{
                      transform: 'translateY(-50%)',
                      top: '30%',
                      right: '9px',
                    }}
                    onClick={() => {
                      setSelectedOptions(
                        selectedOptions.filter((option) => option !== item.id)
                      )
                      deletePlotApi(dispatch, item.id)
                    }}
                  >
                    <CloseOutlined />
                  </span>
                  {item.premiumCharges && (
                    <span className="absolute cursor-pointer text-[#667085] text-[12px] w-max left-0 top-[-22px]">
                      {`${item.premiumCharges}% Extra Charges`}
                    </span>
                  )}
                </>
              ),
            },
          }
        })
      )
    }
  }, [getAllPlots?.data, selectedOptions])

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedOptions((prev) => [...prev, e.target.id])
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== e.target.id)
      )
    }
  }

  const exportToCSV = (csvData, csvData2, fileName) => {
    const workbook = XLSX.utils.book_new()

    const sheet1Data = csvData

    const sheet2Data = csvData2
    const sheet1 = XLSX.utils.json_to_sheet(sheet1Data)
    const sheet2 = XLSX.utils.json_to_sheet(sheet2Data)

    XLSX.utils.book_append_sheet(workbook, sheet1, 'plot')
    XLSX.utils.book_append_sheet(workbook, sheet2, 'officeWork')
    XLSX.writeFile(workbook, `${fileName}.xlsx`)
  }

  function excelSheetCreate(data) {
    const tempArr = []
    const columns = ['S.No.', 'PlotNo']
    let tempArr2 = [
      {
        propertyWalletInventoryId: propertyWalletInventoryId,
        noOfUnit: noOfUnit,
      },
    ]
    for (let i = 0; i < options.length; i++) {
      if (data.includes(options[i].value)) {
        if (options[i].premiumCharges) {
          columns.push(options[i].label)
          columns.push(options[i].label + '-PremiumCharges')
          continue
        }
        columns.push(options[i].label)
      }
    }
    for (let i = 0; i < noOfUnit; i++) {
      const tempObj = {}
      for (let j = 0; j < columns.length; j++) {
        if (columns[j] === 'S.No.') {
          tempObj[columns[j]] = i + 1
          continue
        }
        if (columns[j].split('-').length === 2) {
          tempObj[columns[j].split('-')[0]] = false
          tempObj[columns[j]] = options.filter(
            (item) => item.label === columns[j].split('-')[0]
          )[0].premiumCharges
          continue
        }
        tempObj[columns[j]] = ''
      }
      tempArr.push(tempObj)
    }

    exportToCSV(tempArr, tempArr2, 'Area_Details_Sheet')
  }
  return (
    <>
      <AddPlotDetail visible={visible} toggle={toggle} projectId={projectId} />
      <SectionContainer
        title={'Add your Area details'}
        subtitle={'Add your phase/sector/block into your property details'}
        extras={
          <Button
            className="py-[10px] px-[18px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2 mt-[20px]"
            //   disabled={current === 0}
            onClick={() => excelSheetCreate(selectedOptions)}
          >
            <span>Download Sheet</span>
          </Button>
        }
      >
        <Row gutter={16}>
          <Col xs={24} lg={24}>
            <CheckboxField
              className="custom-checkbox"
              name="areaDetails"
              options={options}
              gap={15}
              onChange={handleCheckboxChange}
            />
            <div
              style={{
                border: '1px solid #E3E3E3',
                borderRadius: '44px',
                color: '#292D35',
                padding: '10px 20px',
                backgroundColor: '#fff',
                marginBottom: '30px',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                gap: '10px',
                cursor: 'pointer',
              }}
              onClick={toggle}
            >
              <span>
                <img src={PlusIcon} alt="" />
              </span>
              <span>Add New</span>
            </div>
          </Col>
        </Row>
      </SectionContainer>
    </>
  )
}

export default AddAreaDetails
