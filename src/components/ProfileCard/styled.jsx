import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const AvatarImage = styled.img`
    border-radius: 50%;
    max-width: 13em;
    height: 100%;
    margin: 10px;
`

export const CountersContainerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
`
export const CounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InfoContainerWrapper = styled.div`
    align-self: flex-start;
`

const DefaultMarginDiv = styled.div`
    margin: 0;
    margin-left: 15px;
`

export const InfoWrapper = styled(DefaultMarginDiv)`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.1em;
`

export const NameWrapper = styled(DefaultMarginDiv)`
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.5em;
`