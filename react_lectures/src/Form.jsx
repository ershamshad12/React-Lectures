import { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState("Shamshad");

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);
  };
  return (
    <form>
      <label htmlFor="username">Full Name</label>
      <input
        type="text"
        id="username"
        placeholder="Enter full name"
        value={fullName}
        onChange={handleChangeName}
      />
      <button>Submit</button>
    </form>
  );
}
