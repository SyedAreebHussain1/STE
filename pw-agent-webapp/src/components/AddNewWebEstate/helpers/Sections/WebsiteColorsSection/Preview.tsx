import { Form } from "antd";
import React from "react";
import webpicture from "../../../../../assets/webpicture.png";

type Props = { form: any };

const Preview = (props: Props) => {
  const fontColor = Form.useWatch("fontColor", props.form);
  const primaryColor = Form.useWatch("primaryColor", props.form);

  return (
    <div>
      
      <div
        style={{
          border: "2px solid rgb(208 213 221)",
          width: "100%",
          borderRadius: "1rem",
          marginTop: ".5rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "15%",
            display: "flex",
            justifyContent: "space-between",
            background: primaryColor,
            color: fontColor,
            alignItems: "center",
            padding: "0 2%",
          }}
        >
          <div style={{ width: "80px", textAlign: "center" }}>Logo</div>
          <div
            className="flex items-center gap-[.65rem] font-[300] text-[.4rem]"
            style={{
              fontFamily: "Poppins",
            }}
          >
            <h3>Inventories</h3>
            <h3>Meet Our Team</h3>
            <h3>Contact Us</h3>
            <h3>About us</h3>
          </div>
          <div
            className="flex justify-center items-center text-[.45rem] tracking-tighter font-sm p-1 m-1 bg-white rounded-md w-min"
            style={{
              fontFamily: "Poppins",
            }}
          >
            Book an Appointment
          </div>
        </div>

        <div className="w-full">
          <img src={webpicture} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};



export default Preview;
