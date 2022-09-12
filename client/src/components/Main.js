import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';


import HomeComponent from "./HomeComponent";
import SelectComponent from "./SelectComponent";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/select" component={SelectComponent} />
      <Redirect to='/'/>
    </Switch>
  );
};

export default Main;
