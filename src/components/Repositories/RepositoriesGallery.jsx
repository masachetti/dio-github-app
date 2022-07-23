import React, { useContext } from "react";
import { GithubContext } from "../../providers/github-provider";
import * as S from "./styled";

export default function RepositoriesGallery({ repositoriesList }) {
  function renderRepositoryCard(repositoryData) {
    return (
      <S.RepositoryCardWrapper
        href={repositoryData.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <S.RepoName>{repositoryData.name}</S.RepoName>
        <span>{repositoryData.description}</span>
      </S.RepositoryCardWrapper>
    );
  }

  return (
    <S.GalleryWrapper>
      {repositoriesList.map(renderRepositoryCard)}
    </S.GalleryWrapper>
  );
}
