import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Asesor from './components/Asesor'
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/Dashboard';
import RegisterUser from './components/RegisterUser';
import useToken from './hooks/useToken'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  if (token === 2) {
    return (
      <div className="App container-fluid vh-100">
        <Router>
          <Switch>
            <Route exact path="/">
              <Asesor />
            </Route>
            <Route exact path="/asesor">
              <Asesor />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
  else if (token === 1 || token === 5) {
    return (
      <div className="App container-fluid vh-100">
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/registroUsuario">
              <RegisterUser />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }


}

export default App;
