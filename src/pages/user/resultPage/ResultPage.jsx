import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from  './Result.module.css'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function ResultPage() {
  const [isPass, setIsPass] = useState(false) 
  const navigate = useNavigate()
  const result = useSelector((state) => state.questions.result);
  if (result >= 40) {
    setIsPass(true)
  }

  return <div>{result}
  
    {isPass ? (<div className={styles.messageDiv}>
      <h2>Congratulations you have passed the test!!!</h2>
      <Button onClick={()=>navigate('/test')}  id={styles.tryAgainBtn} variant='contained' >Take the test again?</Button>
      <Button onClick={()=>navigate('/userhome')}id={styles.homeBtn} variant="contained">Back to Home</Button>
    </div>) : <div className={styles.messageDiv}>
    <h2>You have failed the test. Better luck next time.</h2>
        <Button onClick={()=>navigate('/test')}  id={styles.tryAgainBtn} variant='contained' >Take the test again?</Button>
      <Button  onClick={()=>navigate('/userhome')}id={styles.homeBtn} variant="contained">Back to Home</Button>
    </div>}
    
  </div>;
}
