import React, { useState } from "react";
import Button from "./Button";
import ChoicesWrapper from "./ChoicesWrapper";

const DropDownQuestion = ({ question, buttonLabel, handleSubmit }) => {
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
        <select onChange={handleChange}>
          <option value={""}>{"Please select"}</option>
          {question.choices.map(choice => (
            <option value={choice} key={choice}>
              {choice}
            </option>
          ))}
        </select>
      </ChoicesWrapper>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </>
  );
};

export default DropDownQuestion;
