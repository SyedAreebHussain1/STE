// import NavbarV2Areeb from "../../global-components/navbarV1areebcrm";
// import Navbar from "../../global-components/navbar-v2";
// import { useLocation } from "react-router-dom";
// import SellWithUsMobilize from "./sellwithus-mobilize";
// import CurveCustom from "./sell-with-us-curve";
// import ImapactApp from "./impact-app";
// import SellwithusPrice from "./sellwithus-price";
// import SixBoxes from "./sell-with-six-box";
// import ContentImg from "./sellwithus-content-img";
// import SellWithUsServices from "./sell-with-us-services";

import React, { useEffect, useState } from "react";
import NavbarV2 from "../../global-components/navbar-v2";
import SellWithUsHead from "./sell-with-us-head";
import Footer from "../../global-components/footer";
import SellWithUsChoose from "./sellwithus-choose";
import BottomLineBox from "../BottomLineBoxes.js";
import FaqsOrText from "./sell-with-faqs-text";
import CallToActonSellWithUs from "./sell-with-us-cal-to-action";
import SideServices from "../SideServices";

//
import SecondBanner from "../../images/SecondBanner.m4v";
import servicesImg from "../../images/SellWithUsServices.png";
// import ourservices from '../../../components/images/crm-chosse/ourservices.png'
import ourservices from "../../../components/images/ourservicesImg.png";
import CrmModalPopup from "./CrmModalPopup";

// icon
import compaign from "../../images/Services-analytic-icon/campaign.png";
import documentation from "../../images/Services-analytic-icon/documentation.png";
import finance from "../../images/Services-analytic-icon/finance.png";
import inventory from "../../images/Services-analytic-icon/inventory.png";
import recovery from "../../images/Services-analytic-icon/recovery.png";
import report from "../../images/Services-analytic-icon/report.png";
import SellWithUsFeature from "./sell-with-us-feature";
import ServicesPropertyWal from "../services-property";

import inventoryMancrm from "../../../components/images/crm-chosse/Inventory Management 2-01.png";
import leadMancrm from "../../../components/images/crm-chosse/LEAD MANAGEMENT-01.png";
import recoveryMancrm from "../../../components/images/crm-chosse/recovery management-01.png";
import reportingorAnalyticscrm from "../../../components/images/crm-chosse/Reporting & Analytics-01.png";
import financecrm from "../../../components/images/crm-chosse/finance management-01.png";
import fileTransfercrm from "../../../components/images/crm-chosse/File transfer management-01.png";
import fileMancrm from "../../../components/images/crm-chosse/FILE MANAGEMENT-01.png";
import customSelfcrm from "../../../components/images/crm-chosse/Customer Self Service Application-01.png";
import campaigncrm from "../../../components/images/crm-chosse/Campaign Management-01.png";
import "./sellwithus.css";
import OurServices from "./SideServices2";
import Heading from "../Heading";
import Footercrm from "../../global-components/footercrm";
import ContactUsLeftBtn from "./ContactUsLeftBtn";
import NavbarNewTwo from "../../global-components/NavbarNewTwo";
import NavbarSand from "../../global-components/NavbarSand";

const SellWithUs = (props) => {
  const [title, setTitle] = useState("CRM | Property Wallet");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.location.pathname === "/crm") {
      setTitle("CRM | Property Wallet");
    } else {
      setTitle("CRM | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const itemsContent = [
    {
      key: "1",
      heading: "Campaign Management",
      title: "Campaign Management",
      img: campaigncrm,
      content:
        "Looking to simplify your digital campaign management? Property Wallet CRM has got you covered! Our platform offers a simple and effective solution for launching successful campaigns. With Property Wallet CRM, you can say goodbye to complicated processes and hello to a streamlined approach that gets results. Whether you're launching your first campaign or managing multiple campaigns, Property Wallet CRM has everything you need to achieve your goals. So why wait? Try Property Wallet CRM today and discover how effortless campaign management can be!",
      path: "/crm",
    },
    {
      key: "2",
      heading: "Inventory Management",
      title: "Inventory Management",
      img: inventoryMancrm,
      content:
        "Inventory management for a real estate builder CRM involves the systematic tracking and control of all the properties that are available for sale or lease. It involves managing all aspects of the properties, including their pricing, availability, location, features, and any other relevant information. This requires accurate and up-to-date information about the properties, which can be accessed and managed through the CRM software .An effective CRM system can help the real estate builder achieve these objectives by providing a centralized platform for managing all aspects of their inventory.",
      path: "/crm",
    },
    {
      key: "3",
      heading: "Customer Self Service Application (CSSA)",
      title: "Customer Self Service Application (CSSA)",
      img: customSelfcrm,
      content:
        "The Property Wallet CRM Customer Self Service Application provides a comprehensive solution for customers to manage their purchase plots & payment plan transactions. The main key features of (CSSA) Recovery Management and Transfer Management, Inventory Management users can easily track their property progress and can initiate transfers request. Additionally, the application allows customers to initiate new plot requests and receive top-notch customer support.",
      path: "/crm",
    },
    {
      key: "4",
      heading: "File Management",
      title: "File Management",
      img: fileMancrm,
      content:
        "The Property Wallet CRM File Management system offers a comprehensive and centralized platform to store and manage real estate documents. It simplifies the process of creating property files of existing projects and includes robust search and organization tools for easy access to critical files. This powerful application streamlines the file management process, allowing real estate professionals to save time and enhance their productivity. By utilizing this innovative system, real estate agents can efficiently manage their property documents, ultimately helping them to better serve their clients.",
      path: "/crm",
    },
    {
      key: "5",
      heading: "Recovery Management",
      title: "Recovery Management",
      img: recoveryMancrm,
      path: "/crm",
      content:
        "If you're dealing with property recovery management, you know how overwhelming it can be. It can be a time-consuming and stressful process, especially if you're trying to do it alone. But with Property Wallet CRM, you don't have to go through it alone. We offer a comprehensive Property Recovery Management service that is easy and fast, so you can focus on what's important - getting back on track. We work closely with you every step of the way, ensuring that your recovery is smooth and hassle-free.",
    },
    {
      key: "6",
      heading: "Reporting & Analytics",
      title: "Reporting & Analytics",
      path: "/crm",
      img: reportingorAnalyticscrm,
      content:
        "Reporting & Analytics The benefits of using an automated reporting system like Property Wallet CRM are numerous. For one, it can improve the accuracy of your reports. With manual reporting, there’s always the risk of human error, such as data entry mistakes or calculation errors. Automated reporting systems eliminate these risks, ensuring that your reports are accurate and reliable. With an automated reporting system, the data is collected and organized automatically, freeing up your time to focus on other important tasks",
    },
    {
      key: "7",
      heading: "Finance Management",
      title: "Finance Management",
      path: "/crm",
      img: financecrm,
      content:
        "Property Wallet CRM is the perfect solution for those who need assistance with property buying and selling calculations and revenue. Property Wallet CRM is a comprehensive financial planner that is designed to help individuals manage their finances more effectively when it comes to property. The tool is developed with real estate businesses in mind and is designed to streamline the process of property management. With Property Wallet CRM, you can easily track your property sales, calculate revenue, and manage expenses in a single, user-friendly platform.",
    },
    {
      key: "8",
      heading: "Transfer Management ",
      path: "/crm",
      title: "Transfer Management ",
      img: fileTransfercrm,
      content:
        " Property Wallet CRM's property transfer management feature is designed to streamline the transfer process, allowing you to manage all the steps involved in transferring property ownership in a single, user-friendly platform. The tool is equipped with features that allow you to manage documentation, monitor financial transactions, and track the transfer process from start to finish. The tool allows you to upload and store all the necessary documents related to the property transfer, such as contracts, deeds, and other legal paperwork.",
    },
    {
      key: "9",
      heading: "Lead Management",
      path: "/crm",
      title: "Lead Management",
      img: leadMancrm,
      content:
        "When it comes to real estate, managing leads effectively can be the difference between success and failure. That's why Property Wallet CRM offers two types of lead management - partial lead management and direct lead management - to help real estate professionals manage their leads more effectively and efficiently. By providing a centralized platform for lead management and automating key tasks, Property Wallet CRM can help you streamline your lead generation efforts and increase your chances of success in the competitive real estate industry.",
    },
  ];
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <CrmModalPopup setShow={setShow} show={show} />
      <NavbarSand location={props.location} />

      {/* <NavbarV2 location={props.location} /> */}
      {/* <NavbarNewTwo location={props?.location}  /> */}
      <SellWithUsHead
        heading='Ready to put your property on the market? Let us help you make it a reality!'
        content='Property wallet CRM is here to make your transition as smooth and stress-free as possible. We want you to get the best return on your investment while avoiding costly surprises down the line.'
      />
      {/* <SideServices gallery={ourservices} type='image' namingList={crmOffered} heading="What services Property Wallet CRM offered" bottomContent="You can easily manage all parts of your property from one convenient location with our advanced and customised platform. We have everything you need to streamline your operations and unlock the full potential of your properties, whether you're a builder, real estate agent, or property manager. Contact us today to learn more about how Property Wallet CRM may assist you in reaching your goals." /> */}
      <Heading
        heading='What services Property Wallet CRM offered'
        bottomContent="You can easily manage all parts of your property from one convenient location with our advanced and customised platform. We have everything you need to streamline your operations and unlock the full potential of your properties, whether you're a builder, real estate agent, or property manager. Contact us today to learn more about how Property Wallet CRM may assist you in reaching your goals."
      />
      <OurServices gallery={ourservices} />
      {/* <SideServices gallery={SecondBanner} type='video' namingList={startSellingProvideList} heading="What includes in Property Wallet CRM" bottomContent='Unlock the potential of your projects with Property Wallet CRM! Our all-in-one CRM solution makes it easier for you to manage recovery, inventory, finance, campaigns, documents and analytics. Get a clear overview of your project and stay on top of progress with powerful reporting and analytics. Say goodbye to tedious manual processes - save valuable time and money with Property Wallet CRM.' /> */}
      <ServicesPropertyWal
        type='crm'
        heading='Why Choose Property Wallet CRM'
        title='Streamlines your property management processes and maximizes your efficiency'
        content={itemsContent}
      />
      <FaqsOrText
        heading='Got Questions?'
        content='Learn everything about Property Wallet and the most frequently asked questions.'
      />
      {/* <ContactUsLeftBtn setShow={setShow} show={show} /> */}
      <CallToActonSellWithUs />
      <Footercrm />

      {/* <Footer  location={props.location} /> */}
      {/* <SellWithUsServices /> */}
      {/* <SellWithUsChoose peraContent={marketing} content="From assessing potential buyers, to promotions and marketing, we’ve got it all covered" heading="Why Choose Property Wallet CRM" /> */}
      {/* <ContentImg /> */}
      {/* <BottomLineBox heading="ARE YOU READY TO TAKE THE NEXT MAJOR STEP IN YOUR BUSINESS?" content='Join property wallet today and start selling with us!' contentArry={contentArry} /> */}
      {/* <SellWithUsFeature statment={statment} customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" /> */}
      {/* <SixBoxes /> */}
      {/* <Navbar /> */}
      {/* <SellWithUsMobilize /> */}
      {/* <CurveCustom /> */}
      {/* <SellwithusPrice /> */}
      {/* <ImapactApp /> */}
    </>
  );
};
export default SellWithUs;
