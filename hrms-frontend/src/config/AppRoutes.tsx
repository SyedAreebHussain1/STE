import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import {
  CallsPage,
  CandidateDetailsPage,
  DepartmentPage,
  EditJobPostingDetailPage,
  EvaluationDetailPage,
  EvaluationListPage,
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
  RescheduleInterviewPage,
  SalaryManagmentPage,
  ScheduleInterviewPage,
  TimeOff,
  TimeOffAndHolidaysPage,
  TimesheetsPage,
  TimesheetsSummaryPage,
  UpcomingInterviewsPage,
  UpdateEvaluationPage,
  UserAddOrEdit,
  UserManagementPage,
  WorkSchedule,
  CreateJobOpeningPage,
  SalesPlusPage,
  RecruitmentPipelinePage,
  LeadsDetailsPage,
  SalesPlusPipelinePage,
  LetterHeadPage,
  LetterPage,
  ProjectAndActivitiesPage,
  ProjectTasksPage,
  EvaluationsPage,
  AnnouncementsPage,
  NotificationPage,
  UpdateUserDataPage,
  LiveLocationMemberPage
} from "../pages/PageListAsync";

const AppRoutes: React.FC<any> = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<MainDashboardPage />} />
        <Route path="/work-schedule" element={<WorkSchedule />} />
        <Route path="/stop-location" element={<LiveLocation />} />
        <Route path="/live-location" element={<LiveLocationMemberPage />} />
        <Route path="/time-off" element={<TimeOff />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/timesheets" element={<TimesheetsPage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/salary-management" element={<SalaryManagmentPage />} />
        <Route path="location-list" element={<LocationListPage />} />
        <Route path="/calls" element={<CallsPage />} />
        <Route path="/user-profile/add" element={<UserAddOrEdit />} />
        <Route path="/user-profile/edit/:id" element={<UpdateUserDataPage />} />
        <Route path="/letter-head" element={<LetterHeadPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/announcement" element={<AnnouncementsPage />} />
        <Route path="/notification" element={<NotificationPage />} />

        <Route
          path="/time-off-and-holidays"
          element={<TimeOffAndHolidaysPage />}
        />
        <Route
          path="/timesheets/:date/:companyUserId"
          element={<TimesheetsSummaryPage />}
        />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route
          path="/stop-Location/:id"
          element={<LiveLocationAndStopHistory />}
        />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route
          path="/recruitment/job-posting-details/:id"
          element={<JobPostingDetailPage />}
        />
        <Route
          path="/recruitment/edit-job-posting-details/:id"
          element={<EditJobPostingDetailPage />}
        />
        <Route
          path="/recruitment/create-job-posting"
          element={<CreateJobOpeningPage />}
        />
        <Route
          path="/recruitment/candidate-details/:id"
          element={<CandidateDetailsPage />}
        />
        <Route
          path="/recruitment/schedule-interview/:id"
          element={<ScheduleInterviewPage />}
        />
        <Route
          path="/recruitment/upcoming-interviews"
          element={<UpcomingInterviewsPage />}
        />
        <Route
          path="/recruitment/interview-details/:id"
          element={<InterviewDetailsPage />}
        />
        <Route
          path="/recruitment/evaluation/:id"
          element={<EvaluationPage />}
        />
        <Route
          path="/recruitment/evaluations"
          element={<EvaluationListPage />}
        />
        <Route
          path="/recruitment/evaluation/update/:id"
          element={<UpdateEvaluationPage />}
        />
        <Route
          path="/recruitment/evaluation-details/:id"
          element={<EvaluationDetailPage />}
        />
        <Route path="/sales-plus" element={<SalesPlusPage />} />
        <Route
          path="/recruitment/pipeline/:id"
          element={<RecruitmentPipelinePage />}
        />
        <Route
          path="/recruitment/reschedule-interview/:id"
          element={<RescheduleInterviewPage />}
        />
        <Route path="/sales-plus/:id" element={<LeadsDetailsPage />} />
        <Route
          path="/sales-plus/pipline/:id"
          element={<SalesPlusPipelinePage />}
        />
        <Route
          path="/project-activies"
          element={<ProjectAndActivitiesPage />}
        />
        <Route
          path="/project-activies/tasks/:id"
          element={<ProjectTasksPage />}
        />
        <Route path="/evaluations" element={<EvaluationsPage />} />
      </Routes>
    </Sidebar>
  );
};

export default AppRoutes;
