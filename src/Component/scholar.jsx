import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
const Scholar = () =>{
    return (
        <div>
            <Navbar2/>
            <h2 class="text-center"><b>Make Payment</b></h2>
            <div class="row">
                <div class="col"></div>
                <div class="col">
            <div class="input-group mb-0"><br />

            <div class="padding">
<div class="row">
<div class="col-sm-18">
<div class="card">
<div class="card-header">
<strong>Enter Students Account details</strong><br></br>
</div>
<div class="card-body">
<div class="row">
<div class="col-sm-12">
<div class="form-group">
    

    
<label for="name">Name</label>
<input class="form-control" id="name" type="text" placeholder="Enter your name"></input>
</div>
</div>
</div>

<div class="row">
<div class="col-sm-12">
<div class="form-group"><br></br>
<label for="ccnumber">Account Number</label><br></br>


<div class="input-group">
<input class="form-control" type="text" placeholder="000000000000" autocomplete="email"></input>
<div class="input-group-append">


</div>
</div> 
</div>
</div>
</div><br></br>

<div class="row">
<div class="form-group col-sm-6">
<label for="ccmonth">Email id</label>
<input class="form-control" type="text" placeholder="abc@123" autocomplete="email"></input>

</div>

</div>

</div>

<div class="card-footer">
<div class="row">
    <div class="col">
<button class="btn btn-big btn-info float-right" type="submit">
<i class="mdi mdi-gamepad-circle"></i> Continue</button></div>
<div class="col"></div>
<div class="col">
<button class="btn btn-big btn-danger" type="reset">
<i class="mdi-lock-reset"></i> Reset</button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
                

            </div>
            </div>
            <div class="col">
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            <a href="/sendreceipt" class="btn btn-success btn-sm ">Receipt</a>
            <br/><br/>
            </div>
  </div>    
  </div>
  
        
        
    )
}
export default Scholar;