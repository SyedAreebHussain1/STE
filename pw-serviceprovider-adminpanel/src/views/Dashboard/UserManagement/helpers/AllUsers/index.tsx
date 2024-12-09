import { useState } from "react";
import AllUsersTable from "./helper/AllUsersTable";
import CreateNewUsersModal from "./helper/CreateNewUsersModal";
import { RoundedButton } from "../../../../../components";
import UpdateUserModal from "./helper/UpdateUserModal";

const AllUsers = () => {
  const [openCreate, setOpenCreate] = useState<boolean | undefined>(false);
  const [openEdit, setOpenEdit] = useState<boolean | undefined>(false);
  const [data, setData] = useState<String | undefined>("");
  const OpenModal = (data: any) => {
    setOpenEdit(true);

    setData(data);
  };

  return (
    <>
      {openCreate && (
        <CreateNewUsersModal open={openCreate} setOpen={setOpenCreate} />
      )}
      {openEdit && (
        <UpdateUserModal open={openEdit} setOpen={setOpenEdit} data={data} />
      )}

      <div className="mb-4 mt-5">
        <RoundedButton
          onClick={() => setOpenCreate(true)}
          title={
            <span className="flex items-center">
              <span className="w-[14.27px]  text-[1rem] mr-[2px]  ">+</span>
              Add New User
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
        />
      </div>
      <AllUsersTable OpenModal={OpenModal} />
    </>
  );
};

export default AllUsers;
