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
            <Input type="text" placeholder='type a GitHub username' onChange={handleInputChange}/>
            <Button onClick={searchUser}>Search</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Input = styled.input`
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    border: 1px solid #d0d0d7;
    font-size: 1em;
    padding: 5px 15px;
    margin-right: 15px;
`

const Button = styled.button`
    background-color: #0ae20a;
    border-radius: 15px;
    padding: 5px 25px;
    border: 2px solid #36b336;
    &:active{
        transform: translateY(2px);
    }
`
