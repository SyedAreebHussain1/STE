import React from "react";
import { Button } from "antd";
import CategoryTable from "./CategoryTable";
import { PageContainer } from "../../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../../utils/helpers/PageHeader/PageHeader";
import { useModal } from "../../../../hooks/useModal";
import CreateCatgoryModal from "./../helpers/CreateCatgoryModal";

const Category = () => {
    const [addModal, toggle]: any = useModal();
    const extra = (
        <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={toggle}
        >
            Add Category
        </Button>
    );



    return (
        <React.Fragment>
            {addModal && <CreateCatgoryModal toggle={toggle} visible={addModal} />}
            <PageContainer>
                <PageHeader title="Category" subTitle="All Category" extra={extra} />
                <CategoryTable />
            </PageContainer>
        </React.Fragment>
    );
};

export default Category;
