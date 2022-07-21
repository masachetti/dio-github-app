import { useContext, createContext, useState, useCallback } from "react";
import githubAPI from "../services/github-api"

export const GithubContext = createContext({
    githubState: {
        hasUser: false,
        loading: false,
        user: {}
    },
    getUser: undefined,
    getUserRepositories: undefined,
    getUserStarred: undefined
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

    const getUserRepositories = (username) => {
        setGitHubState((prevState) => ({
            ...prevState,
            loading: true
        }));
        githubAPI.get(`/users/${username}/repos`).then(({ data }) => {
            let repositories = mapResponseToRepositories(data);
            setGitHubState((prevState) => ({
                ...prevState,
                repositories: repositories
            }))
        }).finally(()=>{
            setGitHubState((prevState) => ({
                ...prevState,
                loading: false
            }))
        })
    };

    const getUserStarred = (username) => {
        setGitHubState((prevState) => ({
            ...prevState,
            loading: true
        }));
        githubAPI.get(`/users/${username}/starred`).then(({ data }) => {
            let repositories = mapResponseToRepositories(data);
            setGitHubState((prevState) => ({
                ...prevState,
                repositories: repositories
            }))
        }).finally(()=>{
            setGitHubState((prevState) => ({
                ...prevState,
                loading: false
            }))
        })
    };

    const mapResponseToRepositories = (data) => {
        return data.map(({name, html_url, description}) => ({
            name: name,
            html_url: html_url,
            description: description
        }))
    }

    const contextValue = {
        githubState: githubState,
        getUser: useCallback((username)=> getUser(username), []),
        getUserRepositories: useCallback((username)=> getUserRepositories(username), []),
        getUserStarred: useCallback((username)=> getUserStarred(username), [])
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}