import React, { useContext } from 'react'
import { GithubContext } from '../../providers/github-provider'

export default function ProfileCard() {
    const {githubState} = useContext(GithubContext);

    const UserProfile = (
        <>
        User Profile
        </>
    )

    const NoUser = (
        <>
        No User
        </>
    )

    const UserNotFound = (
        <>
        User not found
        </>
    )

    return (
        <>
        {githubState.searchError ? UserNotFound : 
        githubState.hasUser ? UserProfile : NoUser}
        </>
    )
}
