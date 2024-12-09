import React from "react";
import OnBoarding from "./OnBoarding";
import SidebarBottom from "./SidebarBottom";
import SidebarUserProfile from "./SidebarUserProfile";

type Props = {
  labels: { [label: string]: string };
};

const Topbar = ({ labels }: Props) => {
  const pageName = Object.keys(labels).filter((item) =>
    location.pathname.includes(item)
  );
  return (
    <div className="flex justify-between items-center flex-wrap">
      <h2 className="text-[1.25rem] font-semibold">{labels[pageName[1]]}</h2>
      <div>
        <SidebarUserProfile />
      </div>
      {/* <OnBoarding /> */}
    </div>
  );
};
export default Topbar;
