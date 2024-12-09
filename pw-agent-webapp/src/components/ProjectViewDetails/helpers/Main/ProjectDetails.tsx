import { Button } from "antd";
import GalleryImages from "./GalleryImages";
import { MdOutlineEdit } from "react-icons/md";
import { TfiShare } from "react-icons/tfi";

const ProjectDetails = ({ data }: { data: any }) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6">
      <GalleryImages data={data?.projectPhotos} />
      <div className="flex justify-between flex-col md:flex-row border-b border-borderColor pb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#1D2939] text-[1.7281rem] font-semibold">
            {data?.projectName}
          </h2>
          <h3 className="text-[#667085] text-[1.2rem] font-medium">
            {data?.address}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          {/* <Button className="text-[#344054] text-[1.2rem] font-medium h-[45px] rounded-full flex items-center gap-[.625rem] bg-[#F2F4F7] border-[#F2F4F7]">
            <MdOutlineEdit fontSize={20} />
            <span>Edit Project</span>
          </Button> */}
          {/* <Button className="text-[#344054] text-[1.2rem] font-medium h-[45px] rounded-full flex items-center gap-[.625rem] bg-[#9747FF14] border-[#9747FF14]">
            <TfiShare color="#9747FF" />
            <span>Share</span>
          </Button> */}
        </div>
      </div>
      {data?.inventory?.[0]?.description && (
        <div className="pt-6">
          <h5 className="text-[19.2px] font-semibold ">Description</h5>
          <p className="mt-2 text-[#667085] text-base leading-[1.5rem]">
            {data?.inventory?.[0]?.description}.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
