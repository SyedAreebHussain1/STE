import { useEffect, useState } from "react";

interface MultiSelectAnswerI {
  options: any[];
  selectedOptions: any[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<any[]>>;
  setAnswer?: React.Dispatch<React.SetStateAction<any[]>>;
}

const MultiSelectAnswer = ({
  options,
  selectedOptions,
  setSelectedOptions,
  setAnswer,
}: MultiSelectAnswerI) => {
  const isSelected = (opt: number | string) => {
    return selectedOptions.includes(opt);
  };

  useEffect(() => {
    if (setAnswer) setAnswer([...selectedOptions]);
  }, [selectedOptions]);

  const handleSelection = (opt: number) => {
    if (selectedOptions.includes(opt)) {
      const index = selectedOptions.indexOf(opt);
      if (index > -1) {
        const selectedList = selectedOptions;
        selectedList.splice(index, 1);
        setSelectedOptions([...selectedList]);
      }
    } else {
      const selectedList = selectedOptions;
      selectedList.push(opt);
      setSelectedOptions([...selectedList]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {options?.map((option) => (
        <div
          key={option?.id}
          className={`py-2 px-4 rounded-full paragraph font-semibold border  cursor-pointer ${
            isSelected(option?.answer)
              ? "border-primary bg-primary text-[white]"
              : "border-[white] bg-[white] text-primary"
          } `}
          onClick={() => handleSelection(option?.answer)}
        >
          {option?.answer}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectAnswer;
