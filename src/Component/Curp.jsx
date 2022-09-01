import React from "react";
import { Link } from "react-router-dom";
const Curp = () =>{   
   
    return(
      
      
       <div className='cur'><br></br>
        <Link to = '/downreceipt'>Click to Download your receipts</Link> <br></br><br></br>
        <div class="form-check form-check-inline">
        <select class = "form-select" >
            <option selected="">Select Sem</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                
        </select>
            
        </div>
       
        <div class="form-check form-check-inline"></div>
        <input type="submit" ></input>
        

        </div>
       
      );
};

export default Curp;