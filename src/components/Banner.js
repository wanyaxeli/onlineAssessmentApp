import React, { useState,useEffect } from "react";
import image from '../images/write1.jpg'
import image2 from '../images/write2.jpg'
import image3 from '../images/write3.jpg'
const Banner =()=>{
    const images=[{name:"image1",id:1,imgurl:image},{name:"image2",id:2,imgurl:image2},
    {name:"image3",id:3,imgurl:image3}]
    const [index,setIndex]=useState(0)
    function autorun (){
    if (index ===images.length-1) {
            setIndex(0)
    }else {
        setIndex ((index)=> index + 1)
        }
    }   
    
    useEffect (()=>{
        const handler = setTimeout(autorun,3000)
        return ()=>clearTimeout(handler);
        // eslint-disable-next-line
    },[index])
    return(
        <div className="banner_wrapper">
            <img src={images[index].imgurl} alt={images[index].name}></img>
        </div>
    )
}
export default Banner