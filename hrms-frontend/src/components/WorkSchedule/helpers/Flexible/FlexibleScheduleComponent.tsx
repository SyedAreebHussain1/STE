import React from "react";
import { daysEnum } from "../AddandEditWorkScheduleDrawer";
import DaysButton from "../Fixed/DaysButton";
import HAndMInputFieldForWorkSchedule from "./HAndMInputFieldForWorkSchedule";

type Props = {
  form: any;
  state: daysEnum[];
  setState: React.Dispatch<React.SetStateAction<daysEnum[]>>;
};

const FlexibleScheduleComponent = ({ form, state, setState }: Props) => {
  return (
    <div className="mt-[20px]">
      <DaysButton state={state} setState={setState} />
      <div className="mt-[20px]">
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Mon}
          isRest={!state.includes(daysEnum.Mon)}
        />
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Tue}
          isRest={!state.includes(daysEnum.Tue)}
        />
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Wed}
          isRest={!state.includes(daysEnum.Wed)}
        />
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Thu}
          isRest={!state.includes(daysEnum.Thu)}
        />
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Fri}
          isRest={!state.includes(daysEnum.Fri)}
        />
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Sat}
          isRest={!state.includes(daysEnum.Sat)}
        />
        <HAndMInputFieldForWorkSchedule
          form={form}
          name={daysEnum.Sun}
          isRest={!state.includes(daysEnum.Sun)}
        />
      </div>
    </div>
  );
};

export default FlexibleScheduleComponent;
