const ENDPOINT = {
  auth: {
    login: "Company-Auth/login",
    register: "Company-Auth/registration",
    forgetPasswordEmail: "Company-Auth/forget-password",
    forgetPasswordOTP: "Company-Auth/otp-verification",

    forgetPasswordChangePassword: "Company-Auth/new-password-input",
  },
  company: {
    createCompany: "Company/createNewCompany",
    GetAllBusiness: "business-type/GetAllBusiness",
    getTimeZone: "country/GetAllTimeZone",
    getCountries: "country/GetAllCountries",
    getCities: "city/GetAllCities",
  },
  dashboard: {
    getAllUsers: "",
    getHoursChart: "company-user-attendance/AdminSideDesdhboardForChart",
    getAttendance: "company-user-attendance/AdminSideDesdhboardForTable",
    upcommingBirthdays: "Company-user/UpcommingBirthdays",
    upCommingAnniversaries: "Company-user/UpcommingAnniverseries",
  },
  workSchedule: {
    AddWorkSchedule: "company-work-schedule",
    getWorkSchedule: "company-work-schedule",
    GetWorkScheduleById: "company-work-schedule",
    editWorkSchedule: "company-work-schedule",
  },
  userManagement: {
    createUser: "Company-user/add",
    updateUser: "Company-user/updateUser",
    getNationality: "nationality/GetAllNationality",
    getcompanyUserType: "business-type/companyUserType",
    getAllUserList: "Company-user/users",
    getAllDepartment: "Company-Department/GetAll",
    companyUserDelete: "Company-user/delete",
    getAllUserById: "Company-user/user",
    GetAllCountriesForDropdown: "country/GetAllCountriesForDropdown",
    getAllNationalityForDropdown: "nationality/GetAllNationalityForDropdown",
    companyUserTypeForDropdown: "business-type/companyUserTypeForDropdown",
    updateUserEmailAndPhoneNo: "Company-user/updateUserEmailAndPhoneNo",
  },
  roleManagement: {
    getModule: "Company-Auth/company/Module",
    createCompanyRole: "Company-Auth/create/update/companyRole",
    getCompanyRole: "Company-Auth/company/role",
    getModuleBYRoleId: "Company-Auth/company/role/module",
  },
  timeOffAndHoliday: {
    getCompanyLeavePolicy: "company-leave-policy",
    createCompanyLeavePolicy: "company-leave-policy/create",
    getCompanyUsers: "Company-user/users",
    updateCompanyLeavePolicy: "company-leave-policy/update",
    getAllLeaves: "company-user-attendance/leave/request/management",
    approveOrRejectLeave: "company-user-attendance/leave/request/Approval",
    getLeaveMembersByPolicy: "company-leave-policy/getLeaveMembersByPolicyId",
    deleteCompanyLeavePolicy: "company-leave-policy/delete",
  },
  LiveLocationandStopHistory: {
    getStopHistory: "user-stop-points",
  },
  salaryManagement: {
    createUserPayroll: "user-payroll/createUserPayroll",
    getAllCompanyDepartment: "Company-Department/GetAll",
    getAllCompanyUser: "Company-user/getAllCompanyUser",
    getAllUserPayroll: "user-payroll/getAllUserPayroll",
    getPayrollByEmployeeId: "user-payroll/getPayrollByEmployeeId",
    getUserTransactions: "user-payroll/getUserTransactions",
    markAsPaid: "user-payroll/markAsPaid",
    updateUserPayroll: "user-payroll/updateUserPayroll",
    payrollDetailsByUserId: "user-payroll/payrollDetailsByUserId",
    getAllUserPayrollForAdminSide: "user-payroll/getAllUserPayrollForAdminSide",
  },
  department: {
    createDepartment: "Company-Department/Create",
    getAllDepartment: "Company-Department/GetAll",
    updateDepartment: "Company-Department/update",
    deleteDepartment: "Company-Department/delete",
    getAllCompanyUsers: "Company-Department/GetAllCompanyUsers",
    addManager: "Company-Department/addManager",
  },
  recruitment: {
    getJobOpenings: "job-opening",
    getCompanyDepartmentsDropdown: "job-opening/GetAll/Departments",
    updateJobOpeningStatus: "job-opening/updateJobOpening",
    getAllCandidatesByJobId: "job-opening/getAllCandidates/ByJobOpeningId",
    openingStagesByJobId: "job-opening/opening-stages-by-job-id",
    getAllCandidatesByJobOpeningId: "job-opening/getAllCandidates/ByJobOpening",
    createCandidate: "Candidate",
    scheduleInterview: "Interviews",
    getAllInterviews: "Interviews/getAllInterviews",
    postEvaluation: "interview-evaluation/createInterviewEvaluation",
    getEvaluation: "interview-evaluation/getInterviewEvaluation",
    getAllEvaluations: "interview-evaluation/getAllInterviewEvaluation",
    updateEvalution: "interview-evaluation/updateInterviewEvaluation",
    deleteEvaluation: "interview-evaluation/deleteInterviewEvaluation",
    getInterviewers: "Interviews/GetAll/Departments/Users",
    updateJobOpeningStage: "job-opening/update/JobOpening/Stage",
    addOpeningStage: "job-opening/add-opening-stage",
    checkInterviewEvaluation: "interview-evaluation/checkInterviewEvalution",
    decodeUrl: "job-opening/decodeUrl",
    resume_scraping:
      "https://zeiqu5kbz5nxp3mqoov4z3gira0hhjuo.lambda-url.ap-south-1.on.aws/resume_scraping",
    updateStageTitle: "job-opening/updatetitleByStageId",
    UsersForUpdate: "Interviews/GetAll/Departments/UsersForUpdate",
  },
  userStopLocation: {
    getUserStopPoint: "user-stop-points",
    getUserListForStopPoint: "user-stop-points/user/list",
  },
  getPermission: {
    route: "Company-Auth/user/permission",
  },
  timeOff: {
    getCompanyUsers: "Company-user/users",
    companyUserLeaves: "company-user-attendance/companyUserLeaves",
    getCUAssignLeavePolicies:
      "company-user-attendance/getCUAssignLeavePolicies",
    addCompanyUserLeave: "company-user-attendance/leave/addCompanyUserLeave",
  },
  timeSheet: {
    companyUserAttendanceManagementList:
      "company-user-attendance/management/list",
    attendanceLogsByUserId: "company-user-attendance/attendanceLogsByUserId",
    manualLogEntry: "company-user-attendance/manual-log-entry",
    attendanceDataByMonth:
      "Company-Auth/company/AllUsers/AttendanceData/ByMonth",
  },
  location: {
    getCompanyLocation: "Company/company/profile",
    patchCompanyLocation: "Company/edited/profile",
  },
  salesPlus: {
    addCampaigns: "campaigns",
    getCampaigns: "campaigns",
    getAllLead: "leads",
    updateCampaigns: "campaigns",
    getLeadsLeadById: "leads/lead",
    updateLeadStatus: "leads/updateLeadStatus",
    addNewLeadlog: "leads/add-new-leadlog",
    getLeadlog: "leads/get-leadlog",
    addNewLeadlogNote: "leads/add-new-leadlog-note",
    createLeads: "leads",
    updateLeadsLead: "leads/lead",
    assignUserNew: "leads/assignNewLead",
    getLeadsByCampaignId: "leads/LeadsByCampaignId",
    getAllTasks: "tasks/getAllTasks",
    deleteTask: "tasks/deleteTask",
    getAllLeadsFollowUp: "leads/getAllLeadsFollowUp",
    createFinalLeads: "FinalLeads",
    getAllPipelineStages: "campaigns/getAllPipelineStages",
    createPipelineStages: "campaigns/createPipelineStages",
    editFinalLead: "FinalLeads/editFinalLead",
    getfinalLead: "FinalLeads/getfinalLead",
    getLeadStats: "FinalLeads/getLeadStats",
    getLeadStatsForChart: "FinalLeads/getLeadStatsForChart",
    getLeadsStatusCount: "leads/LeadsStatusCountBy",
    LeadsSourceCount: "leads/LeadsSourceCountBy",
    getLeadLogCount: "leads/leadLog-count",
    getAllUserForWebApp: "Company-user/getAllUserForWebApp",
    getDepartmentUsers: "Company-Department/getDepartmentUsers",
    getCountTasks: "tasks/get-count/tasks",
    createTask: "tasks/createTask",
    getAllCompanyUserCompanyDepartmentId: "Company-user/getAllCompanyUser",
    editTask: "tasks/editTask",
    getTaskId: "tasks/getTask",
    markAsComplete: "tasks/mark-as-complete",
    removeleadPermission: "leads/RemoveleadPermission",
    addNewLeadFollowUp: "leads/addNewLeadFollowUp",
    leadsUploadExcelByCampaignName: "leads/uploadExcelByCampaignName",
    leadsuploadExcelForCampaign: "leads/uploadExcelForCampaign",
    getAllDepartments: "tasks/GetAllDepartments",
  },
  projectAndActivities: {
    project: "Company-Projects",
    task: "project-tasks",
    getTasksByProjectId: "project-tasks/getTasksByProjectId",
    getTaskById: "project-tasks/getTaskById",
    GetAllDepartments: "Company-Projects/GetAllDepartments",
    getUsersByDepartment: "project-tasks/getUsersByDepartment",
    createTaskNote: "project-tasks/createTaskNote",
    updateTaskNote: "project-tasks/updateTaskNote",
    deleteTaskNote: "project-tasks/taskNote",
    completeProjectTask: "project-tasks/completeProjectTask",
    addAttachmentToProjectTask: "project-tasks/createMultipleTaskAttachments",
    deleteAttachment: "project-tasks/attachmentRemoveById",
  },
  letter: {
    postLetter: "letter-head",
    getLetter: "letter-head",
    patchLetter: "letter-head",
  },
  announcement: {
    postAnnouncement: "announcement",
    getAnnouncement: "announcement",
    updateAnnouncement: "announcement",
    deleteAnnouncement: "announcement",
    getByIDAnnouncement: "announcement",
  },
  evolution: {
    createEvolution: "company-evolution-form",
    getDepartmentForEvaluation:
      "company-evolution-form/getDepartmentForEvaluation",
    getDepartmentUsersId: "company-evolution-form/getDepartmentUsers",
    createEvaluationForDepartment:
      "company-evolution-form/createEvaluationForDepartment",
    getAllEvaluations: "company-evolution-form/getAllEvaluations",
    editEvaluationForm: "company-evolution-form/editEvaluationForm",
    getEvaluationsByDepartmenId:
      "company-evolution-form/getEvaluationsByDepartmenId",
    assignEvaluationForm: "company-evolution-form/assignEvaluationForm",
    getEvaluatedUsers: "company-evolution-form/getEvaluatedUsers",
    getAssignedEvaluationsForUser:
      "company-evolution-form/getAssignedEvaluationsForUser",
    updateEvaluationsForUser: "company-evolution-form/updateEvaluationsForUser",
  },
  notification: {
    getNotification: "manual-notification/findAllNotificationByCompanyId",
    postNotification: "manual-notification",
    getDepartmentForNotification:
      "manual-notification/getDepartmentForNotification",
  },
};
export { ENDPOINT };
