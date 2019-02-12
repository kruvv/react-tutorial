import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Counter = ({counter, func, number, string}) => {
  console.log(counter, func, number, string);
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

//Основной пропс
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  func: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string,
}

//Дефолтный пропс
Counter.defaultProps = {
  func: () => {},
  number: 0,
  string: '',
}

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
        <Counter
        counter={counter}
        // func={() => {}}
        // number={1}
        // string="str"
        />
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default CounterButton
