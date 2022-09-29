import { useContext, useEffect, useState } from "react";
import { BiEnvelope, BiX } from "react-icons/bi";
import Header from "../components/Header";

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
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [items, setItems] = useState(getLocalItems());
  const [len, setLen] = useState();

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
      console.log("err1", Object.keys(formErrors).length);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setFormValues(initialValues);
    console.log(initialValues);
  };
  const deleteItem = (index) =>{
    const updateditems = items.filter((elem)=>{
      return index != elem.id;
    });
    setItems(updateditems);
  }
  const removeAll = () => {
    setItems([]);
  };
  useEffect(() => {
    console.log(formErrors);
    console.log("err", Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      console.log("err2", Object.keys(formErrors).length);
      const allInputData = {id: new Date().getTime().toString(), name:formValues}
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
    return error;
  };

  return (
    <div className="form">
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
              <DragAndDrop />
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
                          <BiX onClick={()=> deleteItem(elem.id)} />
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

        <Footer headerlen={len} />
      </div>
    </div>
  );
};

export default Dashboard;

// <Footer page={page} setPage={setPage} formtitle={FormTitles} />
