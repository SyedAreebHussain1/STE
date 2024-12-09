import { QuestionItem } from "./OnBoardingList";

export const mapToQuestionItem = (data: any): QuestionItem => {
  return {
    ...data,
  };
};
