interface SingleSelectAnswerI {
  options: any[];
  selectedOption: any[];
  setSelectedOption: React.Dispatch<React.SetStateAction<any[]>>;
  setAnswer?: React.Dispatch<React.SetStateAction<any[]>>;
}

const SingleSelectAnswer = ({
  options,
  selectedOption,
  setSelectedOption,
  setAnswer,
}: SingleSelectAnswerI) => {
  const isSelected = (opt: string | number) => {
    return selectedOption.includes(opt);
  };

  const handleSelection = (opt: string | number) => {
    setSelectedOption([opt]);
    if (setAnswer) setAnswer([opt]);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {options.map((option) => (
        <div
          key={option?.answer ? option?.answer : option}
          className={`py-2 px-4 rounded-full paragraph font-semibold border  cursor-pointer ${
            isSelected(option?.answer ? option?.answer : option)
              ? "border-primary bg-primary text-[white]"
              : "border-[white] bg-[white] text-primary"
          } `}
          onClick={() =>
            handleSelection(option?.answer ? option?.answer : option)
          }
        >
          {option?.answer ? option?.answer : option}
        </div>
      ))}
    </div>
  );
};

export default SingleSelectAnswer;
