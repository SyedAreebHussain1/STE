import React from 'react'
const NoOfPromotionPageHead = ({
  title,
  subTitle,
  addNewPromotion,
  toggleAdd,
}) => {
  const handleClick = () => {}
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="pb-[20px] md:pb-[55px]">
          <h2 className="text-[18px] text-textcolor2 font-semibold">{title}</h2>
          <p className="text-textColor">{subTitle}</p>
        </div>
        <span onClick={handleClick}>{addNewPromotion}</span>
      </div>
    </>
  )
}

export default NoOfPromotionPageHead
