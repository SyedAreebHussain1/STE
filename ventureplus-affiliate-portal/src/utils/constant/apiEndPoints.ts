const ENDPOINT = {
  auth: {
    login: "Affilate-user/login",
    registration: "Affilate-user/registration",
    forgetPassword: "Affilate-user/forget-password",
    setNewPassword: "Affilate-user/set-new-password",
  },
  decodeUrl: "company-user/decodeUrl",
  profile: {
    affilateUserProfile: "Affilate-user/profile",
    affilateUserProfileUpdate: "Affilate-user/profile/update",
  },
  bank: {
    affilateBankDetails: "Affilate-user/bank-details",
    updateAffilateUserBankDetails: "Affilate-user/bank-details/update",
  },
  marketing: {
    marketing: "Affilate-user/marketing/materials",
  },
  ebooks: {
    ebooks: "Affilate-user/ebooks/materials",
  },
  main: {
    getAllSubscribers: "Affilate-user/AllSubscribers",
    getAllSignups: "Affilate-user/AllSignUps",
    dashboardStats: "Affilate-user/dashboard",
  },
  wallet: {
    getTransactionHistory: "Affilate-user/transactionHistory",
    walletStats: "Affilate-user/wallet/stats",
  },
};
export { ENDPOINT };
