import React, {
  Component
} from 'react';

//old
// class CounterButton extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       counter: 0,
//     }
//     this.handleClick = this.handClick.bind(this);
//   }
//   handleClick() {
//   }
// };

//Modern
class CounterButton extends Component {
  state = {
    counter: 0,
  }
  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }
  render(){
    const { counter } = this.state;
    return (
      <div>
        <div>{counter}</div>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default CounterButton