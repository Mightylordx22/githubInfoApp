import React, { useState } from "react";
import { Layout } from "../Layout";

export const App = () => {
  const [githubData, setGithubData] = useState(0);
  return <Layout githubData={githubData} setData={setGithubData} />;
};
