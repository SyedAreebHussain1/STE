import { useNavigate } from "react-router-dom";
import RoundedButton from "../button/RoundedButton";

const CompleteYourBusinessPlan = ({
  headingNumber,
  heading,
  chapterTitle
}: {
  headingNumber: any;
  heading: any;
  chapterTitle: string;
}) => {
  const navigate = useNavigate()
  const clickHandler = (id: number) => {
    navigate(`/questions/${id}`)
  }
  return (
    <div>
      <div className="flex text-xl font-medium ">

        <div className="flex-1 ml-[20px]">
          {heading?.map((items: any, key: number) => {
            return (
              <div className="flex flex-col mt-3">
                <div className="flex gap-2">
                  <h1>{headingNumber}.{items?.topicNo}</h1>
                  <h2>
                    {items?.title}
                  </h2>
                </div>
                <div className="bg-[#EBE9FE] p-[15px] rounded-xl mt-[20px]">
                  <h1 className="text-[22px] font-semibold">
                  Incomplete Topic
                  </h1>
                  <p className="text-[14px] font-medium">
                  You have'nt answered quetions from this topic
                  </p>
                  <RoundedButton
                    title={"Continue Answering Topics"}
                    type="primary"
                    onClick={() => clickHandler(items?.id)}
                    sm
                    className="mt-[10px]"
                    disabled={chapterTitle == "Executive Summary" || chapterTitle == "Appendix"}
                  />
                </div>
              </div>

            )
          })
          }
        </div>
      </div>

    </div>
  );
};
export default CompleteYourBusinessPlan;
