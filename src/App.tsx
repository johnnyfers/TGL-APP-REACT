import { Route, Switch, Redirect } from 'react-router-dom'
import Games from './pages/Games';
import Login from './pages/Login';
import NewBet from './pages/NewBet';
import Register from './pages/Register';
import Reset from './pages/Reset';

import './global.css'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth-slice';
import { useEffect } from 'react';
import Recovery from './pages/Recovery';

type RootState = {
  auth: {
    isLogged: string | null
  }
}

function App() {
  const dispatch = useDispatch()
  const isLogged = useSelector((state: RootState) => state.auth.isLogged)

  let email: string | null = localStorage.getItem('email')
  let password: string | null = localStorage.getItem('password')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const autoLogin = ()=> {
    if(email && password){
      dispatch(authActions.login({email, password}))
    }
  }

  useEffect(() => {
    autoLogin()
  },[autoLogin])

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

      <Route path='/recover'>
        <Recovery />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>

      {isLogged && <Route path='/games'>
        <Games />
      </Route>}

      {isLogged && <Route path='/newbet'>
        <NewBet />
      </Route>}

      <Route path='/*'>
        Conteudo indisponivel
      </Route>

    </Switch>
  );
}

export default App;
