import { getBusinessPlan } from "../../store/slices/Dashboard/Businesses/getBusinessPlan";

const ENDPOINT = {
  auth: {
    login: "System-Auth/logIn",
  },
  chapter: {
    chapter: "chapter",
    getChapterAdmin: "chapter/admin/paginated",
  },
  topic: {
    topic: "topic",
    getTopicAdmin: "topic/admin/paginated",
    getTopicByChapterId: "topic/chapter",
  },
  question: {
    question: "question",
    getQuestionAdmin: "question/admin/paginated",
  },
  package: {
    createPackage: "package",
    packageAddOn: "package/add-Ons",
  },
  users: {
    getUsers: "System-Auth/all/onboard-users",
    affilateUser: "affilate-user",
    getaffilateUser: "affilate-user/AllAffilateUsers",
  },
  decode: {
    decodeUrlApi: "affilate-user/decodeUrl",
  },
  ideaValidation: {
    ideaValidate: "idea-answer/admin/ideaValidations",
  },
  businesses: {
    getBusiness: "business/admin/businesses",
    getBusinessPlan: "business/admin/businessPlans",
  },
  leads: {
    getLeads: "interested-leads",
  },
  blogs:{
    postBlogsCategory: "blogs/addBlogCategory",
    getBlogsCategory: "blogs/admin/getAllBlogsCategory",
    allBlogs: "blogs",
    getAllBlogs : "blogs/admin/getAllBlogs",
    delAllBlogs: "blogs/removeBlog",
    updateAllBlogs : "blogs/updateBlog",
    removePictures : "blogs/removeBlogPictures"
  },
  coupons:{
    addCoupon : "stripe/create-coupon",
    getCoupon : "stripe/coupons",
    delCoupons : "stripe/coupon/remove"
  }
};
export { ENDPOINT };
