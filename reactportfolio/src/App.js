import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "../src/components/main";
import {Link} from "react-router-dom";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: '300px', position: 'relative' }}>
          <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
            <Header transparent title="Title" style={{ color: 'white' }}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutMe">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a to="#">Link</a>
                <a to="#">Link</a>
                <a to="#">Link</a>
                <a to="#">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>

      </div>
    )
  };
}

export default App;
