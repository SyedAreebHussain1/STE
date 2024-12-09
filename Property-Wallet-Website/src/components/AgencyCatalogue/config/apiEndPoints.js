const url = process.env.REACT_APP_BASE_URL;
// const url = process.env.REACT_APP_BASE_URL_PRODUCTION;
// const url = process.env.REACT_APP_BASE_URL_DEVELOPMENT;
// const url = " http://localhost:3000"
export const API = {
  announcements: {
    getAnnouncementDetail: `${url}/v1/catalogue/getAnnouncementDetail`,
  },
  meetOurTeam: {
    getTeamDetail: `${url}/v1/catalogue/getTeamDetail`,
    getMeetingList: `${url}/v1/public-meeting/get-public-calendar/slot`,
    bookMeeting: `${url}/v1/public-meeting/public-calendar/slot-booking`,
    createReview: `${url}/v1/rate-and-review/createReviewForAgent`,
  },
  inventories: {
    getInventoriesDetails: `${url}/v1/agency/getlistingForPublic`,
    getAllPWProjectList: `${url}/v1/property-wallet-project/getAllProjectList/Forpublic`,
    getCatalogueDetailByAgencyId: `${url}/v1/catalogue/getCatalogueDetailByAgencyId`,
    getInventoryDetailsForPublic: `${url}/v1/inventory/getInventoryDetailsForPublic`,
    getProjectByIdpublic: `${url}/v1/property-wallet-project/getProjectByIdpublic`,
    addPublicLead: `${url}/v1/lead/add-public-lead`,
    addPublicPWLead: `${url}/v1/lead/add-new-lead-forPublic`,
    isAgencyWithinRadius: `${url}/v1/dashboard/isAgencyWithinRadius`,
    getProjectTypes: `${url}/v1/project-type`,
    getProjectSubTypes: `${url}/v1/project-sub-type/getList`,
    getLandArea: `${url}/v1/land-area`,
  },
  chat: {
    initiateChat: `${url}/v1/public-chat/start-chat`,
    sendChatMessage: `${url}/v1/public-chat/send-message/to-agent`,
    getUserMessages: `${url}/v1/public-chat/getAllChats/ForPublicUser`,
  },
  testinomials: {
    createReviewForAgency: `${url}/v1/rate-and-review/createReviewForAgency`,
    getReviewForAgencyById: `${url}/v1/rate-and-review/getReviewForAgencyById`,
  },
  agency: {
    getAgencyDetails: `${url}/v1/catalogue/getAgencyDetailByAgencyId`,
    addLeadForm: `${url}/v1/lead/add-new-lead-forCatalogue`,
  },
  analytic: {
    analyticClick: `${url}/v1/analytic/analyticClick`,
    analyticView: `${url}/v1/analytic/analyticView`,
  },
  packages: {
    packagesList: `${url}/v1/pwpackages/public/getAll`,
    discount: `${url}/v1/pwpackages/purchase/public/discount`,
    checkout: `${url}/v1/voucher-redeem/purchase`,
    checkoutwithpaymob: `${url}/v1/voucher-redeem/purchase/by-paymob`,
    getAllCustomPackages: `${url}/v1/pwpackages/getAllCustomPackages/forWebsite`,
    createPackage: `${url}/v1/pwpackages/createCustomPackage`,
  },
};
