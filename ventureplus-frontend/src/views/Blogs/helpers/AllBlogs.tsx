import React, { useEffect, useState } from "react";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { Col, Row } from "antd";
import { arrow } from "../../../assets/blogs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsCategoryApi } from "../../../services/api/Blogs/getBlogsCategory";
import { getAllBlogsApi } from "../../../services/api/Blogs";
import { RootState } from "../../../redux/store";
import moment from "moment";

const AllBlogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  const blogsCategory = useSelector(
    (state: RootState) => state?.getAllBlogsCategory
  );
  const blogs = useSelector((state: RootState) => state.getAllBlogs);

  useEffect(() => {
    getBlogsCategoryApi(dispatch);
  }, []);

  useEffect(() => {
    getAllBlogsApi(dispatch, { ...pageLimit });
  }, [pageLimit]);

  return (
    <React.Fragment>
      <PageContainer>
        <div>
          <Row gutter={[20, 16]}>
            <Col span={24}>
              <div className="flex flex-col w-full items-center gap-5 mb-[10px]">
                <div className="flex gap-3">
                  {blogsCategory?.data?.data
                    ?.slice(0, 5)
                    .map((item: any, key: number) => (
                      <button
                        key={key + 10}
                        onClick={() => navigate(`/allblogs/${item?.id}`)}
                        className="bg-[#016a700d] text-[#016A70] rounded-full px-[20px] py-[10px] text-[18px] font-medium"
                      >
                        {item?.title}
                      </button>
                    ))}
                </div>
                <div className="flex gap-3">
                  {blogsCategory?.data?.data
                    ?.slice(5, blogsCategory?.data?.data?.length)
                    .map((item: any, key: number) => (
                      <button
                        key={key + 40}
                        onClick={() => navigate(`/allblogs/${item?.id}`)}
                        className="bg-[#016a700d] text-[#016A70] rounded-full px-[20px] py-[10px] text-[18px] font-medium"
                      >
                        {item?.title}
                      </button>
                    ))}
                </div>
              </div>
            </Col>
            {blogs?.data?.data?.items?.map((blog: any, index: number) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <div
                  className=" rounded-lg  transition-shadow duration-300"
                  onClick={() => navigate(`/blogs-details/${blog?.id}`)}
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      alt={blog.title}
                      src={blog?.blogPictures[0]?.url}
                      className="w-full h-[330px] object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex justify-between h-[25px]">
                      <div className="flex gap-0">
                        <p className=" text-[#667085] text-[12px] font-medium">
                          {blog?.author} &bull;{" "}
                          {moment(blog?.createdAt).format("MMMM Do YYYY")}
                        </p>
                      </div>
                      <div>
                        <img src={arrow} alt="arrow" />
                      </div>
                    </div>
                    <h3 className="font-medium text-[18px]">{blog.title}</h3>
                    <p className="text-[12px] text-[#4A5366] font-medium line-clamp-2">
                      {blog.blog}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </PageContainer>
    </React.Fragment>
  );
};

export default AllBlogs;
