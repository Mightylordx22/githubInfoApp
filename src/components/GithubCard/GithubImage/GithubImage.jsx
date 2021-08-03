import React from "react";

export const GithubImage = ({ url }) => {
  return (
    <img
      src={url}
      alt="Github Profile Icon"
      className={"github-image"}
      width="128"
      height="128"
    />
  );
};
