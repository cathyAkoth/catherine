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
                        year={'may,2021-nov,2021'} 
                        title={'APPRENTICESHIP'}
                        subTitle={'Refactory'}
                        text={'Worked on a reallife project with Laboremus-UG.Working on a web application using .net framework and DDD architecture.'} 
                    />
                    <ResumeItem 
                        year={'July - 2020 to Sept-2020'} 
                        title={'Capacity Building Officer'}
                        subTitle={'Rakai Health Sciences'}
                        text={'Identifying gaps in the implementation of the project and finding solutions to those gaps while giving mentorship to peers.'} 
                    />
                    <ResumeItem 
                        year={'October 2017 to December 2019'} 
                        title={' DREAMS M&E Officer'}
                        subTitle={'Villa Maria Home Care Program, Uganda'}
                        text={'Overseeing DREAMS reporting in UDOTS while supervising and mentoring the data entrants on for proper records keeping.'}                       
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