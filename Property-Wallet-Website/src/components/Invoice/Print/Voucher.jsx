// import React from "react";
// import "./Voucher.css";
// import logo from "./KGC.png";
// import bank from "./png.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
// import check from "./check-solid.svg";
// import numberToText from "number-to-words";
// const Voucher = ({ data }) => {
//   let projectName =
//     data
//       ?.propertyWalletInventoryFinalizeSale
//       ?.propertyWalletInventorySaleQuotation?.propertyWalletInventoryPlot
//       ?.propertyWalletInventory?.propertyWalletProject?.projectName || "-";
//   let cnic = data?.cnic ? data?.cnic?.split("") : [];
//   cnic.splice(5, 0, "-");
//   cnic.splice(13, 0, "-");
//   let d = data?.updatedAt?.split("T")[0];
//   let dateParts = d?.split("-");
//   let year = dateParts[0];
//   let month = dateParts[1];
//   let day = dateParts[2];

//   let formattedDate = day + "-" + month + "-" + year;

//   var date = formattedDate?.split("");
//   let dateArr = [];
//   for (let i = 0; i < date.length; i++) {
//     dateArr.push(date[i]);
//   }

//   return (
//     <div className="rotate ">
//       <div
//         style={{
//           display: "flex",
//           border: "1px solid black",
//           fontSize: "18px",
//           borderColor: "black",
//           fontFamily: "Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif",
//           color: "rgb(33, 33, 33)",
//           backgroundColor: "white",
//           fontWeight: "500",
//           // marginTop: "-18px",
//         }}
//       >
//         {/* part1 */}
//         <div
//           style={{
//             width: "115mm",
//             border: "1px solid black",
//             overflow: "hidden",
//           }}
//         >
//           <div id="watermark">
//             <div id="watermarkDiv">
//               <h1
//                 id="watermarkH1"
//                 style={{
//                   fontSize: `${
//                     projectName.length > 11
//                       ? 1120 / projectName.length + "px"
//                       : "90px"
//                   }`,
//                 }}
//               >
//                 {projectName}
//               </h1>
//             </div>
//           </div>

//           <div className="regForm-header" style={{ margin: 0, width: "100%" }}>
//             <div className=" img_text1" style={{ width: "25%" }}>
//               <div
//                 style={{
//                   height: "100px",
//                   width: "120px",
//                   position: "relative",
//                   left: "-10px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   objectFit: "cover",
//                 }}
//               >
//                 <img
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: "100%",
//                     objectFit: "contain",
//                   }}
//                   src={
//                     data
//                       ?.propertyWalletInventoryFinalizeSale
//                       ?.propertyWalletInventorySaleQuotation
//                       ?.propertyWalletInventoryPlot?.propertyWalletInventory
//                       ?.propertyWalletProject?.BuilderLogo
//                   }
//                 />
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",

//                 justifyContent: "center",
//                 fontSize: "14px",
//                 height: "90px",
//                 width: "50%",
//                 textAlign: "center",
//                 paddingLeft: "5px",
//               }}
//             >
//               {/* <h2
//                 style={{
//                   textTransform: "uppercase",
//                   fontSize: "18px",
//                   fontWeight: "600",
//                   margin: "0 0 10px 0",
//                 }}
//               >
//                 {
//                   data
//                     ?.propertyWalletInventoryFinalizeSale
//                     ?.propertyWalletInventorySaleQuotation
//                     ?.propertyWalletInventoryPlot?.propertyWalletInventory
//                     ?.propertyWalletProject?.projectName
//                 }{" "}
//               </h2> */}
//               <h5
//                 style={{
//                   border: "1px solid black",
//                   padding: " 8px 10px ",
//                   borderRadius: "18px",
//                   color: "black",
//                   lineHeight: "normal",
//                   display: "flex",
//                   alignItems: "center",
//                   textTransform: "uppercase",
//                   width: "max-content",
//                   margin: "auto",
//                 }}
//               >
//                 CUSTOMER COPY
//               </h5>
//             </div>
//             <div className=" img_text" style={{ width: "25%" }}>
//               <div
//                 style={{
//                   height: "100px",
//                   width: "120px",
//                   display: "flex",
//                   flexWrap: "wrap",
//                   alignItems: "start",
//                   justifyContent: "center",
//                   alignContent: "center",
//                 }}
//               >
//                 <img
//                   src={bank}
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: "100%",
//                     objectFit: "contain",
//                   }}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               color: "#a98332",
//               fontSize: "14px",
//               borderColor: "#a98332",
//             }}
//           >
//             <div style={{ textAlign: "center" }}>
//               <span style={{ textAlign: "center" }}>
//                 {data?.receiptNo !== undefined ? "Receipt No." : "Receipt No."}
//               </span>
//               <span
//                 style={{
//                   borderBottom: "1px solid ",
//                   margin: "0 5px",
//                   width: "80px",
//                   display: "inline-block",
//                 }}
//               >
//                 {data?.receiptNo
//                   ? data?.receiptNo !== null && data?.receiptNo !== ""
//                     ? data?.receiptNo
//                     : "-"
//                   : data?.bankRecieptNo !== null && data?.bankRecieptNo !== ""
//                   ? data?.bankRecieptNo
//                   : "-"}
//               </span>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 height: "25px",
//               }}
//             >
//               <span>Merchandiser Ref. #</span>
//               <span
//                 style={{
//                   borderBottom: "1px solid ",
//                   margin: "0 5px",
//                   width: "80px",
//                 }}
//               >
//                 {" "}
//                 {data?.merchandiserRegNo ? data?.merchandiserRegNo : "-"}
//               </span>
//               <span>License #</span>
//               <span
//                 style={{
//                   borderBottom: "1px solid ",
//                   margin: "0 5px",
//                   width: "80px",
//                 }}
//               >
//                 {data?.merchandiserLicenseNo
//                   ? data?.merchandiserLicenseNo
//                   : "-"}
//               </span>
//             </div>
//           </div>

//           {/*  */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               padding: "0px 20px",
//               marginBottom: "5px",
//               marginTop: "10px",
//             }}
//           >
//             <div style={{ marginTop: "0px", width: "50%" }}>
//               <div
//                 className="sub_header"
//                 style={{ color: "#3e43e7", fontWeight: "500" }}
//               >
//                 <small>Applicant Information.</small>
//               </div>
//             </div>
//             <div>
//               {dateArr &&
//                 dateArr.length > 0 &&
//                 dateArr.map((item, index) => {
//                   if (index !== 2 && index !== 5) {
//                     return (
//                       <span
//                         className="cnic_col1"
//                         style={{ color: "black" }}
//                         key={index}
//                       >
//                         {item}
//                       </span>
//                     );
//                   } else if (index === 2) {
//                     return (
//                       <span
//                         className="cnic_col1 bgcolor-gray"
//                         key={index}
//                         style={{ color: "black" }}
//                       >
//                         -
//                       </span>
//                     );
//                   } else if (index === 5) {
//                     return (
//                       <span
//                         className="cnic_col1 bgcolor-gray"
//                         key={index}
//                         style={{ color: "black" }}
//                       >
//                         -
//                       </span>
//                     );
//                   }
//                 })}
//             </div>
//           </div>
//           <div className="regForm-body">
//             <div
//               className="section_one"
//               style={{
//                 border: "0",
//                 padding: "5px 20px 0px ",
//                 marginTop: "0",
//                 marginBottom: 0,
//               }}
//             >
//               <div>
//                 <div className="flex_margin AgentVouchermb10">
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div className="flex2" style={{ fontSize: "14px" }}>
//                         Name:
//                       </div>
//                       <div className="flex11">
//                         <input
//                           style={{
//                             borderTop: "none",
//                             borderRight: "none",
//                             borderLeft: "none",

//                             borderBottom: "2px solid rgb(118, 118, 118)",

//                             background: "transparent",
//                             width: "100%",
//                             // height: "22px",
//                             fontSize: "16px",
//                             paddingBottom: "5px",
//                           }}
//                           type="text"
//                           value={data?.name ? data?.name : "-"}
//                         />
//                       </div>
//                     </span>
//                   </small>
//                 </div>

//                 <div className="dflex" style={{ marginBottom: "5px" }}>
//                   <small className="flex1">
//                     <span>
//                       <div style={{ fontSize: "14px", color: "black" }}>
//                         CNIC No.:&nbsp;&nbsp;&nbsp;
//                         {cnic &&
//                           cnic.length > 0 &&
//                           cnic.map((item, index) => {
//                             if (index !== 5 && index !== 13) {
//                               return (
//                                 <span
//                                   className="cnic_col1"
//                                   style={{ color: "black" }}
//                                   key={index}
//                                 >
//                                   {item}
//                                 </span>
//                               );
//                             } else if (index === 5) {
//                               return (
//                                 <span
//                                   className="cnic_col1 bgcolor-gray"
//                                   key={index}
//                                   style={{ color: "black" }}
//                                 >
//                                   -
//                                 </span>
//                               );
//                             } else if (index === 13) {
//                               return (
//                                 <span
//                                   className="cnic_col1 bgcolor-gray"
//                                   key={index}
//                                   style={{ color: "black" }}
//                                 >
//                                   -
//                                 </span>
//                               );
//                             }
//                           })}
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//                 <div className="dflex" style={{ marginBottom: "5px" }}>
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div className="flex5" style={{ fontSize: "14px" }}>
//                         Cell/WhatsApp No:
//                       </div>
//                       <div className="flex8">
//                         <input
//                           style={{
//                             borderTop: "none",
//                             borderRight: "none",
//                             borderLeft: "none",

//                             borderBottom: "2px solid rgb(118, 118, 118)",

//                             background: "transparent",
//                             width: "100%",
//                             // height: "22px",
//                             fontSize: "16px",
//                           }}
//                           type="text"
//                           value={data?.whatsappNo ? data?.whatsappNo : "-"}
//                         />
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//                 <div className="dflex AgentVouchermb10">
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div className="flex3" style={{ fontSize: "14px" }}>
//                         {" "}
//                         Email (If available):
//                       </div>
//                       <div className="flex5">
//                         <input
//                           style={{
//                             borderTop: "none",
//                             borderRight: "none",
//                             borderLeft: "none",

//                             borderBottom: "2px solid rgb(118, 118, 118)",

//                             background: "transparent",
//                             width: "100%",
//                             // height: "22px",
//                             fontSize: "16px",
//                             paddingBottom: "5px",
//                           }}
//                           type="text"
//                           value={data?.email ? data?.email : "N/A"}
//                         />
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//                 <div className="dflex AgentVouchermb10">
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div className="flex4" style={{ fontSize: "14px" }}>
//                         {" "}
//                         Amount PKR:{" "}
//                       </div>
//                       <div className="flex12">
//                         <input
//                           style={{
//                             borderTop: "none",
//                             borderRight: "none",
//                             borderLeft: "none",

//                             borderBottom: "2px solid rgb(118, 118, 118)",

//                             background: "transparent",
//                             width: "100%",
//                             // height: "22px",
//                             fontSize: "16px",
//                             paddingBottom: "5px",
//                           }}
//                           type="text"
//                           value={data?.amount ? data?.amount : "-"}
//                         />
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//                 <div className="dflex AgentVouchermb10">
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div
//                         style={{
//                           background: "transparent",
//                           width: "100%",
//                           lineHeight: "35px",
//                           fontSize: "16px",
//                           height: "80px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             display: "inline-block",
//                             borderBottom: "2px solid rgb(118, 118, 118)",
//                             height: "70px",
//                             width: "100%",
//                             position: "relative",
//                           }}
//                         >
//                           <span
//                             style={{
//                               fontSize: "14px",
//                               background: "white",
//                               zIndex: "1",
//                               height: "36px",
//                               paddingRight: "10px",
//                               position: "absolute",
//                             }}
//                           >
//                             Amount in Words:
//                           </span>
//                           {/* this span only for border bottom in line one */}
//                           <span
//                             style={{
//                               width: "100%",
//                               borderBottom: "2px solid rgb(118, 118, 118)",
//                               position: "absolute",
//                               height: "30px",
//                             }}
//                           ></span>
//                           {/* this span only for spacing */}
//                           <span
//                             style={{
//                               width: "135px",
//                               color: "white",
//                               display: "inline-block",
//                             }}
//                           ></span>

//                           <span
//                             style={{
//                               lineHeight: "40px",
//                               position: "relative",
//                               top: "-5px",
//                               textTransform: "capitalize",
//                             }}
//                           >
//                             &nbsp;
//                             {data && data?.amount
//                               ? numberToText.toWords(parseInt(data?.amount))
//                               : "N/A"}
//                           </span>
//                         </div>
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//                 <div className="dflex AgentVouchermb10">
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div className="flex4" style={{ fontSize: "14px" }}>
//                         {" "}
//                         Project Name:{" "}
//                       </div>
//                       <div className="flex12">
//                         <input
//                           style={{
//                             borderTop: "none",
//                             borderRight: "none",
//                             borderLeft: "none",

//                             borderBottom: "2px solid rgb(118, 118, 118)",

//                             background: "transparent",
//                             width: "100%",
//                             // height: "22px",
//                             fontSize: "16px",
//                             paddingBottom: "5px",
//                           }}
//                           type="text"
//                           value={projectName}
//                         />
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//                 <div className="dflex AgentVouchermb10">
//                   <small className="flex1">
//                     <span className="dflex">
//                       <div className="flex4" style={{ fontSize: "14px" }}>
//                         {" "}
//                         Property No.
//                       </div>
//                       <div className="flex12">
//                         <input
//                           style={{
//                             borderTop: "none",
//                             borderRight: "none",
//                             borderLeft: "none",

//                             borderBottom: "2px solid rgb(118, 118, 118)",

//                             background: "transparent",
//                             width: "100%",
//                             // height: "22px",
//                             fontSize: "16px",
//                             paddingBottom: "5px",
//                           }}
//                           type="text"
//                           value={"-"}
//                         />
//                       </div>
//                     </span>
//                   </small>
//                 </div>
//               </div>

//               <div className="dflex AgentVouchermb10">
//                 <div style={{ display: "flex", flexDirection: "row" }}>
//                   {data?.tokenLockInventoryId !== null ? (
//                     <div>
//                       <small className="flex1">
//                         <span className="dflex">
//                           <span
//                             className="cnic_col"
//                             style={{ marginTop: "8px", borderRadius: "5px" }}
//                           >
//                             <img
//                               alt="..."
//                               src={check}
//                               style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 display: "flex",
//                               }}
//                             />
//                           </span>
//                           <div style={{ marginLeft: "7px", fontSize: "14px" }}>
//                             {" "}
//                             Booking (
//                             {data
//                               ?.stepNo !== null
//                               ? data
//                                   ?.stepNo
//                               : ""}{" "}
//                             )
//                           </div>
//                         </span>
//                       </small>
//                     </div>
//                   ) : dataId !==
//                       null ||
//                     data?.propertyWalletProductFinalizeSaleStageId !== null ? (
//                     <div style={{ marginLeft: "10px" }}>
//                       <small className="flex1">
//                         <span className="dflex">
//                           <span
//                             className="cnic_col"
//                             style={{ marginTop: "8px", borderRadius: "5px" }}
//                           >
//                             <img
//                               alt="..."
//                               src={check}
//                               style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 display: "flex",
//                               }}
//                             />
//                           </span>
//                           <div style={{ marginLeft: "7px", fontSize: "14px" }}>
//                             {" "}
//                             Token (
//                             {data
//                               ?.stepNo !== null
//                               ? data
//                                   ?.stepNo
//                               : ""}{" "}
//                             )
//                           </div>
//                         </span>
//                       </small>
//                     </div>
//                   ) : null}

//                   <div
//                     style={{
//                       backgroundColor: "lightgray",
//                       borderRadius: "5px",
//                       width: "max-content",
//                       marginRight: "12px",
//                       marginLeft: "10px",
//                       padding: "0 10px",
//                     }}
//                   >
//                     <small className="flex1">
//                       <span
//                         className="dflex"
//                         style={{ justifyContent: "center" }}
//                       >
//                         <span
//                           className="cnic_col"
//                           style={{ marginTop: "8px", borderRadius: "5px" }}
//                         >
//                           <img
//                             alt="..."
//                             src={check}
//                             style={{
//                               width: "100%",
//                               height: "100%",
//                               display: "flex",
//                             }}
//                           />
//                         </span>
//                         <div style={{ marginLeft: "7px", fontSize: "14px" }}>
//                           {
//                             data
//                               ?.propertyWalletInventoryFinalizeSale
//                               ?.propertyWalletInventorySaleQuotation
//                               ?.propertyWalletInventoryPlot
//                               ?.propertyWalletInventory?.landSize
//                           }{" "}
//                           &nbsp;
//                           {
//                             data
//                               ?.propertyWalletInventoryFinalizeSale
//                               ?.propertyWalletInventorySaleQuotation
//                               ?.propertyWalletInventoryPlot
//                               ?.propertyWalletInventory?.landArea?.title
//                           }
//                         </div>
//                       </span>
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 backgroundColor: "lightgray",
//                 padding: "10px 10px",
//                 borderRadius: "5px",
//                 width: "max-content",
//                 margin: "0 20px",
//                 marginBottom: "3px",
//                 marginTop: "3px",
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "14px",
//                   margin: "0",
//                   lineHeight: "initial",
//                 }}
//               >
//                 DEPOSITED BY:
//               </h2>
//             </div>
//             <div style={{ margin: "10px 20px", position: "relative" }}>
//               <span
//                 class="stamp is-paid  "
//                 style={{ position: "absolute", right: "30px" }}
//               >
//                 {data?.status && data?.status === "Approved" ? "PAID" : "PAID"}
//               </span>
//               <div className="dflex " style={{ marginBottom: "5px" }}>
//                 <small className="flex1">
//                   <span className="dflex">
//                     <div className="flex2" style={{ fontSize: "14px" }}>
//                       {" "}
//                       Name:
//                     </div>
//                     <div className="flex13">
//                       <input
//                         style={{
//                           borderTop: "none",
//                           borderRight: "none",
//                           borderLeft: "none",
//                           borderBottom: "2px solid rgb(118, 118, 118)",

//                           background: "transparent",
//                           width: "100%",
//                           // height: "22px",
//                           fontSize: "16px",
//                           paddingBottom: "5px",
//                         }}
//                         type="text"
//                         value={""}
//                       />
//                     </div>
//                   </span>
//                 </small>
//               </div>
//               <div className="dflex " style={{ marginBottom: "5px" }}>
//                 <small className="flex1">
//                   <span className="dflex">
//                     <div className="flex4" style={{ fontSize: "14px" }}>
//                       {" "}
//                       Cell Number:
//                     </div>
//                     <div className="flex12">
//                       <input
//                         style={{
//                           borderTop: "none",
//                           borderRight: "none",
//                           borderLeft: "none",
//                           borderBottom: "2px solid rgb(118, 118, 118)",

//                           background: "transparent",
//                           width: "100%",
//                           // height: "22px",
//                           fontSize: "16px",
//                           paddingBottom: "5px",
//                         }}
//                         type="text"
//                         value=""
//                       />
//                     </div>
//                   </span>
//                 </small>
//               </div>
//             </div>

//             <div
//               className="flex_margin text_al_center"
//               style={{
//                 fontSize: "16px",
//                 padding: "0px 20px",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div className=" text_al_center" style={{ width: "45%" }}>
//                 <div
//                   style={{
//                     height: "60px",
//                     border: "1px solid black",
//                     color: "lightgray",
//                     lineHeight: "20px",
//                     textAlign: "left",
//                   }}
//                 >
//                   <small style={{ marginLeft: "5px" }}>Signature</small>
//                 </div>
//                 <div
//                   style={{
//                     width: "100%",
//                   }}
//                 >
//                   <small>DEPOSITOR SIGN</small>
//                 </div>
//               </div>
//               <div style={{ width: "45%" }}>
//                 <div
//                   style={{
//                     height: "60px",
//                     width: "100%",
//                     borderBottom: "1px solid black",
//                   }}
//                 ></div>
//                 <div style={{ textAlign: "center" }}>
//                   <small>BANK STAMP & SIGN</small>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="flex_margin"
//               style={{
//                 margin: "0 15px",
//                 fontSize: "16px",
//                 marginTop: "8px",
//                 border: "1px solid black",
//                 color: "red",
//                 padding: "4px 4px",
//               }}
//             >
//               <small
//                 className="flex1"
//                 style={{ fontSize: "9.5px", lineHeight: "14px" }}
//               >
//                 <div>
//                   {/* <strong> */}* THIS RECEIPT HAS TO BE PRESENTED AS PROOF OF
//                   PAYMENT
//                   {/* </strong> */}
//                 </div>
//                 <div>
//                   {/* <strong> */}* FOR MORE DETAILS VISIT OUR WEBSITE OR
//                   CONTACT OUR HELPLINE
//                   {/* </strong> */}
//                 </div>
//               </small>
//             </div>
//             <div
//               className="dflex"
//               style={{
//                 marginLeft: "10px",
//                 fontSize: "16px",
//                 marginTop: "0px",
//                 marginBottom: "5px",
//                 width: "95%",
//                 justifyContent: "space-around",
//                 color: "blue",
//               }}
//             >
//               <div>
//                 <span>
//                   <FontAwesomeIcon icon={faGlobe} />
//                 </span>
//                 <span>
//                   <small style={{ paddingLeft: "5px" }}>
//                     {
//                       data
//                         ?.propertyWalletInventoryFinalizeSale
//                         ?.propertyWalletInventorySaleQuotation
//                         ?.propertyWalletInventoryPlot?.propertyWalletInventory
//                         ?.propertyWalletProject?.websiteLink
//                     }
//                   </small>
//                 </span>
//               </div>
//               <div style={{ display: "flex" }}>
//                 <span>
//                   <FontAwesomeIcon icon={faPhone} />
//                 </span>
//                 <span>
//                   <small>
//                     {" "}
//                     {
//                       data
//                         ?.propertyWalletInventoryFinalizeSale
//                         ?.propertyWalletInventorySaleQuotation
//                         ?.propertyWalletInventoryPlot?.propertyWalletInventory
//                         ?.propertyWalletProject?.phoneNo
//                     }
//                   </small>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* part 2 */}

//         {/* part3 */}
//       </div>
//     </div>
//   );
// };

// export default Voucher;
import React from "react";
import "./Voucher.css";
import logo from "./KGC.png";
import pw from "./png.png";
import logo12 from "./logo12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import check from "./check-solid.svg";
import numberToText from "number-to-words";

const Voucher = ({ printData }) => {
  const invoiceData = printData;
  const data = printData?.voucherData;

  let projectName = invoiceData?.projectName
    ? invoiceData?.projectName
    : data?.propertyWalletInventoryFinalizeSale
        ?.propertyWalletInventorySaleQuotation?.propertyWalletInventoryPlot
        ?.propertyWalletInventory?.propertyWalletProject?.projectName || "-";
  let cnic = data?.propertyWalletInventoryFinalizeSale?.cnic
    ? data?.propertyWalletInventoryFinalizeSale?.cnic
    : data?.cnic;
  let date = invoiceData?.IssueDate
    ? invoiceData?.IssueDate
    : data?.updatedAt?.split("T")[0];

  // Convert the input date string to a Date object
  const inputDate = new Date(date);

  // Add 15 days to the input date
  inputDate.setDate(inputDate.getDate() + 15);

  // Get the year, month, and day from the updated Date object
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  // Format the result as a string in the format "YYYY-MM-DD"
  const nextPayDate = `${year}-${month}-${day}`;
  console.log("printData", printData);
  return (
    <div
      style={{
        padding: "0 10px 0 40px",
        fontFamily: "sans-serif",
        marginTop: "20px",
      }}
    >
      {/* header/ */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* logo 1 */}
        <div
          style={{
            height: "100px",
            width: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            objectFit: "cover",
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            src={
              data?.propertyWalletInventoryFinalizeSale
                ?.propertyWalletInventorySaleQuotation
                ?.propertyWalletInventoryPlot?.propertyWalletInventory
                ?.propertyWalletProject?.BuilderLogo
            }
          />
        </div>
        {/* logo 1 end */}
        <div
          style={{
            alignSelf: "center",
            margin: "0 0 10px 0",
          }}
        >
          <h1
            style={{
              margin: 0,
              textTransform: "uppercase",
              color: "#B99957",
              textAlign: "center",
              marginBottom: "5px",
            }}
          >
            {
              data?.propertyWalletInventoryFinalizeSale
                ?.propertyWalletInventorySaleQuotation
                ?.propertyWalletInventoryPlot?.propertyWalletInventory
                ?.propertyWalletProject?.projectName
            }
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-around",
              justifyContent: "center",
            }}
          >
            {/* Link */}
            <div>
              <span>
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span>
                <small style={{ paddingLeft: "5px" }}>
                  {
                    data?.propertyWalletInventoryFinalizeSale
                      ?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.propertyWalletProject?.websiteLink
                  }
                </small>
              </span>
            </div>
            {/* link end */}
            {/* phone */}
            <div style={{ textWrap: "nowrap", paddingLeft: "5px" }}>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>
                <small>
                  {" "}
                  {
                    data?.propertyWalletInventoryFinalizeSale
                      ?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.propertyWalletProject?.phoneNo
                  }
                </small>
              </span>
            </div>
            {/* phone end */}
          </div>
        </div>
        {/* logo 2 */}
        <div
          style={{
            height: "100px",
            width: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            objectFit: "cover",
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            src={pw}
          />
        </div>
        {/* logo 2 end */}
      </div>

      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 0 20px 0",
          }}
        >
          <tr style={{ width: "100%" }}>
            {" "}
            <td
              style={{
                background: "#caebfc ",
                color: "black",
                textTransform: "uppercase",
                fontSize: "19px",
                fontWeight: "600",
                padding: "3px 0 3px 30px",
              }}
            >
              1bill Invoiceid:{" "}
              {data?.blinqInvoice?.oneBillID
                ? data?.blinqInvoice?.oneBillID
                : "-"}
            </td>
            <td
              style={{
                background: "#27a3a3",
                color: "white",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
                paddingLeft: "20px",
                textTransform: "capitalize",
                verticalAlign: "middle",
              }}
            >
              Receipt no.{" "}
              {data?.blinqInvoice
                ? data?.blinqInvoice?.blinqReciptNo !== null &&
                  data?.blinqInvoice?.blinqReciptNo !== ""
                  ? data?.blinqInvoice?.blinqReciptNo
                  : "-"
                : data?.receiptNo !== null && data?.receiptNo !== ""
                ? data?.receiptNo
                : "-"}
            </td>
            <td
              style={{
                background: "#5e5f5f",
                color: "white",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "center",
                textTransform: "capitalize",
                verticalAlign: "middle",
              }}
            >
              Client Copy
            </td>
          </tr>
        </table>
      </div>
      {/* 1bill heading  end*/}
      {/* Date issue */}
      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 0 20px 0",
          }}
        >
          <tr style={{ width: "100%" }}>
            {" "}
            <td
              colspan="1"
              style={{
                color: "black",
                fontSize: "17px",
                fontWeight: "600",
                textAlign: "center",
                padding: "3px 0",
                border: "1px solid black",
              }}
            >
              Date of Issuance: {date}
            </td>
            <td
              colspan="1"
              style={{
                color: "black",
                fontSize: "17px",
                fontWeight: "600",
                textAlign: "center",
                padding: "3px 0",
                border: "1px solid black",
              }}
            >
              Expiry Date: 00/00/0000
            </td>
            <td
              colspan="1"
              style={{
                color: "black",
                fontSize: "17px",
                fontWeight: "600",
                textAlign: "center",
                padding: "3px 0",
                border: "1px solid black",
              }}
            >
              Next payment Date: {nextPayDate}
            </td>
          </tr>
        </table>
      </div>
      {/* Date issue end */}
      {/* pW heading */}
      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 0 20px 0",
          }}
        >
          <tr style={{ width: "100%" }}>
            {" "}
            <td
              style={{
                background: "#caebfc ",
                color: "black",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
                padding: "5px 0",
                textAlign: "center",
              }}
            >
              Ref No:{" "}
              {data?.propertyWalletInventoryFinalizeSale
                ?.propertyWalletInventorySaleQuotation?.formNo
                ? data?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventorySaleQuotation?.formNo
                : "-"}
            </td>
            <td
              style={{
                background: "#27a3a3",
                color: "white",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
                textTransform: "capitalize",
                verticalAlign: "middle",
                textAlign: "center",
              }}
            >
              Reg. No.{" "}
              {invoiceData?.merchandiserRegistrationNo
                ? invoiceData?.merchandiserRegistrationNo
                : "-"}
            </td>
            <td
              style={{
                background: "#5e5f5f",
                color: "white",
                textTransform: "uppercase",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "center",
                textTransform: "capitalize",
                verticalAlign: "middle",
              }}
            >
              License No.{" "}
              {invoiceData?.merchandiserLicenseNo
                ? invoiceData?.merchandiserLicenseNo
                : "-"}
            </td>
          </tr>
        </table>
      </div>
      {/* pW heading  end*/}
      {/* Information */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {/* Application information */}
        <div>
          <h3
            style={{
              background: "#caebfc ",
              padding: "5px 4px",
              margin: "0 0 10px 0",
            }}
          >
            Application Information:
          </h3>
          <table style={{ borderCollapse: "collapse" }}>
            <tr>
              <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
                Name:
              </td>
              <td style={{ padding: "5px 0", maxWidth: "155px" }}>
                {invoiceData?.name
                  ? invoiceData?.name
                  : data?.name
                  ? data?.name
                  : "-"}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
                CNIC:
              </td>
              <td style={{ padding: "5px 0", maxWidth: "155px" }}>{cnic}</td>
            </tr>
            <tr>
              <td style={{ padding: "5px 10px 5px 0px " }}>Cell/Whatsapp:</td>
              <td style={{ padding: "5px 0", maxWidth: "155px" }}>
                {invoiceData?.phone
                  ? invoiceData?.phone
                  : data?.whatsappNo
                  ? data?.whatsappNo
                  : "-"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "5px 0",
                  verticalAlign: "baseline",
                  // backgroundColor: "red",
                }}
              >
                Email ID:
              </td>
              <td
                style={{
                  padding: "5px 0",
                  maxWidth: "155px",
                  // backgroundColor: "blue",
                  wordBreak: "break-word",
                }}
              >
                {invoiceData?.email
                  ? invoiceData?.email
                  : data?.email
                  ? data?.email
                  : "N/A"}
              </td>
            </tr>
          </table>
        </div>
        {/* Application information end*/}
        {/* Unit Details */}
        <div>
          <h3
            style={{
              background: "#caebfc ",
              padding: "5px 4px",
              margin: "0 0 10px 0",
            }}
          >
            Unit Details:
          </h3>
          <table style={{ borderCollapse: "collapse" }}>
            <tr>
              <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
                Project:
              </td>
              <td style={{ padding: "5px 0", maxWidth: "108px" }}>
                {projectName}
              </td>
            </tr>
            {invoiceData?.block && (
              <tr>
                <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
                  Block No:
                </td>
                <td style={{ padding: "5px 0", maxWidth: "108px" }}>
                  {invoiceData?.block || "-"}
                </td>
              </tr>
            )}

            <tr>
              <td
                style={{
                  padding: "5px 10px 5px 0px",
                  verticalAlign: "baseline",
                }}
              >
                Plot Size:
              </td>
              <td style={{ padding: "5px 20px 5px 0px", maxWidth: "108px" }}>
                {
                  data?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.landSize
                }{" "}
                &nbsp;
                {
                  data?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.landArea?.title
                }
              </td>
            </tr>
            <tr>
              <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
                Plot No:
              </td>
              <td style={{ padding: "5px 0", maxWidth: "108px" }}>
                {" "}
                {invoiceData?.plotNo}
              </td>
            </tr>
          </table>
        </div>
        {/* Unit Details end*/}
        {/* Payment Details */}

        <table style={{ borderCollapse: "collapse" }}>
          <tr>
            <td style={{ padding: "0 30px 0 0" }}>
              <h3
                style={{
                  background: "#caebfc ",
                  padding: "5px 4px",
                  margin: "0 0 10px 0",
                }}
              >
                Payment Details:
              </h3>
            </td>
            <td>Cash/Online</td>
          </tr>
          <tr>
            <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
              {/* Token */}
              {/* {data?.tokenLockInventoryId !== null
                ? "Booking"
                : dataId !== null ||
                  data?.propertyWalletProductFinalizeSaleStageId !== null
                ? "Token"
                : "-"}{" "} */}
              {invoiceData?.dealType === "CASH"
                ? "Cash"
                : invoiceData?.dealType === "DOWNPAYMENT"
                ? `DP - ${data?.stepNo} `
                : invoiceData?.dealType === "TOKEN"
                ? `Token - ${data?.stepNo} `
                : "-"}
            </td>
            <td style={{ verticalAlign: "bottom", textAlign: "center" }}>
              {data?.amount ? data?.amount : "-"}
              <hr style={{ margin: 0 }} />
            </td>
          </tr>
          <tr style={{ visibility: "hidden" }}>
            <td style={{ padding: "5px 20px 5px 0px" }}>
              PW prcsg.&other chg.
            </td>
            <td style={{ verticalAlign: "bottom" }}>
              <hr style={{ margin: 0 }} />
            </td>
          </tr>
          <tr style={{ visibility: "hidden" }}>
            <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
              Late Payment chg.
            </td>
            <td style={{ verticalAlign: "bottom" }}>
              <hr style={{ margin: 0 }} />
            </td>
          </tr>
          {/* <tr style={{ visibility: "hidden" }}>
            <td style={{ padding: "5px 0", verticalAlign: "baseline" }}>
              Expiry Duplicate chg.
            </td>
            <td style={{ verticalAlign: "bottom" }}>
              <hr style={{ margin: 0 }} />
            </td>
          </tr> */}
          <tr style={{ fontSize: "17px" }}>
            <td style={{ padding: "10px 10px 5px 0px" }}>Amount to be Paid</td>
            <td style={{ textAlign: "center" }}>
              {data?.amount ? data?.amount : "-"}
            </td>
          </tr>
        </table>
        {/* Payment Details end*/}
      </div>
      {/* Information end */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          position: "relative",
          marginBottom: "50px",
          height: "90px",
        }}
      >
        <img
          src={logo12}
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            // top: "-72px",
          }}
        />
        {/* <span
          class="stamp is-paid  "
          //  style={{ position: "absolute" }}
        >
          Paid
        </span> */}
      </div>
      {/* <div style={{ width: "100%", padding: " 0 10px 0 20px" }}>
        <div
          style={{
            position: "relative",
            margin: "0 5px ",
            width: "95%",
            height: "0.1px",
            display: "block",
            borderBottom: "2px dashed black",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "-9px",
              left: "-10px",
            }}
          >
            <img
              alt="..."
              src={scissor}
              style={{
                width: "20px",
                height: "20px",
                transform: "rotateZ(-90deg)",
              }}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Voucher;
