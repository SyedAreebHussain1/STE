import React, { useEffect, useRef, useState } from 'react'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import { Button, Col, Row } from 'antd'
import CheckboxField from '../../../../../../utils/components/InputFields/CheckboxField'
import { useDispatch } from 'react-redux'
import {
  deleteProductPlotApi,
  getAllProductPlotsApi,
} from '../../../../../../redux/api/SingleProperty'
import * as XLSX from 'xlsx'
import { useModal } from '../../../../../../utils/hooks/useModal'
import { useSelector } from 'react-redux'
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons'
import PlusIcon from '../../../../../assest/icon/plus-icon.png'
import AddPlotDetail from './AddPlotDetail'

const AddAreaDetails = ({ current }) => {
  const [visible, toggle] = useModal()
  const createProductPlot = useSelector((state) => state.createProductPlot)
  const dispatch = useDispatch()
  const createPropertyWalletProductStepOne = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const updatePropertyWalletProductStepOne = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const deleteProductPlot = useSelector((state) => state.deleteProductPlot)
  const getAllProductPlot = useSelector((state) => state.getAllProductPlot)
  const projectId =
    updatePropertyWalletProductStepOne?.data?.data?.projectTypeId ||
    createPropertyWalletProductStepOne?.data?.data?.projectTypeId
  const noOfUnit =
    updatePropertyWalletProductStepOne?.data?.data?.noOfUnit ||
    createPropertyWalletProductStepOne?.data?.data?.noOfUnit
  const propertyWalletProductId =
    updatePropertyWalletProductStepOne?.data?.data?.id ||
    createPropertyWalletProductStepOne?.data?.data?.id
  useEffect(() => {
    if (current === 4) {
      getAllProductPlotsApi(dispatch, projectId)
    }
  }, [current, createProductPlot, deleteProductPlot])

  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  useEffect(() => {
    if (getAllProductPlot?.data) {
      setOptions(
        getAllProductPlot?.data?.data.map((item) => {
          return {
            label: item.title,
            value: item.id,
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
                    deleteProductPlotApi(dispatch, item.id)
                  }}
                >
                  <CloseOutlined />
                </span>
              ),
            },
          }
        })
      )
    }
  }, [getAllProductPlot?.data, selectedOptions])

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
    const tempArr = [{ 'S.No.': '' }]
    let tempArr2 = [
      {
        propertyWalletProductId: propertyWalletProductId,
        noOfUnit: noOfUnit,
      },
    ]
    for (let i = 0; i < options.length; i++) {
      if (data.includes(options[i].value)) {
        tempArr.push({
          [options[i].label]: '',
        })
      }
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
