import React from 'react'
import { useState } from "react";

const Exercise3 = () => {
    const [number, setNumber] = useState(0);

    return (
      <>
        <h1>The Button has been clicked by {number} times.</h1>
        <button
          type="button"
          onClick={() => setNumber(number+1)}
        >Click Here</button>
      </>
    )
}

export default Exercise3
