import React from "react";
import Navbar from './Navbar';
//import {  Link } from "react-router-dom";

const EmploAdv = () =>{   
   
    return (
       <div className='eal'>
        <Navbar />
        <br></br>

        <div class="row">
        <div class="col"></div>
        <div class="col">
          <br/>
        <div>
          <a href="/newloan" class="btn btn-primary">Apply for New Loan  </a>
        </div><br></br>
        <div>
          <a href="/lh" class="btn btn-primary"> Loan History  </a>
        </div><br></br>
        <div>
          <a href="/adv" class="btn btn-primary"> Advances  </a>
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
export default EmploAdv;


