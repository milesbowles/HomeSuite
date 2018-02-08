import React from "react";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage, Up} from "./pages";
/** Define the application usage */
const App = () =>
      /** A wrapper that encapsulates everything */
      <div class="site-wrap">
        <div class="panel-wrap animate--none">
          <MainPage/>
          <Up/>
        </div>
      </div>
export default App;