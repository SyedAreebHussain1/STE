import SetupAgencyOption from "./SetupAgencyOption";
import SetupAgencyImg from "./../../../assets/create-agency.svg";
import SetupAgencyImg2 from "./../../../assets/join-as-freelancer.svg";
import { useState } from "react";
import InputButton from "../../../helpers/inputs/InputButton";
import { useNavigate } from "react-router-dom";

enum options {
  CREATE_AGENCY = "/create-agency",
  JOIN_AS_FREELANCER = "/join-as-freelancer",
  JOIN_AS_AGENT = "/join-as-agent",
}

const SetupAgencySelections = () => {
  const [selected, setSelected] = useState<options>(options.CREATE_AGENCY);
  const navigate = useNavigate();
  function onContinueClick() {
    navigate(selected);
  }
  return (
    <div className="mt-[2.625rem] flex flex-col gap-8">
      <SetupAgencyOption
        title="Create your own Agency"
        desc="Effortless Join integration. Instant property management."
        img={SetupAgencyImg}
        isSelected={selected === options.CREATE_AGENCY}
        onClick={() => setSelected(options.CREATE_AGENCY)}
      />
      <SetupAgencyOption
        title="Join Existing Agency"
        desc="Effortless Join integration. Instant property management."
        img={SetupAgencyImg}
        isSelected={selected === options.JOIN_AS_AGENT}
        onClick={() => setSelected(options.JOIN_AS_AGENT)}
      />
      <SetupAgencyOption
        title="Join as a Freelancer"
        desc="Effortless Join integration. Instant property management."
        img={SetupAgencyImg2}
        isSelected={selected === options.JOIN_AS_FREELANCER}
        onClick={() => setSelected(options.JOIN_AS_FREELANCER)}
      />
      <div className="mt-5">
        <InputButton
          className="w-[300px] h-[50px]  bg-primary text-[white] text-[1rem] font-bold"
          name="Continue"
          htmlType="submit"
          onClick={onContinueClick}
        />
      </div>
    </div>
  );
};

export default SetupAgencySelections;
