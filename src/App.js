import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Redirect, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { store } from "../libs/configureStore";

function MainRouter(){
  return(
      <>
        <Router>
          <Switch>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Redirect to='/' />
          </Switch>
        </Router>
      </>
  )
}

function App() {
  <Provider store={store}>
    <MainRouter />
  </Provider>
}

export default App;
