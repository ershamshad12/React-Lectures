import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

  const handleFormChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        placeholder="Enter full name"
        value={formData.fullName}
        name="fullName"
        onChange={handleFormChange}
      />
      <br />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        value={formData.username}
        name="username"
        onChange={handleFormChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        value={formData.password}
        name="password"
        onChange={handleFormChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
