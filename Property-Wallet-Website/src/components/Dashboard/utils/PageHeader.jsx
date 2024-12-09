import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
const PageHeader = ({ label, setSearch, handleFilter }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "2%",
        marginRight: "2%",
        paddingTop: "2%",
      }}
    >
      <h6>{label}</h6>
      <div style={{ display: "flex" }}>
        <Input
          placeholder="Search"
          style={{
            width: "250px",
            height: 35,
            borderRadius: "8px",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          style={{
            borderColor: "#3D4350",
            backgroundColor: "#3D4350",
            borderRadius: "8px",
            marginLeft: "2%",
            marginTop: "0.5%",
          }}
          icon={<FilterOutlined />}
          key="4"
          type="primary"
          onClick={handleFilter}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};
export default PageHeader;
