import * as React from 'react';

// export interface CounterButtonProps {
//   counter: string;
// }

export interface CounterButtonState {
  numberOfClicks: number;
}

export default class CounterButton extends React.Component<{}, CounterButtonState> {

  constructor(props) {
    super(props);
    this.state = {numberOfClicks: 0};
  }

  incrementCount() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    return <button onClick={this.incrementCount.bind(this)} >{this.state.numberOfClicks}</button>;
  }

}
