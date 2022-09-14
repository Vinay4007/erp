import React, {useState} from 'react';
import { NavLink, useHistory} from 'react-router-dom';
//import React from 'react';

const Signup = () =>{
    const history = useHistory()
    const [user,setUser] = useState({
        name:"",email:"",phone:"",password:""
    });

     let name,value;

    const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
    }

const PostData = async(e) => {
    e.preventDefault();

    const { name,email,phone,password} = user;

   const res = await fetch("/register", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
     name, email,phone,password
    })
   });

   const data = await res.json();
   
   if(data.status === 422 || !data){
      window.alert("INVALID REGISTRATION");
      console.log("INVALID REGISTRATION");
   } else{
    window.alert("REGISTRATION SUCCESS");
      console.log("Successfull REGISTRATION");

      history.push("/login")
   }

}

    return(
        <>
          <section className="signup">
            <div classname="container mt-5">
             <div classname="signup-content">
             <div classname="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" classname="register-form" id="register-form">
                <div className="form-group">
                    <input type="text" name="name" id="name" autoComplete="off"
                     value={user.name}
                     onChange={handleInputs}
                     placeholder="Your Name"
                    />
                </div>

                <div className="form-group">
                    <input type="text" name="email" id="email" autoComplete="off" 
                      value={user.email}
                      onChange={handleInputs}
                     placeholder="Your Email"
                    />
                </div>

                <div className="form-group">
                    <input type="number" name="phone" id="phone" autoComplete="off" 
                        value={user.phone}
                        onChange={handleInputs}
                     placeholder="Your Number"
                    />
                </div>

                <div className="form-group">
                    <input type="text" name="password" id="password" autoComplete="off" 
                        value={user.password}
                        onChange={handleInputs}
                     placeholder="Your Password"
                    />
                </div>

                <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit"
                     value = "register" onClick={PostData}
                    />
                </div>
                </form>
             </div>
            
            <h1>IF ALREADY REGISTERED</h1>

             <br/><br/>
             <a class="btn btn-primary" href="/login" role="button">Please Login</a>
             </div>
            </div>
          </section>

        </>
    )
}

export default Signup;