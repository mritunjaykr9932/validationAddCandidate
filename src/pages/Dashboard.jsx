import { useCallback, useContext, useEffect, useState } from "react";
import { BiEnvelope, BiX } from "react-icons/bi";
import Header from "../components/Header";
import { useDropzone } from "react-dropzone";
import './footer.css';
import Modal from "./Modal";

import "./dashboard.css";
import DragAndDrop from "./DragAndDrop";
import FileUpload from "./FileUpload";
import Footer from "./Footer";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log("lists", list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Dashboard = (props) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    notice: "",
    currentCompany: "",
    currencyType: "",
    currentCTC: "",
    expectedCTC: "",
    file: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [items, setItems] = useState(getLocalItems());
  const [len, setLen] = useState();
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //  console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && formValues) {
      //  e.preventDefault();
      // console.log("err1", Object.keys(formErrors).length);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setFormValues(initialValues);
    setFormErrors('')
    setIsSubmit(false);
    // console.log(initialValues);
  };
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index != elem.id;
    });
    setItems(updateditems);
  };
  const removeAll = () => {
    setItems([]);
  };
  useEffect(() => {
    console.log(formErrors);
    console.log("err", Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      // console.log("err2", Object.keys(formErrors).length);
      const allInputData = {
        id: new Date().getTime().toString(),
        name: formValues,
      };
      setItems([...items, allInputData]);
      setFormValues(initialValues);
    }
  }, [formErrors]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
    setLen(
      Object.values(JSON.parse(localStorage.getItem("lists"))).flat().length
    );
  }, [items]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFormValues((exisitingValues) => ({
      ...exisitingValues,
      file: acceptedFiles[0],
    }));
  }, []);
  // console.log(acceptedFiles);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "application/pdf": [".pdf"],
        "application/msword": [".DOC", ".DOCX"],
      },
    });

  const validate = (values) => {
    const error = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{10}$/;

    if (!values.firstname) {
      error.firstname = "*first name is required";
    }
    if (!values.lastname) {
      error.lastname = "*last name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!mailformat.test(values.email)) {
      error.email = "*this is not a valid email format";
    }
    if (!values.phone) {
      error.phone = "*phone number is required";
    } else if (!values.phone.match(phoneno)) {
      error.phone = "*phone number is Invalid";
    }
    if (!values.currentCompany) {
      error.currentCompany = "*company name is required";
    }
    if (!values.currentCTC) {
      error.currentCTC = "*current CTC is required";
    }
    if (!values.expectedCTC) {
      error.expectedCTC = "*expected CTC is required";
    }
    if (!values.file) {
      error.file = "* uplaod the file";
    }
    return error;
  };

  return (
    <div className="form">
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="form-container">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <form className="form-dashboard" onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="form-info">
                <span>Add candidate information and Resume here</span>
              </div>
              <div className="form-buttons">
                <button className="reset" onClick={reset}>
                  Reset
                </button>
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
                        onChange={handleChange}
                        value={formValues.firstname}
                      />
                    </div>
                    <p className="error">{formErrors.firstname}</p>
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
                        onChange={handleChange}
                        value={formValues.lastname}
                      />
                    </div>
                    <p className="error">{formErrors.lastname}</p>
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
                        onChange={handleChange}
                        value={formValues.email}
                      />
                    </div>
                    <p className="error">{formErrors.email}</p>
                  </div>

                  <div className="col">
                    <label>
                      Phone No.<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="phone"
                        placeholder="000000 0000"
                        onChange={handleChange}
                        value={formValues.phone}
                      />
                    </div>
                    <p className="error">{formErrors.phone}</p>
                  </div>

                  <div className="col">
                    <label>
                      Notice Period<br></br>
                    </label>
                    <div className="form-input">
                      <select
                        name="notice"
                        onChange={handleChange}
                        value={formValues.notice}
                      >
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
                        onChange={handleChange}
                        value={formValues.currentCompany}
                      />
                    </div>
                    <p className="error">{formErrors.currentCompany}</p>
                  </div>

                  <div className="col">
                    <label>
                      Currency Type<br></br>
                    </label>
                    <div className="form-input-CurType">
                      <select
                        name="currencyType"
                        onChange={handleChange}
                        value={formValues.currencyType}
                      >
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
                        name="currentCTC"
                        placeholder="Eg...38,000"
                        onChange={handleChange}
                        value={formValues.currentCTC}
                      />
                    </div>
                    <p className="error">{formErrors.currentCTC}</p>
                  </div>

                  <div className="col">
                    <label>
                      Expected CTC<br></br>
                    </label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="expectedCTC"
                        placeholder="Eg...50,000"
                        onChange={handleChange}
                        value={formValues.expectedCTC}
                      />
                    </div>
                    <p className="error">{formErrors.expectedCTC}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-file">
              <div className="file-top">
                <p>Uplaod your resume here</p>
              </div>

              <div {...getRootProps()} className="getRoot">
                <input {...getInputProps()} />
                <div className="file-info">
                  {isDragReject ? (
                    <p className="file-warning">
                      please upload PDF,DOC or DOCX only
                    </p>
                  ) : (
                    <>
                      <div className="logo">
                        <svg
                          width="66"
                          height="66"
                          viewBox="0 0 66 66"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="5"
                            y="5"
                            width="56"
                            height="56"
                            rx="28"
                            fill="#D4E7FD"
                          />
                          <g clip-path="url(#clip0_283_24076)">
                            <path
                              d="M37.6667 37.6666L33 32.9999M33 32.9999L28.3333 37.6666M33 32.9999V43.4999M42.7883 40.4549C43.9262 39.8346 44.8252 38.853 45.3432 37.665C45.8612 36.477 45.9689 35.1504 45.6493 33.8944C45.3296 32.6384 44.6008 31.5247 43.5778 30.729C42.5548 29.9332 41.296 29.5008 40 29.4999H38.53C38.1769 28.1341 37.5187 26.866 36.605 25.7911C35.6912 24.7162 34.5457 23.8624 33.2545 23.294C31.9633 22.7255 30.56 22.4572 29.1502 22.5091C27.7403 22.5611 26.3606 22.932 25.1147 23.5939C23.8688 24.2558 22.7892 25.1916 21.9571 26.3308C21.1249 27.47 20.5618 28.7831 20.3102 30.1712C20.0585 31.5594 20.1248 32.9866 20.5041 34.3454C20.8834 35.7043 21.5658 36.9594 22.5 38.0166"
                              stroke="#206DC5"
                              stroke-width="2.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <rect
                            x="5"
                            y="5"
                            width="56"
                            height="56"
                            rx="28"
                            stroke="#EAF3FE"
                            stroke-width="10"
                          />
                          <defs>
                            <clipPath id="clip0_283_24076">
                              <rect
                                width="28"
                                height="28"
                                fill="white"
                                transform="translate(19 19)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="file-click">
                        <p className="drag-color">
                          <span>Click to uplaod</span> or drag and drop
                        </p>
                        <p className="pdf-info">
                          PDF,DOC,DOCX files are allowed
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <p className="file-value">{formValues.file?.name}</p>
              </div>
              <p className="file-error">{formErrors.file}</p>
            </div>
          </form>

          <div className="added-candidate">
            <div className="added-candidate-container">
              <div className="added-candidate-header">
                <div className="added-candidate-h4">
                  <h4>Added Candidate {len}</h4>
                </div>
                <div className="added-candidate-clearall">
                  <button className="clear-all" onClick={removeAll}>
                    Clear All
                  </button>
                </div>
              </div>
              <div className="added-candidate-card">
                {items.map((elem) => {
                  return (
                    <div className="each-item" key={elem.id}>
                      <div className="each-item-header-container">
                        <div className="each-item-header">
                          <h3>
                            {elem.name.firstname} {elem.name.lastname}
                          </h3>
                        </div>
                        <div className="each-item-delete">
                          <BiX onClick={() => deleteItem(elem.id)} />
                        </div>
                      </div>
                      <p className="id">{elem.id}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer">
            <button
              className="footer-button"
              disabled={len === 0}
              onClick={() => {
                setOpenModal(true);
              }}
              id="openModalBtn"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// <Footer page={page} setPage={setPage} formtitle={FormTitles} />
