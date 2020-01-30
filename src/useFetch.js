import React, { useState } from "react";

const useGet = url => {
  return useFetch(url, "get");
};

const usePost = url => {
  return useFetch(url, "post");
};

const usePut = url => {
  return useFetch(url, "put");
};

const useFetch = (url, method) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async data => {
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      setIsLoading(true);
      const res = await fetch(url, options);
      setIsLoading(false);
      return await res.json();
    } catch (error) {
      setError(error);
    }
  };

  return { isLoading, error, makeRequest };
};

export { useGet, usePost, usePut };
