import React from "react";
import { Routes, Route} from "react-router-dom";
import Admin from "../pages/Admin";
import Adminhome from "../pages/AdminHome";
import AnsweringPage from "../pages/AnsweringPage";
import Assessment from "../pages/Assessment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import QuestionCreator from "../pages/QuestionCreator";
import MainContent from "./Maincontent";
 const AllLinks =()=>{
    
 return(
    <Routes> 
        <Route exact path="/login"  element={<Login/>}/>
        <Route exact path="/" element = {<MainContent/>}>
            <Route index element={<Home />} />
            <Route exact  path="/home"  element={<Home/>}/>
            <Route exact  path="/assess" element={<Assessment/>}/>
            <Route exact path="/answering" element={<AnsweringPage/>}/>
        </Route>
        <Route exact path="/admin"  element={<Admin/>}>
            <Route path="/adminHome" element ={<Adminhome/>}/> 
            <Route index element = {<Adminhome/>}/>
            <Route path="/admin/quiz" element={<QuestionCreator/>}/>
        </Route>
    </Routes>
 )
}
export default AllLinks;
