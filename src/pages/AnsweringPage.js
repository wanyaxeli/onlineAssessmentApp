import React,{useState}from "react";
import { VerticalNav } from "../components/Nav";
const AnsweringPage=()=>{
   const [timer,setTimer]=useState(20)
   function timeChecker (){
    if (timer > 0){
        setTimer( (timer)=> timer - 1)
    }else if(timer === 0){
         
    }
}
    useState(()=>{
      const handler = setInterval(timeChecker,60000)
      return ()=> clearInterval(handler);
        // eslint-disable-next-line
    },[timer])
    return(
       <div className="quiz_container">
        <VerticalNav/>
            <div className="quiz_wrapper">
                <ol>
                    <li>How many counties we have in kenya</li>
                    <ol>
                        <li><input name="answer" type='radio'></input> 20</li>
                        <li><input name="answer" type='radio'></input> 47</li>
                        <li><input name="answer" type='radio'></input> 50</li>
                        <li><input  name="answer" type='radio'></input> 30</li>
                    </ol>
                    <li>How many counties we have in kenya</li>
                    <ol>
                        <li><input name="answer" type='radio'></input> 20</li>
                        <li><input name="answer" type='radio'></input> 47</li>
                        <li><input name="answer" type='radio'></input> 50</li>
                        <li><input  name="answer" type='radio'></input> 30</li>
                    </ol>
                </ol>
            </div>
            <div className="timer_wrapper">
              <p>Time  remaining: <span>{timer} minutes</span></p>
              <button>Submit</button>
            </div>
        </div>
    )
}
export default AnsweringPage