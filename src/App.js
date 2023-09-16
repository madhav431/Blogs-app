import "./styles.css";
import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Create";
import Blogs from "./Blogs";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <Blogs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
