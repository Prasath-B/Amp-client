import Feed from "./components/Feed/Feed";
import Post from "./components/Post/Post";
import Edit from "./components/Edit";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path='/'>
       <Feed />
    </Route>
     <Route path='/post'>
          <Post />
      </Route> 
      <Route path='/edit'>
        <Edit />
      </Route>
    </Switch>  
    </Router>
  );
}

export default App;


