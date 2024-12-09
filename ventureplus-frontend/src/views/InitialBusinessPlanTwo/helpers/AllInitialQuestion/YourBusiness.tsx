import { Button, Input } from "antd";

interface YourBusinessProps {
  question: string;
  handleSelect: any;
  selectedItems: any[];
  type: string;
  handleAddTextClick: any;
  setPleaseSpecify: any;
  pleaseSpecify: any;
  setInputValue: any;
  inputValue: string;
  choose?: any;
}
const YourBusiness = ({
  type,
  question,
  selectedItems,
  handleSelect,
  handleAddTextClick,
  pleaseSpecify,
  setPleaseSpecify,
  setInputValue,
  inputValue,
  choose,
}: YourBusinessProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-center w-full mt-10">
        <h1 className="text-[#212838] font-semibold sm:text-[2.25rem] text-[1.25rem] w-full">
          {question}
        </h1>
      </div>

      <div className="mt-3 gap-5 z-10 flex flex-col items-center justify-center">
        {selectedItems
          ?.filter(
            (item: any, index: any, self: any) =>
              index === self.findIndex((t: any) => t === item)
          )
          .map((item: string) => (
            <div
              key={item}
              className="font-semibold p-2 text-center items-center justify-center cursor-pointer h-full flex flex-col w-full"
            >
              <div
                onClick={() => handleSelect(item)}
                className={
                  choose.includes(item)
                    ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                    : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                }
              >
                <span>
                  <h5 className="p-4 ">{item}</h5>
                </span>
              </div>
            </div>
          ))}
      </div>
      {!pleaseSpecify && (
        <div className="w-full">
          <div className="p-1 mt-2  ">
            <Button
              className={
                "bg-[#FFFFFF] text-[#4A5366] h-[48px] font-semibold w-full m-1 z-10"
              }
              onClick={() => setPleaseSpecify(true)}
            >
              <span>Other (please specify)</span>
            </Button>
          </div>
        </div>
      )}
      {pleaseSpecify && (
        <div className="p-3 z-10">
          <Input
            name="enterText"
            value={inputValue}
            placeholder="Enter Text"
            type="text"
            autoComplete="off"
            onChange={(e: any) => setInputValue(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTextClick();
              }
            }}
            suffix={
              <Button
                onClick={handleAddTextClick}
                type="primary"
                className="!h-[42px] tex-[#E3E7EF] w-[67px] !bg-[#016A70] p-3 z-10 "
              >
                Save
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
};

export default YourBusiness;
