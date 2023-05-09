import React, { useState, useEffect } from "react";
import style from "./UserHome.module.css";
import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../../../Utils";

export default function UserHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const localStorageData = getLocalData();
  }, []);



  return (
    <div className={style.container}>
      <div className={style.mainBox}>
    <h1>Hello User</h1>
    <h4>Welcome to the General Computer Knowledge Test! This test aims to assess your understanding of various fundamental concepts related to computers, including hardware, software, networking, and security. You will be presented with a series of questions that cover a broad range of topics, so make sure you read each question carefully and select the best answer. Good luck!</h4>
    <div id={style.foot}>
 <Button id={style.startBtn} variant="contained" onClick={()=>navigate('/test')}>Start Test </Button>
    </div>
  </div></div>
  );
}
