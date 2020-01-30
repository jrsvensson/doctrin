import React, { useState } from "react";
import Button from "./Button";
import ChoicesWrapper from "./ChoicesWrapper";
import ChoiceLabel from "./ChoiceLabel";

const YesNoQuestion = ({ question, buttonLabel, handleSubmit }) => {
  const [value, setValue] = useState(null);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    handleSubmit(value);
  };

  return (
    <>
      <ChoicesWrapper>
        <input
          type={"radio"}
          name={question.question}
          value={"Yes"}
          onChange={handleChange}
        />
        <ChoiceLabel>Yes</ChoiceLabel>
        <input
          type={"radio"}
          name={question.question}
          value={"No"}
          onChange={handleChange}
        />
        <ChoiceLabel>No</ChoiceLabel>
      </ChoicesWrapper>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </>
  );
};

export default YesNoQuestion;
