import TimeEntriesHeader from "./TimeEntriesHeader";
import DateTabs from "./DateTabs";
import TimeEntriesBody from "./TimeEntriesBody";
import TimeEntriesFooter from "./TimeEntriesFooter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const TimeEntries = ({ stateData }: any) => {
  const attendanceLogsByUserId = useSelector(
    (state: any) => state?.attendanceLogsByUserId
  );
  const [checkOutTime, setCheckOutTime] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const days: any = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function foo(enter: any, out: any) {
    if (enter && out) {
      const hoursForCreatedAt = Number(out) - Number(enter);
      return hoursForCreatedAt;
    } else {
      return 0;
    }
  }
  useEffect(() => {
    if (attendanceLogsByUserId?.data?.data?.companyAttendanceLogs?.length > 0) {
      let obj: any = {};
      let count = 0;
      const checkIn =
        attendanceLogsByUserId?.data?.data?.companyAttendanceLogs?.filter(
          (itemVal1: any) => itemVal1?.status === "checkIn"
        );
      const checkOut =
        attendanceLogsByUserId?.data?.data?.companyAttendanceLogs?.filter(
          (itemVal1: any) => itemVal1?.status === "checkOut"
        );
      if (
        attendanceLogsByUserId?.data?.data?.companyAttendanceLogs?.length > 0
      ) {
        if (checkIn.length > 0 && checkOut.length > 0) {
          if (
            moment(attendanceLogsByUserId?.data?.data?.attendanceDate).format(
              "YYYY-MM-DD"
            ) == moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") &&
            moment(attendanceLogsByUserId?.data?.data?.attendanceDate).format(
              "YYYY-MM-DD"
            ) == moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
          ) {
            const x = new Date(checkIn?.[0]?.createdAt);
            const checkinTime: any = moment(checkIn?.[0]?.createdAt).format(
              "HH"
            );
            const checkoutTime: any = moment(checkOut?.[0]?.createdAt).format(
              "HH"
            );

            const dayIndex = x.getDay();
            const dayName = days[dayIndex];
            days.map((item: any) => {
              if (item.toLowerCase() !== dayName.toLowerCase()) {
                obj = {
                  ...obj,
                };
              } else {
                setCheckOutTime(checkOut?.[0]?.createdAt);
                setCheckInTime(checkIn?.[0]?.createdAt);
                count += foo(checkinTime, checkoutTime);
                obj = {
                  ...obj,
                };
              }
            });
          } else if (
            moment(attendanceLogsByUserId?.data?.data?.attendanceDate).format(
              "YYYY-MM-DD"
            ) == moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") &&
            moment(attendanceLogsByUserId?.data?.data?.attendanceDate).format(
              "YYYY-MM-DD"
            ) == moment(checkOut?.[0]?.logTime).format("YYYY-MM-DD")
          ) {
            const x = new Date(checkIn?.[0]?.createdAt);
            const checkinTime: any = moment(checkIn?.[0]?.createdAt).format(
              "HH"
            );
            const checkoutTime: any = moment(checkOut?.[0]?.logTime).format(
              "HH"
            );
            const dayIndex = x.getDay();
            const dayName = days[dayIndex];
            days.map((item: any) => {
              if (item.toLowerCase() !== dayName.toLowerCase()) {
                obj = {
                  ...obj,
                };
              } else {
                setCheckOutTime(checkOut?.[0]?.logTime);
                setCheckInTime(checkIn?.[0]?.createdAt);
                count += foo(checkinTime, checkoutTime);
                obj = {
                  ...obj,
                };
              }
            });
          } else if (
            moment(attendanceLogsByUserId?.data?.data?.attendanceDate).format(
              "YYYY-MM-DD"
            ) == moment(checkIn?.[0]?.logTime).format("YYYY-MM-DD") &&
            moment(attendanceLogsByUserId?.data?.data?.attendanceDate).format(
              "YYYY-MM-DD"
            ) == moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
          ) {
            const x = new Date(checkIn?.[0]?.createdAt);
            const checkinTime: any = moment(checkIn?.[0]?.logTime).format("HH");
            const checkoutTime: any = moment(checkOut?.[0]?.createdAt).format(
              "HH"
            );

            const dayIndex = x.getDay();
            const dayName = days[dayIndex];
            days.map((item: any) => {
              if (item.toLowerCase() !== dayName.toLowerCase()) {
                obj = {
                  ...obj,
                };
              } else {
                setCheckOutTime(checkOut?.[0]?.createdAt);
                setCheckInTime(checkIn?.[0]?.logTime);
                count += foo(checkinTime, checkoutTime);
                obj = {
                  ...obj,
                };
              }
            });
          } else if (
            moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") ===
            moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
          ) {
            const x = new Date(checkIn?.[0]?.createdAt);
            const checkinTime: any = moment(checkIn?.[0]?.createdAt).format(
              "HH"
            );
            const checkoutTime: any = moment(checkOut?.[0]?.createdAt).format(
              "HH"
            );

            const dayIndex = x.getDay();
            const dayName = days[dayIndex];
            days.map((item: any) => {
              if (item.toLowerCase() !== dayName.toLowerCase()) {
                obj = {
                  ...obj,
                };
              } else {
                setCheckOutTime(checkOut?.[0]?.createdAt);
                setCheckInTime(checkIn?.[0]?.createdAt);
                count += foo(checkinTime, checkoutTime);
                obj = {
                  ...obj,
                };
              }
            });
          } else {
            if (
              checkIn?.[0]?.logTime !== null &&
              checkOut?.[0]?.logTime !== null
            ) {
              const x = new Date(checkIn?.[0]?.logTime);
              const checkinTime: any = moment(checkIn?.[0]?.logTime).format(
                "HH"
              );
              const checkoutTime: any = moment(checkOut?.[0]?.logTime).format(
                "HH"
              );

              const dayIndex = x.getDay();
              const dayName = days[dayIndex];
              days.map((item: any) => {
                if (item.toLowerCase() !== dayName.toLowerCase()) {
                  obj = {
                    ...obj,
                  };
                } else {
                  setCheckOutTime(checkOut?.[0]?.logTime);
                  setCheckInTime(checkIn?.[0]?.logTime);
                  count += foo(checkinTime, checkoutTime);
                  obj = {
                    ...obj,
                  };
                }
              });
            }
          }
        }
      }
    } else {
      setCheckOutTime("");
      setCheckInTime("");
    }
  }, [attendanceLogsByUserId]);
  return (
    <div className="border-borderColor h-screen">
      <TimeEntriesHeader />
      <DateTabs stateData={stateData} />
      <TimeEntriesBody
        stateData={stateData}
        checkOutTime={checkOutTime}
        checkInTime={checkInTime}
      />
      <TimeEntriesFooter />
    </div>
  );
};

export default TimeEntries;
