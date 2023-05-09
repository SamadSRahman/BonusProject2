import React, { useState } from "react";
import style from "./AdminLogin.module.css";

import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    let adminData = { email: email, password: password, isLoggedIn: true };
    localStorage.setItem("adminAuth", JSON.stringify(adminData));
    navigate("/adminhome");
  }

  return (
    <div className={style.container}>
       <div className={style.mainBox}>
      <h1>Admin Login</h1>
      <TextField label='Email' variant="outlined" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        label='Password'
        value={password}
        variant="outlined"
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button id={style.loginBtn} variant="contained" onClick={handleSubmit} >Log In</Button>
      <span>
        Switch to <Link to="/">User</Link>
      </span>
    </div>
   </div>
  );
}
