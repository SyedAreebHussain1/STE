import { Button, Input } from "antd";
import OnBoarding from "./OnBoarding";
import { CgNotifications } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import Search from "antd/es/input/Search";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SidebarUserProfile from "./SidebarUserProfile";

type Props = {
  labels: { [label: string]: string };
};

const Topbar = ({ labels }: Props) => {
  const pageName = Object.keys(labels).filter((item) =>
    location.pathname.includes(item)
  );
  return (
    <div className="flex justify-between  items-center flex-wrap h-[82px]">
      <div className="flex gap-3">
        <h2 className="text-[1.25rem] font-bold">{labels[pageName[0]]}</h2>
      </div>
      <SidebarUserProfile />
    </div>
  );
};
export default Topbar;
