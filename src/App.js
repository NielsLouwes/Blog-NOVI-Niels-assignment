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
        <li>
        <Link to="/login">Login</Link> 
        </li>
        <li>
          <Link to="/blog">Blog</Link> 
        </li>
        <li>
        <Link to="/blog/:id">Blog Post</Link> 
        </li>
      </nav>
 <Switch>
   <Route path="/login">
      <Login />
      </Route>
 </Switch>
    </div>

    </Router>
  );
}

export default App;
