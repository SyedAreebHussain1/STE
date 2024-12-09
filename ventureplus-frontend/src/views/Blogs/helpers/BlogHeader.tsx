import React, { useEffect, useState } from "react";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getAllBlogsApi } from "../../../services/api/Blogs";
import moment from "moment";

const SideCard = ({
  image,
  date,
  byName,
  heading,
  para,
}: {
  image: string;
  date: string;
  byName: string;
  heading: string;
  para: string;
}) => (
  <div>
    <div className="w-full rounded-xl overflow-hidden">
      <img
        alt="Blog Header"
        src={image}
        className="h-[140px] 2xl:h-[170px] w-full"
      />
    </div>
    <div className="pt-[15px]">
      <div className="flex gap-3 items-center">
        <span className="bg-[#F2F4F8] text-[#212838] text-[12px] px-[10px] py-[5px] rounded-full">
          {byName}
        </span>
        <p className="text-[#4A5366] text-[12px] font-medium pl-[10px] border-l-[1px] border-[#EAECF0]">
          {date}
        </p>
      </div>
      <h3 className="font-bold text-[16px] leading-[24px] text-[#1D2939] mt-[5px]">
        {heading}
      </h3>
      <p className="text-[12px] font-medium text-[#4A5366] line-clamp-2">
        {para}
      </p>
    </div>
  </div>
);

const BlogHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  const getAllBlogs = useSelector((state: RootState) => state.getAllBlogs);
  const blogs = getAllBlogs?.data?.data?.items || [];

  useEffect(() => {
    getAllBlogsApi(dispatch, pageLimit);
  }, [dispatch, pageLimit]);

  const renderMainBlog = (blog: any) => (
    <Col
      sm={24}
      md={24}
      lg={18}
      onClick={() => navigate(`/blogs-details/${blog.id}`)}
    >
      <div className="w-full rounded-xl overflow-hidden">
        <img
          alt="Blog Header"
          src={blog?.blogPictures[0]?.url}
          className="h-[380px] 2xl:h-[450px] w-full"
        />
      </div>
      <div className="pt-[15px]">
        <div className="flex gap-3 items-center">
          <span className="bg-[#F2F4F8] text-[12px] text-[#212838] px-[10px] py-[5px] rounded-full">
            Presented By {blog?.author}
          </span>
          <p className="text-[#4A5366] text-[12px] font-medium pl-[10px] border-l-[1px] border-[#EAECF0]">
            {moment(blog?.createdAt).format("MMMM Do YYYY")}
          </p>
        </div>
        <h3 className="font-bold text-[29px] text-[#1D2939] mt-[5px]">
          {blog?.title}
        </h3>
        <p className="text-[18px] font-medium text-[#4A5366] line-clamp-3">
          {blog?.blog}
        </p>
      </div>
    </Col>
  );

  return (
    <PageContainer>
      <div className="p-5">
        <button
          className="cursor-pointer font-medium text-[#4A5366] text-[15px] flex items-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <FaArrowLeftLong />
          Back to home
        </button>
        <h1 className="font-semibold text-[#212838] text-[29px] leading-8 mt-[6px]">
          Blogs
        </h1>
        <p className="text-[#4A5366] text-[18px] font-medium">
          Explore the latest trends, deep dives into UI/UX best practices
        </p>
      </div>

      <Row gutter={20} className="mt-[20px]">
        {blogs.length > 0 && renderMainBlog(blogs[0])}

        <Col sm={24} md={24} lg={6}>
          <div className="flex flex-col gap-5">
            {blogs.slice(1, 3).map((blog: any, index: number) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/blogs-details/${blog.id}`)}
              >
                <SideCard
                  image={
                    blog?.blogPictures[0]?.url ||
                    "https://defaultimage.com/image.jpg"
                  }
                  date={
                    moment(blog?.createdAt).format("MMMM Do YYYY") ||
                    "Unknown Date"
                  }
                  byName={blog?.author || "Unknown Author"}
                  heading={blog?.title || "No Title"}
                  para={blog?.blog || "No description available."}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default BlogHeader;
