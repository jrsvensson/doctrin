import React from "react";
import DropDownQuestion from "./DropdownQuestion";
import YesNoQuestion from "./YesNoQuestion";
import MultipleYesNoQuestion from "./MultipleYesNoQuestion";
import TextQuestion from "./TextQuestion";
import CheckboxQuestion from "./CheckboxQuestion";

const QUESTION_COMPONENTS = {
  dropdown: DropDownQuestion,
  multipleYesNo: MultipleYesNoQuestion,
  yesNo: YesNoQuestion,
  checkbox: CheckboxQuestion,
  text: TextQuestion
};

export { QUESTION_COMPONENTS };
