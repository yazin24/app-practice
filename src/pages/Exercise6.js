import { useState } from "react";

const Exercise6 = () => {
    const [name, setName] = useState("");

    const submitButton = (event) => {
      event.preventDefault();
      alert(`Your Name is:  ${name}`);
    }

  return (
    <div className="whole-body">
   <form className="add-form" onSubmit={submitButton}>
     <div className="form-control">
        <label>First Name: </label>
        <input
         type="text"
          value={name.firstName} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="First Name"/>
     </div>
     <div className="form-control">
        <label>Last Name: </label>
        <input
         type="text"
          value={name.lastName} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="First Name"/>
           <input type="submit"/>
     </div>
     </form>
     </div>
  );
};

export default Exercise6;