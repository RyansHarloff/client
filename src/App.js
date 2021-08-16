import './App.css';
import { Router, Link } from '@reach/router'
import Home from './views/Home';
import Add from './views/Add';
import ReadOne from './views/ReadOne';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h2><Link to = "/">Home</Link> || <Link to = "/add">Add Pirate</Link></h2>
      <Router>
        <Home path = "/"/>
        <Add path = "/add"/>
        <ReadOne path = "/pirate/:_id"/>
      </Router>
    </div>
  );
}

export default App;
