import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import Button from "../../helpers/inputs/Button";
import Annoucements from "./helpers/Annoucements";
import useToggle from "../../hooks/useToggle";
import AddNewAnnouncementDrawer from "./helpers/AddNewAnnouncementDrawer";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const WebestateAnnouncement = () => {
  const [open, toggle] = useToggle();
  const navigate = useNavigate()
  return (
    <PageContainer>
      <PageHeader
        title={
          <>
            <div
              className="text-[1rem] flex gap-1 items-center font-semibold text-[#27A3A3] cursor-pointer "
              onClick={() => navigate(-1)}
            >
              <span>
                <IoIosArrowBack />
              </span>
              Back to Home
            </div>
          </>
        }
        subTitle={`WebEstate / Annoucements`}
        extra={
          <Button
            label={"Add New Annoucement"}
            onClick={toggle}
            variant="filled"
          />
        }
      />
      {open && <AddNewAnnouncementDrawer open={open} close={toggle} />}
      <Annoucements />
    </PageContainer>
  );
};

export default WebestateAnnouncement;
