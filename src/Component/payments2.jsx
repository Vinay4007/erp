import React, {useState} from "react";
import Navbar from './Navbar';
// import { useHistory} from "react-router-dom";



const Payments2= () =>{   
   
    // const history = useHistory()
    const [fee,setfee] = useState({
        name:"",email:"",branch:"",semester:"",amount:""
    });

     let name,value;

    const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setfee({...fee,[name]:value});
    }

    const PostData = async(e) => {
        e.preventDefault();

        const {name,email,branch,semester,amount} = fee;

        const res = await fetch("/fee", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
             name,email,branch,semester,amount    
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("fee payment failed");
        }
        else{
            window.alert("fee payment success");
        }
    }


    return (
        
       <div className='newlo1'>

        <Navbar />
        
        <section class="hmfee">

   
    <h2 class="h1-responsive font-weight-bold text-center ">Hostel and Mess fees</h2>
   <br/>
    
            
    <div class="row">

      
        <div class="col-md-9 mb-md-0 mb-5">
            <form method="POST" classname="fee-form" id="fee-form">

              
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" name="name" id="name" class="form-control" autoComplete="off"
                                value={fee.name}
                                onChange={handleInputs}
                                placeholder="Your Name"
                            />
                            
                        </div>
                    </div>
            

            
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" name="email" id="email" class="form-control" autoComplete="off"
                                value={fee.email}
                                onChange={handleInputs}
                                placeholder="Your email"
                            />
                            
                        </div>
                    </div>
                    

                </div>
               
                <br/>
               
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="branch" class="">Branch</label>
                            <input type="text" name="branch" id="branch" class="form-control" autoComplete="off"
                            value={fee.branch}
                            onChange={handleInputs}
                            placeholder="Your branch"
                            />
                            
                        </div>
                    </div>
                    
                    <div class="col-md-2">
                        <div class="md-form mb-0">
                        <label for="semester" class="">Semester</label>
                            <input type="number" name="semester" id="semester" class="form-control" autoComplete="off"
                            value={fee.semester}
                            onChange={handleInputs}
                            placeholder="Semester"
                            />
                            
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <div class="md-form mb-0">
                        <label for="amount" class="">Enter Amount</label>
                            <input type="number" id="amount" name="amount" class="form-control" autoComplete="off"
                            value={fee.amount}
                            onChange={handleInputs}
                            placeholder="Amount"
                            />
                            
                        </div>
                    </div>
                </div>
                
                <br/>
                
                <div class="row">

                   
                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="message">Feedback and Suggestions </label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
            

            </form>

            <br/>
            
            <div className=" text-center form-group form-button">
                    <input type="submit" name="tutionfee" id="tutionfee" className="form-submit"
                     value = "Submit to Pay" onClick={PostData}
                    />
                </div>

            
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
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <div class="row">
                <div class="col-md-12 bg-light">
                
                    <a href="/chs" class="btn btn-primary">Transactions history </a><br/>
                </div>
            </div>
            <br/>
        </div>


    </div>

</section>
        </div>
        
      );
};



export default Payments2;