import React from "react";
import iPhone from "../../../images/figma/iPhone13Pro.png";
import lineBlue from "../../../images/figma/lineBlue.png";
const Streamlined = () => {
  return (
    // <div className="topspace bottomspace">
    //   <section className="wrapper ">
    //     <div
    //       className="container py-14 py-md-16 gradiant"
    //       style={{ borderRadius: "20px" }}
    //     >
    //       <div
    //         className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center flex-d-c-r"
    //         style={{ paddingTop: "10px", paddingLeft: "10px" }}
    //       >
    //         <div className="col-lg-6 mt-4per">
    //           <div
    //             className="shape bg-line leaf rounded-circle rellax w-17 h-17"
    //             data-rellax-speed="1"
    //             style={{ top: "-2rem", right: "-0.6rem" }}
    //           ></div>
    //           <div
    //             className="shape bg-pale-violet rounded-circle rellax w-17 h-17"
    //             data-rellax-speed="1"
    //             style={{ bottom: "-2rem", left: "-0.4rem" }}
    //           ></div>
    //           <figure
    //             className="rounded mb-0 screen-view"
    //             style={{ paddingTop: "10px" }}
    //           >
    //             <img style={{ width: "50%" }} src={iPhone} alt="" />
    //           </figure>
    //         </div>
    //         <div className="col-lg-6 margin--px">
    //           <div>
    //             <h3
    //               style={{
    //                 color: "#176FEA",
    //                 fontWeight: "700",
    //                 fontSize: "38px",
    //               }}
    //             >
    //               Streamlined Inventory <span style={{ color: "#292D35",
    //                 fontWeight: "700",
    //                 fontSize: "38px",}}>Control:</span>
    //             </h3>{" "}
    //             Add, Customize, Flourish
    //           </div>
    //           <p
    //             className="mb-5"
    //             style={{
    //               display: "block",
    //               marginBlockStart: "1em",
    //               fontSize: "18px",
    //               marginBlockEnd: "1em",
    //               marginInlineStart: "0px",
    //               marginInlineEnd: "0px",
    //             }}
    //           >
    //             On Property Wallet, we're encouraging you to experience a
    //             brand-new era of real estate success. Utilize our powerful
    //             online platform to quickly make significant commissions, list
    //             properties, and connect with ease. Embrace the real estate of
    //             tomorrow today to realize your full company potential.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="topspace bottomspace ml-5 mr-5">
      <div
        className=" gradiant "
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div
          className="block-flex"
          style={{
            gap: "127px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <figure
              className="  screen-view"
              style={{ marginLeft: "174px", marginTop: "35px" }}
            >
              <img style={{ width: "300.63px" }} src={iPhone} alt="" />
            </figure>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  color: "#292D35",
                  fontWeight: "700",
                  fontSize: "38px",
                  position: "relative",
                }}
              >
                <span style={{ color: "#176FEA" }}>Streamlined Inventory </span>
                Control:
                <div
                  style={{
                    position: "absolute",
                    top: "39px",
                    width: "410px",
                  }}
                >
                  <img src={lineBlue} alt="" />
                </div>
              </span>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "38px",
                  color: "#292D35",
                }}
              >
                Add, Customize, Flourish
              </p>
              <div style={{ color: "#3D4350",border:"1px solid red",padding:"5px" }}>
                <p>
                  We have a Property Wallet Inventory module where companies can
                  inventory and sell properties. When a property is sold
                  successfully through our platform, they earn a handsome amount
                  of money. It is an easy and effective way for businesses to
                  manage their property assets and generate revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streamlined;
