import { Progress } from "antd";
import { ProgressProps } from "antd/lib";
import RoundedButton from "../../../components/button/RoundedButton";
import { EquityT } from "./EquitySection";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteEquityApi } from "../../../services/api/BusinessPlanSetup/Equity";
import { getAllElementsOfPlanSetupApi } from "../../../services/api/BusinessPlanSetup";
import { RootState } from "../../../redux/store";

interface EquityCardI {
  equity: EquityT;
}

const EquityCard = ({ equity }: EquityCardI) => {
  const [gradientShades, setGradientShades] = useState({
    color1: "#01B847",
    color2: "#007A2F",
  });
  const greenGradient: ProgressProps["strokeColor"] = {
    "0%": gradientShades.color1,
    "100%": gradientShades.color2,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  useEffect(() => {
    const percent = Number(equity?.share);
    if (percent >= 80) {
      setGradientShades({ color1: "#01B847", color2: "#007A2F" }); //green
    } else if (percent >= 50) {
      setGradientShades({ color1: "#1158FF", color2: "#0638AD" }); //blue
    } else {
      setGradientShades({ color1: "#F65800", color2: "#C64700" }); //red
    }
  }, [equity]);

  const handleDeleteEquity = (id: number) => {
    if (loading) return;
    setLoading(true);
    deleteEquityApi(dispatch, id, onDeleteEquity);
  };

  const onDeleteEquity = () => {
    getAllElementsOfPlanSetupApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id
    );
  };

  return (
    <div className="card-hover w-[247px] min-w-[247px] h-[255px] rounded-lg p-4 flex gap-2 flex-col bg-[white] items-center justify-center">
      <Progress
        type="circle"
        percent={equity?.share === null ? 0 : Number(equity?.share)}
        strokeColor={greenGradient}
        trailColor="#e3e7ef"
      />
      <h1 className="body-s text-body font-bold">{equity?.name}</h1>
      <div className="button-block-center">
        <RoundedButton
          title={"Edit"}
          type="grey"
          xs
          onClick={() => navigate(`/business-plan-setup/equity/${equity?.id}`)}
          disabled={loading}
        />
        <RoundedButton
          title={"Delete"}
          type="danger"
          xs
          onClick={() => handleDeleteEquity(equity?.id)}
          loading={loading}
          className={`${loading ? "!cursor-not-allowed" : "!cursor-pointer"}`}
        />
      </div>
    </div>
  );
};

export default EquityCard;
