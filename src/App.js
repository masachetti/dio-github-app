import { useEffect, useContext } from "react";
import {
  ProfileCard,
  UserSearch,
  Repositories,
  ContentContainer,
} from "./components";
import GithubProvider, { GithubContext } from "./providers/github-provider";

function TestComponent() {
  const { githubState } = useContext(GithubContext);
  useEffect(() => {
    console.log(githubState);
  }, [githubState]);
  return <></>;
}

function App() {
  return (
    <GithubProvider>
      <TestComponent />
      <UserSearch />
      <ContentContainer>
        <ProfileCard />
        <Repositories />
      </ContentContainer>
    </GithubProvider>
  );
}

export default App;
