import React, { useState } from "react";

// import { useDispatch } from 'react-redux';
// import { signupUser } from '../redux/authSlice';

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // const dispatch=useDispatch()
  const handleclick = () => {
    console.log(name, email, password);
    // dispatch(signupUser({name,email,password}))
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "blue" ,fontsize:'30px'}}> User Register</h1>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={handleclick} className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default Register;
