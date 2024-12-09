import React from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import PackageTable from './helpers/PackageTable'
import { useModal } from '../../../hooks/useModal'
import { Button } from 'antd'
import CraetePackageModal from './helpers/CraetePackageModal'

const Pacakage = () => {
    const [addModal, toggle]: any = useModal();
    const extra = (
        <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={toggle}
        >
            Add Package
        </Button>
    );

    return (
        <React.Fragment>
            {addModal && <CraetePackageModal toggle={toggle} visible={addModal} />}
            <PageContainer>
                <PageHeader title="Package" subTitle="All Package" extra={extra} />
                <PackageTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default Pacakage