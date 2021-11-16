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
                    <NavLink to="/about" activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Akoth Catherine Cecilia</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display:flex;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    height:100%;
    width:100%;
    border-right: 1px solid var(--border-color);


    .avatar{
        width:100%;
        border-bottom:1px solid  var(--border-color);
        text-align:center;
        padding: 1rem 0;
        img{
            width:70%;
            border-radius:50%;
            border:8px solid var(--border-color);
            
        }
    }
    .nav-items{
        width:100%;
        text-align:center;
        li{
            display:block;
            a{
                display:block;
                padding: .2rem 0;
                position:relative;
                &:hover{
                    cursor:pointer;

                }
                &::before{
                    content:"";
                    position: absolute;
                    bottom:0;
                    left:0;
                    width:0;
                    height:50%;
                    background-color:purple;
                }
            }
            a:hover::before{
                width:100%;
                height:100%
            }

        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width:100%;
        p{
            padding:2rem 0;
            font-size:1.1rem;
            display:block;
            text-align:center;
        }
    }
`;

export default Navigation;