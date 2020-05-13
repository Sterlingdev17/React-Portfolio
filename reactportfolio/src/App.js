import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "../src/components/main";
import { Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <Layout>
          <Header title={<Link style={{textDecoration: "none", color: "white"}} to="/">portfolio</Link> } scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: "none", color: "black"}} to="/">portfolio</Link> }>
            <Navigation>
            <Link to="/resume">Resume</Link>
              <Link to="/aboutMe">About Me</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    )
  };
}

export default App;
