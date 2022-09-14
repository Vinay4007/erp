import React, {useState} from 'react';
import { NavLink, useHistory} from 'react-router-dom';
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
        if(data.status===422 || !data){
            window.alert("INVALID CREDENTIALS");
            console.log("INVALID CREDENTIALS");
        }else{
            window.alert("Login Successful");
            console.log("Successful Login");
        }
        history.push("/home")
    }

    return(
      <>
       <section className="sign-in">
            <div classname="container mt-5">
             <div classname="signin-content">
             <div classname="signin-form">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" classname="register-form" id="register-form">
                

                <div className="form-group">
                    <input type="text" name="email" id="email" autoComplete="off" 
                    value={user.email}
                    onChange={handleInputs}
                     placeholder="Your Email"
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
                    <input type="submit" name="signin" id="signin" className="form-submit"
                     value = "login" onClick={PostData}
                    />
                </div>
                </form>
             </div>
             </div>
            </div>
          </section>
      </>
    )
}

export default Login