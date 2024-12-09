import React, { ReactElement } from 'react'

type Props = {
    className?: string,
    children: ReactElement
}

const SpaceWrapper = ({ className, children }: Props) => {
  return (
    <div className={className ? className : `px-[24px] py-[12px]`}>{children}</div>
  )
}

export default SpaceWrapper