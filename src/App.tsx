import {Route, Switch, Redirect } from 'react-router-dom'
import Games from './pages/Games';
import Login from './pages/Login';
import NewBet from './pages/NewBet';
import Register from './pages/Register';
import Reset from './pages/Reset';

import './global.css'

function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/reset'>
          <Reset />
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <Route path='/games'>
            <Games/>
        </Route>

        <Route path='/newbet'>
            <NewBet/>
        </Route>

      </Switch>
  );
}

export default App;
