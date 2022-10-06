import React, {useState} from "react";
import Navbar2 from './Navbar2';

import { useHistory} from "react-router-dom";



const Filling2= () =>{   
   
    const history = useHistory()
    const [admhosfee,setadmhostut] = useState({
        name:"",email:"",branch:"",amount:""
    });

     let name,value;

    const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setadmhostut({...admhosfee,[name]:value});
    }

    const PostData = async(e) => {
        e.preventDefault();

        const {name,email,branch,amount} = admhosfee;

        const res = await fetch("/admhostelfee", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
             name,email,branch,amount    
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Hostel fee data did not updated");
        }
        else{
            window.alert("Hostel fee data successfully submitted");
            history.push('/home2')
        }
    }


    return (
        
       <div className='fill2'>

        <Navbar2 />
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
            <br/>
            <div class="card bg-light border-dark" >
            <section class="tutionfee">

            <h4 class="h1-responsive font-weight-bold text-center mt-3">Semester Hostel fees</h4>
   
            <br/>
            
            <div class="row">

      
        <div class="col-md-12">
            <form method="POST"  id="fee-form" name="fee-form" >

              
                <div class="row">

                <div class="col-md-4 text-end">
                <label for="name" class="mt-1">Name</label>
                </div>
                    <div class="col-md-6">
                        <div class="md-form">
                        
                            <input type="text" name="name" id="name" class="form-control" autoComplete="off"
                                value={admhosfee.name}
                                onChange={handleInputs}
                                placeholder="Student Name"
                            />
                            
                        </div>
                    </div> 
                    <div class="col-md-2"></div>
                    </div>
                <br/>
                <div class="row">
                <div class="col-md-4 text-end">
                <label for="email" class="mt-1">Email</label>
                </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" name="email" id="email" class="form-control" autoComplete="off"
                                value={admhosfee.email}
                                onChange={handleInputs}
                                placeholder="Enter Student email"
                            />
                            
                        </div>
                    </div>
                    <div class="col-md-2"></div>

                </div>
                <br/>
                <div class="row">
                <div class="col-md-4 text-end">
                <label for="branch" class="mt-1">Branch</label>
                </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" name="branch" id="branch" class="form-control" autoComplete="off"
                            value={admhosfee.branch}
                            onChange={handleInputs}
                            placeholder="Enter Student branch"
                            />
                            
                        </div>
                    </div>
                <div class="col-md-2"></div>
                </div>
                <br />
                <div class="row">
                <div class="col-md-4 text-end">
                    <label for="amount" class="mt-1">Amount</label>
                </div>
                    <div class="col-md-4">
                        <div class="md-form mb-0">
                            <input type="number" id="amount" name="amount" class="form-control" autoComplete="off"
                            value={admhosfee.amount}
                            onChange={handleInputs}
                            placeholder="Enter Student Fee"
                            />
                            
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <br/>
               
                <br/>

            </form>

            <br/>
            
            <div className=" text-center form-group form-button">
                    <input type="submit" name="tutionfee" id="tutionfee" className="form-submit btn btn-primary"
                     value = "Submit" onClick={PostData}
                    />
                </div>
                <br/>
            
        </div>

    </div>

</section>

</div>
<br/>
</div>
    
        
</div>
</div>
        
      );
};



export default Filling2;