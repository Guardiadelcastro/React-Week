import * as React from 'react';
import * as styles from './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';

export default class App extends React.Component {
  render() {
    return  <Router>
              <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/movies" component={Movies}/>
              </div>
            </Router>
  }
}
