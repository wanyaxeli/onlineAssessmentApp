import React from "react";
import { useNavigate } from "react-router-dom";
const Adminhome =()=>{
    const navigate = useNavigate()
    const handleAssess=()=>{
        navigate('/admin/quiz')
    }
    return(
        <div className="homeWrapper"> 
            <div className="adminassessContainer">
                <div className="assess">
                    <p>My Students</p>
                    <p><i className="fa fa-long-arrow-right"aria-hidden="true"></i></p>
                </div>  
                <div className="assess">
                    <p>Create Assessment</p>
                    <p><i onClick={handleAssess} className="fa fa-long-arrow-right"aria-hidden="true"></i></p>
                </div>
                <div className="assess">
                    <p>Create Trial</p>
                    <p><i className="fa fa-long-arrow-right"aria-hidden="true"></i></p>
                </div>
                <div className="assess">
                    <p>Edit Assessment</p>
                    <p><i className="fa fa-long-arrow-right"aria-hidden="true"></i></p>
               </div>
            </div>
            <div className="AdminStatisticsWrapper">
              <div className="studentHolder">
               <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Tests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Elias Wanyama</td>
                        <td>2</td>
                        <td><button>Details</button></td>
                    </tr>
                    <tr>
                        <td>Edward Wanyama</td>
                        <td>4</td>
                        <td><button>Details</button></td>
                    </tr>
                    <tr>
                        <td>Terry Wanyama</td>
                        <td>5</td>
                        <td><button>Details</button></td>
                    </tr>
                </tbody>
               </table>
              </div>
            </div>
        </div>
    )
}
export default Adminhome