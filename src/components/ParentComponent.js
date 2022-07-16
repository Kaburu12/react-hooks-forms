import React, { useState } from "react";
import Form2 from "./Form2";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

	return (
	  <div>
		<Form2
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />
	    <DisplayData firstName={firstName} lastName={lastName} />
	  </div>
  
  );
}

export default ParentComponent;