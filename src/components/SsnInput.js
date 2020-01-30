import React, { useRef } from "react";
import useVisit from "../useVisit";
import Button from "./Button";
import TextInput from "./TextInput";
import Question from "./Question";

export const SsnInput = () => {
  // TODO: Validate SSN
  const { createVisit } = useVisit();
  const ref = useRef(null);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createVisit(ref.current.value);
      }}
    >
      <Question>
        Please enter your social security number
      </Question>
      <TextInput type={"text"} name={"ssn"} ref={ref} />
      <div>
        <Button>Next</Button>
      </div>
    </form>
  );
};
