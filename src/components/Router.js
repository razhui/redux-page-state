import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoolPage from './CoolPage';
import ErrorPage from './ErrorPage';
import Homepage from './Homepage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/coolpage" component={CoolPage} />
      <Route component={ErrorPage}/>
    </Switch>
  </BrowserRouter>
)

export default Router;