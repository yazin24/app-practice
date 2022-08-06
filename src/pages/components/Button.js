import React from 'react'

const Button=({title})=> {
  const alertMe=()=> {
    alert("Congrats! You receive 10k from Allan Peter Cayetano");
  }
  return (
    <>
      <button onClick={alertMe}>{title}</button>
      </>
  )
}

export default Button
