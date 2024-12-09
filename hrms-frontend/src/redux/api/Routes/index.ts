import { ENDPOINT } from "../../../utils/endpoints";
import { AppDispatch } from "../../store";
import { get, getError } from "../../../utils/baseApi";
import { loginFailure } from "../../slices/auth/authSlice";
import {
  getRoutes,
  getRoutesSuccess,
  getRoutesFailure,
} from "../../slices/Routes/getRoutesSlice";
import { getItem } from "../../../utils/routes";
import {
  CallsPage,
  CandidateDetailsPage,
  DepartmentPage,
  EvaluationPage,
  InterviewDetailsPage,
  JobPostingDetailPage,
  LiveLocation,
  LiveLocationAndStopHistory,
  LocationListPage,
  LocationPage,
  MainDashboardPage,
  PeoplePage,
  RecruitmentPage,
  SalaryManagmentPage,
  ScheduleInterviewPage,
  TimeOff,
  TimeOffAndHolidaysPage,
  TimesheetsPage,
  TimesheetsSummaryPage,
  UpcomingInterviewsPage,
  UserAddOrEdit,
  UserManagementPage,
  WorkSchedule,
} from "../../../pages/PageListAsync";

function getComponentByRoute(route: any) {
  const components: any = {
    "/user-payroll": DepartmentPage,
  };
  return components[route];
}

export async function getRoutesApi(dispatch: AppDispatch) {
  function convertToKebabCase(val: string) {
    return val.split(" ").join("-").toLowerCase();
  }
  dispatch(getRoutes());
  try {
    const routes: any = {
      items: [
        // getItem('Intrested User', 'bas2111', <img src={loungeIcon} alt="" />),
      ],
      items2: [],
      routes: [
        // {
        //   key: 'mr0000001',
        //   value: '/marketing-requirements',
        //   // component: <MarketingRequirements />,
        // },
      ],
    };
    let response: any = await get(ENDPOINT.getPermission.route);
    if (response?.data?.length) {
      response?.data?.forEach((val: any) => {
        for (let key in val) {
          if (key === "companyModule") {
            for (let nestedKey in val[key]) {
              if (val[key][nestedKey] === "Company") {
                routes.items.push(
                  getItem(
                    "Company",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "User Payroll") {
                routes.items.push(
                  getItem(
                    "User Payroll",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Staff Management") {
                routes.items.push(
                  getItem(
                    "Staff Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Time Sheet Management") {
                routes.items.push(
                  getItem(
                    "Time Sheet Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Time Sheet") {
                routes.items.push(
                  getItem(
                    "Time Sheet",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Leave Management") {
                routes.items.push(
                  getItem(
                    "Leave Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Leave Request") {
                routes.items.push(
                  getItem(
                    "Leave Request",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Work Schedule") {
                routes.items.push(
                  getItem(
                    "Work Schedule",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Live Location") {
                routes.items.push(
                  getItem(
                    "Live Location",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Evolution Form Management") {
                routes.items.push(
                  getItem(
                    "Evolution Form Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Setting") {
                routes.items.push(
                  getItem(
                    "Setting",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Department") {
                routes.items.push(
                  getItem(
                    "Department",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Department Management") {
                routes.items.push(
                  getItem(
                    "Department Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Attendance Management") {
                routes.items.push(
                  getItem(
                    "Attendance Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Attendance") {
                routes.items.push(
                  getItem(
                    "Attendance",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "job Opening") {
                routes.items.push(
                  getItem(
                    "job Opening",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "interview Evaluation") {
                routes.items.push(
                  getItem(
                    "Attendance Management",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
              if (val[key][nestedKey] === "Sale Plus") {
                routes.items.push(
                  getItem(
                    "Sale Plus",
                    `/${convertToKebabCase(val[key][nestedKey])}`,
                    `Icon`
                  )
                );
                routes.routes.push({
                  key: `/${convertToKebabCase(val[key][nestedKey])}`,
                  value: `/${convertToKebabCase(val[key][nestedKey])}`,
                  component: getComponentByRoute(
                    `/${convertToKebabCase(val[key][nestedKey])}`
                  ),
                });
              }
            }
          }
        }
      });
    }

    dispatch(getRoutesSuccess(routes));
  } catch (err) {
    // localStorage.clear();
    // dispatch(loginFailure(err));
    getError(err);
    dispatch(getRoutesFailure(err));
  }
}
