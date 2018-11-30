import * as React from 'react';

export interface NumberBoardProps {
  counter: number;
  max: number;
  min: number;
}

export interface NumberBoardState {
  counter: number;
}

export default class NumberBoard extends React.Component<NumberBoardProps, NumberBoardState> {

  constructor(props: NumberBoardProps) {
    super(props);
    this.state = {
      counter: props.counter || 0
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount() {
    let newCounter = this.state.counter + 1
    if (this.props.max) {
      newCounter = Math.min(newCounter, this.props.max)
    }
    this.setState({ counter: newCounter });
  }

  decreaseCount() {
    let newCounter = this.state.counter - 1;
    if (this.props.min) {
      newCounter = Math.max(newCounter, this.props.min)
    }
    this.setState({ counter: newCounter });
  }
  render() {
    return  <div>
              <button onClick={this.increaseCount}>+</button>
              <p>{ this.state.counter }</p>
              <button onClick={this.decreaseCount}>-</button>
            </div>;
  }

}
