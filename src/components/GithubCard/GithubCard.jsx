import { NoData } from "../NoData";
import { GithubContent } from "./GithubContent/GithubContent";
import { GithubImage } from "./GithubImage";

export const GithubCard = ({ data }) => {
  const user = JSON.parse(data);
  return (
    <>
      {user.login ? (
        <div className={"spacer"}>
          <div className={"main-content"}>
            <GithubImage url={user.avatar_url} />
            <GithubContent data={user} />
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
};
