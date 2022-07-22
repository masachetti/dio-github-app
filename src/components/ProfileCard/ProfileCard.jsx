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
                    <ProfileInfo infoName="Username">
                        <span>{user.login}</span>
                    </ProfileInfo>
                </S.InfoWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Company">
                        <span>{user.company}</span>
                    </ProfileInfo>
                </S.InfoWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Location">
                        <span>{user.location}</span>
                    </ProfileInfo>
                </S.InfoWrapper>
                <S.InfoWrapper>
                    <ProfileInfo infoName="Blog">
                        <a href={user.blog} target="_blank" rel="noopener noreferrer" style={{ 'textDecoration': 'none' }}>{user.blog}</a>
                    </ProfileInfo>
                </S.InfoWrapper>
                <S.CountersContainerWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Followers" inline={false}>
                            <span>{user.followers}</span>
                        </ProfileInfo>
                    </S.CounterWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Followings" inline={false}>
                            <span>{user.following}</span>
                        </ProfileInfo>
                    </S.CounterWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Gists" inline={false}>
                            <span>{user.public_gists}</span>
                        </ProfileInfo>
                    </S.CounterWrapper>
                    <S.CounterWrapper>
                        <ProfileInfo infoName="Repos" inline={false}>
                            <span>{user.public_repos}</span>
                        </ProfileInfo>
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