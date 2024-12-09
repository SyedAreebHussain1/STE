import { Col, Row, Spin, Empty } from 'antd'
import PreviewCard from './PreviewCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store';
const PreviewFile = () => {
    const getMarketingSlice = useSelector((state: RootState) => state?.getMarketingSlice)
    return (
        <div className='p-[15px] '>
            <Row gutter={16} className='h-full'>
                {!getMarketingSlice.loading ? getMarketingSlice?.data?.length > 0 ? getMarketingSlice?.data?.map((item: any, i: number) => {
                    return <Col className='p-3' key={i} sm={24} xs={24} md={6} lg={6} xl={6}>
                        {item?.url ? <a href={item?.url}>
                            <PreviewCard item={item} />
                        </a> : <PreviewCard item={item} />}
                    </Col>
                }) :
                    <div className='w-full !pt-[120px] items-center h-full justify-center flex '>
                        <Empty />
                    </div>
                    :
                    <div className='w-full justify-center flex '>
                        <Spin size='large' />
                    </div>}
            </Row>
        </div>
    )
}

export default PreviewFile