import React from "react";
const Details=()=>{
    return(
        <div className="details_wrapper">
             <div className="score_holder">
                <h3>Scores</h3>
                <hr/>
                <table>
                    <thead>
                    <tr>
                        <th>Assessments</th>
                        <th>Score</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                       <tr>
                            <td>1st Assessments</td>
                            <td>50%</td>
                            <td>B</td>
                       </tr>
                       <tr>
                            <td>2nd Assessments</td>
                            <td>80%</td>
                            <td>A-</td>
                       </tr>
                       <tr>
                            <td>3rd Assessments</td>
                            <td>20%</td>
                            <td>E</td>
                       </tr>
                    </tbody>
                </table>
             </div>
             <div className="history_wrapper">
                <div className="mentor_wrapper">
                    <p>My mentor feedback</p>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
                <div className="result_wrapper">
                    <p>Result history</p>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
             </div>
        </div>
    )
}
export default Details