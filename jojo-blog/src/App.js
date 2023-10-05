import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

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
          <Route path="/create" >
            <Create></Create>
          </Route>
          <Route path="/blogs/:id" >
            <BlogDetails></BlogDetails>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
    
  );
}

export default App; //must be exported to be used in other files
