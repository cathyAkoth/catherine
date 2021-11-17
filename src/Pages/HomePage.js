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
                 <div className="i-linkedIn">
                    <LinkedInIcon />
                </div> 
                 <div className="i-github">
                    <GithubIcon />
                </div> 
                <div className="i-twitter">
                    <TwitterIcon />
                </div>
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
    }
`;

export default HomePage;