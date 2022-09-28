import { useContext, useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import Header from "../components/Header";
import Candidate from "./Candidate";
import "./dashboard.css";
import DragAndDrop from "./DragAndDrop";
import FileUpload from "./FileUpload";
import Footer from "./Footer";

const Dashboard = (props) => {

  
  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <form className="form-dashboard">
            <div className="form-header">
              <div className="form-info">
                <span>Add candidate information and Resume here</span>
              </div>
              <div className="form-buttons">
                <button className="reset">Reset</button>
                <button className="add">Add</button>
              </div>
            </div>

            <div className="form-general">
              <h4>General Details</h4>
              <div className="form-card">
                <div className="row">
                  <div className="col">
                    <label>
                      First Name<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="xxxxxxxxxxx xxxxxx"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Last Name<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="xxxxxxxxxxx xxxxxx"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Email ID<br></br>
                    </label>
                    <div className="form-input">
                      <BiEnvelope className="email-icon" />
                      <input
                        type="text"
                        name="email"
                        className="email-input"
                        placeholder="you@mymail.com"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Phone No.<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="000000 0000"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Notice Period<br></br>
                    </label>
                    <div className="form-input">
                      <select name="notice">
                        <option>Less than 30 Days</option>
                        <option>One Month</option>
                        <option>Two Month</option>
                        <option>Three Month</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-general">
              <h4>Pay</h4>
              <div className="form-card">
                <div className="row">
                  <div className="col">
                    <label>
                      Current Company<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="currentCompany"
                        placeholder="Enter the name"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Currency Type<br></br>
                    </label>
                    <div className="form-input-CurType">
                      <select name="currencyType">
                        <option>US</option>
                        <option>IND</option>
                      </select>
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Current CTC<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="currentCompany"
                        placeholder="Eg...38,000"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <label>
                      Expected CTC<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="currentCompany"
                        placeholder="Eg...50,000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-file">
              <DragAndDrop/>
            </div>
          </form>

          <div className="added-candidate">
          <div className="added-candidate-container">
          
          <div className="added-candidate-header">
            <h4>Added Candidate(0)</h4>
          </div>
          </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

// <Footer page={page} setPage={setPage} formtitle={FormTitles} />
