import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "../src/components/main"

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div style={{height: '300px', position: 'relative'}}>
      <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <Header transparent title="Title" style={{color: 'white'}}>
              <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content"></div>
            <Main/>
          
          </Content> 
      </Layout>
  </div>
    )
  };
}

export default App;
