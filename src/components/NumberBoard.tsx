import * as React from 'react';

// export interface CounterButtonProps {
//   counter: string;
// }

export interface NumberBoardState {
  counter: number;
}

export default class NumberBoard extends React.Component<{}, NumberBoardState> {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCount() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  render() {
    return  <div>
              <button onClick={this.increaseCount}>+</button>
              <p>{ this.state.counter }</p>
              <button onClick={this.decreaseCount}>-</button>
            </div>;
  }

}
