import React from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import InfoIcon from '../../../../../../assest/icon/info.png'
import ExcelIcon from '../../../../../../assest/icon/excelIcon.png'
import {
  CloseOutlined,
  CloudDownloadOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useUpload } from '../../../../../../../utils/hooks/useUpload'
import { Col, Row } from 'antd'
import Upload from '../../../../../../../utils/components/Upload/Upload'
import { formatBytes } from '../../../../../../../utils/utils'
import { useEffect } from 'react'
import {
  generatePlotDetailUpdateExelApi,
  uploadExcelForUpdateApi,
  uploadExcelSheetApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import * as XLSX from 'xlsx'

const UploadExcelInventory = () => {
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile] = useUpload()
  const dispatch = useDispatch()
  const generatePlotDetailUpdateExel = useSelector(
    (state) => state.generatePlotDetailUpdateExel
  )
  useEffect(() => {
    if (legalPdf.length > 0) {
      if (generatePlotDetailUpdateExel?.data?.data) {
        const formData = new FormData()
        formData.append('Excel', legalPdf[0])
        uploadExcelForUpdateApi(dispatch, formData)
        return
      }
      const formData = new FormData()
      formData.append('Excel', legalPdf[0])
      uploadExcelSheetApi(dispatch, formData)
    }
  }, [legalPdf])
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
  return (
    <SectionContainer
      title="Upload your Excel Sheet"
      subtitle="Add  your phase/scctor/block into your 
    property details"
      extras={
        <div className="flex gap-[10px] bg-[#0000000f] justify-center py-[10px] px-[10px] mt-[18px] max-w-[266px]">
          <span>
            <img src={InfoIcon} alt="" />
          </span>
          <span className="text=[#667085] text-[12px]">
            You can only upload one inventory file
          </span>
        </div>
      }
    >
      <Row gutter={24}>
        <Col lg={10} xs={24}>
          <Upload
            name="excelFile"
            files={legalPdf}
            setFiles={setLegalPdf}
            supportedFileTypes={[
              'xls',
              'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            ]}
            supportedText={'Files Supported  XLS,XLSM'}
          />
        </Col>
        <Col lg={10} xs={24}>
          <div
            style={{ alignItems: '' }}
            className="max-h-[369px] overflow-y-auto"
          >
            {pdfPreviews.length > 0 &&
            generatePlotDetailUpdateExel?.data === null
              ? pdfPreviews?.map((val, i) => {
                  return (
                    <div className="flex bg-white h-full relative overflow-hidden file-container-pdf  mb-3">
                      <div className="flex bg-[white] p-[16px] gap-3 items-center w-full">
                        <div>
                          <img src={ExcelIcon} alt="" />
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <div>
                            <h4 className="font-semibold text-sm">
                              {val.name?.split('-')[1]}
                            </h4>
                            <p className="text-sm text-[#949494]">
                              {formatBytes(val.size)}
                            </p>
                          </div>
                          <div className="cursor-pointer">
                            <span
                              className=""
                              onClick={() => deleteFile(val.name)}
                            >
                              <CloseOutlined />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              : ''}
            {generatePlotDetailUpdateExel?.data?.data && (
              <div className="flex bg-white h-full relative overflow-hidden file-container-pdf  mb-3">
                <div className="flex bg-[white] p-[16px] gap-3 items-center w-full">
                  <div>
                    <img src={ExcelIcon} alt="" />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h4 className="font-semibold text-sm">
                        {/* {val.name?.split("-")[1]} */}
                        EXCEL FILE
                      </h4>
                      <p className="text-sm text-[#949494]">
                        {/* {formatBytes(val.size)} */}
                      </p>
                    </div>
                    <div className="cursor-pointer">
                      <span
                        className=""
                        onClick={() =>
                          exportToCSV(
                            generatePlotDetailUpdateExel?.data?.data[0],
                            generatePlotDetailUpdateExel?.data?.data[1],
                            'EXCEL FILE'
                          )
                        }
                      >
                        <CloudDownloadOutlined />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </SectionContainer>
  )
}

export default UploadExcelInventory
