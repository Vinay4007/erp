import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import React from 'react'

const Login1 = () => {
  const history = useHistory();
  const [employ, setemploy] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setemploy({ ...employ, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = employ;

    const res = await fetch("/signin1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid CREDENTIALS");
      console.log("INVALID CREDENTIALS");
    } else {
      window.alert("Login Successful");
      console.log("Successful Login");
      history.push("/home1");
    }
  };

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col"></div>
          <div class="col-sm-3">
            <div class="card text-center bg-light border-dark">
              <div class="card-body">
                <h5 class="card-title">Faculty Sign-in</h5>
                <br />
                <form
                  method="POST"
                  classname="register-form"
                  id="register-form"
                >
                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 mb-3">
                      <label for="email" class="">
                        Enter Email
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="inputGroupPrepend2"
                          >
                            @
                          </span>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="form-control"
                          autoComplete="on"
                          value={employ.email}
                          onChange={handleInputs}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                  </div>

                  <br />

                  <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 mb-3">
                      <label for="Password" class="">
                        Enter Password
                      </label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span
                            class="input-group-text"
                            id="inputGroupPrepend2"
                          >
                            *
                          </span>
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="form-control"
                          autoComplete="off"
                          value={employ.password}
                          onChange={handleInputs}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                  </div>

                  <br />
                  <br />

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit btn btn-primary"
                      value="Login"
                      onClick={PostData}
                    />
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
};

export default Login1;
