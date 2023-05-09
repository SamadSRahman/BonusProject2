import React, { useEffect, useState } from "react";
import style from "./Test.module.css";
import Button from "../../../components/button/Button";
import { getLocalData } from "../../../Utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { calculateResult } from "../../../state/QuestionSlice";

export default function Test() {
  const [data, setData] = useState([]); //[ {} {} {} ]
  const [questionset, setQuestionset] = useState([]); //[12,45,65,,3,222,3]
  const [questionCount, setQuestionCount] = useState(0);
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false)); // array with selected option
  const [resultCount, setResultCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageData = getLocalData();
    setData([...localStorageData]);
    const tempArr = [];
    for (let i = 0; i < 10; i++) {
      const questionNum = Math.floor(Math.random() * 1 * 50);
      tempArr.push(questionNum);
    }
    setQuestionset([...tempArr]);
  }, []);

  function handleQuestionNext() {
    if (questionCount < 9) {
      const selectedIndex = checkedState.indexOf(true);
      const currectAnswer = data[questionset[questionCount]].correct_answer;
      const optionArr = data[questionset[questionCount]].options;
      const correctIndex = optionArr.indexOf(currectAnswer);
      if (selectedIndex == correctIndex) {
        setResultCount(resultCount + 1);
      }
      setCheckedState([false, false, false, false]);
      console.log(resultCount);
      setQuestionCount(questionCount + 1);
    } else {
      dispatch(calculateResult(resultCount));

      navigate("/result");
    }
  }

  function handleOnCheckboxChange(index) {
    const temp = [];
    for (let i = 0; i < 4; i++) {
      if (i == index) {
        temp.push(true);
      } else {
        temp.push(false);
      }
    }
    setCheckedState([...temp]);
    // console.log(temp);
  }

  return (
    <div className={style.mainBox}>
      {questionset.length != 0 && (
        <span>
          {questionCount + 1}
          <h2>{data[questionset[questionCount]].question}</h2>
        </span>
      )}

      <div className={style.optionSection}>
        {questionset.length != 0 && (
          <div id={style.option}>
            {data[questionset[questionCount]].options.map((ele, index) => (
              <div key={index} id={style.optionItem}>
                <input
                  id={style.checkbox}
                  type="checkbox"
                  checked={checkedState[index]}
                  onChange={() => handleOnCheckboxChange(index)}
                />{" "}
                <div>{ele}</div>
              </div>
            ))}
          </div>
        )}

        <div id={style.imgOutline}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-GDv4TEvVaZePX37LgJqE5p0ldLMVlY4CGpSuR0&s" />
        </div>
      </div>
      <Button onClick={handleQuestionNext} value={"Next"} />
    </div>
  );
}
