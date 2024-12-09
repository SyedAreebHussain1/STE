const API = {
  auth: {
    singup: 'free-lancer/signUp',
    upload: 'free-lancer/uploadProfilePictureOfFreeLancer',
    login: 'free-lancer/signIn',
    verify: 'free-lancer/verify-freeLancer-otp',
    sendOtp: 'free-lancer/resend-freeLancer-otp',
    suspendRequest: 'free-lancer/addFreelancerReasonAfterSuspend',
    tourCheck: "free-lancer/freeLancerUpdate/TourCheck"
  },
  dashboard: {
    banks: 'investor-wallet/BankData',
    profile: 'free-lancer/getProfileDetailsOfFreeLancer',
    walletList: 'free-lancer/freeLancersWithDrawRequets',
    walletBalance: 'free-lancer/getFreeLancerWallet',
    withdrawAmount: 'free-lancer/add-new-withDrawRequest',
    subscriberList: 'free-lancer/getAll/Subscribers',
    earningHistory: 'free-lancer/getAllEarningTransactionHistory',
    packagesList: 'pwpackages/public/getAll',
    discount: 'pwpackages/purchase/public/discount',
    checkout: 'voucher-redeem/purchase',
    checkoutwithpaymob: 'voucher-redeem/purchase/by-paymob',
    soldPackageGraph: 'free-lancer/getFreeLancerGraphEarnCounts',
    sessionsList: 'meet-session',
    manageBooking: 'meet-session/getAll/BookingSessionByUser',
    sessionBookNow: 'meet-session/createBookingSession',
    deleteMeeting: 'meet-session/removeBookingSession',
  },
  profile: {
    updateProfile: 'free-lancer/freeLancerUpdate',
    changePassword: 'free-lancer/updateFreelancerPassword',
  },
};
export { API };
