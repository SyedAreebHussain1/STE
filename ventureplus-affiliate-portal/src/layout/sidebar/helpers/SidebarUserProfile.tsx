import { FaChevronRight } from "react-icons/fa6";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { PiSignOut } from "react-icons/pi";
import { removeFromStorage } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { loginFailure } from "../../../store/slices/auth/authSlice";
import { SidebarBottomProps } from "./SidebarBottom";
import profileIcon from "../../../assets/Profile/profileIcon.png";

const SidebarUserProfile = ({ collapsed }: SidebarBottomProps) => {
  const dispatch: AppDispatch = useDispatch();
  const affilateUserProfile = useSelector(
    (state: RootState) => state?.affilateUserProfile
  );
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile"); // Assuming you have a function called navigate to navigate to the profile page
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          className="p-3 block text-[rgba(0,0,0,.87)] text-[.875rem] font-medium"
          onClick={handleClick}
        >
          Profile
        </span>
      ),
      icon: (
        <span onClick={handleClick}>
          <img src={profileIcon} alt="" />
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          className="p-3 block text-[#F71C19] text-[.875rem] font-medium"
          onClick={() => {
            removeFromStorage("token");
            dispatch(loginFailure(null));
            navigate("/");
          }}
        >
          Logout
        </span>
      ),
      icon: (
        <span
          onClick={() => {
            removeFromStorage("token");
            dispatch(loginFailure(null));
            navigate("/");
          }}
        >
          <PiSignOut className="text-[#F71C19]" fontSize={"20"} />
        </span>
      ),
    },
  ];
  return (
    <div className="h-full ">
      <Dropdown
        menu={{ items }}
        className="mb-2"
        trigger={["click"]}
        placement="bottomLeft"
      >
        {collapsed ? (
          <div className="flex justify-center cursor-pointer">
            <img
              className="h-[48px] w-[48px] rounded-[32px] border"
              src={affilateUserProfile?.data?.profilePhoto}
              alt=""
            />
          </div>
        ) : (
          <div className="flex justify-between px-[1.25rem] py-2 items-center group cursor-pointer gap-2">
            <div>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full object-contain h-[48px] w-[48px]"
                  src={affilateUserProfile?.data?.profilePhoto}
                  alt=""
                />
                <span className="text-[#212838] font-semibold text-[.9375rem]">
                  {affilateUserProfile?.data?.name}
                </span>
                <span>
                  <FaChevronRight
                    color="#b2b2b2"
                    fontSize={"12"}
                    className="rotate-90"
                  />
                </span>
              </div>
            </div>
          </div>
        )}
      </Dropdown>
    </div>
  );
};

export default SidebarUserProfile;
