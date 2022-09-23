import React from "react";
import Navbar2 from './Navbar2';
//import {  Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
const Others = () =>{   //this is general ledger component
   
    return (
        <div>
          <Navbar2 />
        <br></br>
        
        <div class="row">
        <div class="col"></div>
        <div class="col">
        <div>
          <br/><br/>
        <a href=" " class="btn btn-info btn-sm">CashBook And BankBook</a><br></br><br></br>
        </div><br></br>
        <div>
        <a href=" " class="btn btn-info btn-sm">Trail Balanced Profit and Loss Sheet</a>
        </div><br></br>
        
        </div>

      <div class="col"></div>
      <div class="col"></div>

      <div class="col"></div>
      </div>

      </div>
        
        
      );
};

export default Others;