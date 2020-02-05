import React, { useState } from "react";

const VisitContext = React.createContext(null);

const VisitProvider = ({ children, illnesses }) => {
  const [visit, setVisit] = useState({ isFinished: false });

  return (
    <VisitContext.Provider
      value={{
        visit,
        setVisit,
        illnesses
      }}
    >
      {children}
    </VisitContext.Provider>
  );
};

export { VisitContext, VisitProvider };
