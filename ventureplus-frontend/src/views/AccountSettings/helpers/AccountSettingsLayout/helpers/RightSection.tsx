import { useLocation, useNavigate } from "react-router-dom";
import {
  businessBlackIcon,
  communicationIcon,
  profileIcon,
  securityIcon,
  subscriptionIcon,
} from "../../../../../assets/accountSettingsAssets";

interface RightSectionI {
  selectedCard: string;
}

const menuItems: { title: string; icon: string }[] = [
  {
    title: "Subscription",
    icon: subscriptionIcon,
  },
  {
    title: "Profile",
    icon: profileIcon,
  },
  {
    title: "Security",
    icon: securityIcon,
  },
  {
    title: "Business",
    icon: businessBlackIcon,
  },
  {
    title: "Communication",
    icon: communicationIcon,
  },
];

const RightSection = ({ selectedCard }: RightSectionI) => {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  let index = pathname.slice(1, pathname.length).indexOf("/") + 2;
  return (
    <>
      <div className="border-[1px] border-strokes py-[16px] sm:flex hidden flex-col gap-[10px] rounded-[8px] ">
        {menuItems.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor:
                item.title.toLowerCase() === pathname.substring(index)
                  ? "#CCE1E2"
                  : "",
            }}
            onClick={() =>
              navigate(`/account-settings/${item.title.toLowerCase()}`)
            }
            className={`flex gap-[10px] items-center xs:justify-center lg:justify-start text-title px-[24px] py-2 cursor-pointer w-full overflow-hidden hover:bg-green-100 `}
          >
            <img src={item.icon} alt="" className="w-6 h-6 object-cover " />
            <p className="btn-text font-medium leading-[19.58px] xs:hidden lg:inline-block ">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full sm:hidden  justify-between mt-1 mb-2">
        {menuItems.map((item, i) => (
          <div
            className="flex justify-between"
            style={{
              backgroundColor:
                item.title.toLowerCase() === pathname.substring(index)
                  ? "#CCE1E2"
                  : "",
            }}
            onClick={() =>
              navigate(`/account-settings/${item.title.toLowerCase()}`)
            }
          >
            <div className="p-2">
              <img src={item.icon} alt="" className="w-6 h-6  " />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RightSection;
