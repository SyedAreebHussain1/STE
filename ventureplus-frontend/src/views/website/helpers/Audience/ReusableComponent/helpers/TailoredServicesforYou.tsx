import { FiPlus } from "react-icons/fi";
import { AudiencesCardImage1 } from "../../../../../../assets/website";
import { useNavigate } from "react-router-dom";

const TailoredServicesforYou = ({
  cardArr,
}: {
  cardArr: { heading: string; para: string; image: string; url: string }[];
}) => {
  return (
    <div className="w-full flex justify-center bg-[#016A70] mt-[50px]">
      <div className=" relative py-[60px] px-[30px] w-full lg:w-[1300px] gap-[80px] overflow-hidden">
        <h1 className="text-[29px] md:text-[45.78px] font-semibold text-[#fff] text-left md:text-center">
          Tailored Services for You
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-[20px] w-full mt-[50px]">
          {cardArr?.slice(0, 2)?.map((item, index) => (
            <Cards
              key={index + 20}
              heading={item?.heading}
              para={item?.para}
              image={item?.image}
              url={item?.url}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row  justify-center gap-[20px] w-full mt-[20px]">
          {cardArr?.slice(2, cardArr.length)?.map((item, index) => (
            <Cards
              key={index + 20}
              heading={item?.heading}
              para={item?.para}
              image={item?.image}
              url={item?.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TailoredServicesforYou;
const Cards = ({
  heading,
  para,
  image,
  url,
}: {
  heading: string;
  para: string;
  image: string;
  url: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full md:w-[330px] h-[260px] relative rounded-xl bg-[#FFFFFF] px-[20px] cursor-pointer"
      onClick={() => navigate(url)}
    >
      <div className="w-[50px] h-[50px] bg-[#016A70] absolute -top-3 -right-3 rounded-full flex justify-center items-center">
        <div className="w-[30px] h-[30px] border-[1px] border-[#fff] rounded-full text-[#fff] flex items-center justify-center text-[20px]">
          <FiPlus />
        </div>
      </div>
      <div className="mt-[60px]">
        <img src={image} className="w-[60px] h-[60px] " />
        <h1 className="text-[22px] font-semibold text-[#212838] mt-[5px]">
          {heading}
        </h1>
        <p className="text-[16px] text-[#4A5366] leading-[20px]">{para}</p>
      </div>
    </div>
  );
};
