import React from "react";
import style from "./Login.module.css";


import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export default function UserLogin() {
  const navigate = useNavigate();

  function handleUserLogin() {
    navigate("/userhome");
  }

  return (
    <div className={style.container}>
      <div className={style.mainBox}>
      <h1>User Login</h1>
      <TextField variant="outlined" label='Email' type='email' />
      <TextField variant="outlined" label='Password' type='password'/>
      <Button id={style.loginBtn} variant="contained" onClick={handleUserLogin} >Log In</Button>
      <span>
        Switch to <Link to="/adminlogin">admin</Link>
      </span>
    </div>
    </div>
  );
}
