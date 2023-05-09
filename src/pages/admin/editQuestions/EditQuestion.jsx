import React, { useState, useEffect } from "react";
import style from "./EditQuestion.module.css";
import { getLocalData } from "../../../Utils";
import Button from "../../../components/button/Button";

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
            id={style.questionBox}
            key={index}
          >
            <span>
              <span id={style.queIndex}>{index + 1}</span>

              <span>{ele.question}</span>
            </span>
            <span>Edit</span>
          </div>
        ))}
      </div>
      <div id={style.OptionBox}>
        <input
          style={{ width: "100%" }}
          onChange={(e) => handleQuestionEditChange(e)}
          value={question.question}
        ></input>
        {Object.keys(question).length != 0 && (
          <div>
            <div contentEditable>{question.options[0]}</div>
            <div contentEditable>{question.options[1]}</div>
            <div contentEditable>{question.options[2]}</div>
            <div contentEditable>{question.options[3]}</div>
            <div contentEditable>{question.correct_answer}</div>
          </div>
        )}

        <Button onClick={handleUpdateQuestion} value={"Update Question"} />
      </div>
    </div>
  );
}
