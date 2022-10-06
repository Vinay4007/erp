import React, { useState } from "react";
import Navbar from "./Navbar";
//import axios from "axios";
import { useHistory } from "react-router-dom";

const Payments2 = () => {
  const history = useHistory();
  const [fee, setfee] = useState({
    name: "",
    email: "",
    branch: "",
    semester: "",
    amount: "",
  });

  // const getDetails = async () => {
  //   try {
  //     let data = await axios.get("http://localhost:8080/AhosfeeDetails");
  //     console.log(data.data.data);
  //     let detail = data.data.data;
  //     setfee({
  //       name: detail.name,
  //       email: detail.email,
  //       branch: detail.branch,
  //       semester: "1",
  //       amount: detail.amount,
  //     });
  //   } catch (err) {}
  // };

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setfee({ ...fee, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, branch, semester, amount } = fee;

    const res = await fetch("/fee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        branch,
        semester,
        amount,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Entries");
    } else {
      window.alert("Scan QR to Pay");
      history.push("/qrh");
    }
  };

  // useEffect(() => {
  //   getDetails();
  // }, []);
  return (
    <div className="pay2">
      <Navbar />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <br />
          <div class="card bg-light border-dark">
            <section class="hmfee">
              <h4 class="h1-responsive font-weight-bold text-center mt-3">
                Mess fees
              </h4>
              <br />

              <div class="row">
                <div class="col-md-12 ">
                  <form method="POST" classname="fee-form" id="fee-form">
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
                            value={fee.name}
                            onChange={handleInputs}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
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
                            value={fee.email}
                            onChange={handleInputs}
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="branch" class="mt-1">
                          Branch
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input
                            type="text"
                            name="branch"
                            id="branch"
                            class="form-control"
                            autoComplete="off"
                            value={fee.branch}
                            onChange={handleInputs}
                            placeholder="Your branch"
                          />
                        </div>
                      </div>
                      <div class="col-md-2 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="semester" class="mt-1">
                          Semester
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            name="semester"
                            id="semester"
                            class="form-control"
                            autoComplete="off"
                            value={fee.semester}
                            onChange={handleInputs}
                            placeholder="Semester"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="amount" class="mt-1">
                          Amount
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="md-form mb-0">
                          <input
                            type="number"
                            id="amount"
                            name="amount"
                            class="form-control"
                            autoComplete="off"
                            value={fee.amount}
                            onChange={handleInputs}
                            placeholder="Enter Amount"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 text-end"></div>
                    </div>
                    <br />

                    <div class="row">
                      <div class="col-md-4 text-end">
                        <label for="message" class="mt-1">
                          Feedback{" "}
                        </label>
                      </div>

                      <div class="col-md-6">
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
                      <div class="col-md-2 text-end"></div>
                    </div>
                  </form>

                  <br />

                  <div className=" text-center form-group form-button">
                    <input
                      type="submit"
                      name="tutionfee"
                      id="tutionfee"
                      className="form-submit btn btn-primary"
                      value="Pay"
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
          <div class="row">
            <div class="col-md-9 text-end">
              <a href="/chs" class="btn btn-warning">
                Transactions history{" "}
              </a>
              <br />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Payments2;
