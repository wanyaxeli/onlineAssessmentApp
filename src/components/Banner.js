import React, { useState,useEffect } from "react";
const Banner =()=>{
    const images=[{name:"image1",id:1,imgurl:"/images/write1.jpg"},{name:"image2",id:2,imgurl:"/images/write2.jpg"},
    {name:"image3",id:3,imgurl:"/images/write3.jpg"}]
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