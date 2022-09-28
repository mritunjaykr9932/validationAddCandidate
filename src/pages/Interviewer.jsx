import React from "react";
import "./interview.css";

function Interviewer() {
  return (
    <div className="interview-container">
      <div className="interview-main">
        <div className="interview-card">
          <h4>Recruiter Details</h4>
          <div className="row">
            <div className="col">
              <label>
                Full Name<br></br>
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                placeholder="olivia@untitledui.com"
                // value={JSON.parse(localStorage.getItem("user".firstname))}
                // onChange={handleChange}
              />
            </div>

            <div className="col">
              <label>
                Email <br></br>
              </label>
              <input
                type="email"
                placeholder="olivia@untitledui.com"
                name="email"
                //   value={formValues.email}
                //   onChange={handleChange}
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
                // value={formValues.phone}
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="interview-card">
          <h4>Interviewer Details(1)</h4>
          <div className="row">
            <div className="col">
              <label>
                Job ID<br></br>
              </label>
              <input
                type="text"
                // name="firstname"
                placeholder="olivia@untitledui.com"
                // value={JSON.parse(localStorage.getItem("user".firstname))}
                // onChange={handleChange}
              />
            </div>

            <div className="col">
              <label>
                job title<br></br>
              </label>
              <input
                type="email"
                placeholder="olivia@untitledui.com"
                name="email"
                //   value={formValues.email}
                //   onChange={handleChange}
              />
            </div>

            <div class="col">
              <label>
                Phone Number<br></br>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="0000 000 000"
                // value={formValues.phone}
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="interview-card">
          <h4>Interviewer Details(2)</h4>
          <div className="row">
            <div className="col">
              <label>
                Job ID<br></br>
              </label>
              <input
                type="text"
                // name="firstname"
                placeholder="olivia@untitledui.com"
                // value={JSON.parse(localStorage.getItem("user".firstname))}
                // onChange={handleChange}
              />
            </div>

            <div className="col">
              <label>
                job title<br></br>
              </label>
              <input
                type="email"
                placeholder="olivia@untitledui.com"
                name="email"
                //   value={formValues.email}
                //   onChange={handleChange}
              />
            </div>

            <div class="col">
              <label>
                Phone Number<br></br>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="0000 000 000"
                // value={formValues.phone}
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interviewer;
