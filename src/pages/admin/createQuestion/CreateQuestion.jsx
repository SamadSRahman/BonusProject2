import React, { useState } from "react";
import style from "./CreateQuestion.module.css";
import { getLocalData } from "../../../Utils";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export default function CreateQuestion() {
  const [questionData, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [corrctAnsIdx, setCorrectAnsIdx] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  function handleQuestionAdd() {
    const questionObj = {
      question: questionData,
      correct_answer: corrctAnsIdx,
      options: [option1, option2, option3, option4],
      imageData: imageUrl,
    };
    //get local data
    if (
      questionData == "" ||
      option1 == "" ||
      option2 == "" ||
      option3 == "" ||
      option4 == "" ||
      corrctAnsIdx == null
    ) {
      alert("All fields are necessary");
    } else {
      const dataFromLocal = getLocalData();
      let finaldata = [...dataFromLocal, questionObj];
      localStorage.setItem("queArr", JSON.stringify(finaldata));
      const x = getLocalData();
      console.log(x);
      navigate("/adminhome");
    }
  }

  function handleImagePick(e) {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function () {
      setImageUrl(reader.result);
    };
  }

  return (
    <div className={style.container}>
       <div className={style.mainBox}>
      <TextField
        label="Question here..."
        onChange={(e) => setQuestion(e.target.value)}
        type={"text"}
      />
      <TextField
        label="Option 1"
        onChange={(e) => setOption1(e.target.value)}
        type={"text"}
      />
      <TextField
        label="Option 2"
        onChange={(e) => setOption2(e.target.value)}
        type={"text"}
      />
      <TextField
        label="Option 3"
        onChange={(e) => setOption3(e.target.value)}
        type={"text"}
      />
      <TextField
        label="Option 4"
        onChange={(e) => setOption4(e.target.value)}
        type={"text"}
      />
      <TextField
        label="Correct option number"
        onChange={(e) => setCorrectAnsIdx(e.target.value)}
        type={"number"}
      />
      <input type="file" />
        <Button
          id={style.submitBtn}
          variant="contained"
        onChange={(e) => handleImagePick(e)}
        onClick={handleQuestionAdd}
        value={"Submit"}
        >Submit</Button>
        
    </div>
   </div>
  );
}
