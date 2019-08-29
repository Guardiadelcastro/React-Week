import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { CounterStore } from '../stores/CounterStore';

export interface HeaderProps {
  counterStore?: CounterStore;
}

@inject('counterStore')
@observer

export default class Header extends React.Component {
  render() {
    return <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/movies">Movies</Link></li>
    </ul>;
  }
}
