import React, { useState, useEffect } from "react";
import style from "./UserHome.module.css";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../../../Utils";

export default function UserHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const localStorageData = getLocalData();
  }, []);

  function handleStartTest() {
    navigate("/test");
  }

  return (
    <div className={style.mainBox}>
      <h2>Hello User</h2>
      <div id={style.foot}>
        <Button onClick={handleStartTest} value={"Start Test"}></Button>
      </div>
    </div>
  );
}
