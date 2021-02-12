import React from 'react';

const Greet=props => {
console.log(props)
  return <h1>world {props.name} a.k.a {props.heroname}</h1>
}

export default Greet;