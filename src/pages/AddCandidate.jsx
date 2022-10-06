import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import './add.css';
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import PdfModal from "./PdfModal";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log("lists", list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function AddCandidate() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  // const [pdfStore,setPdfStore] = useState(getLocalItems());
  const [open, setNotOpen] = useState(false);

  const navigation = useNavigate();
  const pdfOpen = () => {
    setNotOpen(true)

  };

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

  

  const pdfContentType = "application/pdf";

  const base64toBlob = (data) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr(
      `data:${pdfContentType};base64,`.length
    );

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: pdfContentType });
  };
  

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
        <div className="card-container">
          {items
            .filter((elem) => elem.name.firstname.toLowerCase().includes(query))
            .map((elem) => {
              const url = URL.createObjectURL(base64toBlob(elem.name.fileUrl));
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
                    <br></br>
                    <button className="added-candidate-view" onClick={pdfOpen}>
                      {elem.name.file.path}
                    </button>
                  </div>
                  {open && <PdfModal Url={url} /> }
                  </div>
                  );
                })}
                
                </div>
      </div>
      <div className="candidate-footer">
        <div className="candidate-button">
          <button onClick={navigate}>Add more Candidate</button>
        </div>
      </div>
    </div>
  );
  }
  <script src="/js/pdf.min.js"></script>

export default AddCandidate;
