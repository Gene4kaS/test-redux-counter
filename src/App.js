import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import CounterView from './views/CounterView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/counter">Счётчик</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/counter">
        <CounterView />
      </Route>
    </Switch>
  </>
);

export default App;
