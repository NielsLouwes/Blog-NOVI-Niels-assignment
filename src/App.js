import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Login from "./components/Login";
import Blog from "./components/Blog";
import { useForm } from "react-hook-form";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <Router> 
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link> 

        </li>
        {!isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        <li>
          <Link to="/blog">Blog</Link> 
        </li>
        <li>
        <Link to="/blog/:id">Blog Post</Link> 
        </li>
      </nav>
 <Switch>
   <Route exact path="/login">
      <Login 
      isAuthenticated={isAuthenticated}
      toggleIsAuthenticated={toggleIsAuthenticated}/>
      </Route>
    <Route>
    <Blog exact path="/blog"/>
    </Route>
 
 
 </Switch>
    </div>

    </Router>
  );
}

export default App;
