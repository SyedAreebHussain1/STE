import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { rightArrowGrayIcon, rightArrowIcon } from "../../../assets";
import objectsGroup from "../../../assets/question/Objects.png";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import SingleSelectAnswer from "../../../components/questionTypes/SingleSelectAnswer";
import {
  getInitialQuestionByTypeApi,
  postPitchDeckApi,
} from "../../../services/api/PitchDeck";
import { InitialQuestionsContainer } from "../../InitialBusinessPlan/helpers/InitialQuestionsContainer";
import PitchQuestion from "./PitchQuestion";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const PitchDeckTypes = [
  "RaisingFunds",
  "AttractingStrategicPartner",
  "Crowdfunding",
  "SellingProductOrServiceToCustomers",
  "InternalUpdate",
  "InvestorUpdate",
];

const PitchInitialQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<any[]>([]);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState<number>(0);
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const postPitch = () => {
    setLoading(true);
    postPitchDeckApi(
      dispatch,
      { type: selectedType[0], businessId: currentSelectedBusiness?.business?.id },
      setLoading,
      onPostingPitch
    );
  };

  const onPostingPitch = async (res: any) => {
    if (selectedType)
      await getInitialQuestionByTypeApi(selectedType[0], setLoading, onSuccess);
  };

  const onSuccess = (res: any) => {
    setLoading(false);
    setQuestions(res?.data);
    // navigate(`/pitchQuestion/${res?.data?.[0]?.id}`); remove its route
  };

  return (
    <>
      {questions?.length > 0 ? (
        <PitchQuestion
          questions={questions}
          current={current}
          setCurrent={setCurrent}
        />
      ) : (
        <PageContainer>
          <div className="bg-primary bg-opacity-[6%] w-full min-h-screen rounded-[20px] p-10">
            <div className="w-full h-[170px] bg-[white] flex justify-between rounded-[20px] overflow-hidden shadow-[0px_4px_9.7px_0px_#002A2D29]">
              <div className="flex flex-col gap-3 rounded-[20px] p-10">
                <h1 className="text-green-700 heading-l font-semibold">
                  Pitch Deck Type
                </h1>
                <h1 className="text-primaryActive text-2xl font-medium">
                  Choose a type to proceed
                </h1>
              </div>
              <img src={objectsGroup} alt="" />
            </div>
            <InitialQuestionsContainer>
              {" "}
              <h1 className="text-body heading-l font-semibold">
                Please select a pitch deck type to proceed:{" "}
              </h1>
              <SingleSelectAnswer
                options={PitchDeckTypes}
                selectedOption={selectedType}
                setSelectedOption={setSelectedType}
              />
            </InitialQuestionsContainer>
            <div className="flex justify-end items-center">
              <ButtonWithSvg
                title={"Next"}
                icon={selectedType.length <= 0 ? rightArrowGrayIcon : rightArrowIcon}
                type="primary"
                sm
                bold
                loading={loading}
                disabled={selectedType.length <= 0}
                onClick={postPitch}
              />
            </div>
          </div>
        </PageContainer>
      )}
    </>
  );
};

export default PitchInitialQuestion;
