import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import { Provider } from 'mobx-react';
import stores from './stores'

function increment() {
  stores.CounterStore.increment(1);
}

function decrement() {
  stores.CounterStore.decrement(1);
}
export default class App extends React.Component {
  render() {
    return <Router>
      <div>
        <Header/>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movies" component={Movies}/>
      </div>
    </Router>;
  }
}
