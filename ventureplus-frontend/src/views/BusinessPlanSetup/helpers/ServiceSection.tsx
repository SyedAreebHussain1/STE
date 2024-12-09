import { useNavigate } from "react-router-dom";
import { circularPlusIcon } from "../../../assets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import ServiceCard from "./ServiceCard";
import CardSkeleton from "../../../components/skeletons/CardSkeleton";
import NoContent from "./NoContent";

interface ServiceSectionI {
  services: ServiceCardT[];
}

export type ServiceCardT = {
  id: number;
  name: string;
  businessPlanId: number;
  turnover: any;
  description: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  createdBy: number;
  updatedBy: any;
};

const ServiceSection = ({ services }: ServiceSectionI) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4 w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="heading-s font-semibold">Services</h1>
        <ButtonWithSvg
          title={"Add Service"}
          icon={circularPlusIcon}
          sm
          type="primary"
          onClick={() => navigate("/business-plan-setup/add-service")}
        />
      </div>
      {services ? (
        <div className="flex flex-wrap gap-4 overflow-x-auto custom-scrollbar">
          {services?.map((service) => (
            <ServiceCard key={service?.id} service={service} />
          ))}
        </div>
      ) : (
        <CardSkeleton />
      )}

      {services?.length === 0 && <NoContent />}
    </div>
  );
};

export default ServiceSection;
