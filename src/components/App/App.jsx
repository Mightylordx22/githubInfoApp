import React, { useState, useEffect } from "react";
import { Layout } from "../Layout";

export const App = () => {
  const [githubData, setGithubData] = useState(0);
  const data = localStorage.getItem("githubInfo");
  useEffect(() => {
    if (typeof data === 'string') {
      setGithubData(data);
    }
  }, [data]);
  return <Layout githubData={githubData} setData={setGithubData} />;
};
