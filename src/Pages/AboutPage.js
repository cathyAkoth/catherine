import React from 'react';
import styled from "styled-components";
import {MainLayout} from '../styles/Layouts';
import Title from "../Components/Title";
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
// import ReviewsSetion from '../Components/ReviewsSection';

function AboutPage(){
    return(
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                {/* <ReviewsSetion /> */}
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;


export default AboutPage;