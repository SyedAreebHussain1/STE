import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import getIdeaQuestionAndAnswerByIdSlice from "./slices/AddNewIdea/getIdeaQuestionAndAnswerByIdSlice";
import getIdeaQuestionSlice from "./slices/AddNewIdea/getIdeaQuestionSlice";
import ideaValidationSlice from "./slices/AddNewIdea/ideaValidationSlice";
import patchIdeaAnswersByIdSlice from "./slices/AddNewIdea/patchIdeaAnswersByIdSlice";
import postIdea1Slice from "./slices/AddNewIdea/postIdea1";
import submitIdeaAnswersSlice from "./slices/AddNewIdea/submitIdeaAnswersSlice";
import authSlice from "./slices/auth/authSlice";
import CompanyCreateSlice from "./slices/auth/CompanyCreateSlice";
import createBusinessSlice from "./slices/auth/createBusinessSlice";
import createCompanyUserSlice from "./slices/Business/createCompanyUserSlice";
import getBusinessByIdSlice from "./slices/Business/getBusinessByIdSlice";
import getBusinessesSlice from "./slices/Business/getBusinessesSlice";
import getCompanyUsersSlice from "./slices/Business/getCompanyUsersSlice";
import updateBusinessOverviewSlice from "./slices/Business/updateBusinessOverviewSlice";
import createBusinessPlanSlice from "./slices/BusinessPlan/createBusinessPlanSlice";
import deleteBusinessPlanSlice from "./slices/BusinessPlan/deleteBusinessPlanSlice";
import getAllBusinessPlansByBusinessIdSlice from "./slices/BusinessPlan/getAllBusinessPlansByBusinessIdSlice";
import getBusinessAnswersCompleteSlice from "./slices/BusinessPlan/getBusinessAnswersComplete";
import getBusinessPlanByIdSlice from "./slices/BusinessPlan/getBusinessPlanByIdSlice";
import updateBusinessLocalisationSlice from "./slices/BusinessPlan/updateBusinessLocalisationSlice";
import createEquitySlice from "./slices/BusinessPlanSetup/Equity/createEquitySlice";
import getEquityByIdSlice from "./slices/BusinessPlanSetup/Equity/getEquityByIdSlice";
import getAllElementsOfPlanSetupSlice from "./slices/BusinessPlanSetup/getAllElementsOfPlanSetupSlice";
import createProductSlice from "./slices/BusinessPlanSetup/Products/createProductSlice";
import getProductByIdSlice from "./slices/BusinessPlanSetup/Products/getProductByIdSlice";
import createServiceSlice from "./slices/BusinessPlanSetup/Services/createServiceSlice";
import getServiceByIdSlice from "./slices/BusinessPlanSetup/Services/getServiceByIdSlice";
import createStaffSlice from "./slices/BusinessPlanSetup/Staff/createStaffSlice";
import getStaffByIdSlice from "./slices/BusinessPlanSetup/Staff/getStaffByIdSlice";
import postInterestedLeadsSlice from "./slices/ComingSoon/postInterestedLeads";
import getCompanyUserByIdSlice from "./slices/CompanyUser/getCompanyUserByIdSlice";
import updateCompanyUserByIdSlice from "./slices/CompanyUser/updateCompanyUserByIdSlice";
import updateUserPasswordSlice from "./slices/CompanyUser/updateUserPasswordSlice";
import updateUserPreferencesSlice from "./slices/CompanyUser/updateUserPreferencesSlice";
import getCountriesSlice from "./slices/Country/getCountriesSlice";
import getCurrenciesSlice from "./slices/Currency/getCurrenciesSlice";
import GetAttendanceSlice from "./slices/Dashboard/GetAttendanceSlice";
import GetHoursChartSlice from "./slices/Dashboard/GetHoursChartSlice";
import GetUpCommingAnniversariesSlice from "./slices/Dashboard/GetUpCommingAnniversariesSlice";
import GetUpcommingBirthdaysSlice from "./slices/Dashboard/GetUpcommingBirthdaysSlice";
import getChapterContentSlice from "./slices/EditPlan/getChapterContentSlice";
import getChapterSlice from "./slices/EditPlan/getChapterSlice";
import updateChapterContentSice from "./slices/EditPlan/updateChapterContentSice";
import ForgetPasswordChangePasswordSlice from "./slices/ForgetPassword/ForgetPasswordChangePasswordSlice";
import ForgetPasswordEmailSlice from "./slices/ForgetPassword/ForgetPasswordEmailSlice";
import ResetPasswordSlice from "./slices/ForgetPassword/ResetPasswordSlice";
import getIdeaEvaluationByIdSlice from "./slices/IdeaEvaluation/getIdeaEvaluationByIdSlice";
import getIdeaValidationByBusinessIdSlice from "./slices/IdeaEvaluation/getIdeaValidationByBusinessIdSlice";
import getLanguagesSlice from "./slices/Language/getLanguagesSlice";
import businessPlanInfoSlice from "./slices/PlanSetup/businessPlanInfoSlice";
import createProductPromotionSlice from "./slices/ProductPromotion/createProductPromotionSlice";
import deleteProductPhotoSlice from "./slices/ProductPromotion/deleteProductPhotoSlice";
import deleteProductVideoSlice from "./slices/ProductPromotion/deleteProductVideoSlice";
import downvoteProductPromotionSlice from "./slices/ProductPromotion/downvoteProductPromotionSlice";
import getAllBusinessPromotionsSlice from "./slices/ProductPromotion/getAllBusinessPromotionsSlice";
import getBusinessPromotionStatsSlice from "./slices/ProductPromotion/getBusinessPromotionStatsSlice";
import getProductPromotionByIdSlice from "./slices/ProductPromotion/getProductPromotionByIdSlice";
import getProductPromotionsByBusinessIdSlice from "./slices/ProductPromotion/getProductPromotionsByBusinessIdSlice";
import getProductPromotionStatsSlice from "./slices/ProductPromotion/getProductPromotionStatsSlice";
import postReplyByReviewIdSlice from "./slices/ProductPromotion/postReplyByReviewIdSlice";
import postReviewByProductIdSlice from "./slices/ProductPromotion/postReviewByProductIdSlice";
import updateProductPromotionSlice from "./slices/ProductPromotion/updateProductPromotionSlice";
import createAnswerSlice from "./slices/Questions/createAnswerSlice";
import getAllTopicSlice from "./slices/Questions/getAllTopicSlice";
import getAnswerByIdsSlice from "./slices/Questions/getAnswerByIdsSlice";
import getQuestionSlice from "./slices/Questions/getQuestionSlice";
import getTableValuesSlice from "./slices/Questions/getTableValuesSlice";
import postTableValuesSlice from "./slices/Questions/postTableValuesSlice";
import updateAnswerSlice from "./slices/Questions/updateAnswerSlice";
import selectedBusinessSlice from "./slices/SelectedBusiness/selectedBusinessSlice";
import selectedBusinessPlanSlice from "./slices/SelectedBusinessPlan/selectedBusinessPlanSlice";
import businessPlanContentBusinessPlanSlice from "./slices/ViewPlanAndDownloadPdf/businessPlanContentBusinessPlanSlice";
import isOnFreePlanSlice from "./slices/ViewPlanAndDownloadPdf/isOnFreePlanSlice";
import getQuestionByIdSlice from "./slices/Questions/getQuestionById";
import linkedAnswersSlice from "./slices/Questions/linkedAnswersSlice";
import BusinessModelCanvasSlice from "./slices/BusinessToolkit/BusinessModelCanvas/BusinessModelCanvasSlice";
import CheckOutSlice from "./slices/CheckOut/CheckOutSlice";
import getSubscriptionPlanSlice from "./slices/SubscriptionPlan/getSubscriptionPlanSlice";
import getSubscriptionPlanByIdSlice from "./slices/SubscriptionPlan/getSubscriptionPlanByIdSlice";
import getAddOnsSlice from "./slices/SubscriptionPlan/getAddOnsSlice";
import addOnPaySlice from "./slices/CheckOut/addOnPaySlice";
import getBusinessCountSlice from "./slices/GetBusinessCount/getBusinessCountSlice";
import getCompanySlice from "./slices/Business/getCompanySlice";
import decodeSlice from "./slices/Decode/decodeSlice";
import createEquityMultipleEquitiesSlice from "./slices/BusinessPlanSetup/Products/createEquityMultipleEquitiesSlice";
import createStaffingMultipleStaffingSlice from "./slices/BusinessPlanSetup/Staff/createStaffingMultipleStaffingSlice";
import getonBoardingRoleSlice from "./slices/onBoardingRoleAndIndustry/getonBoardingRoleSlice";
import getonBoardingIndustrySlice from "./slices/onBoardingRoleAndIndustry/getonBoardingIndustrySlice";
import getPitchQuestionByIdSlice from "./slices/BusinessToolkit/PitchDeck/getPitchQuestionByIdSlice";
import postPitchDeckAnswerSlice from "./slices/BusinessToolkit/PitchDeck/postPitchDeckAnswerSlice";
import pitchDeckSlice from "./slices/BusinessToolkit/PitchDeck/pitchDeckSlice";
import getAttemptedPitchAnswersSlice from "./slices/BusinessToolkit/PitchDeck/getAttemptedPitchAnswersSlice";
import GetPaymentMethodSlice from "./slices/PaymentMethod/GetPaymentMethodSlice";
import PostPaymentMethodSlice from "./slices/PaymentMethod/PostPaymentMethodSlice";
import updatePaymentMethodSlice from "./slices/PaymentMethod/updatePaymentMethodSlice";
import getAllBlogsSlice from "./slices/Blogs/index";
import getAllBlogsCategorySlice from "./slices/Blogs/getAllBlogsCategory";
import getBlogByIdSlice from "./slices/Blogs/getBlogById";
import getAllChatSlice from "./slices/Chatbot/getAllChatSlice";
import getChatHistoryByChatIdSlice from "./slices/Chatbot/getChatHistoryByChatIdSlice";
import getRemainingCreditsSlice from "./slices/Chatbot/getRemainingCreditsSlice";
import updateToneOfVoiceSlice from "./slices/Chatbot/updateToneOfVoiceSlice";
import supportTicketSlice from "./slices/RequestSupport/supportTicketSlice";
import supportTicketsSlice from "./slices/RequestSupport/supportTicketsSlice";
import postIdeaIdSlice from "./slices/AddNewIdea/postIdeaId";
import getUserSubscribedplanSlice from "./slices/SubscriptionPlan/getUserSubscribedplanSlice";

const rootSlices = combineReducers({
  user: authSlice,
  HoursChart: GetHoursChartSlice,
  GetAttandence: GetAttendanceSlice,
  GetAnniversaries: GetUpCommingAnniversariesSlice,
  ForgetPasswordEmail: ForgetPasswordEmailSlice,
  ForgetPasswordChangePassword: ForgetPasswordChangePasswordSlice,
  ResetPassword: ResetPasswordSlice,
  getUpcommingBirthdays: GetUpcommingBirthdaysSlice,
  getBusinessById: getBusinessByIdSlice,
  updateBusinessOverview: updateBusinessOverviewSlice,
  getCountries: getCountriesSlice,
  getCurrencies: getCurrenciesSlice,
  getLanguages: getLanguagesSlice,
  getBusinessPlanById: getBusinessPlanByIdSlice,
  updateBusinessLocalisation: updateBusinessLocalisationSlice,
  createBusinessPlan: createBusinessPlanSlice,
  getPlansByBusinessId: getAllBusinessPlansByBusinessIdSlice,
  deleteBusinessPlan: deleteBusinessPlanSlice,
  CompanyCreate: CompanyCreateSlice,
  createBusiness: createBusinessSlice,
  getCompanyUsers: getCompanyUsersSlice,
  createCompanyUser: createCompanyUserSlice,
  getBusinesses: getBusinessesSlice,
  currentSelectedBusiness: selectedBusinessSlice,
  currentSelectedBusinessPlan: selectedBusinessPlanSlice,
  getQuestion: getQuestionSlice,
  createAnswer: createAnswerSlice,
  updateAnswer: updateAnswerSlice,
  getAnswerByIds: getAnswerByIdsSlice,
  postTableValues: postTableValuesSlice,
  getTableValues: getTableValuesSlice,
  getChapter: getChapterSlice,
  getChapterContent: getChapterContentSlice,
  updateChapterContent: updateChapterContentSice,
  postInterestedLeads: postInterestedLeadsSlice,
  getCompanyUserById: getCompanyUserByIdSlice,
  updateCompanyUserById: updateCompanyUserByIdSlice,
  updateUserPreferences: updateUserPreferencesSlice,
  updateUserPassword: updateUserPasswordSlice,
  getAllTopic: getAllTopicSlice,
  createProductPromotion: createProductPromotionSlice,
  getProductPromotionsByBusinessId: getProductPromotionsByBusinessIdSlice,
  getProductPromotionById: getProductPromotionByIdSlice,
  getProductPromotionStats: getProductPromotionStatsSlice,
  getBusinessPromotionStats: getBusinessPromotionStatsSlice,
  deleteProductVideo: deleteProductVideoSlice,
  deleteProductPhoto: deleteProductPhotoSlice,
  updateProductPromotion: updateProductPromotionSlice,
  getAllBusinessPromotions: getAllBusinessPromotionsSlice,
  downvoteProductPromotion: downvoteProductPromotionSlice,
  postIdea1: postIdea1Slice,
  ideaValidation: ideaValidationSlice,
  getIdeaQuestion: getIdeaQuestionSlice,
  submitIdeaAnswers: submitIdeaAnswersSlice,
  getIdeaEvaluationById: getIdeaEvaluationByIdSlice,
  businessPlanContentBusinessPlan: businessPlanContentBusinessPlanSlice,
  getBusinessAnswersComplete: getBusinessAnswersCompleteSlice,
  getIdeaValidationByBusinessId: getIdeaValidationByBusinessIdSlice,
  getIdeaQuestionAndAnswerById: getIdeaQuestionAndAnswerByIdSlice,
  patchIdeaAnswersById: patchIdeaAnswersByIdSlice,
  postReplyByReviewId: postReplyByReviewIdSlice,
  postReviewByProductId: postReviewByProductIdSlice,
  getBusinessPlanInfo: businessPlanInfoSlice,
  getProductById: getProductByIdSlice,
  getEquityById: getEquityByIdSlice,
  getServiceById: getServiceByIdSlice,
  getStaffById: getStaffByIdSlice,
  getAllElementsOfPlanSetup: getAllElementsOfPlanSetupSlice,
  getQuestionById: getQuestionByIdSlice,
  linkedAnswers: linkedAnswersSlice,
  businessModelCanvasColumns: BusinessModelCanvasSlice,
  checkOut: CheckOutSlice,
  getSubscriptionPlan: getSubscriptionPlanSlice,
  getSubscriptionPlanById: getSubscriptionPlanByIdSlice,
  getAddOns: getAddOnsSlice,
  addOnPay: addOnPaySlice,
  getBusinessCount: getBusinessCountSlice,
  getCompany: getCompanySlice,
  decode: decodeSlice,
  createProduct: createProductSlice,
  createService: createServiceSlice,
  createEquity: createEquitySlice,
  createStaff: createStaffSlice,
  createEquityMultipleEquities: createEquityMultipleEquitiesSlice,
  createStaffingMultipleStaffing: createStaffingMultipleStaffingSlice,
  getonBoardingRole: getonBoardingRoleSlice,
  getonBoardingIndustry: getonBoardingIndustrySlice,
  getPitchQuestionById: getPitchQuestionByIdSlice,
  postPitchDeckAnswer: postPitchDeckAnswerSlice,
  pitchDeck: pitchDeckSlice,
  getAttemptedPitchAnswers: getAttemptedPitchAnswersSlice,
  GetPaymentMethod: GetPaymentMethodSlice,
  PostPaymentMethod: PostPaymentMethodSlice,
  updatePaymentMethod: updatePaymentMethodSlice,
  getAllBlogs: getAllBlogsSlice,
  getAllBlogsCategory: getAllBlogsCategorySlice,
  getBlogById: getBlogByIdSlice,
  isOnFreePlan: isOnFreePlanSlice,
  getAllChat: getAllChatSlice,
  getChatHistoryByChatId: getChatHistoryByChatIdSlice,
  getRemainingCredits: getRemainingCreditsSlice,
  updateToneOfVoice: updateToneOfVoiceSlice,
  supportTicket: supportTicketSlice,
  supportTickets: supportTicketsSlice,
  postIdeaId: postIdeaIdSlice,
  getUserSubscribedplan: getUserSubscribedplanSlice,
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
