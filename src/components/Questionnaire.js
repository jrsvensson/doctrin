import { QUESTION_COMPONENTS } from "./QuestionComponents";
import React from "react";
import useQuestionnaire from "../useQuestionnaire";
import Question from "./Question";

const Questionnaire = () => {
  const { question, handleSubmit, isLastQuestion } = useQuestionnaire();
  const QuestionComponent = QUESTION_COMPONENTS[question.type];
  return (
    <form>
      <Question>{question.question}</Question>
      <QuestionComponent
        question={question}
        handleSubmit={handleSubmit}
        buttonLabel={isLastQuestion ? "Finish" : "Next"}
      />
    </form>
  );
};

export default Questionnaire;
