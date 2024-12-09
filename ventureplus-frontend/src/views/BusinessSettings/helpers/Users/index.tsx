import { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedCardType } from "../..";
import RoundedButton from "../../../../components/button/RoundedButton";
import useToggle from "../../../../hooks/useToggle";
import { RootState } from "../../../../redux/store";
import {
  deleteCompanyUserApi,
  getCompanyUsersApi,
} from "../../../../services/api/Business";
import BusinessSettingsLayout from "../BusinessSettingsLayout";
import InviteUserModal from "./helpers/InviteUserModal";
import UserCard from "./helpers/UserCard";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../../utils/storage";
import ButtonWithSvg from "../../../../components/button/ButtonWithSvg";
import { circularAddIcon } from "../../../../assets/ProductPromotions";
import { circularPlusGrayIcon, circularPlusIcon } from "../../../../assets";
import "./helpers/UserCard.css";
import { getBusinessCountApi } from "../../../../services/api/GetBusinessCount";

type usersContentContentI = {
  headerTitle: SelectedCardType;
  headerDescription: string;
  headerTagTitle: string;
};
const usersContent: usersContentContentI = {
  headerTitle: "Users",
  headerDescription:
    "Detailed subscription options and pricing packages for services",
  headerTagTitle: "Subscription Options",
};

export type UserT = {
  id: number;
  companyId: string;
  designation: string;
  name: string;
  profilePhoto: string;
  email: string;
  phoneNo: string;
  createdBy: number;
};

interface UsersI {
  selectedCard: SelectedCardType;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

// const businessCount = getFromStorage("businessCount");

const Users = ({ selectedCard, setSelectedCard }: UsersI) => {
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );
  const businessCount = getBusinessCount?.data?.data;
  const currentUser = businessCount?.current?.users;
  const allowedUsers = businessCount?.allowed?.users;
  const remainingUsers = allowedUsers - currentUser;
  const isUserLimitExceeded = allowedUsers
    ? allowedUsers <= currentUser
    : false;
  const dispatch = useDispatch();
  const [open, toggle] = useToggle();
  const getCompanyUsers = useSelector(
    (state: RootState) => state.getCompanyUsers
  );

  const navigate = useNavigate();

  useEffect(() => {
    getCompanyUsersApi(dispatch);
  }, []);
  const deleteHandler = (userID: number) => {
    // deleteApi with onSuccess function
    deleteCompanyUserApi(dispatch, userID, onSuccess);
  };

  const onSuccess = () => {
    getCompanyUsersApi(dispatch);
    getBusinessCountApi(dispatch);
  };

  return (
    <>
      {open && <InviteUserModal open={open} onClose={toggle} />}
      <BusinessSettingsLayout
        {...usersContent}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      >
        <div className="sm:pr-10 pr-0 pb-3 mb-1">
          <div className="bg-[#CCE1E2] rounded-lg flex flex-col sm:p-6 p-4 gap-5">
            <div className="bg-[#1158FF]/15 sm:w-[20%] w-[50%]  text-center  rounded-full">
              {remainingUsers ? remainingUsers : 0}{" "}
              {remainingUsers > 1 ? "Users Remaining" : "User Remaining"}
            </div>
            <div className="flex justify-between items-center">
              {remainingUsers <= 1 && remainingUsers > 0 ? (
                <span>
                  You're almost at your limit! Purchase additional users to
                  continue expanding your team.
                </span>
              ) : remainingUsers > 0 ? (
                <span>
                  You can add {remainingUsers} users to your business team.
                </span>
              ) : (
                <span>
                  You're at your limit! Purchase additional users to continue
                  expanding your team.
                </span>
              )}

              <RoundedButton
                title={"Buy More Users"}
                type="primary"
                className="mt-[10px]"
                sm
                onClick={() => navigate("/subscription-plan")}
              />
            </div>
          </div>
        </div>

        <div className="sm:pr-10 pr-0 ">
          <div className="flex justify-between items-center">
            <h1 className="text-[23px] text-[#212838] font-medium">
              All Users
            </h1>
            <ButtonWithSvg
              icon={
                isUserLimitExceeded ? circularPlusGrayIcon : circularPlusIcon
              }
              isLeft
              title={"Invite New User"}
              type="primary"
              onClick={() => toggle()}
              disabled={isUserLimitExceeded}
            />
          </div>
          <div className="flex gap-4 flex-wrap mb-4 mt-4">
            {getCompanyUsers?.data?.map((user: UserT) => (
              <UserCard
                key={user?.id}
                user={user}
                delete={() => deleteHandler(user?.id)}
              />
            ))}
          </div>
        </div>
      </BusinessSettingsLayout>
    </>
  );
};
export default Users;
