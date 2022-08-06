import React from 'react'


const Button= ()=>{
  const alertMe=()=>{
    alert("Congrats! You receive 10k from Allan Peter Cayetano");
  }
  return (
    <>
      <button onClick={alertMe}>Click to Alert</button>
      </>
  )
}

export default Button
