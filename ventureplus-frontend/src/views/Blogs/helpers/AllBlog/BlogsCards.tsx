import { Col, Row } from "antd";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { arrow } from "../../../../assets/blogs";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import { getAllBlogsApi } from "../../../../services/api/Blogs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import moment from "moment";

const BlogsCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const { id } = useParams();
  const blogs = useSelector((state: RootState) => state.getAllBlogs);

  useEffect(() => {
    if (id) {
      getAllBlogsApi(dispatch, { ...pageLimit }, Number(id));
    }
  }, [pageLimit]);

  return (
    <PageContainer>
      <div className="  w-full">
        <div className=" mb-[40px]">
          <button
            className="cursor-pointer font-medium text-[#4A5366] text-[15px] flex items-center gap-2"
            onClick={() => navigate("/dashboard")}
          >
            <FaArrowLeftLong />
            Back to home
          </button>
          <h1 className="font-semibold text-[#212838] text-[29px] leading-8 mt-[6px]">
            {blogs?.data?.data?.items[0]?.blogCategory?.title}
          </h1>
          <p className="text-[#4A5366] text-[18px] font-medium">
            Explore the latest trends, deep dives into UI/UX best practices
          </p>
        </div>
      </div>
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
    </PageContainer>
  );
};
export default BlogsCards;
