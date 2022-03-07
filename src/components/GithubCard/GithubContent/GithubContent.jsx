import { Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';

import { GithubStats } from "./GithubStats";
import { GithubRepos } from "./GithubRepos"

export const GithubContent = ({ data }) => {
  return (
    <div className={"github-content"}>
      <Typography variant="h4" className={"github-name"}>
        {data.name ? data.name : "[This user doesn't have a name]"}
      </Typography>
      <Typography variant="body1">{data.bio}</Typography>
      {data.twitter_username ? <Typography><a href="/" ><i class="fab fa-twitter"></i></a><span className={"twitter-name"}>{data.twitter_username}</span></Typography> : <></>}
      <GithubStats data={data} />
      <GithubRepos repoUrl={data.repos_url} />
    </div>
  );
};
