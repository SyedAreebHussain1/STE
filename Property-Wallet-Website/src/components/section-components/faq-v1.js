import React, { Component } from "react";
import { Link } from "react-router-dom";

function FaqV1({ faqContent }) {
  return (
    <div className="ltn__faq-area mb-100">
      <div className="container">
        <div className="row topspace bottomspace" >
          <div className="col-lg-12" >
            <div className="ltn__faq-inner ltn__faq-inner-2" >
              <div id="accordion_2" >

                {/* card */}
                {faqContent.map((val, i) => {
                  return <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target={"#faq-item-2-" + val.key}
                      aria-expanded="true"
                    >
                      {/* How to use this app? */}
                      {val.question}
                    </h6>
                    <div
                      id={"faq-item-2-" + val.key}
                      className={`collapse  ${val?.key === "2" ? 'show' : ''}`}
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          {val.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                })
                }

                {/* card */}
                {/* <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-3"
                    aria-expanded="false"
                  >
                    Are there any chances of a scam?
                  </h6>
                  <div
                    id="faq-item-2-3"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        You can trust our app with any data and information
                        you provide on our app. Property Wallet guarantees to
                        protect you from scammers and maintain the
                        confidentiality of your data.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* card */}
                {/* <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-4"
                    aria-expanded="false"
                  >
                    For how long can I enjoy the free services?
                  </h6>
                  <div
                    id="faq-item-2-4"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        The Property Wallet app will be offering services free
                        of cost for as long as it is needed by you.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* card */}
                {/* <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-5"
                    aria-expanded="false"
                  >
                    Why should we use Property Wallet for Business Management?
                  </h6>
                  <div
                    id="faq-item-2-5"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        Property Wallet offers you the services that you would
                        need to manage your business operations from home.
                        Here, you will be able to overlook your staff, assign
                        them tasks, manage their commissions, calculate their
                        contribution to your sales and much more. Property
                        Wallet is the easiest and most reliable application to
                        use for all your business tasks.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* card */}
                {/* <div className="card">
                  <h6
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-6"
                    aria-expanded="false"
                  >
                    What steps do I need to take to register on the Property
                    Wallet app and use its services?
                  </h6>
                  <div
                    id="faq-item-2-6"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <p>
                        You may register to use the services of the Property
                        Wallet app by providing the needed details about you
                        and your business.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="need-support text-center mt-70">
                <h2>
                  Please go through our{" "}
                  <Link
                    to=''
                    style={{
                      color: "#27A3A3",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                  and{" "}
                  <Link
                    to=''
                    style={{
                      color: "#27A3A3",
                      fontWeight: "bold",
                    }}
                  >
                    Terms of Service{" "}
                  </Link>
                  for more information about the Property Wallet app. You can
                  also{" "}
                  <Link
                    to=''
                    style={{
                      color: "#27A3A3",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    contact us{" "}
                  </Link>{" "}
                  for more questions.{" "}
                </h2>
                <div className="btn-wrapper mt-5 mb-30 go-top">
                  <Link to="/contact" className="theme-btn-1 btn">
                    Contact Us
                  </Link>
                </div>
                <h3>
                  <i className="fas fa-phone" /> 0331-111-0379
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default FaqV1;
