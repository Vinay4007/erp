import React, {useState} from 'react';
import { useHistory} from 'react-router-dom';
//import React from 'react'

const Login = () => {
    const history = useHistory()
    const [user,setUser] = useState({
        email:"",password:""
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

        const {email,password} = user;

        const res = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });

        const data = await res.json();
        if(res.status===422 || !data){
            window.alert("Invalid CREDENTIALS");
            console.log("INVALID CREDENTIALS");
        }
        else{
            window.alert("Login Successful");
            console.log("Successful Login");
            history.push("/home")
        }
        
    }

    return(
      <>
       <section className="sign-in">
            <div classname="container mt-5">
             <div classname="signin-content">
             <div classname="signin-form">
                <br/>
                <h2 className="form-title text-center">Sign in</h2>
                <br/>
                <form method="POST" classname="register-form" id="register-form">
                <div class="row">
                    <div class="col"></div>
                
                <div class="col">
                <div class="row">
                    <div class="col-md-9">
                        <div class="md-form mb-0">
                        <label for="email" class="">Enter Email</label>
                            <input type="text" name="email" id="email" class="form-control" autoComplete="on"
                                value={user.email}
                                onChange={handleInputs}
                               placeholder="Email"
                            />
                            
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-9">
                        <div class="md-form mb-0">
                        <label for="password" class="">Enter Password</label>
                            <input type="text" name="password" id="password" class="form-control" autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                               placeholder="Password"
                            />
                            
                        </div>
                    </div>
                </div>

                <br/><br/>
                
                </div>
                <div class="col">
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="form-group form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit"
                     value = "Login" onClick={PostData}
                    />
                </div>
                <br/><br/>
                </div>
                </div>
                </form>
             </div>
             </div>
            </div>
          </section>
      </>
    )
}

export default Login;