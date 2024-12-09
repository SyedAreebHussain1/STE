import { Input } from "antd";

interface DescriptiveAnswerI {
  descriptiveAnswer: string;
  setDescriptiveAnswer: React.Dispatch<React.SetStateAction<string>>;
  setAnswer?: React.Dispatch<React.SetStateAction<any[]>>;
}

const DescriptiveAnswer = ({
  descriptiveAnswer,
  setDescriptiveAnswer,
  setAnswer,
}: DescriptiveAnswerI) => {

  return (
    <Input
      name="answer"
      placeholder="answer"
      value={descriptiveAnswer}
      className="w-full h-[48px]"
      onChange={(e) => {
        setDescriptiveAnswer(e.target.value);
        if (setAnswer) setAnswer([e.target.value]);
      }}
    />
  );
};

export default DescriptiveAnswer;
