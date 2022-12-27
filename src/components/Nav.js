import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import { content } from "./Maincontent";
export const HorizontalNav=()=>{
    const {divclass,setDivClass} = useContext(content)             
    if (divclass.myclass ==="horizontal_nav_bar_container")
    { 
    return (
          <div className={divclass.myclass} >
                <ul>
                        <li>
                            <div className="img_wrapper"><img src="" alt="" className="img_nav"></img></div>
                        </li>
                        <li>
                          <i className="fa fa-home" aria-hidden="true"></i>
                          <Link to='/home'><p style={{color:'#fff'}}>Home</p></Link>
                        </li>
                        <li>
                       <i className="fa fa-list-alt" aria-hidden="true"></i>
                       <Link to='/assess'><p style={{color:'#fff'}}>Assessments</p></Link>    
                        </li>
                        <li>
                            <i className="fa fa-leanpub" aria-hidden="true"></i> 
                            <p style={{color:'#fff'}}>My results</p>
                        </li>
                        <li>
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <p style={{color:'#fff'}}>My calendar</p>
                        </li>
                </ul>
           </div>
    )
}else{
    return(
            <div className={divclass.myclass}>
                <ul>
                    <li>
                        <div className="img_wrapper">
                        <img src="" alt="" className="img_nav"></img>
                        </div>
                    </li>
                    <li>
                     <Link to='/home'> <i className="fa fa-home" aria-hidden="true"></i></Link>
                    </li>
                    <li>
                     <Link to='/assess'><i className="fa fa-list-alt" aria-hidden="true"></i></Link>
                    </li>
                    <li>
                    <i className="fa fa-leanpub" aria-hidden="true"></i> 
                    </li>
                    <li>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>   
    )
}
}
export const VerticalNav=()=>{
    const {divclass,setDivClass,setMainChangePos} = useContext(content)
    const [move,setMove]=useState({
        barDiv:''
    })
    const handleclick = ()=>{
        if (divclass.myclass==="shorten"){
            setDivClass({myclass:"horizontal_nav_bar_container"})
        }else{
            setDivClass({myclass:'shorten'})
        };
        if(divclass.myclass==="shorten"){
            setMove({
                barDiv:'move'
            })
           
        }else if(divclass.myclass==="horizontal_nav_bar_container"){
            setMove({
                barDiv:''
            })
        }
      if(divclass.myclass ==="horizontal_nav_bar_container"){
        setMainChangePos({
            to:"newMain"
        })
      }else if(divclass.myclass ==="shorten"){
        setMainChangePos({
            to:""
        }) 
      }
    }
    return (
        <div className="vertical_nav_bar_container">
        <div className="vertical_item_container">
           <div className={`bar-wrapper `}><i onClick={handleclick} className="fa fa-bars" aria-hidden="true"></i></div>
            <div className="nav-details">
                <div className="notifications">
                    <p><i className="fa fa-bell" aria-hidden="true"></i></p>  
                    <span className="no-of-notifation ">1</span>
                </div>
                <div  className="user_name_details"><p>Wanyama</p></div>
            </div>
        </div>
        </div>
    )
}