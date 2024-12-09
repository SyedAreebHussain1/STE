import React from "react";
import { useState } from "react";
import crmcontact from "../../images/crmcontact.png";

const ContactUsLeftBtn = ({ setShow, show }) => {
  // console.log(setShow, '<=ContactUsLeftBtn=>', show)
  const [contactUs, setContactUs] = useState("Contact Us");
  function handleModal() {
    setShow(true);
  }
  const css = {
    headDiv: {
      position: "fixed",
      bottom: "30%",
      height: "auto",
      zIndex: "99",
      right: "0",
      textAlign: "center",
      cursor: "pointer",
    },
    secondDiv: {
      wordWrap: "break-word",
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      transform: "rotate(180deg)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  };
  return (
    <>
      <div style={css.headDiv} onClick={handleModal}>
        <div style={css.secondDiv}>
          <div>
            <img width='40px' height='40px' src={crmcontact} />
          </div>
          <div>
            <p
              style={{
                letterSpacing: "2px",
                fontWeight: "bold",
                color: "#ff8b28",
              }}
            >
              {contactUs}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsLeftBtn;
