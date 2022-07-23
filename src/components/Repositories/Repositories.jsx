import React, { useContext, useEffect, useState } from "react";
import { GithubContext } from "../../providers/github-provider";
import RepositoriesGallery from "./RepositoriesGallery";
import * as S from "./styled";

export default function Repositories() {
  const { githubState } = useContext(GithubContext);
  const [repositoryList, setRepositoryList] = useState(
    githubState.repositories
  );

  const showRepositories = () => setRepositoryList(githubState.repositories);

  const showStarred = () => setRepositoryList(githubState.starred);

  useEffect(() => {
    setRepositoryList(githubState.repositories);
  }, [githubState]);

  return (
    <div>
      <S.ButtonsContainer>
        <S.Button onClick={showRepositories}>Own Repositories</S.Button>
        <S.Button onClick={showStarred}>Starred Repositories</S.Button>
      </S.ButtonsContainer>
      <RepositoriesGallery
        repositoriesList={repositoryList}
      ></RepositoriesGallery>
    </div>
  );
}
