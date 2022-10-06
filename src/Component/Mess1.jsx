import React from "react";
import Navbar from "./Navbar";
import FileDownload from "js-file-download";
import Axios from "axios";
//import {  Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
function Mess1() {
  //this is general ledger component
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:8080",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "messfee.pdf");
    });
  };

  return (
    <div>
      <Navbar />
      <br></br>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div>
            <a href="" onClick={(e) => download(e)} class="btn btn-info btn-sm">
              Mess fees Structure
            </a>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <div>
            <a href="/pay2 " class="btn btn-info btn-sm">
              Mess Fee Payment
            </a>
          </div>
          <br></br>
          <br></br>

          <div>
            <a href="/feedback " class="btn btn-info btn-sm">
              Mess FEEDBACK
            </a>
          </div>
          <br></br>
        </div>
        {/* <div>
        <a href="/messfdback " class="btn btn-info btn-sm">Mess Feedback</a>
        </div><br></br> */}

        <div class="col"></div>
        <div class="col"></div>

        <div class="col"></div>
      </div>
    </div>
  );
}

export default Mess1;
