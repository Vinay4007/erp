import React from "react";

const Logins = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-3">
          <div class="card text-center bg-light border-dark">
            <div class="card-body">
              <h5 class="card-title">Welcome</h5>
              <br />
              <br />
              <a href="/login" class="btn btn-primary btn-lg">
                Student Login
              </a>
              <br />
              <br />
              <a href="/login1" class="btn btn-primary ">
                Faculty Login
              </a>
              <br />
              <br />
              <a href="/login2" class="btn btn-primary btn-sm">
                Admin Login
              </a>

              <br />
              <br />
            </div>
          </div>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </div>
  );
};

export default Logins;
