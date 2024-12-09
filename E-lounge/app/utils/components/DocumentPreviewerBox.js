import React from "react";
import { CloseOutlined } from "@material-ui/icons";

const DocumentPreviewerBox = ({ fileName, fileSize, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        marginBottom: "3px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          padding: "16px",
          gap: "3px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <img src={require("./../../api/icons/pdfIcon.png")} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <h4 style={{ fontWeight: 600, fontSize: 14, marginBottom: 0 }}>
              {fileName?.length > 25
                ? `${fileName.substring(0, 25)}...`
                : fileName}
            </h4>
            <p style={{ fontSize: 14, color: '#949494' }}>
              {fileSize !== "0 Bytes" ? fileSize : ""}
            </p>
          </div>
          <div  style={{ cursor: 'pointer' }}>
            {onClick && (
              <span className="" onClick={onClick}>
                <CloseOutlined />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreviewerBox;
