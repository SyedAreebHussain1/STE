import React from 'react'
const QueriesPageHead = ({ title, subTitle, addNewPromotion, toggleAdd }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="pb-[20px] md:pb-[55px]">
          <h2 className="text-[18px] text-textcolor2 font-semibold">{title}</h2>
          <p className="text-textColor">{subTitle}</p>
        </div>
      </div>
    </>
  )
}

export default QueriesPageHead
