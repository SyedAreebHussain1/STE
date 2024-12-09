import { Card, Space } from "antd"
const Cards = ({icon,para,pkr}:any) => {
  return (
    // <Space direction="vertical" className="rounded-md" >
    <Card  title={icon}  style={{ width: 300 }}>
      <p className='text-[#98a2b3] text-bold text-lg'>{para}</p>
      <h1 className='text-2xl font-semibold'>PKR 40,000</h1>
    </Card>
   
  // </Space>
  )
}

export default Cards