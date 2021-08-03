import { Typography } from "@material-ui/core"

export const GithubStats = ({data}) => {
  return (
    <div className={"github-stats"}>
      <Typography>{data.followers} <span className={"bold"}>Followers</span></Typography>
      <Typography>{data.following}  <span className={"bold"}>Following</span></Typography>
      <Typography>{data.public_repos}  <span className={"bold"}>Repos</span></Typography>
    </div>
  )
}