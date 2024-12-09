import React from "react";
import Logo from "../../../assets/daftarPlusWebsiteLogo.svg";

const HeaderRightComponent = () => {
  return (
    <div className="py-[27px] flex-1 rounded-3xl overflow-hidden headerRightComponentBgColor">
      <div className="px-[16px] flex justify-between">
        <div>
          <img
            className="w-[164.24px] h-[45.24px] "
            src={Logo}
            alt="website logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderRightComponent;
