
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SignInPage from './pages/SignInPage'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/profile' component={ProfilePage} />
        <Route path='/signin/signup' component={SignInPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
