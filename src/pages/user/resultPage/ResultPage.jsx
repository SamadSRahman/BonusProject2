import React from "react";
import { useSelector } from "react-redux";

export default function ResultPage() {
  const result = useSelector((state) => state.questions.result);
  return <div>{result}</div>;
}
