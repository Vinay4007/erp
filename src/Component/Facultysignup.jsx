import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import React from 'react';

const Signup1 = () => {
  const history = useHistory();
  const [employ, setemploy] = useState({
    name: "",
    email: "",
    phone: "",
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

    const { name, email, phone, password } = employ;

    const res = await fetch("/register1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 422) {
      window.alert("fill all the fields");
      console.log("INVALID REGISTRATION");
    } else if (!data) {
      window.alert("INVALID REGISTRATION");
    } else {
      window.alert("REGISTRATION SUCCESS");
      console.log("Successfull REGISTRATION");

      history.push("/login1");
    }
  };

  return (
    <>
      <section className="signup1">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div classname="container mt-5">
              <div classname="signup1-content">
                <div classname="signup1-form">
                  <br />
                  <h2 className="form-title text-center">Sign up</h2>
                  <br />
                  <form
                    method="POST"
                    classname="register-form"
                    id="register-form"
                  >
                    <div class="row">
                      <div class="col-md-9">
                        <div class="md-form mb-0">
                          <label for="name" class="">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            autoComplete="off"
                            value={employ.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-9">
                        <div class="md-form mb-0">
                          <label for="email" class="">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            class="form-control"
                            autoComplete="off"
                            value={employ.email}
                            onChange={handleInputs}
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-9">
                        <div class="md-form mb-0">
                          <label for="phone" class="">
                            Phone Number
                          </label>
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            class="form-control"
                            autoComplete="off"
                            value={employ.phone}
                            onChange={handleInputs}
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-9">
                        <div class="md-form mb-0">
                          <label for="password" class="">
                            Password
                          </label>
                          <input
                            type="text"
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
                    </div>
                    <br />

                    <div className="form-group form-button">
                      <input
                        type="submit"
                        name="signup1"
                        id="signup1"
                        className="form-submit"
                        value="Register"
                        onClick={PostData}
                      />
                    </div>
                  </form>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="col">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h6>
              IF ALREADY REGISTERED{" "}
              <a class="btn btn-primary" href="/login1" role="button">
                Login Here
              </a>
            </h6>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup1;
