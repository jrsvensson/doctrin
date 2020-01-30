import React, { Fragment, useState } from "react";
import Button from "./Button";
import ChoicesWrapper from "./ChoicesWrapper";
import ChoiceLabel from "./ChoiceLabel";

const CheckboxQuestion = ({ question, buttonLabel, handleSubmit }) => {
  const defaultValue = question.choices.map(c => ({ [c]: "No" }));
  console.log(defaultValue)
  const [value, setValue] = useState(defaultValue);
  const handleChange = e => {
    const idx = value.findIndex(elem => elem.hasOwnProperty(e.target.name));
    value[idx] = { [e.target.name]: e.target.checked ? "Yes" : "No" };
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
          <Fragment key={choice}>
            <input type={"checkbox"} name={choice} onChange={handleChange} />
            <ChoiceLabel>{choice}</ChoiceLabel>
          </Fragment>
        ))}
      </ChoicesWrapper>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </>
  );
};

export default CheckboxQuestion;
