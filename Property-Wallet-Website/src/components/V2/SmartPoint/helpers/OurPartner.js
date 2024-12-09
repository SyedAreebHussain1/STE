import React, { useEffect } from "react";
import AOS from "aos";
const OurPartner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <section className="wrapper topspace ">
      <div className="container py-14 py-md-16">
        <h2
          className="text-uppercase text-muted mb-3"
          style={{
            fontSize: "1rem",
            lineHeight: "1.35",
            letterSpacing: ".02rem",
            marginTop: "0.5rem",
            fontWeight: "700",
            color: "#aab0bc",
            wordSpacing: "0.1rem",
          }}
        >
          OUR BANK PARTNERS
        </h2>
        <div className="row gx-lg-8 mb-10 gy-5">
          <div className="col-lg-6">
            <h3
              className="display-5 mb-0"
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
              Seamless Payment Transactions with Our Bank Partners
            </h3>
          </div>
          <div className="col-lg-6">
            <p
              className=""
              style={{
                display: "block",
                marginBlockStart: "1em",
                marginBottom: "1rem",
                fontSize: "18px",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              At Property Wallet, we prioritize your convenience and ensure that
              receiving payments as an agent is as hassle-free as possible.
              That's why we've partnered with a wide network of trusted banks
              and integrated secure online payment gateways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
