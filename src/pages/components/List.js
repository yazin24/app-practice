import React from 'react'


const animals=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const List = () => {
    
  return (
    <div>
      {animals.map((animals)=>(<h1>{animals}</h1>))}
    </div>
  )
}

export default List
