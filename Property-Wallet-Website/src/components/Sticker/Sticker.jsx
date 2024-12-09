import React from "react";
import { Row, Col } from "antd";
import moment from "moment";
const Sticker = ({ componentRefSticker, domEl, sellingPoint, soN }) => {
  return (
    <div
      ref={componentRefSticker}
      style={{ backgroundColor: "#fff", position: "absolute", left: "-120%" }}
    >
      <div
        id="domEl"
        ref={domEl}
        style={{
          backgroundColor: "white",
          width: "377.9px",
          // height: "264.5px",
          padding: "10px",
          fontSize: "12px",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <div>
              <b>Client Ref No. : {sellingPoint?.clientRefNo}</b>
            </div>
            {/* <br /> */}
            <div>
              <b>Project Name : {sellingPoint?.projectName}</b>
            </div>
            {/* <br /> */}

            <div>
              <b>Location : {sellingPoint?.location}</b>
            </div>
            {/* <br /> */}

            <div>
              <b>Client Name : {sellingPoint?.clientName}</b>
            </div>
            {/* <br /> */}

            <div>
              <b>
                Unit Size : {sellingPoint?.plotSize} &nbsp;{" "}
                {sellingPoint?.unitNo}
              </b>
            </div>
            {/* <br /> */}
            <div>
              <b>Unit No. : {sellingPoint?.plotNo || "TBA"}</b>
            </div>

            {/* </div> */}
          </Col>
          {/* <div
          id="domEl2"
          ref={domEl2}
          style={{
            backgroundColor: "white",
            width: "188.98px",
            height: "188.98px",
            padding: "10px",
          }}
        > */}
          <Col span={12}>
            <div>
              <b>Booking Confirmation : {soN}</b>
            </div>
            {/* <br /> */}
            <div>
              <b>Project ID : {sellingPoint?.projectId}</b>
            </div>
            {/* <br /> */}
            <div>
              <b>Client Phone :{sellingPoint?.clientPhone}</b>
            </div>
            {/* <br /> */}

            {/* <div>
                <b>
                  Office Address :{" "}
                  {
                    sellingPoint?.soldPaymentPlan?.project?.createdByUser
                      ?.staffProfile?.agencyAddress
                  }
                </b>
              </div> */}
            {/* <div>
              <b>
                Sub Type : {sellingPoint?.soldPaymentPlan?.subCategory?.title}
              </b>
            </div> */}
            {/* <br /> */}

            <div>
              <b>Type : {sellingPoint?.subType}</b>
            </div>
            {/* <br /> */}
            <div>
              <b>
                Booking Date :{" "}
                {moment(sellingPoint?.bookingDate).format("DD-MM-YYYY")}
              </b>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Sticker;
