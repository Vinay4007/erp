import React, {useState} from "react";
import Navbar from './Navbar';
// import { useHistory} from "react-router-dom";



const Payments1= () =>{   
   
    // const history = useHistory()
    const [tutfee,settut] = useState({
        name:"",email:"",branch:"",semester:"",amount:""
    });

     let name,value;

    const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    settut({...tutfee,[name]:value});
    }

    const PostData = async(e) => {
        e.preventDefault();

        const {name,email,branch,semester,amount} = tutfee;

        const res = await fetch("/tutionfee", {
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
            window.alert("Fee Payment Failed");
        }
        else{
            window.alert("Fee Payment Success");
        }
    }


    return (
        
       <div className='newlo1'>

        <Navbar />
        
        <section class="tutionfee">

   
    <h2 class="h1-responsive font-weight-bold text-center ">Semester Tution fees</h2>
   
    <br/>
            
    <div class="row">

      
        <div class="col-md-9 mb-md-0 mb-5">
            <form method="POST"  id="fee-form" name="fee-form" >

              
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" name="name" id="name" class="form-control" autoComplete="off"
                                value={tutfee.name}
                                onChange={handleInputs}
                                placeholder="Your Name"
                            />
                            
                        </div>
                    </div>
            

            
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" name="email" id="email" class="form-control" autoComplete="off"
                                value={tutfee.email}
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
                            value={tutfee.branch}
                            onChange={handleInputs}
                            placeholder="Your branch"
                            />
                            
                        </div>
                    </div>


                    <div class="col-md-2">
                        <div class="md-form mb-0">
                        <label for="semester" class="">Semester</label>
                            <input type="number" name="semester" id="semester" class="form-control" autoComplete="off"
                            value={tutfee.semester}
                            onChange={handleInputs}
                            placeholder="Sem"
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
                            value={tutfee.amount}
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
                        <label for="message">Any Remarks </label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
            

            </form>

            <br/>
            
            <div className=" text-center form-group form-button">
                    <input type="submit" name="tutionfee" id="tutionfee" className="form-submit"
                     value = "Submit to pay" onClick={PostData}
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
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <div class="row">
                <div class="text-right col-md-12 bg-light">
                
                <a href="/compr" class="btn btn-primary">Transactions history </a>
                </div>
            </div>
            <br/>
        </div>


    </div>

</section>
        </div>
        
      );
};



export default Payments1;