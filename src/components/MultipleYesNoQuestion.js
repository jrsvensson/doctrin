import styled from "styled-components";
import React, {useState} from "react";
import Button from "./Button";
import ChoicesWrapper from "./ChoicesWrapper";
import ChoiceLabel from "./ChoiceLabel";

const SubQuestionWrapper = styled.div`
  margin: 16px;
`;

const SubQuestionLabel = styled.label`
  margin: 8px;
  display: block;
  font-size: 20px;
`;

const MultipleYesNoQuestion = ({ question, buttonLabel, handleSubmit }) => {
  const defaultValue = question.choices.map(c => ({ [c]: null }));
  const [value, setValue] = useState(defaultValue);
  const handleChange = e => {
    const idx = value.findIndex(elem => elem.hasOwnProperty(e.target.name));
    value[idx] = { [e.target.name]: e.target.value };
    setValue(value);
  };

  const handleClick = e => {
    e.preventDefault();
    handleSubmit(value);
  };
  return (
    <>
      <ChoicesWrapper>
        {question.choices.map(choice => (
          <SubQuestionWrapper key={choice}>
            <SubQuestionLabel>{choice}</SubQuestionLabel>
            <input
              type={"radio"}
              name={choice}
              value={"Yes"}
              onChange={handleChange}
            />
            <ChoiceLabel>Yes</ChoiceLabel>
            <input
              type={"radio"}
              name={choice}
              value={"No"}
              onChange={handleChange}
            />
            <ChoiceLabel>No</ChoiceLabel>
          </SubQuestionWrapper>
        ))}
      </ChoicesWrapper>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </>
  );
};

export default MultipleYesNoQuestion;
