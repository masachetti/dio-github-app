import React, { useContext } from 'react'
import { GithubContext } from '../../providers/github-provider'

export default function ProfileCard() {
    const githubContext = useContext(GithubContext);

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

    return (
        <>
        {githubContext.githubState.hasUser ? UserProfile : NoUser}
        </>
    )
}
