import React from 'react'

const InputLabel = ({ children, hidden }) => {
  return (
    <span
      style={{ color: '#3D4350', fontWeight: '500', fontSize: 14, visibility: hidden, marginBottom: 10, display: 'block' }}
    >
      {children}
    </span>
  )
}

export default InputLabel
