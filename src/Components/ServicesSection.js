import React from 'react';
import {InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/weddev-removebg-preview.png';
import intelligence from '../img/mobile-removebg-preview.png';
import game from '../img/teaching-removebg-preview.png'
function ServicesSection(){
    return(
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                    image={design} 
                    title={'Web-Site Design'} 
                    paragraph={"Websites are designed according to the client's needs and desires. All kinds of websites are designed to be used on all kinds of screens at prices that are customed to client's requests."}
                    />
                     <ServiceCard 
                    image={intelligence} 
                    title={'Mobile Applications'} 
                    paragraph={"All kinds of mobile applications including games are designed professionally and tailored to customer's needs at affordable rates"}
                    />
                     <ServiceCard 
                    image={game} 
                    title={'Teaching Services'} 
                    paragraph={'hashajshajsdhsdn jndjsdjsjkdjsa lksdkjsjdks jdkjsdjkdkj'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )

}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;

