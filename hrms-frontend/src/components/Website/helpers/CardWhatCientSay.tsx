import bgImage1 from "../../../assets/clientCardBgimage1.svg";
import bgImage2 from "../../../assets/clientCardBgimage2.svg";

const CardWhatCientSay = (props: any) => {
  return (
    <div className="w-[100%]  bg-white rounded-3xl overflow-hidden">
      <div className="pt-[21px] flex flex-col items-center">
        <img
          src={props.imageUrl}
          alt="userImage"
          className="w-[117px] h-[117px] object-contain rounded-full overflow-hidden"
        />
        <div>
          <span className="mt-[9px] text-[1.364rem] text-[#1E1E1E] font-semibold">
            {props.title}
          </span>
        </div>
      </div>
      <div className="py-[40px] px-[25px] w-full h-[330px]">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0">
            <img
              src={bgImage1}
              alt="bgimage"
              className="w-[106px] h-[79.5px] "
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              src={bgImage2}
              alt="bgimage"
              className="w-[106px] h-[79.5px] "
            />
          </div>
          <div className="pt-[40px] px-[40px] relative z-[10]">
            <p className="text-[1.547rem] font-semibold">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWhatCientSay;
