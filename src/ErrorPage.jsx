import React from 'react'
import { styled } from 'styled-components'
import { AiFillFrown } from "react-icons/ai";
const ErrorPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:400px;
`
const ErrorCard = styled.div`
    min-width: 400px;
    padding:2rem;
    border-radius:12px;
    font-family: ExoRegular;
    color: var(--button-bg-color);
    text-align:center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`
const ErrorMessage = styled.h2`
    font-size:22px;
    margin:2rem 0rem;
    font-weight:600;
`
const StyledFrownIcon = styled(AiFillFrown)`
    color: #f6891f;
    font-size: 40px;
`
const ErrorPage = ({ alertMessage }) =>
{
    return (
        <ErrorPageWrapper>
            <ErrorCard>
                <StyledFrownIcon />
                {
                    alertMessage ? <ErrorMessage>{alertMessage}</ErrorMessage> : <ErrorMessage>Page Not Found</ErrorMessage> 
                }

            </ErrorCard>
        </ErrorPageWrapper>
    )
}

export default ErrorPage