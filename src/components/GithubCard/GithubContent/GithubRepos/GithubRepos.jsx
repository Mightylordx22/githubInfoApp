import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

const fetchRepos = async (repoUrl) => {
  const res = await fetch(repoUrl);
  return res.json();
};

export const GithubRepos = ({ repoUrl }) => {
  const [repoData, setRepoData] = useState([]);
  useEffect(() => {
    fetchRepos(repoUrl).then(async (data) => {
      let repos = [];
      for (const k in data) {
        repos.push([data[k].name, data[k].html_url]);
      }
      setRepoData(repos);
    });
    console.log("Called");
  }, [repoUrl]);
  return (
    <>
      <div className={"github-repos"}>
        {repoData.map((data) => {
          return (
            <Typography className={"repo"}>
              <a
                rel="noreferrer"
                href={data[1]}
                target="_blank"
                className={"repo-link"}
              >
                {data[0]}
              </a>
            </Typography>
          );
        })}
      </div>
    </>
  );
};
