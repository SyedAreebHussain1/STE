import React from 'react'
import pdfIcon from '../../../components/assest/icon/pdfIcon.png'
import { CloseOutlined } from '@ant-design/icons'

const DocumentPreviewer = ({ fileName, fileSize, onClick }) => {
  return (
    <div className="flex bg-white h-full relative overflow-hidden file-container-pdf mb-3">
      <div className="flex bg-[white] p-[16px] gap-3 items-center w-full">
        <div>
          <img src={pdfIcon} alt="" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <h4 className="font-semibold text-sm">
              {fileName?.length > 25
                ? `${fileName.substring(0, 25)}...`
                : fileName}
            </h4>
            <p className="text-sm text-[#949494]">
              {fileSize !== '0 Bytes' ? fileSize : ''}
            </p>
          </div>
          <div className="cursor-pointer">
            {onClick && (
              <span className="" onClick={onClick}>
                <CloseOutlined />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentPreviewer
