import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import AppContext from "./AppContext";
import "./App.css";

function App() {
  const [appState, setAppState] = useState({});
  return (
    <AppContext.Provider value={{appState, setAppState}}>
      <div className="App">
        <Routes />
      </div>
    </AppContext.Provider>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
