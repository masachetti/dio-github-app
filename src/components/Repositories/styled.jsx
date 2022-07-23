import styled, { css } from "styled-components";

export const RepositoryCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  border: solid 2px #d0d0d7;
  border-radius: 7px;
  width: 28vw;
  min-height: 100px;
  margin: 15px 2rem 15px 10px;
  padding: 10px;
  text-decoration: none;
  color: black;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RepoName = styled.span`
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px #d0d0d7;
  &:hover {
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.24);
  }
  &:active {
    background-color: #666363;
    color: white;
  }
`;
