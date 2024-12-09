import {
  facebookLightGrayIcon,
  instaLightGrayIcon,
  linkedinLightGrayIcon,
  twitterLightGrayIcon,
  websiteLightGrayIcon,
} from "../../../../assets/blogs";
import LeftSideDetail from "./LeftSideDetails";
import RightSideDetails from "./RightSideDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { getBlogByIdApi } from "../../../../services/api/Blogs";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getBlogById = useSelector((state: RootState) => state.getBlogById);
  useEffect(() => {
    if (id) {
      getBlogByIdApi(dispatch, Number(id));
    }
  }, [id]);

  const blogsArray = getBlogById?.data?.data;

  const blogsSocialArray = [
    { icon: websiteLightGrayIcon, link: "" },
    { icon: facebookLightGrayIcon, link: "" },
    { icon: instaLightGrayIcon, link: "" },
    { icon: linkedinLightGrayIcon, link: "" },
    { icon: twitterLightGrayIcon, link: "" },
  ];

  return (
    <div className="p-8 pl-24 max-w-[1836px] w-full h-full">
      <div className="h-full flex  gap-[22px] w-full  ">
        <div className="h-full w-full flex flex-col">
          <LeftSideDetail
            blogsSocialArray={blogsSocialArray}
            blogsArray={blogsArray}
          />
        </div>
        {/* commented for future changes */}
        {/* <div className="h-[initial] sm:w-full lg:w-[30%] relative  flex ">
          <div className="sticky top-3 h-max w-full ">
            <RightSideDetails blogsArray={blogsArray} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Details;
