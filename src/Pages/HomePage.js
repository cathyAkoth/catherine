import React from 'react';
import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


function HomePage(){
return(
    <HomePageStyled>
        <div className="typography">
            <h1> Hello, this is <span>Akoth Catherine Cecilia</span></h1>
            <p>I am a dedicated software Engineer with the ability to spot problems and the capability to obtain solutions for them.
                I am very proactive and on my way to change the world through software engineering.
            </p>
             <div className="icons">
                 <a href="https://www.linkedin.com/in/akoth-catherine-cecilia-977352148/" className="icon i-linkedIn">
                    <LinkedInIcon />
                </a> 
                 <a href="https://github.com/cathyAkoth" className="icon i-github">
                    <GithubIcon />
                </a> 
                <a href="https://twitter.com/akoth_cathy" className="icon i-twitter">
                    <TwitterIcon />
                </a>
            </div> 
        </div>
    </HomePageStyled>
)
}

const HomePageStyled = styled.header`
    width:100%;
    height:100vh;
    position:relative;

    .typography{
        position:absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align:center;
        width:80%;

        .icons{
            display:flex;
            justify-content: center;
            margin-top: 1rem;
           .icon{
               border:2px solid var(--border-color);
               display: flex;
               align-items:center;
               justify-content: center;
               border-radius: 50%;
               transition: all .4s ease-in-out;
               cursor:pointer;
               &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                   }

               &:not(:last-child){
                   margin-right:1rem;
                   
                  
               }
               svg{
                   margin: .5rem;
               }
           }
           .i-linkedIn{
               &:hover{
                   border: 2px solid blue;
                   color:blue;
               }
           } 
           .i-twitter{
               &:hover{
                   border: 2px solid grey;
                   color:grey;
               }
           } 
        }
    }
`;

export default HomePage;