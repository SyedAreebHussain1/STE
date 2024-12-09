import { useNavigate } from "react-router-dom";

interface accSettingsCardI {
  card: {
    icon: string;
    bgImg: string;
    title: string;
    desc: string;
    link: string;
  };
}

const AccountSettingsCard = ({ card }: accSettingsCardI) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[256.67px] w-[365px] relative rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => navigate(`/account-settings/${card.link}`)}
    >
      <div className="h-full w-full absolute top-0 left-0">
        <img src={card.bgImg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative flex flex-col gap-2 w-full h-full p-8">
        <img src={card.icon} alt="" className="h-10 w-10" />
        <h1 className="text-body heading-xs leading-[40.6px] font-medium">
          {card.title}
        </h1>
        <p className="body-s font-medium leading-[24px] text-para">
          {card.desc}
        </p>
      </div>
    </div>
  );
};

export default AccountSettingsCard;
