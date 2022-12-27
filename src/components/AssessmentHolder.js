import React from "react";
import { useNavigate} from "react-router-dom";
const AssessmentsHolder=()=>{
    const navigate = useNavigate()
    const handleRedirect=()=>{
        navigate('/assess')
    }
 return(
    <div className="assess_wrapper">
        <div className="trial_wrapper">
            <p>Trial Assessments</p>
            <i className="fa fa-line-chart" aria-hidden="true"></i>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="real_assess_wrapper">
            <p>Assessments</p>
            <i className="fa fa-list-alt" aria-hidden="true"></i> 
            <i className="fa fa-long-arrow-right" onClick={handleRedirect} aria-hidden="true"></i>
        </div>
    </div>
 )
}
export default AssessmentsHolder