import SidebarUserProfile from "./SidebarUserProfile";
import { useEffect, useState } from "react";

type Props = {
  labels: { [label: string]: string };
};
const Topbar = ({ labels }: Props) => {
  const [label, setLabel] = useState<any>(null);
  useEffect(() => {
    if (labels) {
      const pageName = Object.keys(labels).filter((item) =>
        location.pathname.includes(item)
      );
      setLabel(pageName);
    }
  }, [labels]);
  return (
    <div className="flex justify-between items-center flex-wrap h-[82px]">
      <div className="flex gap-3">
        <h2 className="text-[1.25rem] font-bold">
          {labels?.[location?.pathname]}
        </h2>
      </div>
      <SidebarUserProfile />
    </div>
  );
};
export default Topbar;
