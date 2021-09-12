import React from 'react'
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Home</p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
