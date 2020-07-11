import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
