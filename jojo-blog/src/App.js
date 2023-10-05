import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/create" exact>
            <Create></Create>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
    
  );
}

export default App; //must be exported to be used in other files
