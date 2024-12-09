import useToggle from "../../../../hooks/useToggle";
import PlusIcon from "./../../../../assets/plus-icon.svg";
import MinusIcon from "./../../../../assets/minus-icon.svg";
import FeaturesAndAmenities from "./FeaturesAndAmenities";
import PropertiesDetails from "./PropertiesDetails";
import BedIcon from "./../../../../assets/bedroom-icon.svg";
import PriceTagIcon from "./../../../../assets/price-tag-icon.png";
import BathsIcon from "./../../../../assets/baths-icon.svg";
import AreaIcon from "./../../../../assets/area-icon.svg";
import RemainingIcon from "./../../../../assets/remaining-unit-icon.svg";
import AssignLead from "./AssignLead";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAssignLeadForInventoryApi } from "../../../../redux/api/InventoryManagement";
type Props = {
  title: string;
  data?: any;
};

const DetailsDropdown = (props: Props) => {
  const [open, toggle] = useToggle();
  const dispatch = useDispatch();

  const getAssignLead = useSelector(
    (state: any) => state.getAssignLeadForInventory
  );
  useEffect(() => {
    getAssignLeadForInventoryApi(props?.data?.id, dispatch);
  }, []);
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
        <div className="flex gap-8">
          {props?.data?.bedRooms && (
            <div className="flex items-center gap-1">
              <img src={BedIcon} alt="" />
              <span className="text-[#344054] text-base font-medium">
                {props?.data?.bedRooms}
              </span>
            </div>
          )}
          {props?.data?.washRooms && (
            <div className="flex items-center gap-1">
              <img src={BathsIcon} alt="" />

              <span className="text-[#344054] text-base font-medium">
                {" "}
                {props?.data?.washRooms}
              </span>
            </div>
          )}
          {props?.data?.price && (
            <div className="flex items-center gap-1">
              <img src={PriceTagIcon} alt="" />
              <span className="text-[#344054] text-base font-medium">
                PKR {props?.data?.price}
              </span>
            </div>
          )}
          {props?.data?.landSize && (
            <div className="flex items-center gap-1">
              <img src={AreaIcon} alt="" />
              <span className="text-[#344054] text-base font-medium">
                {props?.data?.landSize} {props?.data?.landArea?.title}
              </span>
            </div>
          )}
          {props?.data?.noOfUnit && (
            <div className="flex items-center gap-1">
              <img src={RemainingIcon} alt="" />
              <span className="text-[#344054] text-base font-medium">
                {props?.data?.noOfUnit -
                  (props?.data?.noOfSold >= 0 ? props?.data?.noOfSold : 0)}{" "}
                Units Remaining
              </span>
            </div>
          )}
        </div>
      </div>
      {open && (
        <>
          <PropertiesDetails data={props.data} />
          <FeaturesAndAmenities data={props.data} />
          <AssignLead data={getAssignLead.data} />
        </>
      )}
    </div>
  );
};

export default DetailsDropdown;
