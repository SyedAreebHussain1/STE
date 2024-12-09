import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { businessIcon, dropDownIcon } from "../../assets/navbarAssets";
import LogoutDropdown from "./LogoutDropdown";
import { useNavigate } from "react-router-dom";
import SettingsDropdown from "./SettingDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  selectedBusiness: any;
  items: MenuProps["items"];
}

const SidebarUserProfile = ({ selectedBusiness, items }: Props) => {
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  return (
    <>
      <div className="sm:flex hidden gap-2 items-center">
        <div className="flex gap-2 items-center rounded-full bg-icon cursor-pointer h-[50px]">
          <div className=""></div>
          <Dropdown menu={{ items }} placement="bottom">
            <span className="flex gap-2 items-center cursor-pointer px-[12px]">
              <img src={businessIcon} alt="" />
              <p className="body-s font-semibold text-title">
                {currentSelectedBusiness?.business?.name}
              </p>
              <img src={dropDownIcon} alt="" className="h-[15px] w-[15px]" />
            </span>
          </Dropdown>
        </div>
        <SettingsDropdown />

        <LogoutDropdown />
      </div>
      <div className="flex justify-center sm:!hidden gap-2 items-center pb-2 w-full">
        <div className="flex gap-2 items-center rounded-full bg-icon cursor-pointer h-[50px]">
          <div className=""></div>
          <Dropdown menu={{ items }} placement="bottom">
            <span className="flex gap-2 items-center cursor-pointer px-[12px]">
              <img src={businessIcon} alt="" />
              <p className="text-[10px] font-normal w-full text-title">
                {currentSelectedBusiness?.business?.name?.length > 11
                  ? `${currentSelectedBusiness?.business?.name.substr(0, 11)}..`
                  : currentSelectedBusiness?.business?.name}
              </p>
              <img src={dropDownIcon} alt="" className="h-[15px] w-[15px]" />
            </span>
          </Dropdown>
        </div>
        <SettingsDropdown />

        <LogoutDropdown />
      </div>
    </>
  );
};

export default SidebarUserProfile;
