import React from "react";
import AllBlogs from "./helpers/AllBlogs";
import BlogHeader from "./helpers/BlogHeader";
import { Footer } from "../dashboard/helpers";
import { NavBar } from "../website/helpers/ReusableComponent";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  let location = useLocation();
  const hideWebsiteTopBarPaths = ["/Blogs"];
  const hideWebsiteTopBar = hideWebsiteTopBarPaths.includes(location.pathname);

  return (
    <React.Fragment>
      {!hideWebsiteTopBar && <NavBar />}
      <div className="bg-[#fff] w-full">
        <BlogHeader />
        <AllBlogs />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Blogs;
