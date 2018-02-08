import "./App.css";
import React from "react";
/** This concatenated import is possible because the index file in /pages exports all the files together */
import {MainPage, Up, Down, Left, Right, UpLeft, UpRight, DownLeft, DownRight} from "./pages";
/** Define the application usage */
const App = () =>
      /** A wrapper that encapsulates everything */
      <div class="site-wrap">
        <div class="panel-wrap animate--none">
          <MainPage/>
          <Up/>
          <Down/>
          <Left/>
          <Right/>
          <UpLeft/>
          <UpRight/>
          <DownLeft/>
          <DownRight/>
        </div>
      </div>
export default App;