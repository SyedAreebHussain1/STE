import {
  frame,
  WebPost1,
  WebPost2,
  WebPost3,
  WebPost4,
  WebPost5,
} from "../../../../../assets/website";

const SmartBusiness = () => {
  return (
    <div className="hidden  md:flex flex-col items-start mt-0 md:mt-[50px] md:items-center relative  px-[24px] md:px-0  ">
      <div className="flex flex-col items-start md:items-center gap-[20px]  sectionTopContainer  ">
        <h1 className="py-[7px] px-[18px] border border-[#67A6A9] rounded-full bg-[#67a6a91a] text-[#4A5366] text-[15px] font-medium">
          Why Choose VenturePlus?
        </h1>
        <p className="text-[23px] md:text-[30px] font-semibold text-left md:text-center leading-8 md:leading-9">
          LEVERAGE OUR AI FEATURES<br></br> FOR YOUR{" "}
          <a className="text-[#01555A]">SUCCESS </a>
        </p>
      </div>
      <div className="section w-full mt-[20px]">
        <img src={WebPost1} className=" h-full" />
      </div>
      <div className="section w-full">
        <img src={WebPost2} className=" h-full" />
      </div>
      <div className="section  w-full">
        <img src={WebPost3} className="  h-full" />
      </div>
      <div className="section   w-full">
        <img src={WebPost4} className=" h-full" />
      </div>
      <div className="section   w-full">
        <img src={WebPost5} className=" h-full" />
      </div>
    </div>
  );
};
export default SmartBusiness;
