import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import {Route, Switch as Switching} from "react-router-dom";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfoliosPage";
import Brightness4Icon from '@material-ui/icons/Brightness4';

import  Switch  from "@material-ui/core/Switch";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div> */}

        <div className = "light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              // checked={}
              // onChange={}
              inputProps={{'aria-label': ''}}
              size="medium"
            />
          </div>
        </div>

        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfolioPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
        </Switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position:relative;
  margin-left:16.3rem;
  min-height:100vh;

  .light-dark-mode{
    position: absolute;
    right:0;
    top: 10%;
    background-color: var(--primary-color);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
    }
  }

  .lines{
    position: absolute;
    min-height: 100%;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 0.5px;
      min-height:100vh;
      background-color: var(--border-color);
    }
  }
  
`;


export default App;
