import { useState } from "react";
import AllUsersTable from "./helper/AllUsersTable";
import CreateNewUsersModal from "./helper/CreateNewUsersModal";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../../helpers/button/RoundedButton";

const AllUsers = () => {
  const [openCreate, setOpenCreate] = useState<boolean | undefined>(false);
  const navigate = useNavigate();
  return (
    <>
      {openCreate && (
        <CreateNewUsersModal open={openCreate} setOpen={setOpenCreate} />
      )}

      <div className="mb-4 mt-5">
        <RoundedButton
          onClick={() => navigate(`/user-profile/add`)}
          title={
            <span className="flex items-center">
              <span className="w-[14.27px]  text-[1rem] mr-[2px]  ">+</span>
              Add New User
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
        />
      </div>
      <AllUsersTable />
    </>
  );
};

export default AllUsers;
