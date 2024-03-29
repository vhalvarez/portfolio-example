import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button{
        font-size: 2.2rem;
        background-color: ${( props => props.outline ? 'transparent' : 'var(--gray-1)')};
        padding: .7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(props => props.outline ? 'var(--grau-1)' : 'black')};
    }

    @media only screen and (max-width: 768px){
        .button {
            font-size: 1.8rem;
        }
    }
`

const Button = ({children, btnLink, outline}) => {
    return (
        <ButtonStyle outline={outline} className='button-wrapper'>
            <Link className='button' to={btnLink}>{children}</Link>
        </ButtonStyle>
    )
}

export default Button
