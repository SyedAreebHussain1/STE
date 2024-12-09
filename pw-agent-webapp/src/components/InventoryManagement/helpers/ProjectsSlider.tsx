import { useEffect, useState } from "react";
import Slider from "../../../helpers/Slider/Slider";
import SliderItem from "../../../helpers/Slider/SliderItems";
import ProjectCard from "../../ProjectCard";
import { useNavigate } from "react-router-dom";
import { getProjectApi } from "../../../redux/api/InventoryManagement";
import { useDispatch, useSelector } from "react-redux";

const ProjectsSlider = () => {
  const [pageLimit] = useState({ page: 1, limit: 10 });

  const getProjectInventory = useSelector(
    (state: any) => state.getProjectInventory
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProjectApi(dispatch, pageLimit);
  }, []);

  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-subHeadingColor font-medium text-[1.2rem]">
          All Projects
        </h2>
        <button
          className="text-[1.2rem] text-primary font-medium"
          onClick={() => navigate("/inventory-management/projects")}
        >
          View All
        </button>
      </div>
      <div className="mt-[20px]">
        {getProjectInventory?.data?.items?.length > 0 && (
          <Slider gap={30} totalItems={5}>
            {getProjectInventory?.data?.items?.map((item: any, i: any) => (
              <SliderItem width={377} key={i}>
                <ProjectCard
                  id={item?.id}
                  img={item?.projectPhotos?.[0]?.photo}
                  address={`${
                    item?.address.length > 30
                      ? `${item?.address.substring(0, 23)}.....`
                      : item?.address
                  }`}
                  area={`${item?.inventory?.[0]?.landSize} ${item?.inventory?.[0]?.landArea?.title}`}
                  commission={item?.inventory?.[0]?.cashDealCommissionAmount}
                  title={item?.projectName}
                />
              </SliderItem>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default ProjectsSlider;
