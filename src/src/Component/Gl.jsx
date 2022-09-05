import React from "react";

const GeneralLedger = () =>{   //this is general ledger component
   
    return (
       <div className='gl'>

<div class= "p-3 bg-white text-dark">
<br></br>
<br></br>
<br></br>
</div>
  <div class="vstack gap-2">         
  <div class="bg-light border">
  {/* <ul>
        <li>
             <a href="/sp" class="btn btn-outline-secondary">Students</a>
        </li>
        <li>
        <a href="/eal" class="btn btn-outline-secondary">Faculty</a>
        </li>
        </ul>
         */}

<br></br>
<div class="row">
    <div class="col"></div>
    <div class="col"></div>

    <div class="col">
    <a href="/sp" class="btn btn-outline-secondary btn-lg">Students</a>
    </div>
    <div class="col"></div>

    <div class="col">
    <a href="/eal" class="btn btn-outline-secondary btn-lg">Faculty</a>
    </div>
    
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <br></br>
 
  
  
  
</div>
</div>
      
  
</div>
    
      
   
        
        
      );
};


export default GeneralLedger;