import React from "react";
import { UserInput } from "../UserInput";
import { GithubCard } from "../GithubCard";
import { NoData } from "../NoData";

export const Layout = ({ githubData, setData }) => {
  return (
    <>
      <UserInput setData={setData} />
      {githubData !== 0 ? (
        <GithubCard data={githubData} />
      ) : (
        <NoData />
      )}
    </>
  );
};
