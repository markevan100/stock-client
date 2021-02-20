import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import NodeMongo from './components/NodeMongo/NodeMongo';
import NodePG from './components/NodePG/NodePG';
import RailsPG from './components/RailsPG/RailsPG';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const DefaultRoutes = () => {
      return (
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" />
            <Route path="/node-mongo/" component={NodeMongo} />
            <Route path="/node-pg/" component={NodePG} />
            <Route path="/rails-pg" component={RailsPG} />
          </Switch>
        </div>
      );
    };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={DefaultRoutes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
