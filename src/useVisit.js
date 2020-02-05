import React, { useContext, useCallback } from "react";
import { VisitContext } from "./VisitContext";
import { usePost, usePut } from "./useFetch";
import ENDPOINTS from "./endpoints";

const useVisit = () => {
  const { visit = {}, setVisit, illnesses } = useContext(VisitContext);
  const { makeRequest: makePost } = usePost(ENDPOINTS.VISIT);
  const { makeRequest: makePut } = usePut(ENDPOINTS.VISIT);

  const updateVisit = update => {
    const updatedVisit = { ...visit, ...update };
    makePut(updatedVisit).then(setVisit(updatedVisit));
  };

  const createVisit = useCallback(ssn => {
    makePost({ ssn }).then(setVisit);
  }, []);

  return { visit, createVisit, updateVisit, illnesses };
};

export default useVisit;
