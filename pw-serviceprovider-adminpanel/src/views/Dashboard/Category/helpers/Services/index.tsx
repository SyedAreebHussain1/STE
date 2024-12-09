import React from 'react'
import { Button } from 'antd';
import ServicesTable from './helpers/ServicesTable';
import { PageContainer } from '../../../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../../../utils/helpers/PageHeader/PageHeader'
import { useModal } from '../../../../../hooks/useModal'
import CreateServicesModal from './helpers/CreateServicesModal';

const ServicesCategory = () => {
    const [addModal, toggle]: any = useModal()
    const extra = (
        <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={toggle}
        >
            Add Service
        </Button>
    )
    return (
        <React.Fragment>
            {addModal && <CreateServicesModal toggle={toggle} visible={addModal} />}
            <PageContainer>
                <PageHeader
                    title="Services"
                    subTitle="All Services"
                    extra={extra}
                />
                <ServicesTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default ServicesCategory