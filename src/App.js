import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Error from './components/pages/Error';
import Add from './users/AddUser';
import EditUser from './users/EditUsers';
import ViewUser from './users/ViewUsers';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/add" exact component={Add}></Route>
          <Route path="/edit/:id" exact component={EditUser}></Route>
          <Route path="/view/:id" exact component={ViewUser}></Route>
          <Route path="/*" exact component={Error}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
