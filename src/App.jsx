import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/login/AdminLogin";
import UserLogin from "./pages/user/login/UserLogin";
import AdminHome from "./pages/admin/adminHome/AdminHome";
import CreateQuestion from "./pages/admin/createQuestion/CreateQuestion";
import EditQuestion from "./pages/admin/editQuestions/EditQuestion";
import UserHome from "./pages/user/userHome/UserHome";
import Test from "./pages/user/test/test";
import ResultPage from "./pages/user/resultPage/ResultPage";

export default function App() {
  return (
    <div className="container">
         <Routes>
      <Route path="/" element={<UserLogin />}></Route>
      <Route path="/userhome" element={<UserHome />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/result" element={<ResultPage />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminHome" element={<AdminHome />}></Route>
      <Route path="/createquestion" element={<CreateQuestion />}></Route>
      <Route path="/editquestion" element={<EditQuestion />}></Route>
    </Routes>
 </div>
  );
}
