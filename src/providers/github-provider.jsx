import { useContext, createContext, useState, useCallback } from "react";
import githubAPI from "../services/github-api"

export const GithubContext = createContext({
    githubState: {
        hasUser: false,
        loading: false
    },
    user: {},
    repositories: [],
    starred: []
});

export default function GithubProvider ({ children }){

    const [githubState, setGitHubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            html_url: undefined,
            company: undefined,
            location: undefined,
            blog: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        setGitHubState((prevState) => ({
            ...prevState,
            loading: true
        }));
        githubAPI.get(`/users/${username}`).then(({ data }) => {
            setGitHubState((prevState) => ({
                ...prevState,
                hasUser: true,
                id: data.id,
                avatar: data.avatar,
                html_url: data.html_url,
                company: data.company,
                location: data.location,
                blog: data.blog,
                followers: data.followers,
                following: data.following,
                public_repos: data.public_repos,
                public_gists: data.public_gists
            }))
        }).finally(()=>{
            setGitHubState((prevState) => ({
                ...prevState,
                loading: false
            }))
        })

    };

    const contextValue = {
        githubState: githubState,
        getUser: useCallback((username)=> getUser(username), [])
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}