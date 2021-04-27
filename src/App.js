import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PageNotFound from './components/PageNotFound';


function App() {

  const [token, setToken] = useState()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App container-fluid vh-100">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
