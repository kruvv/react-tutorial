import React, { Component } from 'react'
import PropTypes from 'prop-types';


const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'link',
  onClick: () => {},
}

class App extends Component {

handleClick = (e) => {
  e.preventDefault();
  console.log('Clicked on link!');

// так можно добавить  обработчики в уже существующий метод т.е обернуть одним несколько
  //this.test();
  //............;
  //this.end();
}

  render(){
    return(
      <MyLink onClick={this.handleClick} />
    );
  }
}

export default App
