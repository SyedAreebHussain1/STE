import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../components/button/RoundedButton";
import { ServiceCardT } from "./ServiceSection";
import { deleteServiceApi } from "../../../services/api/BusinessPlanSetup/Services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getAllElementsOfPlanSetupApi } from "../../../services/api/BusinessPlanSetup";
import { useState } from "react";

type ServiceCardI = {
  service: ServiceCardT;
};

const ServiceCard = ({ service }: ServiceCardI) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  const handleDeleteService = (id: number) => {
    if (loading) return;
    setLoading(true);
    deleteServiceApi(dispatch, id, onSuccess);
  };

  const onSuccess = () => {
    setLoading(false);
    getAllElementsOfPlanSetupApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id
    );
  };
  return (
    <div className="w-[350px] min-w-[350px] h-[220px] rounded-lg p-4 flex gap-2 flex-col bg-[white] card-hover">
      <h1 className="body-s text-body font-bold line-clamp-1">
        {service?.name}
      </h1>
      <p className="body-s text-paraLight line-clamp-4 h-[90px]">
        {service?.description}
      </p>
      <div className="button-block">
        <RoundedButton
          title={"Edit"}
          type="grey"
          xs
          onClick={() =>
            navigate(`/business-plan-setup/service/${service?.id}`)
          }
          disabled={loading}
        />
        <RoundedButton
          title={"Delete"}
          type="danger"
          xs
          onClick={() => handleDeleteService(service?.id)}
          loading={loading}
          className={`${loading ? "!cursor-not-allowed" : "!cursor-pointer"}`}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
