type Props = {
  title: string;
  logo: string;
  desc: string;
  isSelected: boolean;
  onChange: () => void;
};

const PropertyTypeOption = (props: Props) => {
  return (
    <div
      className={`cursor-pointer p-[1.125rem] rounded-xl border ${
        props.isSelected ? "border-primary" : "border-borderColor"
      }`}
      onClick={props.onChange}
    >
      <div className="flex justify-between items-center">
        <img src={props.logo} alt="" />
        <input
          type="checkbox"
          className="cursor-pointer checkbox-custom relative"
          name="type"
          checked={props.isSelected}
          readOnly
        />
      </div>
      <h4 className="mt-1 text-[#1D2939] text-base font-medium">
        {props.title}
      </h4>
      <p className="text-[.8125rem] text-[#475467] mt-[.375rem]">
        {props.desc}
      </p>
    </div>
  );
};

export default PropertyTypeOption;
