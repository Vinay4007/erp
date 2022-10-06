import React from "react";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";

const Studentadmin = () => {
  return (
    <div className="stuadmin">
      <Navbar2 />
      <br></br>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br></br>
          <div>
            <Link to="/stuadm1" class="btn btn-primary">
              Tution Fees{" "}
            </Link>
            <br />
          </div>
          <br />
          <br />

          <div>
            <Link to="/stuadm2" class="btn btn-primary">
              Hostel fees{" "}
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>

        <div class="col"></div>

        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default Studentadmin;
