import { Button, Table } from 'antd'
import { useEffect, useState } from 'react'
import fileColumn from "../../../../utils/tableColumns/fileColumn.json"
import downloadIcon from "../../../../assets/marketing/downloadIcon.png"

const EbookTable = () => {
    const [dataSource, setDataSource] = useState<any>([])
    const res = [{
        fileName: "New.doc",
        type: "Doc",
        size: "24kb",
        date: "03, Sept, 2024",
    }]
    useEffect(() => {
        const data = res.map((item: any, i: number) => ({
            key: i,
            name:
                (<span className='text-[#344054] text-[.9375rem] font-medium'>
                    {item.fileName}
                </span>)
            ,
            type: (<span className='text-[#344054] text-[.9375rem] font-medium'>
                {item.type}
            </span>),
            size: (<span className='text-[#344054] text-[.9375rem] font-medium'>
                {item.size}
            </span>),
            date: (<span className='text-[#344054] text-[.9375rem] font-medium'>
                {item.date}
            </span>),
            action: (<span>
                <Button className='text-[#01555A] '>
                    Download <img src={downloadIcon} alt="" />
                </Button>
            </span>)
        }))
        setDataSource(data)
    }, [])
    return (
        <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
            <Table
                className='bg-[#FFFFFF]'
                scroll={{ x: 1200 }}
                columns={fileColumn}
                dataSource={dataSource}
            />
        </div>
    )
}

export default EbookTable