import React from 'react';
import styled from "styled-components";
import {MainLayout} from '../styles/Layouts';
function AboutPage(){
    return(
        <MainLayout>
            <AboutStyled>
                <h1> hello </h1>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;


export default AboutPage;