import React from 'react';
import styled from "styled-components";


function HomePage(){
return(
    <HomePageStyled>
        <div className="typography">
            <h1> Hello, this is <span>Akoth Catherine Cecilia</span></h1>
        </div>
    </HomePageStyled>
)
}

const HomePageStyled = styled.header`
    width:100%;
    height:100vh;
    position:relative;
`;

export default HomePage;