import React, { useEffect, useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const SpecialProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos="flip-up"
        style={{ marginTop: "2%" }}
        className="pesharwarow"
      >
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img10} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Education Institutions
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img2} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Hospitals & Clinics
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img4} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Fitness Centers
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img8} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Shopping Malls
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img7} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Restaurants & Cafes
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="flip-up"
        style={{ marginTop: "2%" }}
        className="pesharwarow"
      >
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img1} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Cinemas
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img3} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Community Centers
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img9} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Waterparks
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img6} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Green Areas & Parks
              </div>
            </div>
          </div>
        </div>
        <div className="ameinitesfiveclomn">
          <div className="e-card">
            <div className="e-card-image">
              <img src={img5} alt="Snow" width="100%" />
              <div
                className="e-card-title"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#35363A",
                }}
              >
                Mosques
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecialProject;
