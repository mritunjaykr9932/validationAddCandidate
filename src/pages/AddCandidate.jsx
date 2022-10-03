import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./add.css";

// const getLocalItems = () => {
//   let list = localStorage.getItem("lists");
//   console.log("lists", list);

//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };
function AddCandidate() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const navigate = () => {
    navigation("/");
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("lists"));
    console.log(list);
    if (list) {
      setItems(list);
    }
  }, []);


  return (
    <div className="candidate-main">
      <Header />

      <div className="candidate-container">
        <input
          type="text"
          placeholder="Seach..."
          className="candidate-search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {items
          .filter((elem) => elem.name.firstname.toLowerCase().includes(query))
          .map((elem) => {
            return (
              <div className="candidate-card" key={elem.id}>
                <div className="candidate-header">
                  <div className="sub-header-name">
                    <p className="fullname">
                      {elem.name.firstname} {elem.name.lastname}
                    </p>
                  </div>
                  <div className="candidate-id">
                    <p className="pId">{elem.id}</p>
                  </div>
                </div>
                <div className="candidate-body">
                  <div className="candidate-email">
                    <label>Email ID</label>
                    <p>{elem.name.email}</p>
                  </div>
                  <div className="candidate-phone">
                    <label>Phone No.</label>
                    <p>{elem.name.phone}</p>
                  </div>
                  <div className="candidate-notice">
                    <label>Notice Period</label>
                    <p>{elem.name.notice}</p>
                  </div>
                  <div className="candidate-company">
                    <label>Current Company</label>
                    <p>{elem.name.currentCompany}</p>
                  </div>
                  <div className="candidate-currentType">
                    <label>Currency Type</label>
                    <p>{elem.name.currencyType}</p>
                  </div>
                  <div className="candidate-currentCTC">
                    <label>Current CTC</label>
                    <p>{elem.name.currentCTC} </p>
                  </div>
                  <div className="candidate-expectedCTC">
                    <label>Expected CTC</label>
                    <p>{elem.name.expectedCTC} </p>
                  </div>
                </div>
                <div className="candidate-resume">
                  <label>Candidate Resume</label>
                  <h3>{elem.name.file.path}</h3>
                </div>
              </div>
            );
          })}
      </div>
      <div className="candidate-footer">
        <div className="candidate-button">
          <button onClick={navigate}>Add more Candidate</button>
        </div>
      </div>
    </div>
  );
}

export default AddCandidate;
