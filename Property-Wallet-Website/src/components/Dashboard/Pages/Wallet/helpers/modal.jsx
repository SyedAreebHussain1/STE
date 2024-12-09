// import { Col, Input, Modal, Row, Select } from "antd";
// import React from "react";
// const ModalCard = ({ visible, toggle }) => {
//   //   console.log(open);

//   return (
//     <Modal
//       title="Withdraw Request"
//       visible={visible}
//       onCancel={toggle}
//       footer={null}
//       centered={true}
//       width={800}
//     >
//       <div
//         style={{
//           borderColor: "#F3F3F3",
//           borderWidth: 1,
//           borderStyle: "solid",
//           padding: "25px 16px",
//           borderRadius: "15px",
//         }}
//       >
//         {/* <img src={require("../../../../images/req.png")} /> */}

//         <div style={{ verticalAlign: "middle" }}>
//           <p style={{ fontWeight: "600", fontSize: "15px", margin: "0" }}>
//             Wallet Balance
//           </p>
//         </div>
//         <h5
//           style={{
//             fontWeight: "bold",
//             fontSize: "23.44px",
//             margin: "4px 0 0 0",
//           }}
//         >
//           PKR 300000
//         </h5>
//       </div>
//       <div>
//         <br></br>
//         <h5 style={{ fontSize: "15px", marginBottom: "16px" }}>
//           Account Information
//         </h5>

//         <Row gutter={24} style={{ marginBottom: "24px" }}>
//           <Col span={8}>
//             <p style={{ marginBottom: "6px", fontSize: "16px" }}>Select Bank</p>
//             <div className="modal-Select">
//               <Select
//                 defaultValue="lucy"
//                 bordered={true}
//                 style={{
//                   borderRadius: "10px",
//                   width: "100%",
//                   height: "44px",
//                   marginBottom: "0",
//                 }}
//                 options={[
//                   {
//                     value: "jack",
//                     label: "Jack",
//                   },
//                   {
//                     value: "lucy",
//                     label: "Lucy",
//                   },
//                   {
//                     value: "disabled",
//                     label: "Disabled",
//                   },
//                   {
//                     value: "Yiminghe",
//                     label: "yiminghe",
//                   },
//                 ]}
//               />
//             </div>
//           </Col>
//           <Col span={8}>
//             <p style={{ marginBottom: "6px", fontSize: "16px" }}>Account No</p>
//             <Input
//               style={{ borderRadius: "6px", height: "44px", marginBottom: "0" }}
//               placeholder="Account No"
//             />
//           </Col>
//           <Col span={8}>
//             <p style={{ marginBottom: "6px", fontSize: "16px" }}>
//               Account Title Name
//             </p>
//             <Input
//               style={{ borderRadius: "6px", height: "44px", marginBottom: "0" }}
//               placeholder="Account Title Name"
//             />
//           </Col>
//         </Row>
//         <Row gutter={24} style={{ marginBottom: "36px" }}>
//           <Col span={8}>
//             <p style={{ marginBottom: "6px", fontSize: "16px" }}>CNIC</p>
//             <Input
//               style={{ borderRadius: "6px", height: "44px", marginBottom: "0" }}
//               placeholder="CNIC"
//             />
//           </Col>
//           <Col span={8}>
//             <p style={{ marginBottom: "6px", fontSize: "16px" }}>Phone No</p>
//             <Input
//               style={{ borderRadius: "6px", height: "44px", marginBottom: "0" }}
//               placeholder="Phone No"
//             />
//           </Col>
//           <Col span={8}>
//             <p style={{ marginBottom: "6px", fontSize: "16px" }}>
//               Email <small>(optional)</small>
//             </p>
//             <Input
//               style={{ borderRadius: "6px", height: "44px", marginBottom: "0" }}
//               placeholder="Email"
//             />
//           </Col>
//         </Row>
//       </div>
//       <div style={{ display: "flex", justifyContent: "end" }}>
//         <button
//           style={{
//             padding: "12px 16px",
//             borderRadius: "10px",
//             background: "#27A3A3",
//             color: "white",
//             fontWeight: "600",
//             fontSize: "12px",
//             alignItems: "right",
//           }}
//         >
//           Send Request
//         </button>
//       </div>
//     </Modal>
//   );
// };
// export default ModalCard;
