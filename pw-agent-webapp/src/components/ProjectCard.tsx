import { IoLocationOutline } from "react-icons/io5";
import AreaImg from "./../assets/size.svg";
import { useNavigate } from "react-router-dom";
type Props = {
  img: string;
  commission: string;
  title: string;
  address: string;
  area: string;
  id: number;
};

const ProjectCard = (props: Props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/inventory-management/projects/${props.id}`);
  }
  return (
    <div
      className="p-3 border border-borderColor rounded-md mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="rounded-md h-[216px] overflow-hidden relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        }}
      >
        <img src={props.img} alt="" className="w-full h-full object-cover" />
        {props.commission && (
          <span className="absolute bottom-2 left-2 z-10 bg-[#C31162] px-3 py-1 rounded-full text-white font-medium text-base">{`PKR ${props.commission} Cash Commission`}</span>
        )}
      </div>
      <div className="mt-3">
        <h2 className="text-[1.2rem] font-semibold">{props.title}</h2>
        <div className="flex gap-1 items-center">
          <IoLocationOutline color="#667085" />
          <span className="text-[#667085] font-medium text-base">
            {props.address}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <img src={AreaImg} alt="" />
          <span className="text-[#667085] font-medium text-base">
            {props.area}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
