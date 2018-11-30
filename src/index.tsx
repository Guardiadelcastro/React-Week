import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from "./components/Hello";
import NumberBoard from './components/NumberBoard';
import CounterButton from './components/CounterButton';

ReactDOM.render(<Hello name='Mutta'/>, document.getElementById('greeting'));
ReactDOM.render(<CounterButton></CounterButton>, document.getElementById('counterButton'));
ReactDOM.render(<NumberBoard></NumberBoard>, document.getElementById('counter'));
