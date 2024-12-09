/* eslint-disable */

import React from "react";
import Loading from "dan-components/Loading";
import loadable from "../utils/loadable";

// elounge pages
export const AssignedAgencies = loadable(
  () => import("./Pages/AssignedAgencies"),
  {
    fallback: <Loading />,
  }
);
export const AssignedAgenciesLead = loadable(
  () => import("./Pages/AssignedAgenciesLead"),
  {
    fallback: <Loading />,
  }
);
export const AssignedAgenciesManager = loadable(
  () => import("./Pages/AssignedAgenciesManager"),
  {
    fallback: <Loading />,
  }
);
export const MarketingRequirement = loadable(
  () => import("./Pages/MarketingRequirement"),
  {
    fallback: <Loading />,
  }
);
export const MarketingRequirementLead = loadable(
  () => import("./Pages/MarketingRequirementLead"),
  {
    fallback: <Loading />,
  }
);
export const MarketingRequirementManagement = loadable(
  () => import("./Pages/MarketingRequirementManagement"),
  {
    fallback: <Loading />,
  }
);
export const LeadVisit = loadable(() => import("./Pages/LeadVisit"), {
  fallback: <Loading />,
});
export const LeadWallet = loadable(() => import("./Pages/LeadWallet"), {
  fallback: <Loading />,
});

export const LeadPwInventory = loadable(
  () => import("./Pages/Monitoring/PwInventory"),
  {
    fallback: <Loading />,
  }
);
export const WalletNotForSalesUser = loadable(
  () => import("./Pages/WalletNotForSaleUser/index"),
  {
    fallback: <Loading />,
  }
);
export const LeadSignUps = loadable(
  () => import("./Pages/Monitoring/SignUps"),
  {
    fallback: <Loading />,
  }
);
export const LeadSubscribers = loadable(
  () => import("./Pages/Monitoring/Subscribers"),
  {
    fallback: <Loading />,
  }
);
export const LeadTransactions = loadable(
  () => import("./Pages/Monitoring/Transactions"),
  {
    fallback: <Loading />,
  }
);
export const LeadToken = loadable(() => import("./Pages/Monitoring/Token"), {
  fallback: <Loading />,
});
export const LeadSaleQuotation = loadable(
  () => import("./Pages/Monitoring/SaleQuotation"),
  {
    fallback: <Loading />,
  }
);
export const LeadSaleOrder = loadable(
  () => import("./Pages/Monitoring/SaleOrder"),
  {
    fallback: <Loading />,
  }
);

export const Visit = loadable(() => import("./Pages/Visit/index"), {
  fallback: <Loading />,
});
export const VisitManager = loadable(
  () => import("./Pages/VisitManager/VisitManager"),
  {
    fallback: <Loading />,
  }
);

export const ProfilePage = loadable(() => import("./Pages/Profile"), {
  fallback: <Loading />,
});
export const ResetPassword = loadable(
  () => import("./Pages/Users/ResetPassword"),
  {
    fallback: <Loading />,
  }
);
export const Wallet = loadable(() => import("./Pages/Wallet"), {
  fallback: <Loading />,
});
export const Division = loadable(
  () => import("./Pages/LoungeWallet/Division/Division"),
  {
    fallback: <Loading />,
  }
);
export const PwInventoryTracking = loadable(
  () => import("./Pages/Tracking/PwInventory"),
  {
    fallback: <Loading />,
  }
);
export const SubscribersTracking = loadable(
  () => import("./Pages/Tracking/Subscribers"),
  {
    fallback: <Loading />,
  }
);
export const SignUpsTracking = loadable(
  () => import("./Pages/Tracking/SignUps/index"),
  {
    fallback: <Loading />,
  }
);
export const SaleOrderTracking = loadable(
  () => import("./Pages/Tracking/SaleOrder"),
  {
    fallback: <Loading />,
  }
);
export const SaleQuotationTracking = loadable(
  () => import("./Pages/Tracking/SaleQuotation"),
  {
    fallback: <Loading />,
  }
);
export const TokenTracking = loadable(() => import("./Pages/Tracking/Token"), {
  fallback: <Loading />,
});
export const Subscribers = loadable(
  () => import("./Pages/EarningHistory/Subscribers"),
  {
    fallback: <Loading />,
  }
);
export const SignUps = loadable(
  () => import("./Pages/EarningHistory/SignUps"),
  {
    fallback: <Loading />,
  }
);
export const Transactions = loadable(
  () => import("./Pages/EarningHistory/Transactions"),
  {
    fallback: <Loading />,
  }
);
export const TransactionsTracking = loadable(
  () => import("./Pages/Tracking/Transactions"),
  {
    fallback: <Loading />,
  }
);
export const PwInventory = loadable(
  () => import("./Pages/EarningHistory/PwInventory"),
  {
    fallback: <Loading />,
  }
);
export const SaleOrder = loadable(
  () => import("./Pages/EarningHistory/SaleOrder"),
  {
    fallback: <Loading />,
  }
);
export const SaleQuotation = loadable(
  () => import("./Pages/EarningHistory/SaleQuotation"),
  {
    fallback: <Loading />,
  }
);
export const Token = loadable(() => import("./Pages/EarningHistory/Token"), {
  fallback: <Loading />,
});
//lounge pages

// export const LoungeTabs = loadable(
//   () => import("./Pages/Lounge/components/LoungeTabs"),
//   {
//     fallback: <Loading />,
//   }
// );
// export const AllAgencies = loadable(
//   () => import("./Pages/Management/helpers/AllAgencies"),
//   {
//     fallback: <Loading />,
//   }
// );

// export const LoungeScreen = loadable(() => import("./Pages/Lounge"), {
//   fallback: <Loading />,
// });
// export const ManageLounge = loadable(() => import("./Pages/ManageLounge"), {
//   fallback: <Loading />,
// });
export const Packages = loadable(() => import("./Pages/Packages"), {
  fallback: <Loading />,
});
export const Checkout = loadable(() => import("./Pages/Checkout"), {
  fallback: <Loading />,
});
// export const CurrentSubscribers = loadable(
//   () => import("./Pages/CurrentSubscribers"),
//   {
//     fallback: <Loading />,
//   }
// );
// export const AllInventories = loadable(() => import("./Pages/AllInventories"), {
//   fallback: <Loading />,
// });
// export const InterestedInventories = loadable(
//   () => import("./Pages/InterestedInventories"),
//   {
//     fallback: <Loading />,
//   }
// );
// export const AllProjectInventories = loadable(
//   () => import("./Pages/AllInventoiesByProjectId"),
//   {
//     fallback: <Loading />,
//   }
// );
// export const AddInventory = loadable(() => import("./Pages/AddInventory"), {
//   fallback: <Loading />,
// });
// export const EditInventory = loadable(() => import("./Pages/EditInventory"), {
//   fallback: <Loading />,
// });
// export const Management = loadable(() => import("./Pages/Management"), {
//   fallback: <Loading />,
// });
// export const Wallet = loadable(() => import("./Pages/Wallet"), {
//   fallback: <Loading />,
// });
// export const Earnings = loadable(() => import("./Pages/Earnings"), {
//   fallback: <Loading />,
// });
// export const Support = loadable(() => import("./Pages/Support"), {
//   fallback: <Loading />,
// });

// Landing Page
export const HomePage = loadable(() => import("./LandingPage/HomePage"), {
  fallback: <Loading />,
});
export const SliderPage = loadable(() => import("./LandingPage/SliderPage"), {
  fallback: <Loading />,
});
export const BlogHome = loadable(() => import("./Pages/Blog"), {
  fallback: <Loading />,
});
export const Article = loadable(() => import("./Pages/Blog/Article"), {
  fallback: <Loading />,
});

// Dashboard
export const PersonalDashboard = loadable(
  () => import("./Dashboard/PersonalDashboard"),
  {
    fallback: <Loading />,
  }
);
// export const SalesHistory = loadable(() => import("./Pages/SalesHistory"), {
//   fallback: <Loading />,
// });
export const CrmDashboard = loadable(() => import("./Dashboard/CrmDashboard"), {
  fallback: <Loading />,
});
export const CryptoDashboard = loadable(
  () => import("./Dashboard/CryptoDashboard"),
  {
    fallback: <Loading />,
  }
);

// Widgets
export const Infographics = loadable(() => import("./Widgets/Infographics"), {
  fallback: <Loading />,
});
export const MiniApps = loadable(() => import("./Widgets/MiniApps"), {
  fallback: <Loading />,
});
export const Analytics = loadable(() => import("./Widgets/Analytics"), {
  fallback: <Loading />,
});
export const InfoUpdates = loadable(() => import("./Widgets/InfoUpdates"), {
  fallback: <Loading />,
});
export const Status = loadable(() => import("./Widgets/Status"), {
  fallback: <Loading />,
});

// Layouts
export const AppLayout = loadable(() => import("./Layouts/AppLayout"), {
  fallback: <Loading />,
});
export const Responsive = loadable(() => import("./Layouts/Responsive"), {
  fallback: <Loading />,
});
export const Grid = loadable(() => import("./Layouts/Grid"), {
  fallback: <Loading />,
});

// Tables
export const SimpleTable = loadable(() => import("./Tables/BasicTable"), {
  fallback: <Loading />,
});
export const AdvancedTable = loadable(() => import("./Tables/AdvancedTable"), {
  fallback: <Loading />,
});
export const TreeTable = loadable(() => import("./Tables/TreeTable"), {
  fallback: <Loading />,
});
export const EditableCell = loadable(() => import("./Tables/EditableCell"), {
  fallback: <Loading />,
});
export const TablePlayground = loadable(
  () => import("./Tables/TablePlayground"),
  {
    fallback: <Loading />,
  }
);

// Forms
export const ReduxForm = loadable(() => import("./Forms/ReduxForm"), {
  fallback: <Loading />,
});
export const DateTimePicker = loadable(() => import("./Forms/DateTimePicker"), {
  fallback: <Loading />,
});
export const CheckboxRadio = loadable(() => import("./Forms/CheckboxRadio"), {
  fallback: <Loading />,
});
export const Switches = loadable(() => import("./Forms/Switches"), {
  fallback: <Loading />,
});
export const Selectbox = loadable(() => import("./Forms/Selectbox"), {
  fallback: <Loading />,
});
export const Rating = loadable(() => import("./Forms/Rating"), {
  fallback: <Loading />,
});
export const SliderRange = loadable(() => import("./Forms/SliderRange"), {
  fallback: <Loading />,
});
export const Buttons = loadable(() => import("./Forms/Buttons"), {
  fallback: <Loading />,
});
export const ToggleButton = loadable(() => import("./Forms/ToggleButton"), {
  fallback: <Loading />,
});
export const DialButton = loadable(() => import("./Forms/DialButton"), {
  fallback: <Loading />,
});
export const Textbox = loadable(() => import("./Forms/Textbox"), {
  fallback: <Loading />,
});
export const Autocomplete = loadable(() => import("./Forms/Autocomplete"), {
  fallback: <Loading />,
});
export const TextEditor = loadable(() => import("./Forms/TextEditor"), {
  fallback: <Loading />,
});
export const Upload = loadable(() => import("./Forms/Upload"), {
  fallback: <Loading />,
});

// UI Components
export const Badges = loadable(() => import("./UiElements/Badges"), {
  fallback: <Loading />,
});
export const Avatars = loadable(() => import("./UiElements/Avatars"), {
  fallback: <Loading />,
});
export const Accordion = loadable(() => import("./UiElements/Accordion"), {
  fallback: <Loading />,
});
export const List = loadable(() => import("./UiElements/List"), {
  fallback: <Loading />,
});
export const PopoverTooltip = loadable(
  () => import("./UiElements/PopoverTooltip"),
  {
    fallback: <Loading />,
  }
);
export const Snackbar = loadable(() => import("./UiElements/Snackbar"), {
  fallback: <Loading />,
});
export const Typography = loadable(() => import("./UiElements/Typography"), {
  fallback: <Loading />,
});
export const Tabs = loadable(() => import("./UiElements/Tabs"), {
  fallback: <Loading />,
});
export const Cards = loadable(() => import("./UiElements/Cards"), {
  fallback: <Loading />,
});
export const ImageGrid = loadable(() => import("./UiElements/ImageGrid"), {
  fallback: <Loading />,
});
export const Progress = loadable(() => import("./UiElements/Progress"), {
  fallback: <Loading />,
});
export const DialogModal = loadable(() => import("./UiElements/DialogModal"), {
  fallback: <Loading />,
});
export const Steppers = loadable(() => import("./UiElements/Steppers"), {
  fallback: <Loading />,
});
export const DrawerMenu = loadable(() => import("./UiElements/DrawerMenu"), {
  fallback: <Loading />,
});
export const Paginations = loadable(() => import("./UiElements/Paginations"), {
  fallback: <Loading />,
});
export const Breadcrumbs = loadable(() => import("./UiElements/Breadcrumbs"), {
  fallback: <Loading />,
});
export const Icons = loadable(() => import("./UiElements/Icons"), {
  fallback: <Loading />,
});
export const IonIcons = loadable(() => import("./UiElements/IonIcons"), {
  fallback: <Loading />,
});
export const SliderCarousel = loadable(
  () => import("./UiElements/SliderCarousel"),
  {
    fallback: <Loading />,
  }
);
export const Tags = loadable(() => import("./UiElements/Tags"), {
  fallback: <Loading />,
});
export const Dividers = loadable(() => import("./UiElements/Dividers"), {
  fallback: <Loading />,
});

// Chart
export const LineCharts = loadable(() => import("./Charts/LineCharts"), {
  fallback: <Loading />,
});
export const BarCharts = loadable(() => import("./Charts/BarCharts"), {
  fallback: <Loading />,
});
export const AreaCharts = loadable(() => import("./Charts/AreaCharts"), {
  fallback: <Loading />,
});
export const PieCharts = loadable(() => import("./Charts/PieCharts"), {
  fallback: <Loading />,
});
export const RadarCharts = loadable(() => import("./Charts/RadarCharts"), {
  fallback: <Loading />,
});
export const ScatterCharts = loadable(() => import("./Charts/ScatterCharts"), {
  fallback: <Loading />,
});
export const CompossedCharts = loadable(
  () => import("./Charts/CompossedCharts"),
  {
    fallback: <Loading />,
  }
);
export const DoughnutCharts = loadable(
  () => import("./Charts/DoughnutCharts"),
  {
    fallback: <Loading />,
  }
);
export const BarDirection = loadable(() => import("./Charts/BarDirection"), {
  fallback: <Loading />,
});
export const LineScatterChart = loadable(
  () => import("./Charts/LineScatterChart"),
  {
    fallback: <Loading />,
  }
);
export const AreaFilledChart = loadable(
  () => import("./Charts/AreaFilledChart"),
  {
    fallback: <Loading />,
  }
);
export const RadarPolarCharts = loadable(
  () => import("./Charts/RadarPolarCharts"),
  {
    fallback: <Loading />,
  }
);

// Pages
export const Login = loadable(() => import("./Pages/Users/Login"), {
  fallback: <Loading />,
});
export const LoginV2 = loadable(() => import("./Pages/Users/LoginV2"), {
  fallback: <Loading />,
});
export const LoginV3 = loadable(() => import("./Pages/Users/LoginV3"), {
  fallback: <Loading />,
});
export const Register = loadable(() => import("./Pages/Users/Register"), {
  fallback: <Loading />,
});
export const RegisterV2 = loadable(() => import("./Pages/Users/RegisterV2"), {
  fallback: <Loading />,
});
export const RegisterV3 = loadable(() => import("./Pages/Users/RegisterV3"), {
  fallback: <Loading />,
});
export const ComingSoon = loadable(() => import("./Pages/ComingSoon"), {
  fallback: <Loading />,
});
export const Profile = loadable(() => import("./Pages/UserProfile"), {
  fallback: <Loading />,
});
export const Timeline = loadable(() => import("./SampleApps/Timeline"), {
  fallback: <Loading />,
});
export const BlankPage = loadable(() => import("./Pages/BlankPage"), {
  fallback: <Loading />,
});

// export const Pricing = loadable(() => import("./Pages/Pricing"), {
//   fallback: <Loading />,
// });
export const Ecommerce = loadable(() => import("./SampleApps/Ecommerce"), {
  fallback: <Loading />,
});
export const ProductPage = loadable(
  () => import("./SampleApps/Ecommerce/ProductPage"),
  {
    fallback: <Loading />,
  }
);
export const CheckoutPage = loadable(
  () => import("./SampleApps/Ecommerce/CheckoutPage"),
  {
    fallback: <Loading />,
  }
);
export const Contact = loadable(() => import("./SampleApps/Contact"), {
  fallback: <Loading />,
});

export const LockScreen = loadable(() => import("./Pages/Users/LockScreen"), {
  fallback: <Loading />,
});
export const Chat = loadable(() => import("./SampleApps/Chat"), {
  fallback: <Loading />,
});
export const Email = loadable(() => import("./SampleApps/Email"), {
  fallback: <Loading />,
});
export const Photos = loadable(() => import("./Pages/Photos"), {
  fallback: <Loading />,
});
export const Calendar = loadable(() => import("./SampleApps/Calendar"), {
  fallback: <Loading />,
});
export const TaskBoard = loadable(() => import("./SampleApps/TaskBoard"), {
  fallback: <Loading />,
});
export const Invoice = loadable(() => import("./SampleApps/Invoice"), {
  fallback: <Loading />,
});

// Maps
export const MapMarker = loadable(() => import("./Maps/MapMarker"), {
  fallback: <Loading />,
});
export const MapDirection = loadable(() => import("./Maps/MapDirection"), {
  fallback: <Loading />,
});
export const SearchMap = loadable(() => import("./Maps/SearchMap"), {
  fallback: <Loading />,
});
export const TrafficIndicator = loadable(
  () => import("./Maps/TrafficIndicator"),
  {
    fallback: <Loading />,
  }
);
export const StreetViewMap = loadable(() => import("./Maps/StreetViewMap"), {
  fallback: <Loading />,
});

// Other
export const NotFound = loadable(() => import("./NotFound/NotFound"), {
  fallback: <Loading />,
});
export const NotFoundDedicated = loadable(
  () => import("./Pages/Standalone/NotFoundDedicated"),
  {
    fallback: <Loading />,
  }
);
export const Error = loadable(() => import("./Pages/Error"), {
  fallback: <Loading />,
});
export const Maintenance = loadable(() => import("./Pages/Maintenance"), {
  fallback: <Loading />,
});
export const Parent = loadable(() => import("./Parent"), {
  fallback: <Loading />,
});
export const Settings = loadable(() => import("./Pages/Settings"), {
  fallback: <Loading />,
});
export const HelpSupport = loadable(() => import("./Pages/HelpSupport"), {
  fallback: <Loading />,
});
