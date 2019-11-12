import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';

const Home = () => (
  <h1>Hello guys! Let's deal with 404?</h1>
);

const About = () => (
<h1>About this example....</h1>
)

const Page404 = ({ location }) => (
<div>
  <h2>No match found for <code>{location.pathname}</code></h2>
</div>
);

function App() {

  return (
       <div className="App">
        <BrowserRouter>
          <div>
            <p className="App-intro">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/more">More</Link></li>
              </ul>
            </p>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route component={Page404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
