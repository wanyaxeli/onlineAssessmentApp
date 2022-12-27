import React,{useContext} from "react";
import { content } from "../components/Maincontent"; 
import AssessmentsHolder from "../components/AssessmentHolder";
import Banner from "../components/Banner";
import Details from "../components/Details";
import { VerticalNav } from "../components/Nav";
const Home=()=>{
    const {mainChangepos} = useContext(content)
    return(
          <>
                <VerticalNav/>
                <Banner/>
                <AssessmentsHolder/>
                <Details/>
          </>
    )
}
export default Home