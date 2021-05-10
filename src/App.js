import './App.css';
import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/landing-page/MainPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/mini-amazon">
        <div className="App">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;