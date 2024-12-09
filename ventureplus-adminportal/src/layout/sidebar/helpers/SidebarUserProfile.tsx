import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import type { MenuProps } from "antd";
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "antd";
import { CiUser } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { removeFromStorage } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { loginFailure } from "../../../store/slices/auth/authSlice";
import { SidebarBottomProps } from "./SidebarBottom";

const SidebarUserProfile = ({ collapsed }: SidebarBottomProps) => {
  const dispatch: AppDispatch = useDispatch();
  const getProfile = useSelector((state: any) => state?.getProfile);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile'); // Assuming you have a function called navigate to navigate to the profile page
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          className="p-3 block text-[rgba(0,0,0,.87)] text-[.875rem] font-medium"
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
        <span>
          <PiSignOut fontSize={"20"} />
        </span>
      ),
    }
  ];
  return (
    <div className="h-full">
      <Dropdown menu={{ items }} className="mb-2" trigger={["click"]} placement="bottomLeft">
        {collapsed ? (
          <div className="flex justify-center cursor-pointer">
            <img
              className="h-[48px] w-[48px] rounded-[32px] border"
              src={getProfile?.data?.profile?.profile_picture_url}
              alt=""
            />
          </div>
        ) : (
          <div className="flex justify-between px-[1.25rem] py-2 items-center group cursor-pointer gap-2">
            <FaChevronRight
              color="#b2b2b2"
              fontSize={"12"}
              className="rotate-90"
            />
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="h-[48px] w-[48px] rounded-[32px]  object-cover  border-[#1a9ca4] border-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </Dropdown>
    </div>
  );
};

export default SidebarUserProfile;
