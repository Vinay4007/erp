import React from "react";
import Navbar from './Navbar';


const SponProj = () =>{   
   
    return (
       <div className='sp'>
        <Navbar/>
        <br/>
        <div class="row">
        <div class="col"></div>
        <div class="col">  
        <br></br>          
        <div>
        <a href="/pay1" class="btn btn-primary">Tution Fees </a><br/>
        </div><br/><br/>
        
        
        <div>
        <a href="/pay2" class="btn btn-primary">Hostel And Mess fees </a>
        <br/><br/>
        </div>
        </div>
    
        <div class="col"></div>
        
        <div class="col"></div>
        <div class="col"></div>
      </div>
        <br/>
        </div>
        
      );
};

export default SponProj;

