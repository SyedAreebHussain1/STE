import VisibilityOnWebsite from "./helpers/VisibilityOnWebsite";
import GenerateImagesPdf from "./helpers/GenerateImagesPdf";
import ProjectLocation from "./helpers/ProjectLocation";

type Props = { data: any };

const ProjectDetailsSidebar = ({ data }: Props) => {
  return (
    <div className="bg-white mt-3 rounded-xl p-6 flex flex-col gap-6">
      <VisibilityOnWebsite />
      {/* <GenerateImagesPdf /> */}
      <ProjectLocation lat={data?.latitude} lng={data?.longitude} />
    </div>
  );
};

export default ProjectDetailsSidebar;
