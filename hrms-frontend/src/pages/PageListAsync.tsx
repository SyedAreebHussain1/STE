import LazySuspense from "./LazySuspense";
import PageLoading from "../helpers/loaders/PageLoading";
export const LoginPage = LazySuspense(() => import("../pages/LoginSignUp"), {
  fallback: <PageLoading fullPage />,
});
// export const SignUpPage = LazySuspense(() => import("./Signup/SignUp"), {
//   fallback: <PageLoading fullPage />,
// });

//otherModules
export const CreateCompnay = LazySuspense(
  () => import("./CreateCompnay/CreateCompnay"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const PeoplePage = LazySuspense(() => import("./Dashboard/PeoplePage"), {
  fallback: <PageLoading fullPage />,
});
export const MainDashboardPage = LazySuspense(
  () => import("./Dashboard/DashboardMain"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const TimesheetsPage = LazySuspense(
  () => import("./Dashboard/Timesheets"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const TimesheetsSummaryPage = LazySuspense(
  () => import("./Dashboard/Timesheets/TimesheetsSummary"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const LocationPage = LazySuspense(() => import("./Dashboard/Location"), {
  fallback: <PageLoading fullPage />,
});
export const LiveLocation = LazySuspense(
  () => import("./Dashboard/LiveLocation/LiveLocation"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const TimeOffAndHolidaysPage = LazySuspense(
  () => import("./Dashboard/TimeOffAndHolidaysPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const TimeOff = LazySuspense(
  () => import("./Dashboard/TimeOff/TimeOff"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const UserManagementPage = LazySuspense(
  () => import("./Dashboard/UserManagementPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ForgetPassword = LazySuspense(
  () => import("./ForgetPassword/ForgetPassword"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const UserAddOrEdit = LazySuspense(
  () =>
    import(
      "../components/UserManagement/helpers/AllUsers/helper/AddUserAndEditUser"
    ),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const WorkSchedule = LazySuspense(
  () => import("./WorkSchedule/WorkSchedule"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const LocationListPage = LazySuspense(
  () => import("./Dashboard/LocationListPage/LocationListPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const CallsPage = LazySuspense(
  () => import("./Dashboard/CallsPage/CallsPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const LiveLocationAndStopHistory = LazySuspense(
  () =>
    import(
      "../components/LiveLocationAndStopHistory/LiveLocationAndStopHistory"
    ),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const SalaryManagmentPage = LazySuspense(
  () => import("./Dashboard/SalaryManagementPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const DepartmentPage = LazySuspense(
  () => import("./Dashboard/DepartmentPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const WebsitePage = LazySuspense(
  () => import("../components/Website/Website"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const RecruitmentPage = LazySuspense(
  () => import("./Dashboard/Recruitment"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const JobPostingDetailPage = LazySuspense(
  () => import("./Dashboard/Recruitment/JobPostingDetail/index.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const CandidateDetailsPage = LazySuspense(
  () => import("./Dashboard/Recruitment/CandidateDetails/index.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ScheduleInterviewPage = LazySuspense(
  () => import("./Dashboard/ScheduleInterview"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const UpcomingInterviewsPage = LazySuspense(
  () => import("./Dashboard/UpcomingInterviews"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const InterviewDetailsPage = LazySuspense(
  () => import("./Dashboard/Recruitment/InterviewDetails"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EvaluationPage = LazySuspense(
  () => import("./Dashboard/Recruitment/Evaluation/index.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EditJobPostingDetailPage = LazySuspense(
  () => import("./Dashboard/EditJobPostingDetail"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ApplyToJobPage = LazySuspense(
  () => import("./Dashboard/ApplyToJob"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const RecruitmentPipelinePage = LazySuspense(
  () => import("./Dashboard/Recruitment/RecruitmentPipelinePage/index.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const RescheduleInterviewPage = LazySuspense(
  () => import("./Dashboard/RescheduleInterview"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EvaluationListPage = LazySuspense(
  () => import("./Dashboard/Recruitment/EvaluationList/index.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const UpdateEvaluationPage = LazySuspense(
  () => import("./Dashboard/UpdateEvaluation"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EvaluationDetailPage = LazySuspense(
  () => import("./Dashboard/Recruitment/EvaluationDetail/index.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const CreateJobOpeningPage = LazySuspense(
  () => import("./Dashboard/Recruitment/CreateJobOpening"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const SalesPlusPage = LazySuspense(
  () => import("./Dashboard/SalesPlusPage/NewLeadManagement.tsx"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const LeadsDetailsPage = LazySuspense(
  () => import("./Dashboard/SalesPlusPage/LeadsDetailsPage.tsx"),
  {
    fallback: <PageLoading />,
  }
);
export const SalesPlusPipelinePage = LazySuspense(
  () => import("./Dashboard/SalesPlusPage/SalesPlusPipelinePage.tsx"),
  {
    fallback: <PageLoading />,
  }
);
export const ProjectAndActivitiesPage = LazySuspense(
  () => import("./Dashboard/ProjectAndActivities/Projects"),
  {
    fallback: <PageLoading />,
  }
);

export const LetterHeadPage = LazySuspense(
  () => import("../components/LetterHead"),

  {
    fallback: <PageLoading />,
  }
);
export const ProjectTasksPage = LazySuspense(
  () => import("./Dashboard/ProjectAndActivities/Tasks"),
  {
    fallback: <PageLoading />,
  }
);
export const LetterPage = LazySuspense(
  () => import("../components/LetterHead/helpers/LetterPageComponent.tsx"),
  {
    fallback: <PageLoading />,
  }
);
export const EvaluationsPage = LazySuspense(
  () => import("./Dashboard/Evaluations/index.tsx"),
  {
    fallback: <PageLoading />,
  }
);
export const AnnouncementsPage = LazySuspense(
  () => import("../components/Announcements"),
  {
    fallback: <PageLoading />,
  }
);

export const NotificationPage = LazySuspense(
  () => import("../pages/Dashboard/Notification"),
  {
    fallback: <PageLoading />,
  }
);
export const UpdateUserDataPage = LazySuspense(
  () => import("../pages/Dashboard/UserManagementPage/UpdateUserDataPage.tsx"),
  {
    fallback: <PageLoading />,
  }
);
export const LiveLocationMemberPage = LazySuspense(
  () => import("../pages/Dashboard/LiveLocationMemberPage"),
  {
    fallback: <PageLoading />,
  }
);
