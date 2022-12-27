import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Login =()=>{
    const [values,setValue] = useState({pass:''})
    const navigate = useNavigate()
    const [lgnFont,setLgnfont]=useState({
        myfont:''
    })
    const [signFont,setSignfont]=useState({
        sign:''
    })
    const [signheight,setSignHeight]=useState({
        sgnHeight:''
    })
    
    const[login,setlogin]=useState({
        show:''
    })
    const handleBtn = ()=>{
        if (login.show === ''){
            setlogin({show:'moveBtn'})
        }else{
            setlogin({
                show:''
            })
        }
        if(login.show === 'moveBtn'){
            setSignHeight({
                sgnHeight:''  
            });
            setSignfont({
                sign:''
            });
            setLgnfont({
                myfont:''
            })
        }else{
            setSignHeight({
                sgnHeight:'sign-up-height'  
            });
            setSignfont({
                sign:'login-font'
            });
            setLgnfont({
                myfont:'sign-up-font'
            })
        }
    }
    const handlesignUp =()=>{
        if (login.show === 'moveBtn'){
            setlogin({show:''})
        }else{
          return
        }
        if(login.show === 'moveBtn'){
            setSignHeight({
                sgnHeight:''  
            });
            setSignfont({
                sign:''
            });
            setLgnfont({
                myfont:''
            })
        }else{
           return false
        }
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
      if (values.pass.startsWith("Ad")){
        navigate('/admin')
      }
     else{
        navigate('/')
     }
    }
    const handleChange =(e)=>{
    const value = e.target.value
    setValue ({pass:value})
    }
    return(
        <div className="login-wrapper">
            <div className={`sign-up-container  ${signheight.sgnHeight}`}>
              <h2 className={lgnFont.myfont} onClick={handlesignUp}>Sign Up</h2>
              <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='password'  placeholder='Confirm password'/>
                <button>Sign Up</button>
              </form>
             <div className={`login-container ${login.show}`}>
             <button className={`loginBtn ${signFont.sign}` }onClick={handleBtn}>Login</button>
              <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input value={values.pass}  onChange={handleChange} type='password' placeholder='Password'/>
                <button className="signBtn" onClick={handleSubmit}>Login</button>
              </form>
             </div>
            </div>
        </div>
    )
}
export default Login