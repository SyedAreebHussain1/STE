import { Button, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fileColumn from "../../../../utils/tableColumns/fileColumn.json"
import downloadIcon from "../../../../assets/marketing/downloadIcon.png"
import { RootState } from '../../../../store/store'
import moment from "moment"

const MarketingTable = () => {
    const [dataSource, setDataSource] = useState<any>([])
    const getMarketingSlice = useSelector((state: RootState) => state?.getMarketingSlice)
    useEffect(() => {
        if (getMarketingSlice?.data?.length > 0) {
            const data = getMarketingSlice?.data?.map((item: any, i: number) => ({
                key: i,
                name:
                    (<span className='text-[#344054] text-[.9375rem] font-medium'>
                        {item.name}
                    </span>)
                ,
                type: (<span className='text-[#344054] text-[.9375rem] font-medium'>
                    {item.documentType}
                </span>),
                size: (<span className='text-[#344054] text-[.9375rem] font-medium'>
                    -
                </span>),
                date: (<span className='text-[#344054] text-[.9375rem] font-medium'>
                    {
                        item.createdAt ? moment(item.createdAt).format('MMMM Do YYYY') : "-"
                    }
                </span>),
                action: (<span>
                    <a href={item?.url}>
                        <Button disabled={!item?.url} className='text-[#01555A]'>
                            Download <img src={downloadIcon} alt="" />
                        </Button>
                    </a>
                </span>)
            }))
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getMarketingSlice?.data])
    return (
        <div className="flex flex-col w-full bg-[white] rounded-xl">
            <Table
                className='bg-[#FFFFFF]'
                scroll={{ x: 1100 }}
                columns={fileColumn}
                dataSource={dataSource}
                loading={getMarketingSlice?.loading}
            />
        </div>
    )
}

export default MarketingTable