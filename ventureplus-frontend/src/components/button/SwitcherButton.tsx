const SwitchButtons = ({
  check,
  setCheck,
  firstText,
  secondText,
  className,
}: {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  firstText: string;
  secondText: string;
  className?: string;
}) => {
  return (
    <div
      className={`switch-button transition-all duration-500 ${className} ${
        check ? "!text-[#fff]" : "!text-[#040615]"
      }`}
      data-content={secondText}
    >
      <input
        className="switch-button-checkbox"
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      ></input>
      <label className={`switch-button-label `}>
        <span
          className={`switch-button-label-span  transition-all duration-500 ${
            check ? "text-[#040615]" : "text-[#fff]"
          }`}
        >
          {firstText}
        </span>{" "}
      </label>
    </div>
  );
};
export default SwitchButtons;