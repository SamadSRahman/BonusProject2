import React, { useState, useEffect } from "react";
import style from "./AdminHome.module.css";
import {Button} from "@mui/material";
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
    <div className={style.container} >
      <div className={style.mainBox}>
        <h2>Hi Admin</h2>
        <h4>
Hello Admin! As the creator and editor of this General Computer Knowledge Test, you have the important responsibility of ensuring that the questions presented are accurate, relevant, and free from errors. You have the power to create and edit questions, so please use this authority judiciously and ensure that the test is of the highest quality possible. Remember that this test will be used to assess the knowledge of test-takers, so it's crucial that the questions are well-written and relevant. Thank you for your hard work and dedication to ensuring the success of this test.</h4>
      <div id={style.foot}>
          <Button
            id={style.editBtn}
          onClick={handleEditQuestionNavigation}
          variant='contained'
        >Edit Questions</Button>
          <Button
             variant='contained'
          onClick={handleCreateQuestionNavigation}
          id={style.createBtn}
        >Create Question</Button>
      </div>
    </div>
    </div>
  );
}
