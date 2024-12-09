import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "../V2/AlertMessage";
import { postContact } from "../../store/action/contactUsAction";
import '../V2/styleareeb.css'

const ContactForm = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  var validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numValidation = /^\d{11}$/;
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false)
  const [show, setShow] = useState(false);

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
  const [body, setBody] = useState({
    name: '',
    phoneNo: '',
    email: '',
    subject: '',
    message: ''
  })
  const state = useSelector((state) => state.contact_us);

  const onSuccuess = (success) => {
    if (success?.message) {
      setShow(true);
      setMessage({
        success: {
          colorAlert: "success",
          msg: `Your form has been submitted successfully. Thank you!`,
        },
      });
      setBody({
        name: "",
        phoneNo: "",
        email: "",
        subject: "",
        message: "",
      });
      setisLoading(false);
    }
  };

  const onFailur = (fail) => {
    if (fail) {
      setMessage({
        error: {
          msg: `Sorry!, ${fail?.message}, error`,
          colorAlert: "danger",
        },
      });
      setShow(true);
      setisLoading(false);
    }
    setisLoading(false);
  };
  const userDataSubmit = (e) => {
    // console.log(body)
    e.preventDefault();
    if (
      body.name !== "" &&
      body.phoneNo !== "" &&
      body.email !== "" &&
      body.subject !== "" &&
      body.message !== ""
    ) {
      if (validation.test(body.email) && numValidation.test(body.phoneNo)) {
        dispatch(postContact(body, onSuccuess, onFailur));
        setisLoading(true);
      } else {
        setShow(true);
        setMessage({
          error: {
            msg: !validation.test(body.email)
              ? "You have entered an invalid email address!"
              : ""
              ? numValidation.test(body.phoneNo)
              : "Please Enter valid Phone Number",
            colorAlert: "danger",
          },
        });
      }
    } else {
      // swal("Sorry!", "All fields are required", "error");
      // setMessage({ error: 'Sorry!, All fields are required, error' })
      setisLoading(false);
      setShow(true);

      setMessage({
        error: {
          msg: "Sorry!, All fields are required. Please fill in all the required fields before submitting the form, error",
          colorAlert: "danger",
        },
      });
    }
  };

  return (
    <div
      style={
        props?.title?.trim().length > 0
          ? { marginBottom: "2%" }
          : { marginTop: "-2%" }
      }
      className="ltn__contact-message-area "
      data-aos="fade-up"
    >
      <div className="margin-top-fix-1 container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">
                {props?.title?.trim().length > 0
                  ? props.title
                  : "Have any questions ? Feel free to contact us."}
              </h4>
              <form
                id="contact-form"
                action={publicUrl + "mail.php"}
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        value={body?.name}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        // onChange={(event) => setBody({ ...body, name: event.target.value })}
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
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        value={body.email}
                        type="email"
                        name="email"

                        onChange={(event) => {
                     
                          setBody({ ...body, email: event.target.value });
                        }}
                        placeholder="Enter email address"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        value={body?.phoneNo}
                        type="text"
                        name="phoneNo"
                        maxLength="11"
                        // onChange={(event) => setBody({ ...body, phoneNo: event.target.value })}
                        onChange={(e) => {
                          // var xxx = xxx.replace(/[^0-9,.]+/g, "")
                          let valNum = e.target.value;
                          valNum = valNum.replace(/[^0-9,.]+/g, "");
                          setBody({ ...body, phoneNo: valNum });
                        }}
                        placeholder="Phone"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-subject ltn__custom-icon">
                      <input
                        value={body?.subject}
                        type="text"
                        name="subject"
                        onChange={(event) =>
                          setBody({ ...body, subject: event.target.value })
                        }
                        placeholder="Subject"
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
                      className="btn theme-btn-1 btn-effect-1 text-uppercase btnLearnmore"
                      disabled
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase btnLearnmore"
                      type="submit"
                      onClick={userDataSubmit}  >
                      Submit
                    </button>
                  )}
                </div>
                <p className="form-messege mb-0 mt-20" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
