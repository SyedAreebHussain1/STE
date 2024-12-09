import { Switch } from "antd";

type Props = {};

const VisibilityOnWebsite = (props: Props) => {
  return (
    <div className="p-4 border border-borderColor flex items-center justify-between rounded-xl">
      <h4 className="text-[#1D2939] text-base font-medium">
        Visibility on Website
      </h4>
      <Switch />
    </div>
  );
};

export default VisibilityOnWebsite;
