import { useGet } from "./useFetch";
import ENDPOINTS from "./endpoints";
import { VisitProvider } from "./VisitContext";
import React, { useState, useEffect } from "react";
import Page from "./components/Page";

const AppLoader = () => {
  const [response, setResponse] = useState(null);
  const { makeRequest } = useGet(ENDPOINTS.ILLNESSES);
  useEffect(() => {
    makeRequest().then(setResponse);
  }, []);
  // TODO: Use loading and error
  return (
    <VisitProvider illnesses={response}>
      <Page />
    </VisitProvider>
  );
};

export default AppLoader;
