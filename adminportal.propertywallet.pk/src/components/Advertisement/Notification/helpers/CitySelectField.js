import { Input } from 'antd'
import React, { useState } from 'react'

const CitySelectField = () => {
  const [visible, setVisible] = useState(false)
  const [city, setCity] = useState('')
  return (
    <div className="relative">
      <Input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 mt-[10px]"
        onFocus={() => setVisible(true)}
        autoComplete="off"
        onBlur={() => setTimeout(() => setVisible(false), 200)}
      />
      {visible && (
        <div className="rounded-[8px] shadow-md p-2">
          <ul>
            <li
              className="p-2 cursor-pointer"
              onClick={() => {
                setCity('Karachi')
              }}
            >
              Karachi
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default CitySelectField
