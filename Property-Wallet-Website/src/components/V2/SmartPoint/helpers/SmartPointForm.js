import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import postSmartPoint from "../../../../store/action/smartPointForm";
import AlertMessage from "../../../V2/AlertMessage";

import contactIcon from "../../../images/spcontatcicon.png";

const SmartPointForm = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  var validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numValidation = /^\d{11}$/;
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
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
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
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
        fullName: "",
        phone: "",
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
    e.preventDefault();
    if (
      body.fullName !== "" &&
      body.phone !== "" &&
      body.email !== "" &&
      body.subject !== "" &&
      body.message !== ""
    ) {
      if (validation.test(body.email) && numValidation.test(body.phone)) {
        dispatch(postSmartPoint(body, onSuccuess, onFailur));
        setisLoading(true);
      } else {
        setShow(true);
        setMessage({
          error: {
            msg: !validation.test(body.email)
              ? "You have entered an invalid email address!"
              : ""
              ? numValidation.test(body.phone)
              : "Please Enter valid Phone Number",
            colorAlert: "danger",
          },
        });
      }
    } else {
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
    <>
      <section className="wrapper  bottomspace topspace" data-aos="fade-up">
        <div className="container bg-edf2fc" style={{ borderRadius: "10px" }}>
          <div className="row" style={{ padding: "20px" }}>
            <div className="col-md-6" style={{ marginTop: "60px" }}>
              <div style={{ marginBottom: "2rem" }}>
                <img
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  src={contactIcon}
                  alt=""
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <h2
                  className="display-4 mb-3 pe-lg-10"
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#343f52",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.5rem",
                  }}
                >
                  Let's Make Your Business Dream a Reality!
                </h2>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <p
                  className=" "
                  style={{
                    display: "block",
                    marginBlockStart: "1em",
                    fontSize: "18px",
                    marginBlockEnd: "1em",
                    marginInlineStart: "0px",
                    marginInlineEnd: "0px",
                  }}
                >
                  Are you ready to embark on your entrepreneurial journey?
                  Property Waller is here to help you take the first step
                  towards starting your own business.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <form
                id="contact-form"
                // action={publicUrl + "mail.php"}
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        value={body?.fullName}
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        onChange={(event) =>
                          setBody({ ...body, fullName: event.target.value })
                        }
                        // onChange={(e) => {
                        //   let val = e.target.value;
                        //   val = val.replace(/[^A-Za-z ]/gi, "");
                        //   setBody({ ...body, name: val });
                        // }}
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
                        value={body?.phone}
                        type="text"
                        name="phone"
                        maxLength="15"
                        onChange={(event) =>
                          setBody({ ...body, phone: event.target.value })
                        }
                        // onChange={(e) => {
                        //   var xxx = xxx.replace(/[^0-9,.]+/g, "")
                        //   let valNum = e.target.value;
                        //     valNum = valNum.replace(/[^0-9,.]+/g, "");
                        //     setBody({ ...body, phoneNo: valNum });
                        // }}
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
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase btnLearnmore"
                    type="submit"
                    onClick={userDataSubmit}
                  >
                    Submit
                  </button>
                </div>
                <p className="form-messege mb-0 mt-20" />
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SmartPointForm;
