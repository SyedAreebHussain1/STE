import { Col, Row } from "antd";
import { arrow } from "../../../../assets/blogs";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../../redux/store";
import { getBlogsCategoryApi } from "../../../../services/api/Blogs/getBlogsCategory";
import { getAllBlogsApi } from "../../../../services/api/Blogs";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ReadOtherBlogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <PageContainer>
      <div className="mt-[20px]">
        <h1 className="mb-[20px] text-[29px] text-[#040615] font-semibold">
          Read Other Blogs
        </h1>
        <Row gutter={[20, 16]}>
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
  );
};
export default ReadOtherBlogs;
