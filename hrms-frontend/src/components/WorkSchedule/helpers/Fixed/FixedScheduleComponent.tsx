import React from "react";
import DaysButton from "./DaysButton";
import DaysTimingComponent from "./DaysTimingComponent";
import { daysEnum } from "../AddandEditWorkScheduleDrawer";

type Props = {
  state: daysEnum[];
  setState: React.Dispatch<React.SetStateAction<daysEnum[]>>;
  required: boolean;
};

const FixedScheduleComponent = ({ state, setState, required }: Props) => {
  return (
    <div className="mt-[20px]">
      <DaysButton state={state} setState={setState} />
      <div className="mt-[20px]">
        <DaysTimingComponent
          required={required}
          name={daysEnum.Mon}
          isRest={!state.includes(daysEnum.Mon)}
        />
        <DaysTimingComponent
          required={required}
          name={daysEnum.Tue}
          isRest={!state.includes(daysEnum.Tue)}
        />
        <DaysTimingComponent
          required={required}
          name={daysEnum.Wed}
          isRest={!state.includes(daysEnum.Wed)}
        />
        <DaysTimingComponent
          required={required}
          name={daysEnum.Thu}
          isRest={!state.includes(daysEnum.Thu)}
        />
        <DaysTimingComponent
          required={required}
          name={daysEnum.Fri}
          isRest={!state.includes(daysEnum.Fri)}
        />
        <DaysTimingComponent
          required={required}
          name={daysEnum.Sat}
          isRest={!state.includes(daysEnum.Sat)}
        />
        <DaysTimingComponent
          required={required}
          name={daysEnum.Sun}
          isRest={!state.includes(daysEnum.Sun)}
        />
      </div>
    </div>
  );
};

export default FixedScheduleComponent;
