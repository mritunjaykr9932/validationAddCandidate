import React, { useEffect, useState } from "react";
import { createContext } from "react";
import "./candidate.css";
import Footer from "./Footer";

function Candidate() {
  const initialValues = {
    firstname: "",
    email: "",
    phone: "",
    file: "",
    jobId: "",
    jobTitle: "",
    company: "",
    jobDescription: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    // console.log("form",setFormValues)
    // const form = window.localStorage.getItem("user");
    // setFormValues(JSON.parse(form));
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const error = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{10}$/;

    if (!values.firstname) {
      error.firstname = "first name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!mailformat.test(values.email)) {
      error.email = "this is not a valid email format";
    }
    if (!values.phone) {
      error.phone = "phone number is required";
    } else if (!values.phone.match(phoneno)) {
      error.phone = "phone number is Invalid";
    }
    if (!values.file) {
      error.file = "please upload the file";
    }
    if (!values.jobId) {
      error.jobId = "job ID is required";
    }
    if (!values.jobTitle) {
      error.jobTitle = "job title is required";
    }
    if (!values.company) {
      error.company = "company name is required";
    }
    if (!values.jobDescription) {
      error.jobDescription = "please upload the file";
    }
    return error;
  };

  return (
    <>
      <div className="candidate-container">
        <div className="candidate-main">
          <div className="candidate-card">
            <h4>Candidate Details</h4>
            <div className="row">
              <div class="col">
                <label>
                  Full Name<br></br>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Jhon"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label>
                  Email <br></br>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label>
                  Phone Number<br></br>
                </label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="0000 000 000"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label>
                  Resume<br></br>
                </label>
                <input
                  className="file-upload"
                  id="file"
                  type="file"
                  name="file"
                  value={formValues.file}
                  onChange={handleChange}
                  accept="application/pdf,application/msword,
                  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                <label for="file">
                  <div className="button">Upload</div>
                </label>
              </div>
            </div>
          </div>

          <div className="candidate-card">
            <h4>Job Details</h4>
            <div class="row">
              <div class="col">
                <label>
                  Job ID<br></br>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="jobId"
                  value={formValues.jobId}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label>
                  Job title <br></br>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="jobTitle"
                  value={formValues.jobTitle}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label>
                  Company<br></br>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="olivia@untitledui.com"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label>
                  Job description<br></br>
                </label>
                <input
                  className="file-upload"
                  id="filee"
                  type="file"
                  name="jobDescription"
                  value={formValues.jobDescription}
                  onChange={handleChange}
                  accept="application/pdf,application/msword,
                  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                <label for="filee">
                  <div className="button">Upload</div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Candidate;
