import React, { useContext } from 'react'
import { GithubContext } from '../../providers/github-provider'
import ProfileInfo from './ProfileInfo';
import * as S from './styled'

export default function ProfileCard() {
    const { githubState } = useContext(GithubContext);
    const { user } = githubState;

    const avatarImageAltText = `Avatar image from ${user.login}`
    const UserProfile = (
        <S.ProfileCardWrapper>
            <S.AvatarImage src={user.avatar_url} alt={avatarImageAltText} />
            <div>
                <h3>{user.name}</h3>
                <S.ProfileInfoWrapper>
                    <ProfileInfo infoName="Username" infoValue={user.login} />
                </S.ProfileInfoWrapper>
                <S.ProfileInfoWrapper>
                    <ProfileInfo infoName="Company" infoValue={user.company} />
                </S.ProfileInfoWrapper>
                <S.ProfileInfoWrapper>
                    <ProfileInfo infoName="Location" infoValue={user.location} />
                </S.ProfileInfoWrapper>
                <S.ProfileInfoWrapper>
                    <ProfileInfo infoName="Blog" infoValue={user.blog} />
                </S.ProfileInfoWrapper>
                <S.CountersWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Followers" infoValue={user.followers} inline={false} />
                    </S.CounterWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Followings" infoValue={user.following} inline={false} />
                    </S.CounterWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Gists" infoValue={user.public_gists} inline={false} />
                    </S.CounterWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Repos" infoValue={user.public_repos} inline={false} />
                    </S.CounterWrapper>
                </S.CountersWrapper>
            </div>
        </S.ProfileCardWrapper>
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
