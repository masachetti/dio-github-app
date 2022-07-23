import React, { useContext } from "react";
import { GithubContext } from "../../providers/github-provider";
import styled from "styled-components";

export default function ContentContainer({ children }) {
  const { githubState } = useContext(GithubContext);

  const NoUser = (
    <>
      <H3>
        Search for a github user to see user details and their repositories
      </H3>
    </>
  );

  const UserNotFound = (
    <>
      <h2>User not found!</h2>
    </>
  );

  return (
    <>
      {githubState.searchError
        ? UserNotFound
        : githubState.hasUser
        ? children
        : NoUser}
    </>
  );
}

const H3 = styled.h3`
  color: #5346c7;
`;
