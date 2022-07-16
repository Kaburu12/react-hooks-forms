// import React, { useState } from "react";

// function Form() {
//   const [ firstName, setFirstName ] = useState("John");
//   const [ lastName, setLastName ] = useState("Henry");
//   const [ newsletter, setNewsLetter ] = useState(false)
  
//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   function handleNewsletterChange(event) { 
//   setNewsLetter(event.target.checked)
// }

//   return (
//     <form>
//       <input onChange={handleFirstNameChange} type="text" value={firstName} />
//       <input onChange={handleLastNameChange} type="text" value={lastName} />
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input type="checkbox" id="newsletter" onChange={handleNewsletterChange}
//         /* checked instead of value */
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
