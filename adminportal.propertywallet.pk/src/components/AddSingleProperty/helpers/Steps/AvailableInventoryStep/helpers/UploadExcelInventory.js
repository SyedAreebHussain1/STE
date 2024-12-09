import React, { useEffect } from 'react'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import InfoIcon from '../../../../../assest/icon/info.png'
import ExcelIcon from '../../../../../assest/icon/excelIcon.png'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import { useUpload } from '../../../../../../utils/hooks/useUpload'
import { Col, Row } from 'antd'
import Upload from '../../../../../../utils/components/Upload/Upload'
import { formatBytes } from '../../../../../../utils/utils'
import { useDispatch } from 'react-redux'
import { excelProductUploadApi } from '../../../../../../redux/api/SingleProperty'

const UploadExcelInventory = () => {
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile] = useUpload()
  const dispatch = useDispatch()

  useEffect(() => {
    if (legalPdf.length > 0) {
      const formData = new FormData()
      formData.append('Excel', legalPdf[0])
      excelProductUploadApi(dispatch, formData)
    }
  }, [legalPdf])
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
            name="excelFileProduct"
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
            {pdfPreviews.length > 0
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
          </div>
        </Col>
      </Row>
    </SectionContainer>
  )
}

export default UploadExcelInventory
