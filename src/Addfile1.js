import React from "react";
import { Link } from "react-route-dom";

const Sponsored = () =>{
    return(
      <div>
           <h1>Sponsored Project and Consultancy Project  Accounts</h1>
           <Employee/>
           <Department/>
           <Cultural/>
      </div>
    )
  }
const Employee=()=>{
    return (
        <div>
            <Link to = "/">Employee</Link>
        </div>
    )
}
const Department=()=>{
    return (
        <div>
            <a href=" ">Department wise budget  tracking</a>
        </div>
    );
};
const Cultural =()=>{
    return(
        <div>
            <a href=" ">Cultural festival  expenses</a>
        </div>
    );
}

  export default Sponsored;