import React,{useState} from "react";
const QuestionCreator=()=>{
    const test =[]
    let mychoices= []
    const initialValues ={
        title:'', 
        quiz:'',
        answer:'',
        start:'',
        stop:'',
        duration:'',  
        choice:""
    }
    const [values,setValue] = useState(initialValues)
    const handleInput =(e)=>{
     const name = e.target.name
     const myvalue = e.target.value
     setValue({
        ...values,[name]:myvalue
     })
    }
    Add()
    const handleAnswer =()=>{
        const {choice}= values
        mychoices= [...mychoices,choice]
        console.log(mychoices)
    }
    function Add(){
        test.push({question:values.quiz,choices:mychoices})
       }
       console.log(test)
    return (
        <div className="quizWrapper">
            <div className="quiz-container">
                <div className="quiz-Input-wrapper">
                    <table>
                         <tbody>
                         <tr>
                            <td> Title of Assessment:</td><td><span><input name='title' onChange={handleInput} type='text' placeholder='Enter title'/></span></td>
                        </tr>
                         <tr>
                            <td> Question:</td> <td> <span><textarea name='quiz' onChange={handleInput}  placeholder="write Quiz"/></span></td>
                        </tr>
                        <tr className="answer-row">
                                <td>Choices:</td> <td><span><input value={values.choice} name='choice' onChange={handleInput} type='text' placeholder="Input Choices"/></span></td><td><button onClick={handleAnswer}>Add Option</button></td>
                        </tr>
                        <tr>
                                <td>Answer:</td> <td><span><input name='answer' onChange={handleInput} type='text' placeholder="Input Answer"/></span></td>
                        </tr>
                        <tr>
                                <td>Start time:</td><td> <span><input name='start' onChange={handleInput} type='datetime-local'/></span></td>
                        </tr>
                        <tr>
                                <td>Stop time:</td><td> <span><input name='stop' onChange={handleInput}  type='datetime-local'/></span></td>
                        </tr>
                        <tr>
                                <td> Duration:</td><td><span><input type='text' name='duration' onChange={handleInput}  placeholder="Enter total time"/></span></td>
                        </tr>
                         </tbody>
                    </table>
                    <button>Next Quiz</button>
                </div>
                <div className="quiz-Input-Display">
                   {values.title===''?<h3>Test Title</h3>:<h3>{values.title}</h3>}
                   {test.map((test,index)=>{
                    return(
                        <ol key={index}><li>{test.question}
                            {test.choices.map((item,index)=>{
                                return(
                                    <ol key={index}><li>{item}</li></ol>
                                )
                            })}
                        </li></ol>
                    )
                   })}
                </div>
            </div>
            <div className="Test-btn">
                <button>Upload Test</button>
            </div>
        </div>
    )
}
export default QuestionCreator