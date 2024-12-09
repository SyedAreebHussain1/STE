import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import RoundedButton from "../../helpers/button/RoundedButton";
import AnnouncementsTable from "./helpers/AnnouncementsTable";
import useToggle from "../../hooks/useToggle";
import AddOrEditAnnouncement from "./helpers/AddOrEditAnnouncement";

const Announcement = () => {
  const [open, troggle] = useToggle();

  return (
    <>
      {open && <AddOrEditAnnouncement open={open} onClose={troggle} />}
      <PageContainer>
        <h1 className="text-[1.404rem] text-black dark:text-white font-semibold">
          Announcement
        </h1>
        <div className="mb-4 mt-2">
          <RoundedButton
            onClick={troggle}
            title={
              <span className=" flex items-center">
                <span className="  text-[1rem] pr-2">+</span>
                Add New Announcement
              </span>
            }
            className="dark:bg-dark-primary dark:text-white"
            sm
          />
        </div>
        <AnnouncementsTable />
      </PageContainer>
    </>
  );
};

export default Announcement;
