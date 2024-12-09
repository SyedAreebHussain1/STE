import useToggle from "../../../../hooks/useToggle";
import PlusIcon from "./../../../../assets/plus-icon.svg";
import MinusIcon from "./../../../../assets/minus-icon.svg";
import PropertiesDetails from "./PropertiesDetails";
import FeaturesAndAmenities from "../../../ProjectViewDetails/helpers/Main/FeaturesAndAmenities";

type Props = {
  title: string;
  type?: "features" | "inventoryDetails";
  data?: any;
};

const DetailsDropdown = (props: Props) => {
  const [open, toggle] = useToggle();
  return (
    <div className="border-b border-borderColor">
      <div
        onClick={toggle}
        className="py-[1.5938rem] flex justify-between items-center cursor-pointer"
      >
        <div className="flex items-center gap-[1.125rem]">
          <img src={open ? MinusIcon : PlusIcon} alt="PlusIcon" />
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            {props.title}
          </h3>
        </div>
      </div>
      {open && (
        <>
          {props.type === "features" ? (
            <FeaturesAndAmenities data={props.data} />
          ) : (
            <PropertiesDetails data={props.data} />
          )}
        </>
      )}
    </div>
  );
};

export default DetailsDropdown;
