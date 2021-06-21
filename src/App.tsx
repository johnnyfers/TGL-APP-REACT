import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        
        </Route>

        <Route path='login'>

        </Route>

        <Route path='reset'>

        </Route>

        <Route path='register'>

        </Route>

        <Route path='games'>

        </Route>

        <Route path='newBet'>

        </Route>
      
      </Switch>
    </>
  );
}

export default App;
