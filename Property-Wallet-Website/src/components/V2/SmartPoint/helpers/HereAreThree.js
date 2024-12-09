import React, { useEffect } from "react";
import AOS from "aos";

// icons
import ownershipAuthentication from "../../../images/OwnershipAuthentication.png"
import propertyDocumentation from "../../../images/PropertyDocumentation.png"
import secureTransactions from "../../../images/SecureTransactions.png"

const HereAreThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="topspace bottomspace" >
      <section className="wrapper ">
        <div className="container py-14 py-md-16">
          <div className="row mb-5">
            <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
              <img
                src="https://sandbox.elemisthemes.com/assets/img/icons/lineal/list.svg"
                className="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2
                className="display-4 mb-4 px-lg-14"
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
                Streamlined & Secure Property Transactions
              </h2>
            </div>
          </div>
          <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="card-h me-lg-6">
                <div className="card-body-h p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number"><img src={propertyDocumentation} alt="" /></span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">
                        Seamless Property Documentation with Property Wallet CRM
                      </h4>
                      {/* <p className="mb-0">
                        Seamless Property Documentation with Property Wallet CRM
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-h ms-lg-13 mt-6">
                <div className="card-body-h p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number"><img src={ownershipAuthentication} alt="" /> </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">
                        Property Ownership Authentication with Property Wallet
                        Verification
                      </h4>
                      {/* <p className="mb-0">
                        Property Ownership Authentication with Property Wallet
                        Verification
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-h mx-lg-6 mt-6">
                <div className="card-body-h p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number"><img src={secureTransactions} alt="" /></span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">
                        {" "}
                        Smooth and Secure Transactions through Onelink & Online
                        Pyament Getway
                      </h4>
                      {/* <p className="mb-0">
                        Smooth and Secure Transactions through Onelink & Online
                        Pyament Getway
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Embark on a journey of streamlined and secure property
                transactions, where your peace of mind is our priority. Our
                comprehensive range of services includes the innovative Property
                Wallet CRM, which offers a seamless and efficient solution for
                all your property documentation needs.
              </p>
              <p
                className="mb-6"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Rest assured of property ownership authenticity through our
                trusted Property Wallet Verification process. Elevate your
                experience with our seamless and secure transaction processes,
                made possible through the integration of OneLink and our
                user-friendly online payment gateway. With us, your property
                endeavors are not only simplified but also safeguarded every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HereAreThree;
