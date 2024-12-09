import React, { useEffect, useState } from "react";
import { LeadbyStatusField } from "../../..";
import { Select } from "antd";

type Props = {
  fields: LeadbyStatusField[];
  totalLeadsByStatus: number;
};

const LeadByStatus = ({ fields, totalLeadsByStatus }: Props) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "0.75rem",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#1D2939",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Lead by Status
        </h1>
      </div>

      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#344054",
          }}
        >
          <h2 style={{ fontSize: "0.813rem", fontWeight: "600" }}>Status</h2>
          <span style={{ fontSize: "0.813rem", fontWeight: "500" }}>
            {totalLeadsByStatus}
          </span>
        </div>

        <div
          style={{
            marginTop: "6px",
            width: "100%",
            height: "7px",
            background: "#F2F4F7",
            borderRadius: "5px",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {fields &&
            fields.map((item, i) => (
              <div
                key={i}
                style={{
                  background: item?.color,
                  width: `${
                    (Number(item?.value) /
                      fields?.reduce((a: number, b: any) => a + b.value, 0)) *
                    100
                  }%`,
                  height: "100%",
                }}
              ></div>
            ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto ",
          gap: "2",
        }}
      >
        {fields &&
          fields.map((item) => (
            <div
              key={item?.id}
              style={{
                marginTop: "24px",
              }}
            >
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    overflow: "hidden",
                    background: item?.color,
                    borderRadius: "4px",
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: "0.813rem",
                    color: "#667085",
                    fontWeight: "500",
                  }}
                >
                  {item?.title}
                </h3>
              </div>
              <p
                style={{
                  color: "#344054",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {item?.value}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeadByStatus;
