import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                <ResumeItem 
                        year={'Jan,2021 - Nov,2021'} 
                        title={"Certificate in Software Development."}
                        subTitle={'Refactory Ug'}
                        text={"Obtained 3 Months training with the catalyst program then 6 months apprenticeship working on a reallife project."} 
                    />
                <ResumeItem 
                        year={'Sept,2021 - Nov,2021'} 
                        title={"Certificate in Web Development."}
                        subTitle={'Code Queen- ETC'}
                        text={"Obtained 3 Months training with Code Queen on Web development and then participated in  1 week hackathon designing a project."} 
                    />
                <ResumeItem 
                    year={'2010 - 2015'} 
                    title={"Bachelors' in Software Engineering "}
                    subTitle={'Makerere University'}
                    text={"Obtained a bachelors' degree in software engineering from college of Information Technology and computing. "} 
                />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
        color:purple;
    }
    .u-small-title-margin{
        margin-top: 4rem;
        
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume