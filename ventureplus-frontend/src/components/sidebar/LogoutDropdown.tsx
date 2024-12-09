import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { businessIcon, userIcon } from "../../assets/navbarAssets";
import { clearBusinessPlansByBusinessId } from "../../redux/slices/BusinessPlan/getAllBusinessPlansByBusinessIdSlice";
import { setCurrentSelectedBusiness } from "../../redux/slices/SelectedBusiness/selectedBusinessSlice";
import { setCurrentSelectedBusinessPlan } from "../../redux/slices/SelectedBusinessPlan/selectedBusinessPlanSlice";
import { useDispatch } from "react-redux";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { LogoutUser } from "../../services/api/auth";

const LogoutDropdown = () => {
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
            navigate("/account-settings/profile");
          }}
        >
          <div className="bg-background flex items-center justify-center w-[40px] h-[40px] rounded-[10px]">
            <FaRegUser className="text-[20px]" />
          </div>
          <div>
            <p className="body-s font-semibold text-title">Profile</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className={` rounded-[10px] flex h-[48px] items-center gap-[10px] m-1  min-w-[200px]`}
          onClick={() => {
            LogoutUser(dispatch)
            dispatch(clearBusinessPlansByBusinessId());
            dispatch(setCurrentSelectedBusiness(null));
            dispatch(setCurrentSelectedBusinessPlan(null));
            navigate("/login");
          }}
        >
          <div className="bg-background flex items-center justify-center w-[40px]  h-[40px] rounded-[10px]">
            <RiLogoutCircleRLine className="text-[22px]" />
          </div>
          <div>
            <p className="body-s font-semibold text-title">Logout</p>
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
      <div className="">
        {userProfilePhoto ? (
          <img
            src={userProfilePhoto}
            className="h-[50px] w-[50px] rounded-full bg-icon cursor-pointer"
          />
        ) : (
          <img
            src={userIcon}
            alt=""
            className="h-[50px] w-[50px] p-[12px] rounded-full bg-icon cursor-pointer"
          />
        )}
      </div>
    </Dropdown>
  );
};

export default LogoutDropdown;
