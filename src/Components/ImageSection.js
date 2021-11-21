import React from 'react'
import styled from 'styled-components'
import resume from "../img/cathybg.png";
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Hello, I am <span>Akoth Catherine Cecilia</span></h4>
                <p className="paragraph">
                I am a software engineer passionate about changing the world one step at a time starting with the problems around me. 

                Identifying both simple and complex problems is something am Passionate about and obtaining solutions to them 
                is what I live for. 
                </p>
                <p className="paragraph" >
                I am passionate, creative, proactive, self-motivated with a keen eye for details.
                
                Not forgeting my eagerness and capablility to learn with a result-oriented mind-set.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Name</p>
                        
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Catherine Cecilia Akoth</p>
                      
                        <p>: Ugandan </p>
                        <p>: English </p>
                        <p>: Uganda, East Africa</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
               
            </div>
        </ImageSectionStyled>
    )
}
const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
           
            /* object-fit: cover; */
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color:purple;
            }
        }
        .paragraph{
            padding: 1rem 0;
            font-size: 1.6rem;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            color:purple;
            margin-top:5%;

            
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 1.6rem;
                    font-size:1.6rem;
                    color: var(--white-color);

                    
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    font-size: 1.6rem;
                   
                }
            }
        }
    }
`;
export default ImageSection;