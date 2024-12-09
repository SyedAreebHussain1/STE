import { Tooltip } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";



const HoursChart = ({ Hoursdata }: any) => {
  const minutesToHours = (minutes: any) => minutes / 60;
  const data = [
    {
      name: "Monday",
      workedHours: minutesToHours(Hoursdata?.mondayHours?.mondayWorkedHours) || 0,
      overtimeHours:
        minutesToHours(Hoursdata?.mondayHours?.mondayOverTimeHours) || 0,
        breakHours: minutesToHours(Hoursdata?.mondayHours?.mondayBreakHours) || 0,
    },
    {
      name: "Tuesday",
      workedHours: minutesToHours(Hoursdata?.tuesdayHours?.tuesdayWorkedHours) || 0,
      overtimeHours:
        minutesToHours(Hoursdata?.tuesdayHours?.tuesdayOverTimeHours) || 0,
        breakHours: minutesToHours(Hoursdata?.tuesdayHours?.tuesdayBreakHours) || 0,
    },
    {
      name: "Wednesday",
      workedHours:
        minutesToHours(Hoursdata?.wednesdayHours?.wednesdayWorkedHours) ||
        0,
        overtimeHours:
        minutesToHours(Hoursdata?.wednesdayHours?.wednesdayOverTimeHours) ||
       0,
        breakHours:
        minutesToHours(Hoursdata?.wednesdayHours?.wednesdayBreakHours) ||
        0,
    },
    {
      name: "Thursday",
      workedHours: minutesToHours(Hoursdata?.thursdayHours?.thursdayWorkedHours) || 0,
      overtimeHours:
        minutesToHours(Hoursdata?.thursdayHours?.thursdayOverTimeHours) || 0,
        breakHours: minutesToHours(Hoursdata?.thursdayHours?.thursdayBreakHours) || 0,
    },
    {
      name: "Friday",
      workedHours: minutesToHours(Hoursdata?.fridayHours?.fridayWorkedHours) || 0,
      overtimeHours:
        minutesToHours(Hoursdata?.fridayHours?.fridayOverTimeHours) || 0,
        breakHours: minutesToHours(Hoursdata?.fridayHours?.fridayBreakHours) || 0,
    },
    {
      name: "Saturday",
      workedHours: minutesToHours(Hoursdata?.saturdayHours?.saturdayWorkedHours) || 0,
      overtimeHours:
        minutesToHours(Hoursdata?.saturdayHours?.saturdayOverTimeHours) || 0,
        breakHours: minutesToHours(Hoursdata?.saturdayHours?.saturdayBreakHours) || 0,
    },
    {
      name: "Sunday",
      workedHours: minutesToHours(Hoursdata?.sundayHours?.sundayWorkedHours) || 0,
      overtimeHours:
        minutesToHours(Hoursdata?.sundayHours?.sundayOverTimeHours) || 0,
        breakHours: minutesToHours(Hoursdata?.sundayHours?.sundayBreakHours) || 0,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 500]} tickFormatter={(value) => `${value}h`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="workedHours" stackId="a" fill="#3E54AC" />
        <Bar dataKey="breakHours" stackId="a" fill="#B7C8F6" />
        <Bar dataKey="overtimeHours" stackId="a" fill="#6A80CD" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HoursChart;
