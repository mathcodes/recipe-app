import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';


import HomeComponent from "./HomeComponent";
import SelectComponent from "./SelectComponent";
import StepPage from "./StepComponents/StepPage";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/select" component={SelectComponent} />
      <Route path="/select/:titleId" component={SelectComponent} />
      <Route path="/steps/:titleId" component={StepPage} />
      <Redirect to='/'/>
    </Switch>
  );
};

export default Main;
