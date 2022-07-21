import { useEffect, useContext } from "react";
import GithubProvider, { GithubContext } from "./providers/github-provider";

function TestComponent(){
  const context = useContext(GithubContext)
  useEffect(()=>{
    console.log("Empty Use Effect")
    context.getUser("masachetti");
    console.log(context);
  }, [])

  useEffect(()=>{
    console.log("Context effect")
    console.log(context.githubState);
  }, [context.githubState])

  return (
    <>
    Some Test Component
    </>
  )
}



function App() {
  return (
    <GithubProvider>
      <TestComponent>

      </TestComponent>
    </GithubProvider>
  );
}

export default App;
