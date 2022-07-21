import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { GithubContext } from '../../providers/github-provider'

export default function UserSearch() {
    const {getUser, getUserRepositories, getUserStarred} = useContext(GithubContext);
    const [username, setUsername] = useState();

    const searchUser = () => {
        getUser(username);
        getUserRepositories(username);
        getUserStarred(username);
    };

    const handleInputChange = (event) =>{
        setUsername(event.target.value);
    }

    return (
        <Container>
            <Input type="text" placeholder='GitHub Username' onChange={handleInputChange}/>
            <SButton onClick={searchUser}>Search</SButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 100%;
    border-radius: 5px;
`

const SButton = styled.button`
    background-color: green;
    border-radius: 20%;
`
