import { Select } from "antd"
import { GoDotFill } from "react-icons/go";

const Statistics = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between">
        <h1 className='text-3xl font-semibold'>Transaction Statistics</h1>
        
    <Select
      defaultValue="Current Year"
      style={{ width: 200 }}
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
        </div>
        <div  className="flex justify-end items-end mt-8 gap-6">
            <p><span><GoDotFill className="inline" size={20} color="green"/></span> Credit</p>
            <p><span><GoDotFill className="inline" size={20} color=" #387ADF"/></span>Debit</p>
        </div>
        <div></div>
    </div>
  )
}

export default Statistics