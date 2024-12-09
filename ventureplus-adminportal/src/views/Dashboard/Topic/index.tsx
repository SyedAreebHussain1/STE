import React, { useState } from "react";
import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../utils/helpers/PageHeader/PageHeader";
import { Button } from "antd";
import TopicTable from "./helpers/TopicTable";
import TopicModal from "./helpers/TopicModal";

const Topic = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <React.Fragment>
      {modal && <TopicModal open={modal} close={setModal} />}
      <PageContainer>
        <PageHeader
          title="Topic"
          subTitle="Manage all your topic"
          extra={<Button onClick={() => setModal(true)}>Add new Topic</Button>}
        />
        <TopicTable />
      </PageContainer>
    </React.Fragment>
  );
};

export default Topic;
