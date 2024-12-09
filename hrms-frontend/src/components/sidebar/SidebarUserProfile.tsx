import { FaChevronRight } from "react-icons/fa6";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { CiUser } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import {
  getFromStorage,
  removeFromStorage,
  setInStorage,
} from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import useDarkMode from "../../hooks/useDarkMode";
import { setDarkMode } from "../../redux/slices/themeSlice/themeSlice";
import { useEffect } from "react";

const SidebarUserProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const [theme, setTheme] = useDarkMode();

  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span className="p-3 block text-[rgba(0,0,0,.87)] text-[.875rem] font-medium">
          Your Account Settings
        </span>
      ),
      icon: (
        <span>
          <CiUser fontSize={"20"} />
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          className="p-3 block text-[rgba(0,0,0,.87)] text-[.875rem] font-medium"
          onClick={() => {
            setTheme("light");
            dispatch(setDarkMode("light"));
            setInStorage("theme", "light");
            removeFromStorage("user");
            removeFromStorage("token");
            dispatch(signOut());
            navigate("/");
          }}
        >
          Sign out
        </span>
      ),
      icon: (
        <span>
          <PiSignOut fontSize={"20"} />
        </span>
      ),
    },
  ];
  return (
    <div className="h-full">
      <Dropdown menu={{ items }} trigger={["click"]} placement="topRight">
        <div className="flex justify-between px-[1.25rem] items-center group cursor-pointer h-full py-[10px]">
          <div className="flex flex-col  justify-center pr-4">
            <h1 className="text-black group-hover:text-primary dark:text-white leading-5">
              Aman
            </h1>
            <p className="text-[#808080] text-[.6875rem] group-hover:text-light-primary leading-5 ">
              Daftar Plus
            </p>
          </div>
          <FaChevronRight color="#b2b2b2" fontSize={"12"} className="rota" />
        </div>
      </Dropdown>
    </div>
  );
};

export default SidebarUserProfile;
