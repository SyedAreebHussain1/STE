import React, { useState } from "react";
import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../utils/helpers/PageHeader/PageHeader";
import { Button } from "antd";
import BlogsTable from "./helpers/BlogsTable";
import BlogsModal from "./helpers/BlogsModal";
import AddCategoryModal from "./helpers/AddCategoryModal";
import { useNavigate } from "react-router-dom";

const CreatePackage = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [categoryModal, setCategoryModal] = useState<boolean>(false)
  const navigate = useNavigate()
  return (
    <React.Fragment>
      {modal && <BlogsModal open={modal} close={setModal} />}
      {categoryModal && <AddCategoryModal open={categoryModal} close={setCategoryModal} />}
      <PageContainer>
        <PageHeader
          title="Blogs"
          subTitle="Manage all your Blogs"
          extra={
            <div className="flex gap-3">
              <Button onClick={() => navigate("/new-blog")}>Create Blog</Button>
              <Button onClick={() => setCategoryModal(true)}>Add new Category</Button>
            </div>
          }
        />
        <BlogsTable />
      </PageContainer>
    </React.Fragment>
  );
};

export default CreatePackage;
