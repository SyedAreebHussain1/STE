import { MdDownloading } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import SidebarUserProfile from "./SidebarUserProfile";
export type SidebarBottomProps = {
  collapsed?: boolean;
};
const SidebarBottom = ({ collapsed }: SidebarBottomProps) => {
  return (
    <div className="absolute w-full bottom-0 hidden md:block">
      <div>
        <SidebarUserProfile collapsed={collapsed} />
      </div>
    </div>
  );
};
export default SidebarBottom;
