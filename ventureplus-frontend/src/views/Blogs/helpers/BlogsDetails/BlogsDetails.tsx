import React from "react";
import { Footer } from "../../../dashboard/helpers";
import Details from "./Details";
import ReadOtherBlogs from "./ReadOtherBlogs";
import HTMLParser from "./HtmlParser";

const BlogsDetails = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-[#fff]">
        <Details />
        <ReadOtherBlogs />
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default BlogsDetails;
