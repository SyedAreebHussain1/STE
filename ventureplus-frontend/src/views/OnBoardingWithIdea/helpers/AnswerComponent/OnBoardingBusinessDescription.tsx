import TextArea from "antd/es/input/TextArea";
import { QuestionItem } from "../OnBoardingList";

interface Props {
  value: any,
  setValue: any,
  item: QuestionItem
}

const OnBoardingBusinessDescription = ({ value, setValue, item }: Props) => {
  const handleChange = (val: any) => {
    setValue((pre: any) => ({ ...pre, [item.keyValue]: val }));
  };

  return (
    <div className="w-full h-[25vh]">
      <TextArea
        placeholder="Enter Answer"
        className="max-h-[25vh]"
        value={value[item.keyValue]}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default OnBoardingBusinessDescription;
