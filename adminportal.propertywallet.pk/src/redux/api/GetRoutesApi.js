import Dashboard from '../../components/Dashboard/Dashboard'
import { API } from '../../config/apiEndPoints'
import AllInventoriesPage from '../../pages/InventoryManagement/Allinventories/AllInventoriesPage'
import OverviewPage from '../../pages/InventoryManagement/Overview/OverviewPage'
import RolesPage from '../../pages/Settings/Roles/RolesPage'
import UserManagementPage from '../../pages/Settings/UsersManagement/UserManagementPage'
import { getError, getRequest } from '../../utils/baseApi'
import { getItem } from '../../utils/routes'
import {
  getRoutes,
  getRoutesFailure,
  getRoutesSuccess,
} from '../slices/GetRoutesSlice'

// icon
import setting from '../../components/assest/icon/dashboard-icon/0.1.png'
import supporticon from '../../components/assest/icon/supporticon.png'
import lead from '../../components/assest/icon/dashboard-icon/0.5.png'
import sales_order from '../../components/assest/icon/dashboard-icon/0.4.png'
import advertisement from '../../components/assest/icon/dashboard-icon/0.2.png'
import report from '../../components/assest/icon/dashboard-icon/0.3.png'
import dashboard_ic from '../../components/assest/icon/dashboard-icon/0.6.png'
import commissionicon from '../../components/assest/icon/dashboard-icon/commissionreq.png'
import propertyInventory from '../../components/assest/icon/dashboard-icon/0.7.png'
import inventoryManagment from '../../components/assest/icon/dashboard-icon/0.8.png'
import UserTrafficIcon from '../../components/assest/icon/dashboard-icon/usertraffic.png'
import crmReqIcon from '../../components/assest/icon/dashboard-icon/crmreqicon.png'
import refeerals from '../../components/assest/icon/dashboard-icon/refeerals.png'
import appusers from '../../components/assest/icon/dashboard-icon/appusers.png'
import listingIcon from '../../components/assest/icon/listing-icon.png'
import subsIcon from '../../components/assest/icon/subs.png'
import hrIcon from '../../components/assest/icon/hr.png'
import loungeIcon from '../../components/assest/icon/lounge.png'

import { resetState } from '../store'
import { loginFailure } from '../slices/Auth/LoginSlice'
import AddProjectPage from '../../pages/AddProject/AddProjectPage'
import UserTrafficPage from '../../pages/UserTraffic/UserTrafficPage'
// import PropertyWalletInventory from "../../pages/PropertyWalletInventory/PropertyWalletInventory";
import ViewDetails from '../../components/PropertyWalletInventory/ProjectDetails/ViewDetail/ViewDetails'
import AddSinglePropertyPage from '../../pages/AddSingleProperty/AddSinglePropertyPage'
import PromotionsPage from '../../pages/Advertisement/Promotions/PromotionsPage'
import ListingsPage from '../../pages/Advertisement/Listings/ListingsPage'
import ProjectDetailsPage from '../../pages/PropertyWalletInventory/ProjectDetailsPage'
import PropertiesDetailsPage from '../../pages/PropertyWalletInventory/PropertiesDetailsPage'
import AddProjectInventory from '../../components/PropertyWalletInventory/AddProjectInventory/AddProjectInventory'
import CrmRequestPage from '../../pages/CrmRequests/CrmRequestPage'
import CommissionRequestsPage from '../../pages/CommissionRequests/CommissionRequestsPage'
import UpdateProjectInventory from '../../components/PropertyWalletInventory/UpdateProjectInventory/UpdateProjectInventory'
import LeadsPage from '../../pages/Leads/LeadsPage'
import RefeeralsPage from '../../pages/Refeerals/RefeeralsPage'
import Token from '../../components/Payments/TokenRequest/Token'
// import UnverfiedUsers from "../../components/Support/UnverfiedUsers/UnverifiedUsers";
import UnverfiedUsersPage from '../../pages/Support/UnverfiedUsersPage'
import QueriesPage from '../../pages/Support/QueriesPage'
import AppUserPage from '../../pages/AppUser/AppUser'
// import UserProfilePage from "../../pages/UserProfile/UserProfilePage";
import EditSingleProperty from '../../components/EditSingleProperty/EditSingleProperty'
import UserDetail from '../../components/AppUser/UserDetail/UserDetail'
import AgenciesDetailPage from '../../pages/InventoryManagement/AgenciesDetail/AgenciesDetailPage'
import AgencyUserDetail from '../../components/InventoryManagement/AgenciesDetail/UserDetail/UserDetail'
import InventoriesPage from '../../pages/PropertyWalletInventory/InventoriesPage'
import SalesLogPage from '../../pages/PropertyWalletInventory/SalesLogPage'
import FreelancingPage from '../../pages/PropertyWalletInventory/FreelancingPage'
import ManagementPage from '../../pages/InventoryManagement/Management/ManagementPage'
import ReportsManagementPage from '../../pages/ReportsManagement/ReportsManagementPage'
import PaymentRequestsPage from '../../pages/Support/PaymentRequestsPage'
import Investor from '../../components/Servicepoints/Investors/Investor'
import Owner from '../../components/Servicepoints/Owners/Owner'
import WithdrawRequestPage from '../../pages/WithdrawRequest/WithdrawRequestPage'
import OnlineUser from '../../components/OnlineUsers/OnlineUser'
import EditProjectPage from '../../pages/EditProject/EditProjectPage'
import SaleOrderPage from '../../pages/SaleOrder/SaleOrderPage'
import NotificationPage from '../../pages/Advertisement/Notifcation/NotificationPage'
import ManageSubscriptionPage from '../../pages/ManageSubscription/ManageSubscriptionPage'
import SubscriptionIcon from '../../components/assest/icon/subscription.png'
import WithdrawRequest from '../../components/Freelance/WithdrawRequest/WithdrawRequest'
import ListingsApprovalsPage from '../../pages/ListingsApprovals/ListingsApprovalsPage'
import HumanResourcesPage from '../../pages/HumanResources/HumanResourcesPage'
import HumanResourceDetails from '../../components/HumanResources/helpers/HumanResourceDetails/HumanResourceDetails'
import SubscriberPage from '../../pages/ListingManagement/Subscribers/SubscriberPage'
import ManageListingPage from '../../pages/ListingManagement/ManageListing/ManageListingPage'
import GeneralListingViewer from '../../components/ListingManagement/ManageListings/Tabs/GeneralListings/helpers/GeneralListingViewer/GeneralListingViewer'
import HotListingViewer from '../../components/ListingManagement/ManageListings/Tabs/HotListings/helpers/HotListingViewer/HotListingViewer'
import DiscountPage from '../../pages/Discount/DiscountPage'
import SubscriptionAddonPage from '../../pages/SubscriptionAddon/SubscriptionAddonPage'
import InventoryPage from '../../pages/Inventory/InventoryPage'
import InventoryViewer from '../../components/Inventory/helpers/InventoryViewer/InventoryViewer'
import ManageMeetingsPage from '../../pages/HumanResources/ManageMeetingsPage'
import ManageMeetingsDetails from '../../components/ManageMeetings/helpers/ManageMeetingsDetails/ManageMeetingsDetails'
import MilestonePage from '../../pages/Milestone/MilestonePage'
import LoungePage from '../../pages/Lounge/LoungePage'
import WithdrawRequestLounge from '../../components/Lounge/WithdrawRequest/WithdrawRequest'
import AssignedLoungeInventories from '../../components/PropertyWalletInventory/AssignedLoungeInventories/AssignedLoungeInventories'
import ProjectCoodinatorPage from '../../pages/ProjectCoordinator/ProjectCoordinator'
import AgentProfilePage from '../../pages/AgentProfile/AgentProfile'

import MeetingsBDDetails from '../../components/BussinessDevelopment/Meeting/helpers/MeetingsDetails.js/MeetingsDetails'
import MilestoneBD from '../../components/BussinessDevelopment/Milestone'
import MeetingsBD from '../../components/BussinessDevelopment/Meeting'
import UsersBD from '../../components/BussinessDevelopment/Users'
import AffiliateUsersDetails from '../../components/BussinessDevelopment/Users/helpers/AffiliateUser/helpers/AffiliateUsersDetails/AffiliateUsersDetails'
import ManagersUsersDetails from '../../components/BussinessDevelopment/Users/helpers/Managers/helpers/ManagerUsersDetails/ManagersUsersDetails'
import Salaries from '../../components/BussinessDevelopment/Salaries/index'
import ProjectDetail from '../../components/ProjectCoordinator/helpers/ProjectDetail'
import LogsDetail from '../../components/ProjectCoordinator/helpers/ProjectDetail/helpers/LogsDetail'
import UserActivitiesPage from '../../pages/AppUser/UserActivitiesPage'
import SurvayPage from '../../pages/Survay/SurvayPage'
import AllTicketPage from '../../pages/TicketingSystem/AllTicketPage'
import TicketAppUserPage from '../../pages/TicketingSystem/TicketAppUserPage'
import TicketDetails from '../../components/TicketingSystem/AllTicket/helpers/TicketDetails'
import Department from '../../components/Department/Department'
import AgentReview from '../../components/AgentReview'
import AgencyReviewComponent from '../../components/AgentReview/helpers/AgencyReviewComponent'
import CatalogueAgencyReviews from '../../components/Catalogue/AgencyReviews'
import CatalogueAgentReviews from '../../components/Catalogue/AgentReviews'
import CatalogueBookedMeetingslots from '../../components/Catalogue/BookedMeetingslots'
import ELounge from '../../components/E-Lounge/E-lounge'
import ELWithdrawRequest from '../../components/E-Lounge/WithdrawRequest/ELWithdrawRequest'
import Roles from '../../components/E-Lounge/Role/Roles'
import ELoungeUser from '../../components/E-Lounge/ELoungeUser/ELoungeUser'
import ELoungeUserAssign from '../../components/E-Lounge/helpers/ELoungeUserAssign.js/EloungeUserAssign'
import CustomPackage from '../../components/CustomPackage/CustomPackage'
import Vouchers from '../../components/Vouchers/Vouchers'
import InterestedUserPage from '../../pages/PropertyWalletInventory/InterestedUserPage'
import ViewUserAssignToLead from '../../components/E-Lounge/helpers/ViewUserAssignToLead/ViewUserAssignToLead'
import AgencyCatalogue from '../../components/AgencyCatalogue/AgencyCatalogue'
import MarketingRequirements from '../../components/E-Lounge/MarketingRequirements/MarketingRequirements'

function getComponentByRoute(route) {
  const components = {
    '/dashboard': <Dashboard />,
    '/sales-log': '',
    '/freelancer': '',
    '/inventory-management/overview': <OverviewPage />,
    '/inventory-management/all-inventories': <AllInventoriesPage />,
    '/inventory-management/agencies-details': <AgenciesDetailPage />,
    '/inventory-management/management': <ManagementPage />,
    '/leads': <LeadsPage />,
    '/sales-order': '',
    '/reports-management': <ReportsManagementPage />,
    '/advertisement': '',
    '/advertisement/hot-listing': <ListingsPage />,
    '/advertisement/promotions': <PromotionsPage />,
    '/settings/roles': <RolesPage />,
    '/settings/user-management': <UserManagementPage />,
    '/settings/support': '',
    '/traffic': <UserTrafficPage />,
    '/support': '',
    '/inventories': '',
    '/property-wallet-inventory/project-details': <ProjectDetailsPage />,
    '/property-wallet-inventory/interested-user': <InterestedUserPage />,
    '/property-wallet-inventory/properties-details': <PropertiesDetailsPage />,
    '/property-wallet-inventory/project': <AddProjectPage />,
    '/property-wallet-inventory/single-property': <AddSinglePropertyPage />,
    '/property-wallet-inventory/inventories': <InventoriesPage />,
    '/property-wallet-inventory/sales-log': <SalesLogPage />,
    '/property-wallet-inventory/freelancer': <FreelancingPage />,
    '/crm-requests': <CrmRequestPage />,
    '/users/user-list': <AppUserPage />,
    '/users/user-activities': <UserActivitiesPage />,
    '/commission-request': <CommissionRequestsPage />,
    '/referrals': <RefeeralsPage />,
    '/support/unverified-user': <UnverfiedUsersPage />,
    '/support/queries': <QueriesPage />,
    '/support/payment-request': <PaymentRequestsPage />,
    '/support/agent-profile': <AgentProfilePage />,
    '/payments/token-requests': <Token />,
    '/payments/sales-orders': <SaleOrderPage />,
    '/sales-service-point/investors': <Investor />,
    '/sales-service-point/owners': <Owner />,
    '/sales-service-point/withdraw-request': <WithdrawRequestPage />,
    '/subscription-management/packages': <ManageSubscriptionPage />,
    '/subscription-management/active-subscription': <SubscriberPage />,
    '/subscription-management/addons': <SubscriptionAddonPage />,
    '/discount-code': <DiscountPage />,
    '/listing-management/listing': <ManageListingPage />,
    '/property-wallet-inventory/manual-payment-request': <OnlineUser />,
    '/withdraw-request/freelancer-with-draw-request': <WithdrawRequest />,
    '/withdraw-request/agentrequest': <CommissionRequestsPage />,
    '/withdraw-request/ssp-withdraw-request': <WithdrawRequestPage />,
    '/property-wallet-inventory/token-requests': <Token />,
    '/advertisement/pw-inv-hot-listing': <ListingsPage />,
    '/advertisement/notification': <NotificationPage />,
    '/property-wallet-inventory/sales-orders': <SaleOrderPage />,
    '/freelancer/miles-tones': <MilestonePage />,
    '/freelancer/human-resource': <HumanResourcesPage />,
    '/freelancer/manage-meeting': <ManageMeetingsPage />,
    '/lounges/lounges': <LoungePage />,
    '/lounges/with-draw-request': <WithdrawRequestLounge />,
    '/property-wallet-inventory/lounge-assigned-inventory': (
      <AssignedLoungeInventories />
    ),
    '/project-coodinator': <ProjectCoodinatorPage />,
    '/business-development/bd-meeting': <MeetingsBD />,
    '/business-development/bd-milestone': <MilestoneBD />,
    '/business-development/bd-users': <UsersBD />,
    '/business-development/salaries': <Salaries />,
    '/survay': <SurvayPage />,
    '/agency': <AgentReview />,
    '/catalogue/agency-reviews': <CatalogueAgencyReviews />,
    '/catalogue/agent-reviews': <CatalogueAgentReviews />,
    '/catalogue/booked-slots': <CatalogueBookedMeetingslots />,
    '/elounge': <ELounge />,
    '/elounge-users': <ELoungeUser />,
    '/elounge-roles': <Roles />,
    '/elounge-withdraw-request': <ELWithdrawRequest />,
    '/custompackages': <CustomPackage />,
  }
  return components[route]
}

function convertToKebabCase(val) {
  return val.split(' ').join('-').toLowerCase()
}

export async function getRoutesApi(dispatch) {
  dispatch(getRoutes())
  try {
    const routes = {
      items: [
        getItem('Vouchers', 'Vo1212', <img src={loungeIcon} alt="" />),
        // getItem('User Activities', 'ua00', <img src={loungeIcon} alt="" />),
        // getItem('Agent Profile', 'bas401', <img src={loungeIcon} alt="" />),
        // getItem('Survay', 'Sur12', <img src={loungeIcon} alt="" />),
        getItem(
          'Ticketing System',
          'bas4100',
          <img src={loungeIcon} alt="" />,
          [
            getItem('All Ticket', 'bas412', <img src={loungeIcon} alt="" />),
            getItem(
              'Ticket App User ',
              `bas411`,
              <img src={propertyInventory} alt="" />
            ),
            getItem(
              'Department ',
              `de0324`,
              <img src={propertyInventory} alt="" />
            ),
            // getItem(
            //   'Salaries ',
            //   `bas414`,
            //   <img src={propertyInventory} alt="" />
            // ),
          ]
        ),
        // getItem('ELounge', 'el1111', <img src={loungeIcon} alt="" />, [
        //   getItem('ELounge', 'el1112', <img src={loungeIcon} alt="" />),
        //   getItem(
        //     'Withdraw Request',
        //     `el1113`,
        //     <img src={propertyInventory} alt="" />
        //   ),
        //   getItem('Roles', `el1114`, <img src={propertyInventory} alt="" />),
        //   getItem(
        //     'ELounge User',
        //     `el1115`,
        //     <img src={propertyInventory} alt="" />
        //   ),
        // ]),
        getItem(
          'Marketing Requirement',
          'mr0000001',
          <img src={loungeIcon} alt="" />
        ),

        getItem('Intrested User', 'bas2111', <img src={loungeIcon} alt="" />),
        getItem('Agency Catalogue', 'ac21212', <img src={loungeIcon} alt="" />),
      ],

      items2: [],

      routes: [
        {
          key: 'mr0000001',
          value: '/marketing-requirements',
          component: <MarketingRequirements />,
        },

        {
          key: 'ac21212',
          value: '/agency-catalogue',
          component: <AgencyCatalogue />,
        },
        {
          key: 'Vo1212',
          value: '/vouchers',
          component: <Vouchers />,
        },
        {
          key: 'cp1212',
          value: '/custom-package',
          component: <CustomPackage />,
        },

        {
          key: 'el1116',
          value: '/elounge-assign-users/:id',
          component: <ELoungeUserAssign />,
        },
        {
          key: 'el1117',
          value: '/lead-assign-sale-users/:id',
          component: <ViewUserAssignToLead />,
        },
        // {
        //   key: 'el1115',
        //   value: '/e-lounge-User',
        //   component: <ELoungeUser />,
        // },
        // {
        //   key: 'el1114',
        //   value: '/e-lounge-roles',
        //   component: <Roles />,
        // },
        // {
        //   key: 'el1113',
        //   value: '/e-lounge-withdraw-request',
        //   component: <ELWithdrawRequest />,
        // },
        // {
        //   key: 'el1112',
        //   value: '/e-lounge',
        //   component: <ELounge />,
        // },
        {
          key: 'ca111122',
          value: '/catalogue-booked-meeting-slots',
          component: <CatalogueBookedMeetingslots />,
        },
        {
          key: 'ca111123',
          value: '/catalogue-agent-reviews',
          component: <CatalogueAgentReviews />,
        },
        {
          key: 'ca111121',
          value: '/catalogue-agency-reviews',
          component: <CatalogueAgencyReviews />,
        },
        {
          key: 'ag21908907',
          value: '/agency-review/:id',
          component: <AgencyReviewComponent />,
        },
        {
          key: 'de0324',
          value: '/department',
          component: <Department />,
        },
        {
          key: 'ou219089073290',
          value: '/project-coodinator/project-detail/:id',
          component: <ProjectDetail />,
        },
        {
          key: 'ou219089073291',
          value: '/project-coodinator/project-detail/logs/:id',
          component: <LogsDetail />,
        },
        // {
        //   key: 'bas413',
        //   value: '/bussiness-development/users',
        //   component: <UsersBD />,
        // },
        // {
        //   key: 'bas414',
        //   value: '/bussiness-development/salaries',
        //   component: <Salaries />,
        // },
        {
          key: 'bas411',
          value: '/ticket-system/ticket-app-user',
          component: <TicketAppUserPage />,
        },
        {
          key: 'bas412',
          value: '/ticket-system/all-ticket',
          component: <AllTicketPage />,
        },
        {
          key: 'ou40308993496',
          value: '/ticket-system/all-ticket/:id',
          component: <TicketDetails />,
        },
        {
          key: 'ou40308993478',
          value: '/bussiness-development/users/affiliate-user-details/:id',
          component: <AffiliateUsersDetails />,
        },
        {
          key: 'ou40308993480',
          value: '/bussiness-development/users/manager-details/:id',
          component: <ManagersUsersDetails />,
        },
        {
          key: 'ou21908907328',
          value: '/bussiness-development/meetings/details/:id',
          component: <MeetingsBDDetails />,
        },
        {
          key: 'bas217',
          value: '/property-wallet-inventory/add-project-inventory/:id',
          component: <AddProjectInventory />,
        },
        {
          key: 'bas219',
          value: '/property-wallet-inventory/update-project-inventory/:id',
          component: <UpdateProjectInventory />,
        },
        {
          key: 'bas219w34',
          value:
            '/property-wallet-inventory/properties-details/update-property/:id',
          component: <EditSingleProperty />,
        },
        {
          key: 'bas219w3',
          value: '/property-wallet-inventory/project/:id',
          component: <EditProjectPage />,
        },
        // {
        //   key: 'ou400',
        //   value: '/project-coodinator',
        //   component: <ProjectCoodinatorPage />,
        // },
        // {
        //   key: 'ou216',
        //   value: '/addons',
        //   component: <SubscriptionAddonPage />,
        // },
        {
          key: 'bas215',
          value: '/property-wallet-inventory/project-details/:id',
          component: <ViewDetails />,
        },
        {
          key: 'bas2111',
          value: '/property-wallet-inventory/interested-user',
          component: <InterestedUserPage />,
        },
        // {
        //   key: 'bas216',
        //   value: 'support/payment-requests',
        //   component: <PaymentRequestsPage />,
        // },
        {
          key: 'bas223',
          value: 'dashboard/app-user/:id',
          component: <UserDetail />,
        },
        {
          key: 'bas224',
          value: '/inventory/agencies-details/:id',
          component: <AgencyUserDetail />,
        },
        // {
        //   key: 'ou216324',
        //   value: '/advertisment/notification',
        //   component: <NotificationPage />,
        // },
        // {
        //   key: 'ms216',
        //   value: '/dashboard/manage-subscription',
        //   component: <ManageSubscriptionPage />,
        // },
        // {
        //   key: 'wwww333',
        //   value: '/dashboard/freelance',
        //   component: <WithdrawRequest />,
        // },
        // {
        //   key: 'ls216',
        //   value: '/dashboard/cross-listings/listings',
        //   component: <ListingsApprovalsPage />,
        // },
        {
          key: 'hr2163244',
          value: '/dashboard/hr/:id',
          component: <HumanResourceDetails />,
        },
        // {
        //   key: 'lm2',
        //   value: '/dashboard/listing-management/subscribers',
        //   component: <SubscriberPage />,
        // },
        // {
        //   key: 'lm1',
        //   value: '/dashboard/listing-management/listings',
        //   component: <ManageListingPage />,
        // },
        {
          key: 'lm12',
          value: '/dashboard/listing-management/listings/:id',
          component: <GeneralListingViewer />,
        },
        // {
        //   key: 'lm12',
        //   value: '/dashboard/listing-management/hot-listings/:id',
        //   component: <HotListingViewer />,
        // },
        // {
        //   key: 'ds216324',
        //   value: '/dashboard/discount',
        //   component: <DiscountPage />,
        // },
        {
          key: 'ou2190890',
          value: '/dashboard/manage-meetings/:id',
          component: <ManageMeetingsDetails />,
        },

        {
          key: 'im1',
          value: '/dashboard/inventory/:id',
          component: <InventoryViewer />,
        },
      ],
    }
    let res = await getRequest(API.Roles.getRoutes)
    res?.data?.data?.result.map((module) => {
      for (let key in module) {
        if (key === 'Subscription Management') {
          routes.items.push(
            getItem(
              'Subscription Management',
              key,
              <img src={subsIcon} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/subscription-management/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/subscription-management/${convertToKebabCase(mod.label)}`,
              value: `/subscription-management/${convertToKebabCase(
                mod.label
              )}`,
              component: getComponentByRoute(
                `/subscription-management/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'Elounge') {
          routes.items.push(
            getItem('Elounge', key, <img src={loungeIcon} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Users') {
          routes.items.push(
            getItem('Users', key, <img src={appusers} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `/users/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/users/${convertToKebabCase(mod.label)}`,
              value: `/users/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/users/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Free Lancer') {
          routes.items.push(
            getItem('Free Lancer', key, <img src={subsIcon} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(
                  mod.label,
                  `/freelancer/${convertToKebabCase(mod.label)}`
                )
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/freelancer/${convertToKebabCase(mod.label)}`,
              value: `/freelancer/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/freelancer/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'Lounges') {
          routes.items.push(
            getItem('Lounges', key, <img src={loungeIcon} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `/lounges/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/lounges/${convertToKebabCase(mod.label)}`,
              value: `/lounges/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/lounges/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Catalogue') {
          routes.items.push(
            getItem('Catalogue', key, <img src={loungeIcon} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(
                  mod.label,
                  `/catalogue/${convertToKebabCase(mod.label)}`
                )
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/catalogue/${convertToKebabCase(mod.label)}`,
              value: `/catalogue/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/catalogue/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Bussiness Development') {
          routes.items.push(
            getItem(
              'Bussiness Development',
              key,
              <img src={loungeIcon} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/business-development/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/business-development/${convertToKebabCase(mod.label)}`,
              value: `/business-development/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/business-development/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'Discount Code') {
          routes.items.push(
            getItem(
              'Discount Code',
              `/${convertToKebabCase(key)}`,
              <img src={dashboard_ic} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Project Coodinator') {
          routes.items.push(
            getItem(
              'Project Coodinator',
              `/${convertToKebabCase(key)}`,
              <img src={dashboard_ic} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Survay') {
          routes.items.push(
            getItem(
              'Survey',
              `/${convertToKebabCase(key)}`,
              <img src={dashboard_ic} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Listing Management') {
          routes.items.push(
            getItem(
              'Listing Management',
              key,
              <img src={listingIcon} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/listing-management/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/listing-management/${convertToKebabCase(mod.label)}`,
              value: `/listing-management/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/listing-management/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Withdraw Request') {
          routes.items.push(
            getItem(
              'Withdraw Request',
              key,
              <img src={propertyInventory} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/withdraw-request/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/withdraw-request/${convertToKebabCase(mod.label)}`,
              value: `/withdraw-request/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/withdraw-request/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Dashboard') {
          routes.items.push(
            getItem(
              'Dashboard ',
              '/dashboard',
              <img src={dashboard_ic} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Traffic') {
          routes.items.push(
            getItem(
              'Traffic ',
              '/traffic',
              <img src={UserTrafficIcon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'Agency') {
          routes.items.push(
            getItem('Agency ', '/agency', <img src={UserTrafficIcon} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'Property Wallet Inventory') {
          routes.items.push(
            getItem(
              'Property Wallet Inventory',
              'sub1',
              <img src={propertyInventory} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/property-wallet-inventory/${convertToKebabCase(
                      mod.label
                    )}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/property-wallet-inventory/${convertToKebabCase(
                mod.label
              )}`,
              value: `/property-wallet-inventory/${convertToKebabCase(
                mod.label
              )}`,
              component: getComponentByRoute(
                `/property-wallet-inventory/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Inventory Management') {
          routes.items.push(
            getItem(
              'Inventory Management',
              'sub2',
              <img src={inventoryManagment} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/inventory-management/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/inventory-management/${convertToKebabCase(mod.label)}`,
              value: `/inventory-management/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/inventory-management/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Leads') {
          routes.items.push(
            getItem('Leads', '/leads', <img src={lead} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Sales Order') {
          routes.items.push(
            getItem(
              'Sales Order',
              '/sales-order',
              <img src={sales_order} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Reports Management') {
          routes.items.push(
            getItem(
              'Reports Management',
              'reports-management',
              <img src={report} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Payments') {
          routes.items.push(
            getItem(
              'Payments',
              'sub32345',
              <img src={advertisement} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/payments/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/payments/${convertToKebabCase(mod.label)}`,
              value: `/payments/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/payments/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Advertisement') {
          routes.items.push(
            getItem(
              'Advertisement',
              'sub3',
              <img src={advertisement} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/advertisement/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/advertisement/${convertToKebabCase(mod.label)}`,
              value: `/advertisement/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/advertisement/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'CRM Requests') {
          routes.items.push(
            getItem(
              'CRM Requests',
              '/crm-requests',
              <img src={crmReqIcon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Commission Request') {
          routes.items.push(
            getItem(
              'Commission Request',
              '/commission-request',
              <img src={commissionicon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'CustomPackages') {
          routes.items.push(
            getItem(
              'Custom Packages',
              `/${convertToKebabCase(key)}`,
              <img src={commissionicon} alt="" />
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Referrals') {
          routes.items.push(
            getItem('Referrals', '/referrals', <img src={refeerals} alt="" />)
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/${convertToKebabCase(mod.label)}`,
              value: `/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Sales Service Point') {
          routes.items.push(
            getItem(
              'Smart Selling Point',
              'sub32345324',
              <img src={advertisement} alt="" />,
              [
                ...module[key].map((mod, i) =>
                  getItem(
                    mod.label,
                    `/sales-service-point/${convertToKebabCase(mod.label)}`
                  )
                ),
              ]
            )
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/sales-service-point/${convertToKebabCase(mod.label)}`,
              value: `/sales-service-point/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/sales-service-point/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Setting') {
          routes.items2.push(
            getItem('Setting', 'sub4', <img src={setting} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `/settings/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/settings/${convertToKebabCase(mod.label)}`,
              value: `/settings/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/settings/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }

        if (key === 'Support') {
          routes.items2.push(
            getItem('Support', 'sub5', <img src={supporticon} alt="" />, [
              ...module[key].map((mod, i) =>
                getItem(mod.label, `/support/${convertToKebabCase(mod.label)}`)
              ),
            ])
          )
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/support/${convertToKebabCase(mod.label)}`,
              value: `/support/${convertToKebabCase(mod.label)}`,
              component: getComponentByRoute(
                `/support/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
        if (key === 'New Project') {
          routes.routes.push(
            ...module[key].map((mod) => ({
              key: `/property-wallet-inventory/${convertToKebabCase(
                mod.label
              )}`,
              value: `/property-wallet-inventory/${convertToKebabCase(
                mod.label
              )}`,
              component: getComponentByRoute(
                `/property-wallet-inventory/${convertToKebabCase(mod.label)}`
              ),
            }))
          )
        }
      }
    })
    dispatch(getRoutesSuccess(routes))
  } catch (err) {
    localStorage.clear()
    dispatch(loginFailure(null))
    resetState()
    getError(err)
    dispatch(getRoutesFailure(err.response?.data))
  }
}
