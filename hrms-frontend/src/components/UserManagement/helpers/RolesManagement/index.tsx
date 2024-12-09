import RolesManagementTable from "./helper/RolesManagementTable";
import CreateRoleModal from "./helper/CreateRoleModal";
import useToggle from "../../../../hooks/useToggle";
import RoundedButton from "../../../../helpers/button/RoundedButton";

const RolesManagement = () => {
  const [open, toggleOpen] = useToggle();
  return (
    <>
      {open && <CreateRoleModal open={open} toggleOpen={toggleOpen} />}
      <div className="mb-4 mt-5">
        <RoundedButton
          onClick={toggleOpen}
          title={
            <span className="flex items-center">
              <span className="w-[14.27px]  text-[1rem] pr-1  ">+</span>
              Create New Role
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
        />
      </div>
      <RolesManagementTable />;
    </>
  );
};

export default RolesManagement;
