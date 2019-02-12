import React, { Component } from 'react';


function Welcom () {
  return <h1>Hello World!!!</h1>
}

class SuperWelcom extends Component {
  render () {
    return <h1>Hello World!!!</h1>
  }
}

function Lesson () {
  return (
      <div>
        <Welcom />
        <SuperWelcom />
      </div>
    )
}
export default Lesson
