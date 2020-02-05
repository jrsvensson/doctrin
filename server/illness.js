const mockResponse = [
  {
    illness: "Fever",
    questions: [
      {
        question: "What was the last measured temperature?",
        type: "dropdown",
        choices: [
          "35 degrees",
          "36 degrees",
          "37 degrees",
          "38 degrees",
          "39 degrees",
          "40 degrees",
          "41 degrees",
          "42 degrees",
          "Don't know"
        ]
      },
      {
        question: "How long have you had a fever?",
        type: "dropdown",
        choices: [
          "0 days",
          "1 day",
          "2 days",
          "3 days",
          "4 days",
          "5 days",
          "6 days",
          "7 days",
          "8 days",
          "9 days",
          "10 days",
          "11 days",
          "12 days",
          "13 days",
          "14 days"
        ]
      },
      {
        question: "Do you have any of the following?",
        type: "multipleYesNo",
        choices: [
          "Problem breathing",
          "Stiff neck",
          "Chest pain",
          "Abdominal pain"
        ]
      },
      {
        question: "Do you have any of the following?",
        type: "checkbox",
        choices: ["Soar throat", "Cough", "Muscle pain", "Vomiting"]
      },
      {
        question: "Have you recently traveled abroad?",
        type: "yesNo",
        followUps: [
          {
            question: "Where did you travel?",
            type: "text"
          }
        ]
      }
    ]
  }
];

const getIllnesses = () => {
  return mockResponse;
};

export { getIllnesses };
