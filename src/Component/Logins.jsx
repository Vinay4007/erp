import React from "react";

/*.page-wraper{width:260px;height:230px; margin:80px auto; background:#fff; padding:10px;padding-top:20px; cbackground:url('images/header_bg.gif') no-repeat right top #ffff; background-size:100%;text-align:center;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
    box-shadow: 0px 0px 5px 0px rgba;}
	.logo{padding:1px;}
	.welcome{ border-top:1px solid #ccc;border-bottom:1px solid #ccc;font-size:13px; padding:5px; margin:0 10px;text-align:center}
	.btn-login{width:200px;text-align:center; border:0;cursor:pointer;border-radius:2px; color:#007fc5;background:#fff; font-size:14px;text-decoration:none; padding:10px;margin:0 auto; margin:10px;font-weight:bold;
		-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.55);
    box-shadow: 0px 0px 5px 0px rgba;
	}
	.btn-login:hover{background:#003f87;text-decoration:none; color:#fff}*/

const Logins = () => {
    return(
        
        <div>
            <br/><br/><br/><br/>
        <div class="row">
            <div class="col"></div>
            <div class="col-sm-2">
                <div class="card text-center bg-light border-dark" >
  
                    <div class="card-body">
                        <h5 class="card-title">Welcome</h5>
                        <br/>
                        <a href="/login" class="btn btn-primary">Student Login</a>
                        <br/><br/>
                        <a href="/login1" class="btn btn-primary">Faculty Login </a>
                        <br/><br/>
                        <a href="/login2" class="btn btn-primary">Admin Login</a>
                    </div>
                </div>
            </div>
        <div class="col"></div>
        </div>
        </div>

    );
};

export default Logins