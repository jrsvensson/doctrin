import React, { useRef } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import ChoicesWrapper from "./ChoicesWrapper";

const TextQuestion = ({ buttonLabel, handleSubmit }) => {
  const ref = useRef();
  const handleClick = e => {
    e.preventDefault();
    handleSubmit(ref.current.value);
  };
  return (
    <>
      <ChoicesWrapper>
        <TextInput type={"text"} ref={ref} />
      </ChoicesWrapper>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </>
  );
};

export default TextQuestion;
