import React, { useEffect } from "react";
import AOS from "aos";
const FourBox = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <div className="topspace bottomspace" >
      <section className="wrapper ">
        <div className="container py-14 py-md-16">
          <h2
            className="display-4 mb-3"
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
            How We Do It?
          </h2>
          <p
            className="mb-8"
            style={{
              display: "block",
              marginBlockStart: "1em",
              fontSize: "18px",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              marginInlineEnd: "0px",
            }}
          >
            We make your spending for you to have the perfect control.
          </p>
          <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
            <div className="col-md-6 col-lg-3 mt-2per">
              {" "}
              <span
                className="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4 mt-2per"
                style={{ backgroundColor: "#e0e9fa" }}
              >
                <span className="number">01</span>
              </span>
              <h4 className="mb-1 fs-20">Exclusive Real Estate Inventory</h4>
              <p
                className="mb-0"
                style={{
                  marginTop: "0",
                  marginBottom: "1rem",
                  display: "block",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  fontSize: "16px",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                We work with top developers and sellers to give you access to
                exclusive listings.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mt-2per">
              {" "}
              <span
                className="icon btn btn-circle btn-lg btn-primary pe-none mb-4 mt-2per"
                style={{ backgroundColor: "#3f78e0" }}
              >
                <span className="number">02</span>
              </span>
              <h4 className="mb-1 fs-20">Marketing Support & Staff Training</h4>
              <p
                className="mb-0"
                style={{
                  marginTop: "0",
                  marginBottom: "1rem",
                  display: "block",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  fontSize: "16px",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                We provide sellers trainings to create effective marketing
                strategies.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mt-2per">
              {" "}
              <span
                className="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4 mt-2per"
                style={{ backgroundColor: "#e0e9fa" }}
              >
                <span className="number">03</span>
              </span>
              <h4 className="mb-1 fs-20">
                Streamlined & Secure Property Transactions
              </h4>
              <p
                className="mb-0"
                style={{
                  marginTop: "0",
                  marginBottom: "1rem",
                  display: "block",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  fontSize: "16px",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Our process is smooth and secure, making buying and selling
                easy.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mt-2per">
              {" "}
              <span
                className="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4 mt-2per"
                style={{ backgroundColor: "#e0e9fa" }}
              >
                <span className="number">04</span>
              </span>
              <h4 className="mb-1 fs-20">Unlock New Income Opportunity</h4>
              <p
                className="mb-0"
                style={{
                  marginTop: "0",
                  marginBottom: "1rem",
                  display: "block",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  fontSize: "16px",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                A fantastic opportunity for merchandisers to earn attractive
                commissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourBox;
