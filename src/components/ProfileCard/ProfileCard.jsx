import React, { useContext } from 'react'
import { GithubContext } from '../../providers/github-provider'
import ProfileInfo from './ProfileInfo';
import * as S from './styled'

export default function ProfileCard() {
    const { githubState } = useContext(GithubContext);
    const { user } = githubState;

    const avatarImageAltText = `Avatar image from ${user.login}`
    return (
        <S.CardWrapper>
            <S.AvatarImage src={user.avatar_url} alt={avatarImageAltText} />
            <S.InfoContainerWrapper>
                <S.NameWrapper>{user.name}</S.NameWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Username" infoValue={user.login} />
                </S.InfoWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Company" infoValue={user.company} />
                </S.InfoWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Location" infoValue={user.location} />
                </S.InfoWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Blog" infoValue={user.blog} />
                </S.InfoWrapper>
                <S.CountersContainerWrapper>
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
                </S.CountersContainerWrapper>
            </S.InfoContainerWrapper>
        </S.CardWrapper>
    )
}

// const NoUser = (
//     <>
//         No User
//     </>
// )

// const UserNotFound = (
//     <>
//         User not found
//     </>
// )

// return (
//     <>
//         {githubState.searchError ? UserNotFound :
//             githubState.hasUser ? UserProfile : NoUser}
//     </>
// )