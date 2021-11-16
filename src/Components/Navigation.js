import React from 'react';
import styled from 'styled-components';
import avatar from '../img/cathy.jpg';
import {NavLink} from 'react-router-dom';
function Navigation(){
    return(
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`

`;

export default Navigation;