
import './App.css';
import {createContext,useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import AllLinks from './components/AllLinks';
export const content = createContext('')
function App() {
  const [mainChangepos,setMainChangePos]=useState({
    to:''
  })
  const [divclass,setDivClass]=useState({myclass:'horizontal_nav_bar_container'}) 
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/login')
  },[])
  return (
    <>
      <AllLinks/>
    </>
  );
}

export default App;
