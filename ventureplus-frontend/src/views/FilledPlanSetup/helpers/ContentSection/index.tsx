import { register } from "../../../../assets/filledPlanSetupAssets";

const chapters = [
  "Executive Summary",
  "Business Overview",
  "Products & Services",
  "Market Analysis",
  "Marketing & Sales Strategy",
  "Operations Plan",
  "Financials Plan",
  "Risk Analysis",
  "Appendix",
];

const Content = () => {
  return (
    <div className="relative flex mb-0 sm:mb-6">
      <img src={register} alt="" className="h-[470px] absolute left-0 top-0" />
      <div className="bg-transparent h-[500px] w-[27px] min-w-[27px]"></div>
      <div className="bg-foreground h-[500px] w-[85%] min-w-[326px] z-10 border-strokes border-[3.16px] rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-title font-bold text-2xl">Business Plan</h1>
        </div>
        {chapters.map((chap, i) => (
          <div key={i}>
            <div className="flex justify-between items-center my-2">
              <h1 className="text-body font-medium text-lg">{chap}</h1>
              <p className="text-para font-medium text-lg">{i + 1}</p>
            </div>
            <hr className="border-strokes" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
