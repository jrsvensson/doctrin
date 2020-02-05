import React, { Fragment } from "react";
import useVisit from "../useVisit";
import Button from "./Button";
import Question from "./Question";

// TODO: Fix React state update warning
export const IllnessSelector = () => {
  const { illnesses, updateVisit } = useVisit();
  return (
    <form>
      <Question>Please select your symptom</Question>
      {illnesses.map(illness => (
        <Fragment key={illness.illness}>
          <Button onClick={() => updateVisit({ illness: illness.illness })}>
            {illness.illness}
          </Button>
        </Fragment>
      ))}
    </form>
  );
};
