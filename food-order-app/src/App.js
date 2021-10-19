import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Meals from './components/meals/Meals';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/meals' />
      </Route>
      <Route path='/meals' exact>
        <Meals />
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
  );
}

export default App;
