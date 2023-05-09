import React, { useState, useEffect } from "react";
import style from "./EditQuestion.module.css";
import { getLocalData } from "../../../Utils";
import {Button, TextField} from "@mui/material";

export default function EditQuestion() {
  const [questionData, setQuestionData] = useState([]);
  const [question, setQuestion] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const localData = getLocalData();
    setQuestionData(localData);
  }, []);

  function handleQuestionSelect(index) {
    let findQue = questionData.find((ele, idx) => idx === index);
    setSelectedIndex(index);
    setQuestion({ ...findQue });
  }

  function handleUpdateQuestion() {
    const temp = [...questionData];
    temp[selectedIndex] = question;
    setQuestionData([...temp]);
    console.log(question);
    localStorage.setItem("queArr", JSON.stringify(temp));
  }

  function handleQuestionEditChange(e) {
    const newObj = { ...question };
    newObj.question = e.target.value;
    setQuestion({ ...newObj });
    console.log(e.target.value);
  }

  return (
    <div className={style.mainBox}>
      <div id={style.questionBox}>
        {questionData.map((ele, index) => (
          <div
            onClick={() => handleQuestionSelect(index)}
            id={style.innerQuestionBox}
            key={index}
          >
            <span>
              <span id={style.queIndex}>{index + 1}</span>

              <span>{ele.question}</span>
            </span>
            <Button>Edit</Button>
          </div>
        ))}
      </div>
      <div id={style.OptionBox}>
        <TextField
          id={style.inputField}
          variant="outlined"
          style={{ width: "100%" }}
          onChange={(e) => handleQuestionEditChange(e)}
          value={question.question}
        ></TextField>
        {Object.keys(question).length != 0 && (
          <div>
            <div contentEditable>Option 1: &nbsp;&nbsp;{question.options[0]}</div>
            <div contentEditable>Option 2:&nbsp;&nbsp;{question.options[1]}</div>
            <div contentEditable>Option 3:&nbsp;&nbsp;{question.options[2]}</div>
            <div contentEditable>Option 4:&nbsp;&nbsp;{question.options[3]}</div>
            <div contentEditable>Correct Option:&nbsp;&nbsp;{question.correct_answer}</div>
          </div>
        )}

        <Button id={style.updateBtn} onClick={handleUpdateQuestion} variant='contained' >Update Question</Button>
      </div>
    </div>
  );
}
