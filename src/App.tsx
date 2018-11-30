import * as React from 'react';
import * as styles from './App.css'
import Hello from './Hello';
import CounterButton from './CounterButton';
import NumberBoard from './NumberBoard';

export default class App extends React.Component<{},{}> {
  render() {
    return  <div className={styles.template}>
              <Hello name="Mutta"></Hello>
              <CounterButton/>
              <NumberBoard max={5} min={-5}/>
            </div>
  }
}
