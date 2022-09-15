import React, {useState} from "react";
// import Navbar from './Navbar';
// import { useHistory} from 'react-router-dom';


const Newadvance = () =>{   
//    const history = useHistory();
   const [adv,setadv] = useState({
        name:"",email:"",phone:"",advancereq:""
    });

    let name,value;

    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setadv({...adv,[name]:value});
    }

    const PostData = async(e) => {
        e.preventDefault();

    const { name,email,phone,advancereq} = adv;

   const res = await fetch("/adv", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
     name, email,phone,advancereq
    })
   });

   const data = await res.json();

   if(res.status === 422 || !data){
    window.alert("Fill all the fields");
    //console.log("INVALID REGISTRATION");
 } else{
      window.alert("Request Sent Successfully");
      //console.log("Successfull REGISTRATION");

    //history.push("/login")
 }

    }

    return (
       <div className='newadv'>
        
        
        <section class="advdata">

   
    <h2 class="h1-responsive font-weight-bold text-center ">Request Advance</h2>
   
    
        <br/>
    <div class="row">

      
        <div class="col-md-9 mb-md-0 mb-5">
            <form method="POST" id="loan-form" name="loan-form"  >

              
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" id="name" name="name" class="form-control"
                                value={adv.name}
                                onChange={handleInputs}
                                placeholder="Your Name"
                            />
                            
                        </div>
                    </div>
            

            
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" id="email" name="email" class="form-control"
                                value={adv.email}
                                onChange={handleInputs}
                                placeholder="Your Email"
                            />
                            
                        </div>
                    </div>
                    

                </div>
               
                <br/>
               
                <div class="row">
                    <div class="col-md-5">
                        <div class="md-form mb-0">
                        <label for="phone" class="">Phone</label>
                            <input type="text" id="phone" name="phone" class="form-control"
                                value={adv.phone}
                                onChange={handleInputs}
                                placeholder="Your Number"
                            />
                            
                        </div>
                    </div>
                </div>
                

                <br/>
                <div class="row">

                   
                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="advancereq">Request Message</label>
                            <input type="text" id="advancereq" name="advancereq" class="form-control"
                                value={adv.advancereq}
                                onChange={handleInputs}
                                placeholder="your Request"
                            />
                            
                        </div>

                    </div>
                </div>
            

            </form>

            <br/><br/>

            <div className="form-group form-button text-center">
                    <input type="submit" name="loandata" id="loandata" className="form-submit"
                     value = "Submit" onClick={PostData}
                    />
                </div>
                <br/><br/>
        </div>



        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Academic Section </p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>academic@iittp.ac.in</p>
                </li>
            </ul>
        </div>


    </div>

</section>
        </div>
        
      );
};

export default Newadvance;