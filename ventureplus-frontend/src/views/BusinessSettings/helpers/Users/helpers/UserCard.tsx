import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

export type UserT = {
  user: {
    id: number;
    companyId: string;
    designation: string;
    name: string;
    profilePhoto: string;
    email: string;
    phoneNo: string;
    createdBy: number;
  };
  delete: () => void;
};
const UserCard = ({ user, delete: handleDelete }: UserT) => {
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  return (
    <div className="border-[1px] border-strokes shadow-lg rounded-lg p-[18px] flex gap-3 flex-col sm:w-[250px] w-full relative UserCardHoverClass">
      {userData?.companyUser?.id !== user?.id && (
        <button
          className="absolute top-3 right-2 w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#FFFFFF] UserCardDeleteClass"
          style={{ boxShadow: "0px 2px 6px 0px rgba(0, 42, 45, 0.16)" }}
          onClick={handleDelete}
        >
          <MdDelete className="text-[18px] text-[#F71C19]" />
        </button>
      )}
      <div>
        <h1 className="text-[#4A5366] font-medium text-[15px] leading-[24px]">
          Name
        </h1>
        <p className="text-[#212838] font-medium text-[15px] leading-[16px]">
          {user.name}
        </p>
      </div>
      <div>
        <h1 className="text-[#4A5366] font-medium text-[15px] leading-[24px]">
          Designation
        </h1>
        <p className="text-[#212838] font-medium text-[15px] leading-[16px]">
          {user.designation}
        </p>
      </div>
      <div>
        <h1 className="text-[#4A5366] font-medium text-[15px] leading-[24px]">
          Email
        </h1>
        <p className="body-s leading-[19.85px] font-medium text-para break-words">
          {user.email}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
