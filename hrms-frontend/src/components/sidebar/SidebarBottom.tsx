import { MdDownloading } from "react-icons/md";
import SidebarUserProfile from "./SidebarUserProfile";

const SidebarBottom = () => {
  return (
    <div className="absolute w-full bottom-0 hidden md:block">
      <div className="flex gap-1 h-[48px] justify-center bg-[#f6f8fb] border border-[#f6f8fb] items-center cursor-pointer">
        <MdDownloading fontSize={"24"} color="#424b63" />
        <span className="text-[#424b63] text-sm">Get the app</span>
      </div>
      <div>
        <SidebarUserProfile />
      </div>
    </div>
  );
};

export default SidebarBottom;
