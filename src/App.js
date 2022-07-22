import { useEffect, useContext } from "react";
import { ProfileCard, UserSearch, Repositories} from "./components";
import GithubProvider, { GithubContext } from "./providers/github-provider";

function TestComponent(){
  const {githubState} = useContext(GithubContext);
  useEffect(()=>{
    console.log(githubState)
  }, [githubState])
  return(<></>)
}

function App() {
  return (
    <GithubProvider>
      <TestComponent />
      <UserSearch />
      <ProfileCard />
      <Repositories/>
    </GithubProvider>
  );
}

export default App;
