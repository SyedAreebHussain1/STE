import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import logo from "../../components/images/modal/0.2.png";
import { useDispatch, useSelector } from "react-redux";
import { postPopup } from "../../store/action/contactUsAction";
import swal from "sweetalert";
import AlertMessage from "./AlertMessage";
import appleImg from "../images/apple-footer.png";
import googleImg from "../images/google-footer.png";
const ModalPopup = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  var validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [isLoading, setisLoading] = useState(false);
  // const state = useSelector((state) => state.popup_modal);
  const [body, setBody] = useState({
    name: "",
    phoneNo: "+92",
    email: "",
    message: "",
    subject: "",
  });
  const [message, setMessage] = useState({
    error: {
      colorAlert: "",
      msg: "",
    },
    success: {
      colorAlert: "",
      msg: "",
    },
  });
  const handleClose = () => {
    // sessionStorage.setItem("visitor", "true");
    setShow(false);
    // setMessage({
    //   error: {
    //     msg: "",
    //     colorAlert: "",
    //   },
    // });
    // setBody({
    //   name: "",
    //   phoneNo: "+92",
    //   email: "",
    //   message: "",
    // });
  };
  const handleShow = () => setShow(true);

  //   useEffect(() => {
  //     if (
  //       localStorage.getItem("formSubmit") != "true" &&
  //       sessionStorage.getItem("visitor") != "true"
  //     ) {
  //       setTimeout(() => {
  //         handleShow();
  //       }, 5000);
  //     }
  //   }, []);
  const onSuccuess = (success) => {
    if (success.message) {
      handleClose();
      swal(`Your form has been submitted successfully. Thank you!`);
      localStorage.setItem("formSubmit", "true");
      setBody({
        name: "",
        phoneNo: "",
        email: "",
        message: "",
      });
      setisLoading(false);
    }
    setisLoading(false);
  };
  const onFailur = (fail) => {
    if (fail) {
      setShow(true);
      setMessage({
        error: {
          msg: `Sorry!, ${fail?.message}, error`,
          colorAlert: "danger",
        },
      });
      setisLoading(false);
    }
    setisLoading(false);
  };
  const userDataSubmitModal = (e) => {
    e.preventDefault();
    if (
      body.name !== "" &&
      body.phoneNo !== "" &&
      body.email !== "" &&
      body.message !== "" &&
      body.subject !== ""
    ) {
      if (validation.test(body.email)) {
        setisLoading(true);
        dispatch(postPopup(body, onSuccuess, onFailur));
      } else {
        setShow(true);
        setMessage({
          error: {
            msg: "You have entered an invalid email address!",
            colorAlert: "danger",
          },
        });
        setisLoading(false);
      }
      setisLoading(false);
    } else {
      setMessage({
        error: {
          msg: "Sorry!, All fields are required",
          colorAlert: "danger",
        },
      });
      setisLoading(false);
    }
    setisLoading(false);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-head"
        style={{ zIndex: "9999", height: "100vh", fontFamily: "Poppins" }}
      >
        <Modal.Header closeButton style={{ padding: "15px" }}></Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: "40%" }}
                src={require("./mainlogoov3.png")}
                alt="Logo"
              />
              <div
                style={{
                  marginTop: "3%",
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "space-between",
                }}
              >
                <div>
                  <a href="http://bit.ly/400UobD" target="_blank">
                    <img
                      src={appleImg}
                      alt=""
                      style={{
                        width: "180px",
                        height: "65px",
                        marginLeft: "15%",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="http://bit.ly/40cIpYz" target="_blank">
                    <img
                      src={googleImg}
                      alt=""
                      style={{
                        width: "180px",
                        marginLeft: "25%",
                        height: "65px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* <form
              id="contact-form"
              action={publicUrl + "mail.php"}
              method="post"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="input-item input-item-name ltn__custom-icon">
                    <input
                      value={body.name}
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => {
                        let val = e.target.value;
                        val = val.replace(/[^A-Za-z ]/gi, "");
                        setBody({ ...body, name: val });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-item input-item-email ltn__custom-icon">
                    <input
                      value={body.email}
                      type="email"
                      name="email"
                      onChange={(event) =>
                        setBody({ ...body, email: event.target.value })
                      }
                      placeholder="Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="input-item input-item-phone ltn__custom-icon">
                    <input
                      value={body.phoneNo}
                      type="text"
                      name="phoneNo"
                      maxLength="13"
                      onChange={(e) => {
                        let valNum = e.target.value;
                        valNum = valNum.replace(/[^0-9,.+]+/g, "");
                        setBody({ ...body, phoneNo: valNum });
                      }}
                      placeholder="Phone"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-item input-item-subject ltn__custom-icon">
                    <input
                      value={body?.subject}
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      onChange={(event) =>
                        setBody({ ...body, subject: event.target.value })
                      }
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  
                  <div className="input-item input-item-message ltn__custom-icon">
                    <textarea
                      value={body?.message}
                      type="text"
                      name="message"
                      onChange={(event) =>
                        setBody({ ...body, message: event.target.value })
                      }
                      placeholder="Message"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
           
              </div>
              <AlertMessage message={message} show={show} />

              <div className="btn-wrapper mt-0">
                {isLoading ? (
                  <button
                    style={{ color: "white" }}
                    className="btn btn-effect-1 text-uppercase btnLearnmore learnMores"
                    disabled
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    style={{ color: "white" }}
                    className="btn btn-effect-1 text-uppercase btnLearnmore"
                    onClick={userDataSubmitModal}
                  >
                    Submit
                  </button>
                )}
              </div>
              <p className="form-messege mb-0 mt-20" />

              <div style={{ fontWeight: "", fontSize: "1rem" }}>
                {" "}
                Become a Property Wallet Pro
              </div>
            </form> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalPopup;
