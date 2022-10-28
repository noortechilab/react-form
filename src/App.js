import React, { useState } from "react";
import "./App.css";
const formFields = {
  firstName: "",
  email: "",
  password: "",
};
const App = () => {
  const [inputField, setInputField] = useState(formFields);
  const { firstName, email, password } = inputField;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("submitform");
    console.log(inputField);
  };
  ////
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="enter your name"
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="enter your email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="enter your password"
            onChange={changeHandler}
          />
          <br />
          <button type="submit">submit data</button>
          <h2>add image</h2>
          <input type="file" onChange={handleChange} className="input-img" />
          <img src={file} alt="" />
        </form>
      </div>
    </>
  );
};

export default App;
