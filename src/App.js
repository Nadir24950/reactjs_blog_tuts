import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NoteFound from './NotFound';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route component = { NoteFound }>
            </Route>
          </Switch>           
        </div>
      </div>
    </Router>
  );
}

export default App;//export the function so that other files can use it 
