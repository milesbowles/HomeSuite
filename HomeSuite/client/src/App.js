import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/** Import the application container */
import SiteWrapper from "./pages/siteWrapper";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "./component/panel";


const welcome = "Welcome to React"; 

class App extends Component {
  render() {
    return (
      <SiteWrapper>
        <PanelWrapper>
          <Direction direction={"up"}>
            <h1>This test was successful</h1>
          </Direction>
        </PanelWrapper>
      </SiteWrapper>
    );
  }
}

export default App;
