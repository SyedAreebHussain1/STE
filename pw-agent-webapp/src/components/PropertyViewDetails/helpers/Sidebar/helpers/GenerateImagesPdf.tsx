import Button from "../../../../../helpers/inputs/Button";
import GenerateImg from "./../../../../../assets/generate.svg";
type Props = {};

const GenerateImagesPdf = (props: Props) => {
  return (
    <div className="rounded-xl bg-[#27A3A314] h-[344px] flex flex-col items-center justify-center p-4">
      <img src={GenerateImg} alt="" />
      <h4 className="text-[1.2rem] font-semibold text-[#344054] text-center mt-3 mb-[2.0075rem]">
        Generate Image & Pdf of the Property in One Click
      </h4>
      <div className="flex items-center gap-5">
        <Button
          label="Generate Image"
          variant="filled"
          className="!text-[14px] !font-medium"
        />
        <Button
          label="Generate PDF"
          variant="outlined"
          className="!text-[14px] !font-medium"
        />
      </div>
    </div>
  );
};

export default GenerateImagesPdf;
