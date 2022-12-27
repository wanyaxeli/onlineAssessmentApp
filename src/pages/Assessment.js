import React,{useState,useEffect} from "react";
import { VerticalNav } from "../components/Nav";
import { useNavigate } from "react-router-dom";
const Assessment =()=>{
    const navigate = useNavigate()
    const [status,setStatus]=useState()
    const commence = '2023/2/3'
    const end ='2023/12/4'
    let start = new Date(commence)
    let startTime = start.getTime()
    let stop= new Date(end)
    let stopTime = stop.getTime()
    const duration = startTime - stopTime
    function StatusDecider (duration,startTime){
      if (Date.now() < startTime){
        return setStatus('Inctive')
      }
      else if(Date.now() > stopTime){
        return setStatus('Expired!')
      }else if(Date.now() >= startTime && Date.now() <= stopTime){
        return setStatus ('Active')
      }
    } 
    const handleQuiz =()=>{
      navigate ('/answering')
    }
useEffect(()=>{
    StatusDecider()
},[status])
    return(
        <div className="assessment_wrapper_div">
            <VerticalNav/>
           <div className="assess_wrapper">
                <div className="assess_container" onClick={handleQuiz}>
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
                <div className="assess_container">
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
                <div className="assess_container">
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
                <div className="assess_container">
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
                <div className="assess_container">
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
                <div className="assess_container">
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
                <div className="assess_container">
                    <p>Assessment name</p>
                    <p>Assessment data</p>
                    <p>status: {status}</p>
                </div>
           </div>
        </div>
    )
}
export default Assessment
