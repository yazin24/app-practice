import React from 'react'


const animals=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const Exercise4 = () => {
    
  return (
    <div>
      {animals.map((animals)=>(<h4>{animals}</h4>))}
    </div>
  )
}

export default Exercise4
