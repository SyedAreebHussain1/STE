import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import {
  businessSettings,
  settingsIcon,
  userSettings,
} from "../../assets/navbarAssets";
import { useDispatch } from "react-redux";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { FaRegUser } from "react-icons/fa";

const SettingsDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getFromStorage("user");
  const userProfilePhoto = user?.companyUser?.profilePhoto;
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className={` rounded-[10px] flex h-[48px] items-center gap-[10px]  m-1  min-w-[200px] `}
          onClick={() => {
            navigate("/account-settings");
          }}
        >
          <div className="bg-background flex items-center justify-center w-[40px] h-[40px] rounded-[10px]">
            <img src={userSettings} />
          </div>
          <div>
            <p className="body-s font-semibold text-title">Account Settings</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className={` rounded-[10px] flex h-[48px] items-center gap-[10px]  m-1  min-w-[200px] `}
          onClick={() => {
            navigate("/business-settings");
          }}
        >
          <div className="bg-background flex items-center justify-center w-[40px] h-[40px] rounded-[10px]">
            <img src={businessSettings} />
          </div>
          <div>
            <p className="body-s font-semibold text-title">Business Settings</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      overlayClassName="customDropdownClass"
    >
      <div className="h-[50px] w-[50px] p-[12px] rounded-full bg-icon cursor-pointer">
        <img src={settingsIcon} alt="" />
      </div>
    </Dropdown>
  );
};

export default SettingsDropdown;
