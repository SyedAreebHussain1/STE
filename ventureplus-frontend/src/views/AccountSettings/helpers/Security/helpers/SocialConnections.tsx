import { facebookIcon, googleIcon } from "../../../../../assets";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";

const SocialConnections = () => {
  return (
    <div className="border border-stroke rounded-md flex flex-col p-4 gap-3">
      <h1 className="input-label">Social Account Connections</h1>
      <ButtonWithSvg
        title={"Google"}
        icon={googleIcon}
        type="secondary"
        className="w-full"
        bold
        sm
      />
      <ButtonWithSvg
        title={"Facebook"}
        icon={facebookIcon}
        type="secondary"
        className="w-full"
        bold
        sm
      />
    </div>
  );
};

export default SocialConnections;
