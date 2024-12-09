import React from "react";

const JoinOur = () => {
  return (
    <>
      <section
        className="wrapper image-wrapper bg-auto no-overlay bg-image text-center py-14 py-md-16 bg-map imgBg"
        data-image-src="https://sandbox.elemisthemes.com/assets/img/map.png"
        style={{
          marginTop: "5%",
          backgroundImage:
            "url('https://sandbox.elemisthemes.com/assets/img/map.png')",
        }}
      >
        <div className="container py-0 py-md-18">
          <div className="row">
            <div className="col-lg-6 col-xl-5 mx-auto">
              <h2 className="display-4 mb-3 text-center">Join Our Community</h2>
              <p
                className="lead mb-5 px-md-16 px-lg-3"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                We are trusted by over 5000+ clients. Join them by using our
                services and grow your business.
              </p>
              <a href="#" className="btn btn-primary rounded-pill">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinOur;
