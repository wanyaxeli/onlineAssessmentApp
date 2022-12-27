import React,{useState,} from "react";
import { HorizontalNav, VerticalNav } from "../components/Nav";
import { content } from "../components/Maincontent";
import {Outlet} from "react-router-dom";
const Admin =()=>{
    const [mainChangepos,setMainChangePos]=useState({
        to:''
      })
    const [divclass,setDivClass]=useState({myclass:'horizontal_nav_bar_container'}) 
    return<section className="Admin-section">
    <content.Provider value={{divclass,setDivClass,mainChangepos,setMainChangePos}} className="App">
        <div className='content_wrapper'>
            <div className='horizontal-container'>
            <HorizontalNav/>
            </div>
            <main className={mainChangepos.to}>
              <VerticalNav/>
              <Outlet/>
            </main>
       </div>    
      </content.Provider>  
    </section>
}
export default Admin