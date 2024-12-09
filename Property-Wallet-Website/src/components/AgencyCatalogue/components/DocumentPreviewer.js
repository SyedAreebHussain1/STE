import React from 'react'
import pdfIcon from './../assets/images/pdfIcon.png'
import { FaCloudDownloadAlt } from "react-icons/fa";


const DocumentPreviewer = ({ fileName, fileSize, onClick, url }) => {
  return (
    <div className="flex bg-white h-full relative overflow-hidden file-container-pdf mb-3 shadow-lg">
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
              <a href={url} target='_blank' rel="noreferrer">
                <FaCloudDownloadAlt size={'25px'} color='green' />
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentPreviewer
