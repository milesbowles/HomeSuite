
import React from "react";
// import "./App.test.js";
/** This concatenated import is possible because the index file in /pages exports all the files together */
// import {MainPage, Up, Down, Left, Right, UpLeft, UpRight, DownLeft, DownRight} from "./pages";
import {All} from "./pages";
/** Define the application usage */
const App = () =>
      /** A wrapper that encapsulates everything */
      <div className="site-wrap">
        <div className="panel-wrap animate--none">
          {/* <MainPage/>
          <Up/>
          <Down/>
          <Left/>
          <Right/>
          <UpLeft/>
          <UpRight/>
          <DownLeft/>
          <DownRight/> */}
          <All/>
        </div>
      </div>
export default App;