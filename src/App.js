
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/id/:id">
            <LeagueDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
