import { useEffect, useState } from "react";
import { businessBlackIcon } from "../../../../../assets/accountSettingsAssets";
import {
  companyProfileIcon,
  criticalAnalysisIcon,
  pitchDeckIcon,
} from "../../../../../assets/BusinessToolkit";
import { useLocation, useNavigate } from "react-router-dom";

const MenuTabs = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  let index = pathname.slice(1, pathname.length).indexOf("/") + 2;
  const [tabs, setTabs] = useState([
    {
      title: "Business Model Canvas",
      icon: businessBlackIcon,
      isSelected: false,
      route: "model-canvas",
    },
    {
      title: "Pitch Deck",
      icon: pitchDeckIcon,
      isSelected: false,
      route: "pitch-deck",
    },
    // will be added later, commenting for future updates
    // {
    //   title: "Company Profile",
    //   icon: companyProfileIcon,
    //   isSelected: false,
    //   route: "company-profile",
    // },
    // {
    //   title: "Critical Analysis",
    //   icon: criticalAnalysisIcon,
    //   isSelected: false,
    //   route: "critical-analysis",
    // },
  ]);

  useEffect(() => {
    const target = pathname.slice(index);
    const newTabs = tabs.map((st) => {
      if (st.route === target) {
        return { ...st, isSelected: true };
      } else {
        return { ...st, isSelected: false };
      }
    });
    setTabs(newTabs);
  }, [pathname]);

  return (
    <div className="border border-strokes rounded-lg flex items-center w-fit overflow-x-auto custom-scrollbar">
      {tabs?.map((tab) => (
        <div
          onClick={() => navigate(`/business-toolkit/${tab?.route}`)}
          key={tab?.title}
          className={`flex items-center justify-center gap-1 py-2 px-3 w-48 hover:bg-foreground hover:bg-opacity-55 cursor-pointer ${
            tab.isSelected ? "bg-green-100 border-b-4 border-primary" : ""
          }`}
        >
          <img
            src={tab?.icon}
            alt=""
            className="md:w-4 md:h-4  xs:w-6 xs:h-6"
          />
          <p className="body-s font-medium whitespace-nowrap md:inline-block xs:hidden">
            {tab?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MenuTabs;
