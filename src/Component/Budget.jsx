import React from "react";
import Navbar from './Navbar';


const Budget = () =>{
    return(
      <div>
        <Navbar />
        <div class="row">
        <div class="col"></div>
        <div class="col">  
        <br></br>          
        <a href="/cultural" class="btn btn-info btn-sm">Cultural Affairs</a><br></br><br></br>
        <a href="/scholar" class="btn btn-info btn-sm">Scholarship</a><br></br><br></br>
        <a href="/budget" class="btn btn-info btn-sm">Department Impreset</a><br></br><br></br>
        <a href="/dpb" class="btn btn-info btn-sm">Department Budget tracking</a><br></br><br></br>
        <a href="/budget" class="btn btn-info btn-sm">Sponsored Project </a><br></br><br></br>
        </div>
    
        <div class="col"></div>
        
        <div class="col"></div>
        <div class="col"></div>
      </div>
      </div>
        
    )
}
export default Budget;

