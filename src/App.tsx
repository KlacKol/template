import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.css';
import {PATH_HOME} from "./routeList";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path={PATH_HOME} component={Home} />
    </Switch>
  );
}

export default App;
