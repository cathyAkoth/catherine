import React from 'react'
import styled from 'styled-components';
function Title({title, span}){
    return(
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h1{
        color: var(--primary-color);
    }
    h2{
        color: purple;
        font-size:3rem;
        font-weight:600;
        text-transform: uppercase;
        position:relative;
        padding-bottom: .7rem;
        &::before{
            content:"";
            position:absolute;
            bottom: 0;
            width:7.4rem;
            height:.33rem;
            background-color: rgb(120,0,120);
            border-radius:15px;
        }
        &::after{
            content:"";
            position:absolute;
            bottom: 0;
            width:3.5rem;
            height:.33rem;
            background-color: var(--primary-color);
            border-radius:15px;
            left:0;
        }
        span{
            font-weight:900;
            color: rgba(25,29,43,44); 
            font-size:3.4rem;
            position:absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }

`;

export default Title;