module.exports = [
  {
    key: "dashboard",
    name: "Wallet",
    icon: require("../icons/l3.png"),
    linkParent: "/app",
  },
  {
    key: "earningHistory",
    name: "Earning History",
    icon: require("../icons/l2.png"),
    child: [
      {
        key: "signUp",
        name: "Sign Up",
        link: "/app/pages/sign-up",
      },
      {
        key: "subscriptions",
        name: "Subscriptions",
        link: "/app/pages/subscription",
      },
      {
        key: "pwInventory",
        name: "PW Inventory",
        link: "/app/pages/pw-inventory",
      },
      {
        key: "transactions",
        name: "Transactions",
        link: "/app/pages/transactions",
      },
    ],
  },

  {
    key: "packages",
    name: "Packages",
    icon: require("../icons/l3.png"),
    linkParent: "/app/pages/packages",
  },
  {
    key: "visit",
    name: "Visit",
    icon: require("../icons/l3.png"),
    linkParent: "/app/pages/visit",
  },
  {
    key: "marketingRequirement",
    name: "Requirement",
    icon: require("../icons/l3.png"),
    linkParent: "/app/pages/marketing-requirement",
  },
  {
    key: "assignedAgencies",
    name: "Assigned Agencies",
    icon: require("../icons/l3.png"),
    linkParent: "/app/pages/assigned-agencies",
  },
];
