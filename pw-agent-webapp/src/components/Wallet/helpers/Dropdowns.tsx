import { Input, Select } from 'antd'
import { BiSearch } from 'react-icons/bi'

const Dropdowns = () => {
  return (
    <div className="flex justify-between">
        <div className="flex gap-3">
        <Input
            className="rounded-[8px] h-[34px] w-[400px]"
            prefix={<BiSearch />}
            placeholder="Search"
          />
         
          <Select
      defaultValue="Payment type"
      style={{ width: 300 }}
      options={[{ value: 'P-type', label: 'P-type' }]}
    />
    <Select
      defaultValue="Transaction type"
      style={{ width: 300 }}
      options={[{ value: 'T-type', label: 'T-type' }]}
    />
    <Select
      defaultValue="Transaction Date"
      style={{ width: 300 }}
      options={[{ value: 'T-date', label: 'T-date' }]}
    />
        </div>
     
          
       <div>
       <Select
      defaultValue="Sort by"
      style={{ width: 100 }}
      options={[{ value: 'sort', label: 'sort' }]}
    />
        </div> 
    
    
      </div>
  )
}

export default Dropdowns