import CollapsibleQuestion from "./CollapsibleQuestion";

interface Props {
  heading: string;
  questionList: { question: string; answer: string }[];
  questionId: string;
}

const QuestionsSection = ({ heading, questionList, questionId }: Props) => {
  return (
    <div className="flex flex-col gap-2" id={questionId}>
      <h1 className="heading-l font-semibold">{heading}</h1>
      {questionList.map((ques, i) => (
        <CollapsibleQuestion
          key={i}
          question={ques.question}
          answer={ques.answer}
        />
      ))}
    </div>
  );
};

export default QuestionsSection;
