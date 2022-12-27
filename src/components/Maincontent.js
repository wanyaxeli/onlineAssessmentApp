 import React,{createContext,useState} from "react";
 import { HorizontalNav } from "./Nav";
 import { Outlet } from "react-router-dom";
 export const content = createContext('')
 const MainContent=()=>{
     const [mainChangepos,setMainChangePos]=useState({
         to:''
       })
     const [divclass,setDivClass]=useState({myclass:'horizontal_nav_bar_container'}) 
     return(
        <div className="App">
      <content.Provider value={{divclass,setDivClass,mainChangepos,setMainChangePos}} className="App">
        <div className='content_wrapper'>
           <div className='horizontal-container'>
           <HorizontalNav/>
           </div>
           <main className={mainChangepos.to}>
            <Outlet/>
           </main>
       </div>    
      </content.Provider>  
    </div>

     )
 }
 export default MainContent