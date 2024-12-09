import React from 'react'

type Props = {
    title: string
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="text-sm font-bold mb-[.625rem]">{title}</h2>
  )
}

export default SectionTitle