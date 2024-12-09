import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import createCompanySlice from "./slices/CreateCompany/createCompanySlice";
import getBusinessTypeSlice from "./slices/CreateCompany/getBusinessTypeSlice";
import getCitiesSlice from "./slices/CreateCompany/getCitiesSlice";
import getCountriesSlice from "./slices/CreateCompany/getCountriesSlice";
import getTimeZoneSlice from "./slices/CreateCompany/getTimeZoneSlice";
import GetAttendanceSlice from "./slices/Dashboard/GetAttendanceSlice";
import GetHoursChartSlice from "./slices/Dashboard/GetHoursChartSlice";
import GetUpCommingAnniversariesSlice from "./slices/Dashboard/GetUpCommingAnniversariesSlice";
import GetUpcommingBirthdaysSlice from "./slices/Dashboard/GetUpcommingBirthdaysSlice";
import createDepartmentSlice from "./slices/Department/createDepartmentSlice";
import deleteDepartmentSlice from "./slices/Department/deleteDepartmentSlice";
import getAllCompanyUsersSlice from "./slices/Department/getAllCompanyUsersSlice";
import getAllDepartmentTableSlice from "./slices/Department/getAllDepartmentTableSlice";
import updateDepartmentSlice from "./slices/Department/updateDepartmentSlice";
import ForgetPasswordChangePasswordSlice from "./slices/ForgetPassword/ForgetPasswordChangePasswordSlice";
import ForgetPasswordEmailSlice from "./slices/ForgetPassword/ForgetPasswordEmailSlice";
import ForgetPasswordOTPSlice from "./slices/ForgetPassword/ForgetPasswordOTPSlice";
import getStopHistorySlice from "./slices/LiveLocationandStopHistory/getStopHistorySlice";
import getCompanyLocationSlice from "./slices/Location/getCompanyLocationSlice";
import patchCompanyLocationSlice from "./slices/Location/patchCompanyLocationSlice";
import createProjectSlice from "./slices/ProjectAndActivities/project/createProjectSlice";
import getAllDepartmentsForProjectSlice from "./slices/ProjectAndActivities/project/getAllDepartmentsForProjectSlice";
import getAllProjects from "./slices/ProjectAndActivities/project/getAllProjectsSlice";
import getProjectById from "./slices/ProjectAndActivities/project/getProjectByIdSlice";
import completeProjectTaskSlice from "./slices/ProjectAndActivities/task/completeProjectTaskSlice";
import createProjectTaskSlice from "./slices/ProjectAndActivities/task/createProjectTaskSlice";
import deleteTaskNoteSlice from "./slices/ProjectAndActivities/task/deleteTaskNoteSlice";
import editTaskNoteSlice from "./slices/ProjectAndActivities/task/editTaskNoteSlice";
import {
  default as getProjectTaskByIdSlice,
  default as getTaskByIdSlice,
} from "./slices/ProjectAndActivities/task/getProjectTaskByIdSlice";
import getTasksByProjectIdSlice from "./slices/ProjectAndActivities/task/getTasksByProjectIdSlice";
import getUsersByDepartmentForTaskSlice from "./slices/ProjectAndActivities/task/getUsersByDepartmentForTaskSlice";
import getCandidateByIdSlice from "./slices/Recruitment/Candidate/getCandidateByIdSlice";
import checkInterviewEvaluationSlice from "./slices/Recruitment/Evaluation/checkInterviewEvaluationSlice";
import deleteEvaluationSlice from "./slices/Recruitment/Evaluation/deleteEvaluationSlice";
import getAllEvaluationsSlice from "./slices/Recruitment/Evaluation/getAllEvaluationsSlice";
import getEvaluationByIdSlice from "./slices/Recruitment/Evaluation/getEvaluationByIdSlice";
import postEvaluationSlice from "./slices/Recruitment/Evaluation/postEvaluationSlice";
import updateEvaluationSlice from "./slices/Recruitment/Evaluation/updateEvaluationSlice";
import deleteInterviewSlice from "./slices/Recruitment/Interviews/deleteInterviewSlice";
import getAllInterviewsSlice from "./slices/Recruitment/Interviews/getAllInterviewsSlice";
import getInterviewByIdSlice from "./slices/Recruitment/Interviews/getInterviewByIdSlice";
import getInterviewersSlice from "./slices/Recruitment/Interviews/getInterviewersSlice";
import updateInterviewSlice from "./slices/Recruitment/Interviews/updateInterviewSlice";
import createNewJobOpeningSlice from "./slices/Recruitment/JobOpenings/createNewJobOpeningSlice";
import deleteJobOpeningSlice from "./slices/Recruitment/JobOpenings/deleteJobOpeningSlice";
import editJobOpeningSlice from "./slices/Recruitment/JobOpenings/editJobOpeningSlice";
import getAllCandidatesByJobIdSlice from "./slices/Recruitment/JobOpenings/getAllCandidatesByJobIdSlice";
import getCompanyDepartmentsDropdownSlice from "./slices/Recruitment/JobOpenings/getCompanyDepartmentsDropdownSlice";
import getJobOpeningByIdSlice from "./slices/Recruitment/JobOpenings/getJobOpeningByIdSlice";
import getJobOpeningsSlice from "./slices/Recruitment/JobOpenings/getJobOpeningsSlice";
import updateJobOpeningActiveStatusSlice from "./slices/Recruitment/JobOpenings/updateJobOpeningActiveStatusSlice";
import addOpeningStageSlice from "./slices/Recruitment/Pipeline/addOpeningStageSlice";
import getAllCandidatesByJobOpeningIdSlice from "./slices/Recruitment/Pipeline/getAllCandidatesByJobOpeningIdSlice";
import openingStagesByJobIdSlice from "./slices/Recruitment/Pipeline/openingStagesByJobIdSlice";
import updateJobOpeningStageSlice from "./slices/Recruitment/Pipeline/updateJobOpeningStageSlice";
import getRoutesSlice from "./slices/Routes/getRoutesSlice";
import createUserPayrollSlice from "./slices/SalaryManagement/SalaryDetails/createUserPayrollSlice";
import getAllCompanyDepartmentSlice from "./slices/SalaryManagement/SalaryDetails/getAllCompanyDepartmentSlice";
import getAllCompanyUserSlice from "./slices/SalaryManagement/SalaryDetails/getAllCompanyUserSlice";
import getAllUserPayrollSlice from "./slices/SalaryManagement/SalaryDetails/getAllUserPayrollSlice";
import getPayrollByEmployeeIdSlice from "./slices/SalaryManagement/SalaryDetails/getPayrollByEmployeeIdSlice";
import markAsPaidSlice from "./slices/SalaryManagement/SalaryDetails/markAsPaidSlice";
import payrollDetailsByUserIdSlice from "./slices/SalaryManagement/SalaryDetails/payrollDetailsByUserIdSlice";
import updateUserPayrollSlice from "./slices/SalaryManagement/SalaryDetails/updateUserPayrollSlice";
import getAllUserTransactionsSlice from "./slices/SalaryManagement/SalaryTransactions/getAllUserTransactionsSlice";
import getAllLeadSlice from "./slices/SalesPlus/Analytics/getAllLeadSlice";
import getAllUsersSlice from "./slices/SalesPlus/Analytics/getAllUsersSlice";
import getLeadLogCountSlice from "./slices/SalesPlus/Analytics/getLeadLogCountSlice";
import getLeadsSourceCountSlice from "./slices/SalesPlus/Analytics/getLeadsSourceCountSlice";
import getLeadsStatusCountSlice from "./slices/SalesPlus/Analytics/getLeadsStatusCountSlice";
import addCampaignsSlice from "./slices/SalesPlus/Campaigns/addCampaignsSlice";
import createFinalLeadsSlice from "./slices/SalesPlus/Campaigns/createFinalLeadsSlice";
import createPipelineStagesSlice from "./slices/SalesPlus/Campaigns/createPipelineStagesSlice";
import editFinalLeadSlice from "./slices/SalesPlus/Campaigns/editFinalLeadSlice";
import getAllPipelineStagesSlice from "./slices/SalesPlus/Campaigns/getAllPipelineStagesSlice";
import getCampaignsSlice from "./slices/SalesPlus/Campaigns/getCampaignsSlice";
import getDepartmentUsersSlice from "./slices/SalesPlus/Campaigns/getDepartmentUsersSlice";
import getLeadStatsForChartSlice from "./slices/SalesPlus/Campaigns/getLeadStatsForChartSlice";
import getLeadStatsSlice from "./slices/SalesPlus/Campaigns/getLeadStatsSlice";
import getLeadsByCampaignIdSlice from "./slices/SalesPlus/Campaigns/getLeadsByCampaignIdSlice";
import getfinalLeadSlice from "./slices/SalesPlus/Campaigns/getfinalLeadSlice";
import updateCampaignsSlice from "./slices/SalesPlus/Campaigns/updateCampaignsSlice";
import addNewLeadFollowUpSlice from "./slices/SalesPlus/LeadDetails/addNewLeadFollowUpSlice";
import addNewLeadlogNoteSlice from "./slices/SalesPlus/LeadDetails/addNewLeadlogNoteSlice";
import addNewLeadlogSlice from "./slices/SalesPlus/LeadDetails/addNewLeadlogSlice";
import assignUserNewSlice from "./slices/SalesPlus/LeadDetails/assignUserNewSlice";
import createLeadsSlice from "./slices/SalesPlus/LeadDetails/createLeadsSlice";
import getAllLeadsFollowUpSlice from "./slices/SalesPlus/LeadDetails/getAllLeadsFollowUpSlice";
import getLeadlogSlice from "./slices/SalesPlus/LeadDetails/getLeadlogSlice";
import getLeadsLeadByIdSlice from "./slices/SalesPlus/LeadDetails/getLeadsLeadByIdSlice";
import removeleadPermissionSlice from "./slices/SalesPlus/LeadDetails/removeleadPermissionSlice";
import updateLeadStatusSlice from "./slices/SalesPlus/LeadDetails/updateLeadStatusSlice";
import updateLeadsLeadSlice from "./slices/SalesPlus/LeadDetails/updateLeadsLeadSlice";
import createTaskSlice from "./slices/SalesPlus/TasksOverview/createTaskSlice";
import deleteTaskSlice from "./slices/SalesPlus/TasksOverview/deleteTaskSlice";
import editTaskSlice from "./slices/SalesPlus/TasksOverview/editTaskSlice";
import getAllCompanyUserCompanyDepartmentIdSlice from "./slices/SalesPlus/TasksOverview/getAllCompanyUserCompanyDepartmentIdSlice";
import getAllTasksSlice from "./slices/SalesPlus/TasksOverview/getAllTasksSlice";
import getCountTasksSlice from "./slices/SalesPlus/TasksOverview/getCountTasksSlice";
import getTaskIdSlice from "./slices/SalesPlus/TasksOverview/getTaskIdSlice";
import markAsCompleteSlice from "./slices/SalesPlus/TasksOverview/markAsCompleteSlice";
import addCompanyUserLeaveSlice from "./slices/TimeOff/addCompanyUserLeaveSlice";
import companyUserLeavesSlice from "./slices/TimeOff/companyUserLeavesSlice";
import getCUAssignLeavePoliciesSlice from "./slices/TimeOff/getCUAssignLeavePoliciesSlice";
import approveOrRejectLeaveSlice from "./slices/TimeOffAndHoliday/Leaves/approveOrRejectLeaveSlice";
import getAllLeavesSlice from "./slices/TimeOffAndHoliday/Leaves/getAllLeavesSlice";
import createCompanyLeavePolicySlice from "./slices/TimeOffAndHoliday/TimeOfPolicies/createCompanyLeavePolicySlice";
import getCompanyLeavePolicySlice from "./slices/TimeOffAndHoliday/TimeOfPolicies/getCompanyLeavePolicySlice";
import getCompanyUsersSlice from "./slices/TimeOffAndHoliday/TimeOfPolicies/getCompanyUsersSlice";
import updateCompanyLeavePolicySlice from "./slices/TimeOffAndHoliday/TimeOfPolicies/updateCompanyLeavePolicySlice";
import attendanceLogsByUserIdSlice from "./slices/TimeSheet/attendanceLogsByUserIdSlice";
import companyUserAttendanceManagementListSlice from "./slices/TimeSheet/companyUserAttendanceManagementListSlice";
import manualLogEntrySlice from "./slices/TimeSheet/manualLogEntrySlice";
import createCompanyRoleSlice from "./slices/UserManaegement/RoleManagement/createCompanyRoleSlice";
import getCompanyRoleSlice from "./slices/UserManaegement/RoleManagement/getCompanyRoleSlice";
import getModuleBYRoleIdSlice from "./slices/UserManaegement/RoleManagement/getModuleBYRoleIdSlice";
import getModuleSlice from "./slices/UserManaegement/RoleManagement/getModuleSlice";
import CreateUserSlice from "./slices/UserManaegement/UserProfile/CreateUserSlice";
import companyUserDeleteSlice from "./slices/UserManaegement/UserProfile/companyUserDeleteSlice";
import getAllDepartmentSlice from "./slices/UserManaegement/UserProfile/getAllDepartmentSlice";
import getAllUserListSlice from "./slices/UserManaegement/UserProfile/getAllUserListSlice";
import getNationalitySlice from "./slices/UserManaegement/UserProfile/getNationalitySlice";
import getcompanyUserTypeSlice from "./slices/UserManaegement/UserProfile/getcompanyUserTypeSlice";
import getUserListForStopPointSlice from "./slices/UserStopLocation/getUserListForStopPointSlice";
import getUserStopPointSlice from "./slices/UserStopLocation/getUserStopPointSlice";
import AddWorkScheduleSlice from "./slices/WorkSchedule/AddWorkScheduleSlice";
import GetWorkScheduleByIdSlice from "./slices/WorkSchedule/GetWorkScheduleByIdSlice";
import GetWorkScheduleSlice from "./slices/WorkSchedule/GetWorkScheduleSlice";
import editWorkScheduleSlice from "./slices/WorkSchedule/editWorkScheduleSlice";
import authSlice from "./slices/auth/authSlice";
import themeSlice from "./slices/themeSlice/themeSlice";
import decodeUrlSlice from "./slices/Recruitment/Candidate/decodeUrlSlice";
import leadsUploadExcelByCampaignNameSlice from "./slices/SalesPlus/Campaigns/leadsUploadExcelByCampaignNameSlice";
import leadsuploadExcelForCampaignSlice from "./slices/SalesPlus/Campaigns/leadsuploadExcelForCampaignSlice";
import getAllDepartmentsSlice from "./slices/SalesPlus/TasksOverview/getAllDepartmentsSlice";
import resumeScrapingSlice from "./slices/Recruitment/ResumeScraping/ResumeScrapingSlice";
import deleteTaskAttachmentSlice from "./slices/ProjectAndActivities/task/deleteTaskAttachmentSlice";
import PostLetterSlice from "./slices/Letter/PostLetterSlice";
import GetLetterSlice from "./slices/Letter/GetLetterSlice";
import PatchLetterSlice from "./slices/Letter/PatchLetterSlice";
import updateAnnouncementsSlice from "./slices/Announcements/updateAnnouncementsSlice";
import postAnnouncementsSlice from "./slices/Announcements/postAnnouncementsSlice";
import getAnnouncementsSlice from "./slices/Announcements/getAnnouncementsSlice";
import deleteAnnouncementsSlice from "./slices/Announcements/deleteAnnouncementsSlice";
import getByIDAnnouncementsSlice from "./slices/Announcements/getByIDAnnouncementsSlice";
import updateStageTitleSlice from "./slices/Recruitment/Pipeline/updateStageTitleSlice";
import getDepartmentForEvaluationSlice from "./slices/evolution/getDepartmentForEvaluationSlice";
import getDepartmentUsersIdSlice from "./slices/evolution/getDepartmentUsersIdSlice";
import createEvaluationForDepartmentSlice from "./slices/evolution/createEvaluationForDepartmentSlice";
import getAllEvaluationsForManagmntSlice from "./slices/evolution/getAllEvaluationsSlice";
import editEvaluationFormSlice from "./slices/evolution/editEvaluationFormSlice";
import getEvaluationsByDepartmenIdSlice from "./slices/evolution/getEvaluationsByDepartmenIdSlice";
import assignEvaluationFormSlice from "./slices/evolution/assignEvaluationFormSlice";
import getEvaluatedUsersSlice from "./slices/evolution/getEvaluatedUsersSlice";
import getAssignedEvaluationsForUserSlice from "./slices/evolution/getAssignedEvaluationsForUserSlice";
import updateEvaluationsForUserSlice from "./slices/evolution/updateEvaluationsForUserSlice";
import getNotificationSlice from "./slices/Notification/getNotificationSlice";
import postNotificationSlice from "./slices/Notification/postNotificationSlice";
import getDepartmentForNotificationSlice from "./slices/Notification/getDepartmentForNotificationSlice";
import getLeaveMembersByPolicyIdSlice from "./slices/TimeOffAndHoliday/TimeOfPolicies/getLeaveMembersByPolicyIdSlice";
import getAllUserByIdSlice from "./slices/UserManaegement/UserProfile/getAllUserByIdSlice";
import GetAllCountriesForDropdownSlice from "./slices/UserManaegement/UserProfile/GetAllCountriesForDropdownSlice";
import UsersForUpdateSlice from "./slices/Recruitment/Interviews/UsersForUpdateSlice";
import getAllNationalityForDropdownSlice from "./slices/UserManaegement/UserProfile/getAllNationalityForDropdownSlice";
import companyUserTypeForDropdownSlice from "./slices/UserManaegement/UserProfile/companyUserTypeForDropdownSlice";
import updateUserEmailAndPhoneNoSlice from "./slices/UserManaegement/UserProfile/updateUserEmailAndPhoneNoSlice";
import attendanceDataByMonthSlice from "./slices/TimeSheet/attendanceDataByMonthSlice";

const rootSlices = combineReducers({
  user: authSlice,
  companyCreate: createCompanySlice,
  businessType: getBusinessTypeSlice,
  getCities: getCitiesSlice,
  getCountries: getCountriesSlice,
  getTimeZone: getTimeZoneSlice,
  HoursChart: GetHoursChartSlice,
  GetAttandence: GetAttendanceSlice,
  GetAnniversaries: GetUpCommingAnniversariesSlice,
  ForgetPasswordEmail: ForgetPasswordEmailSlice,
  ForgetPasswordChangePassword: ForgetPasswordChangePasswordSlice,
  ForgetPasswordOTP: ForgetPasswordOTPSlice,
  getModule: getModuleSlice,
  createCompanyRole: createCompanyRoleSlice,
  getCompanyRole: getCompanyRoleSlice,
  getModuleBYRoleId: getModuleBYRoleIdSlice,
  getCompanyLeavePolicy: getCompanyLeavePolicySlice,
  createCompanyLeavePolicy: createCompanyLeavePolicySlice,
  getCompanyUsers: getCompanyUsersSlice,
  CreateUser: CreateUserSlice,
  getNationality: getNationalitySlice,
  getcompanyUserType: getcompanyUserTypeSlice,
  getAllUserList: getAllUserListSlice,
  AddWorkSchedule: AddWorkScheduleSlice,
  GetWorkSchedule: GetWorkScheduleSlice,
  GetWorkScheduleById: GetWorkScheduleByIdSlice,
  editWorkSchedule: editWorkScheduleSlice,
  updateCompanyLeavePolicy: updateCompanyLeavePolicySlice,
  getStopHistory: getStopHistorySlice,
  createUserPayroll: createUserPayrollSlice,
  getAllCompanyDepartment: getAllCompanyDepartmentSlice,
  getAllCompanyUser: getAllCompanyUserSlice,
  getUpcommingBirthdays: GetUpcommingBirthdaysSlice,
  getAllUserPayroll: getAllUserPayrollSlice,
  getAllDepartment: getAllDepartmentSlice,
  createDepartment: createDepartmentSlice,
  getAllDepartmentTable: getAllDepartmentTableSlice,
  deleteDepartment: deleteDepartmentSlice,
  updateDepartment: updateDepartmentSlice,
  getPayrollByEmployeeId: getPayrollByEmployeeIdSlice,
  getAllLeaves: getAllLeavesSlice,
  approveOrRejectLeave: approveOrRejectLeaveSlice,
  getRoutesSlice: getRoutesSlice,
  getAllUserTransactions: getAllUserTransactionsSlice,
  markAsPaid: markAsPaidSlice,
  updateUserPayroll: updateUserPayrollSlice,
  companyUserLeaves: companyUserLeavesSlice,
  payrollDetailsByUserId: payrollDetailsByUserIdSlice,
  getCUAssignLeavePolicies: getCUAssignLeavePoliciesSlice,
  addCompanyUserLeave: addCompanyUserLeaveSlice,
  theme: themeSlice,
  getJobOpenings: getJobOpeningsSlice,
  getJobOpeningById: getJobOpeningByIdSlice,
  deleteJobOpenings: deleteJobOpeningSlice,
  editJobOpenings: editJobOpeningSlice,
  createNewJobOpening: createNewJobOpeningSlice,
  getUserStopPoint: getUserStopPointSlice,
  getUserListForStopPoint: getUserListForStopPointSlice,
  getCompanyDepartmentsDropdown: getCompanyDepartmentsDropdownSlice,
  updateJobOpeningActiveStatus: updateJobOpeningActiveStatusSlice,
  companyUserDelete: companyUserDeleteSlice,
  companyUserAttendanceManagementList: companyUserAttendanceManagementListSlice,
  getAllCandidatesByJobId: getAllCandidatesByJobIdSlice,
  getCandidateById: getCandidateByIdSlice,
  getAllInterviews: getAllInterviewsSlice,
  getInterviewById: getInterviewByIdSlice,
  deleteInterview: deleteInterviewSlice,
  updateInterview: updateInterviewSlice,
  getEvaluationById: getEvaluationByIdSlice,
  getAllEvaluations: getAllEvaluationsSlice,
  postEvaluation: postEvaluationSlice,
  updateEvaluation: updateEvaluationSlice,
  deleteEvaluation: deleteEvaluationSlice,
  getInterviewers: getInterviewersSlice,
  attendanceLogsByUserId: attendanceLogsByUserIdSlice,
  manualLogEntry: manualLogEntrySlice,
  getCompanyLocation: getCompanyLocationSlice,
  patchCompanyLocation: patchCompanyLocationSlice,
  checkInterviewEvaluation: checkInterviewEvaluationSlice,
  openingStagesByJobId: openingStagesByJobIdSlice,
  getAllCandidatesByJobOpeningId: getAllCandidatesByJobOpeningIdSlice,
  updateJobOpeningStage: updateJobOpeningStageSlice,
  addOpeningStage: addOpeningStageSlice,
  getAllLead: getAllLeadSlice,
  addCampaigns: addCampaignsSlice,
  getCampaigns: getCampaignsSlice,
  updateCampaigns: updateCampaignsSlice,
  getLeadsLeadById: getLeadsLeadByIdSlice,
  updateLeadStatus: updateLeadStatusSlice,
  addNewLeadlog: addNewLeadlogSlice,
  getLeadlog: getLeadlogSlice,
  addNewLeadlogNote: addNewLeadlogNoteSlice,
  createLeads: createLeadsSlice,
  updateLeadsLead: updateLeadsLeadSlice,
  assignUserNew: assignUserNewSlice,
  getAllTasks: getAllTasksSlice,
  deleteTask: deleteTaskSlice,
  getAllLeadsFollowUp: getAllLeadsFollowUpSlice,
  getLeadsSourceCount: getLeadsSourceCountSlice,
  getLeadsStatusCount: getLeadsStatusCountSlice,
  getLeadLogCount: getLeadLogCountSlice,
  getAllPipelineStages: getAllPipelineStagesSlice,
  createPipelineStages: createPipelineStagesSlice,
  getDepartmentUsers: getDepartmentUsersSlice,
  getLeadByCampaignId: getLeadsByCampaignIdSlice,
  getLeadStats: getLeadStatsSlice,
  getLeadStatsForChart: getLeadStatsForChartSlice,
  editFinalLead: editFinalLeadSlice,
  getfinalLead: getfinalLeadSlice,
  createFinalLead: createFinalLeadsSlice,
  getCountTasks: getCountTasksSlice,
  createTask: createTaskSlice,
  getAllCompanyUserCompanyDepartmentId:
    getAllCompanyUserCompanyDepartmentIdSlice,
  getAllCompanyUsers: getAllCompanyUsersSlice,
  editTask: editTaskSlice,
  getTaskId: getTaskIdSlice,
  markAsComplete: markAsCompleteSlice,
  removeleadPermission: removeleadPermissionSlice,
  addNewLeadFollowUp: addNewLeadFollowUpSlice,
  getAllUsers: getAllUsersSlice,
  PostLetter: PostLetterSlice,
  GetLetter: GetLetterSlice,
  PatchLetter: PatchLetterSlice,
  decodeUrl: decodeUrlSlice,
  leadsUploadExcelByCampaignName: leadsUploadExcelByCampaignNameSlice,
  leadsUploadExcelForCampaign: leadsuploadExcelForCampaignSlice,
  getAllDepartments: getAllDepartmentsSlice,
  resumeScraping: resumeScrapingSlice,
  createProject: createProjectSlice,
  getAllProjects: getAllProjects,
  getProjectById: getProjectById,
  createTaskProject: createProjectTaskSlice,
  getProjectTask: getTaskByIdSlice,
  getTasksByProjectId: getTasksByProjectIdSlice,
  getAllDepartmentsForProject: getAllDepartmentsForProjectSlice,
  getProjectTaskById: getProjectTaskByIdSlice,
  getUsersByDepartmentForTask: getUsersByDepartmentForTaskSlice,
  addTaskNote: createTaskSlice,
  editTaskNote: editTaskNoteSlice,
  deleteTaskNote: deleteTaskNoteSlice,
  completeProjectTask: completeProjectTaskSlice,
  deleteTaskAttachment: deleteTaskAttachmentSlice,
  updateAnnouncements: updateAnnouncementsSlice,
  postAnnouncements: postAnnouncementsSlice,
  getAnnouncements: getAnnouncementsSlice,
  deleteAnnouncements: deleteAnnouncementsSlice,
  getByIDAnnouncements: getByIDAnnouncementsSlice,
  updateStageTitle: updateStageTitleSlice,
  getDepartmentForEvaluation: getDepartmentForEvaluationSlice,
  getDepartmentUsersId: getDepartmentUsersIdSlice,
  createEvaluationForDepartment: createEvaluationForDepartmentSlice,
  getAllEvaluationsForManagmnt: getAllEvaluationsForManagmntSlice,
  editEvaluationForm: editEvaluationFormSlice,
  getEvaluationsByDepartmenId: getEvaluationsByDepartmenIdSlice,
  assignEvaluationForm: assignEvaluationFormSlice,
  getEvaluatedUsers: getEvaluatedUsersSlice,
  getAssignedEvaluationsForUser: getAssignedEvaluationsForUserSlice,
  updateEvaluationsForUser: updateEvaluationsForUserSlice,
  getNotification: getNotificationSlice,
  postNotification: postNotificationSlice,
  getDepartmentForNotification: getDepartmentForNotificationSlice,
  getLeaveMembersByPolicyId: getLeaveMembersByPolicyIdSlice,
  getAllUserById: getAllUserByIdSlice,
  getAllCountriesForDropdown: GetAllCountriesForDropdownSlice,
  usersForUpdate: UsersForUpdateSlice,
  getAllNationalityForDropdown: getAllNationalityForDropdownSlice,
  companyUserTypeForDropdown: companyUserTypeForDropdownSlice,
  updateUserEmailAndPhoneNo: updateUserEmailAndPhoneNoSlice,
  attendanceDataByMonth: attendanceDataByMonthSlice,
});
export const store: Store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  // non serial data issue fixed
  reducer: rootSlices,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
