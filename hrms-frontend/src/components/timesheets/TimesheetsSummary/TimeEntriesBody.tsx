import { Spin } from "antd";
import moment from "moment";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const TimeEntriesBody = ({ stateData, checkOutTime, checkInTime }: any) => {
  const attendanceLogsByUserId = useSelector(
    (state: any) => state?.attendanceLogsByUserId
  );

  const dateValue = new Date(checkInTime);
  const offsetInMinutes = dateValue.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offsetInMinutes / 60));
  const offsetMinutes = Math.abs(offsetInMinutes % 60);
  const offsetSign = offsetInMinutes > 0 ? "-" : "+";
  const offsetString = `${offsetSign}${String(offsetHours).padStart(
    2,
    "0"
  )}:${String(offsetMinutes).padStart(2, "0")}`;

  return (
    <>
      {attendanceLogsByUserId.loading ? (
        <div className="flex justify-center mt-5">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          {checkInTime ? (
            <div className="flex gap-1 items-center  border-b border-borderColor px-[1.75rem] py-[1.25rem]">
              <span>
                <FaLongArrowAltRight color="#FF7922" />
              </span>
              <span className="hover:text-primary transition-all cursor-pointer">
                {checkInTime
                  ? moment(checkInTime).format("h:mm a") + ` GMT${offsetString}`
                  : "-"}{" "}
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className="flex gap-6 items-center  border-b border-borderColor px-[1.75rem] py-[1.25rem]">
            <div className="w-[30px] h-[30px] bg-gray-400 items-center flex justify-center font-medium !rounded-full">
              {stateData?.companyUserProfile?.name?.[0]?.toUpperCase()}
            </div>
            <span>
              {checkOutTime ? moment(checkOutTime).format("h:mm a") : "-"}
            </span>
            <span className="text-[.6875rem] text-[#1A1A1A] border border-borderColor rounded-full px-2">
              Clock out
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default TimeEntriesBody;
