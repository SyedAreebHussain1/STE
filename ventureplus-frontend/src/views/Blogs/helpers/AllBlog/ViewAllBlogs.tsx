import { Col, Row } from "antd";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import React from "react";
import BlogsCards from "./BlogsCards";
import { Footer } from "../../../dashboard/helpers";
const ViewAllBlobs = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-[#fff]">
        <BlogsCards />
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default ViewAllBlobs;
