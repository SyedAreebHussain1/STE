import { bulbIcon } from "../../../assets/dashboardAssets";
import Tag, { TagType } from "../../../components/tag/tag";
import { thumb, stars, improvement } from "../../../assets/ideaPlan";

export interface ValidationCardI {
  title: string;
  tagTitle: string;
  descTitle: string;
  tagIcon: string;
  tagType: TagType;
  score: number;
}

const ValidationSectionCard = ({
  card,
  isFirst,
}: {
  card: ValidationCardI;
  isFirst: boolean;
}) => {
  const getScoreMessage = (score: number): string => {
    if (score == null) return "Please wait";
    if (score < 50) return "Needs Improvement";
    if (score >= 50 && score < 70) return "Average";
    return "Great";
  };

  const getIcon = (score: number) => {
    if (score === null) return improvement;
    if (score < 50) return improvement;
    if (score >= 50 && score < 70) return thumb;
    return stars;
  };

  const getTagType = (remarks: string): TagType => {
    switch (remarks) {
      case "Needs Improvement":
        return "danger";
      case "Average":
        return "info";
      case "Great":
        return "success";
      default:
        return "default";
    }
  };

  const getTextColor = (remarks: string): string => {
    switch (remarks) {
      case "Needs Improvement":
        return "text-red-500 font-medium"; 
      case "Average":
        return "text-blue-500 font-medium"; 
      case "Great":
        return "text-green-500 font-medium"; 
      default:
        return "text-gray-500 font-medium"; 
    }
  };

  const remarks =
    card.score !== undefined ? getScoreMessage(card.score) : "Loading...";
  const tagType = getTagType(remarks);

  const icons = card.score !== undefined ? getIcon(card.score) : "Loading...";

  return (
    <div
      style={{
        borderLeft: isFirst ? "" : "1px solid",
        borderImageSource:
          "linear-gradient(0deg, rgba(211, 211, 211, 0) 30%, rgba(0, 42, 45, 0.26) 50%, rgba(255, 255, 255, 0) 60%)",
        borderImageSlice: 10,
      }}
      className="flex flex-col p-6 gap-10 rounded-lg shadow-xl"
    >
      <div className="bg-[#FFA800] bg-opacity-10 justify-center items-center p-3 rounded-full cursor-pointer w-fit">
        <img src={bulbIcon} alt="" />
      </div>
      <p className="text-2xl font-medium leading-[26px] w-[236px] line-clamp-2 ">
        {card.title}
      </p>
      <div className="flex justify-between flex-col lg:flex-row gap-5 lg:gap-0">
        <p className="text-body heading-xl font-bold leading-[49.81px]">
          {card.score} %
        </p>
        <div className="bg-[#FFFFFF] px-3 py-1 flex rounded-full gap-1 border-2 border-gray-600">
          <img src={icons} alt="Thumb Icon" />
          <p className={getTextColor(remarks)}>{remarks}</p>
        </div>
      </div>
    </div>

  
  );
};

export default ValidationSectionCard;