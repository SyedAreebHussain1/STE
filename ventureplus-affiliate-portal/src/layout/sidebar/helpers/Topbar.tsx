import SidebarUserProfile from "./SidebarUserProfile";
import { useEffect, useState } from "react";

type Props = {
  labels: { [label: string]: string };
  current: string;
};
const Topbar = ({ labels, current }: Props) => {
  return (
    <div className="flex justify-between items-center flex-wrap h-[82px]">
      <div className="flex gap-3">
        <h2 className="text-[1.25rem] font-bold">{labels?.[current]}</h2>
      </div>
      <SidebarUserProfile />
    </div>
  );
};
export default Topbar;
