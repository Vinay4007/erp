import React, { useState } from "react";
import Navbar1 from "./Navbar1";

import { useHistory } from "react-router-dom";

const ProjectDET = () => {
  const history = useHistory();
  const [prodet, setpro] = useState({
    name: "",
    email: "",
    department: "",
    topic: "",
    numberstudents: "",
    idea: "",
    amount: "",
    time: "",
  });




  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setpro({ ...prodet, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, department, topic, numberstudents,idea,amount,time } = prodet;

    const res = await fetch("/projectdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        department,
        topic,
        numberstudents,
        idea,
        amount,
        time,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Fee Payment Failed");
    } else {
      window.alert("Details submitted Successfully");
      history.push("/home1");
    }
  };


  return (
    <div className="pro1">
      <Navbar1 />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section class="tutionfee">
              <h4 class="h1-responsive font-weight-bold text-center mt-3">
                Semester Tution fees
              </h4>

              <br />

              <div class="row">
                <div class="col-md-12">
                  <form method="POST" id="fee-form" name="fee-form">
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="name" class="mt-1">
                          Name
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                           
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="email" class="mt-1">
                          Email
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.email}
                            onChange={handleInputs}
                            placeholder="Your email"
                          
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="department" class="mt-1">
                          Department
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="department"
                            id="department"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.department}
                            onChange={handleInputs}
                            placeholder="Your department"
                            
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="topic" class="mt-1">
                          Aim
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="topic"
                            id="topic"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.topic}
                            onChange={handleInputs}
                            placeholder="Aim of the project"
                          />
                        </div>
                      </div>
                      <div class="col-md-4"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="numberstudents" class="mt-1">
                          Size
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            id="numberstudents"
                            name="numberstudents"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.numberstudents}
                            onChange={handleInputs}
                            placeholder="Project team size"
                            
                          />
                        </div>
                      </div>
                      <div class="col-md-4"></div>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="email" class="mt-1">
                          Type of Project
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="idea"
                            id="idea"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.idea}
                            onChange={handleInputs}
                            placeholder="Research/Product development"
                            
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                             <br></br>

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="email" class="mt-1">
                          Budget Estimation
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            name="amount"
                            id="amount"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.amount}
                            onChange={handleInputs}
                            placeholder="Budget of the Project"
                           
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                       <br></br>
                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="email" class="mt-1">
                          Duration
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            name="time"
                            id="time"
                            class="form-control"
                            autoComplete="off"
                            value={prodet.time}
                            onChange={handleInputs}
                            placeholder="In Months"
                          
                          />
                        </div>
                      </div>
                      <div class="col-md-2"></div>
                    </div>
                    {/* <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="message" class="mt-1">
                          Remarks{" "}
                        </label>
                      </div>

                      <div class="col-md-7">
                        <div class="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="2"
                            class="form-control md-textarea"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-1"></div>
                    </div> */}
                    <br />
                  </form>

                  <br />

                  <div className=" text-center form-group form-button">
                    <input
                      type="submit"
                      name="tutionfee"
                      id="tutionfee"
                      className="form-submit btn btn-primary"
                      value="Submit to Pay"
                      onClick={PostData}
                    />
                  </div>
                  <br />
                </div>
              </div>
            </section>
          </div>
          <br />
        </div>
        <div class="col-sm-3 text-center">
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
          <br />
          <br />
       
        </div>
      </div>
    </div>
  );
};

export default ProjectDET;
