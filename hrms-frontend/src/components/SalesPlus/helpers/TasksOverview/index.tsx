import React, { useEffect, useState } from "react";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";
import TasksOverviewHead from "./helpers/TasksOverviewHead";
import TaskOverviewTable from "./helpers/TaskOverviewTable";
import TasksOverviewFilter from "./helpers/TasksOverviewFilter";

const TasksOverview = () => {
  const [enumValue, setEnumValue] = useState<any>(0);
  return (
    <React.Fragment>
      <PageContainer>
        <TasksOverviewHead
          enumValue={enumValue}
          setEnumValue={setEnumValue}
          items={["My Tasks", "Staff Tasks"]}
        />
        <div className="bg-[rgb(249,250,251)] dark:bg-dark-grayprimary min-h-[133px] border rounded-[10px] p-[18px] mt-3">
          <TasksOverviewFilter enumValue={enumValue} />
          <TaskOverviewTable enumValue={enumValue} />
        </div>
      </PageContainer>
    </React.Fragment>
  );
};

export default TasksOverview;
