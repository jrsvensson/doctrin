import React, { useState } from "react";
import useVisit from "./useVisit";

const getQuestion = (qs, idxs) => {
  const idxsCopy = [...idxs];
  if (idxsCopy.length === 1) {
    return qs[idxsCopy[0]];
  }
  const parent = idxsCopy.shift();
  return getQuestion(qs[parent].followUps, idxsCopy);
};

const getNextQuestionIdx = (questions, idxs) => {
  const idxsCopy = [...idxs];
  if (idxsCopy.length === 0) {
    return null;
  }
  idxsCopy[idxsCopy.length - 1] = idxsCopy[idxsCopy.length - 1] + 1;
  const nextSibling = getQuestion(questions, idxsCopy);
  if (!nextSibling) {
    // NEXT PARENT
    idxsCopy.pop();
    return getNextQuestionIdx(questions, idxsCopy);
  }
  return idxsCopy;
};

// TODO: Fix React state update warning
const useQuestionnaire = () => {
  const { visit, illnesses, updateVisit } = useVisit();
  const [questionIdxs, setQuestionIdx] = useState([0]);
  const [answers, setAnswers] = useState([]);
  const illness = illnesses.find(i => (i.illness = visit.illness)) || {};
  const question = getQuestion(illness.questions, questionIdxs);
  const nextQuestionIdx = getNextQuestionIdx(illness.questions, questionIdxs);

  const handleSubmit = answer => {
    let isFinished = false;
    if (
      answer === "Yes" &&
      question.followUps &&
      question.followUps.length > 0
    ) {
      questionIdxs.push(0);
      setQuestionIdx(questionIdxs);
    } else if (nextQuestionIdx) {
      setQuestionIdx(nextQuestionIdx);
    } else {
      isFinished = true;
    }

    answers.push({ [question.question]: answer });
    updateVisit({ isFinished, answers });
    setAnswers(answers);
  };

  return { question, isLastQuestion: !nextQuestionIdx, handleSubmit };
};

export default useQuestionnaire;
