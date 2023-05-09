import React, { useState, useEffect } from "react";
import style from "./AdminHome.module.css";
import Button from "../../../components/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../../../Utils";

export default function AdminHome() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple"
      )
      .then((res) => {
        let x = res.data.results;

        const newX = x.map((ele) => {
          let random = Math.floor(Math.random() * 4);
          const obj = {
            question: ele.question,
            correct_answer: ele.correct_answer,
            options: ele.incorrect_answers,
          };
          obj.options.splice(random, 0, ele.correct_answer);
          return obj;
        });

        const localData = getLocalData();
        if (localData.length == 0) {
          localStorage.setItem("queArr", JSON.stringify(newX));
        }
      });
  }, []);

  function handleCreateQuestionNavigation() {
    navigate("/createquestion");
  }

  function handleEditQuestionNavigation() {
    navigate("/editquestion");
  }

  return (
    <div className={style.mainBox}>
      <h2>Hi Admin</h2>
      <div id={style.foot}>
        <Button
          onClick={handleEditQuestionNavigation}
          value={"Edit Questions"}
        />
        <Button
          onClick={handleCreateQuestionNavigation}
          value={"Create Question"}
        ></Button>
      </div>
    </div>
  );
}
