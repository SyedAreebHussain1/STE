import React, { useEffect } from "react";

const MonthlyAttendanceSheet = ({ data }: any) => {
  useEffect(() => {
    // if (attendanceDataByMonth?.data?.data?.length > 0) {
    //   for (let i = 0; i < attendanceDataByMonth?.data?.data?.length; i++) {
    //     const element = attendanceDataByMonth?.data?.data[i];
    //     console.log(element);
    //   }
    // }
    console.log(data);
  }, [data]);
  return (
    <div id="attendance-sheet">
      <h1>Monthly Attendance Sheet</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Check-in</th>
            <th>Check-out</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.name}</td>
              <td>{entry.checkIn}</td>
              <td>{entry.checkOut}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAttendanceSheet;
