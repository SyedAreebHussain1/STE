
import React, { useEffect, useState } from "react";
import ServicesPropertyWal from "./V2/services-property";
import Footer from "./global-components/footer";
import MoreServices from "./shop-components/more-services";


// img
import inventory from "../components/images//services-six-img/inventory.jpg";
import report from "../components/images//services-six-img/report.jpg";
import saleTarget from "../components/images//services-six-img/saletarget.jpg";
import commission from "../components/images//services-six-img/commission.jpg";
import tools from "../components/images//services-six-img/tools.jpg";
import staffMan from "../components/images//services-six-img/staff.jpg";
import NavbarSand from "./global-components/NavbarSand";


const Service_V1 = (props) => {
  const [title, setTitle] = useState("Service | Property Wallet");
  useEffect(() => {
    if (props.location.pathname == "/service") {
      setTitle("Service | Property Wallet")
    } else {
      setTitle("Service | Property Wallet")
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const items = [
    {
      key: "1",
      heading: "Inventory Management",
      title: "Inventory Managment",
      img: inventory,
      content:
        "Stressed out about inventory management? We've got the perfect solution! Property wallet takes the chaos of inventory tracking off your plate.",
      path: "/inventory-management"
    },
    {
      key: "2",
      heading: "Staff Management",
      title: "Staff Managment",
      img: staffMan,
      path: "/staff-management",
      content:
        "We understand the struggle and we’re here to help! With our streamlined staff management solution, you can achieve more while staying organized.",
    },
    {
      key: "3",
      heading: "Commission Management",
      title: "Commision Management",
      path: "/commission-management",
      img: commission,
      content:
        "If you want to take your real estate agency operations to the next level, let property wallet show you how with our automated commission management solutions.",
    },
    {
      key: "4",
      heading: "Report Management",
      title: "Report Management",
      path: "/report-management",
      img: report,
      content:
        "We make it easy to streamline and simplify your reporting process. Whether you need to track sales for each project, sales by manager or team member.",
    }, {
      key: "5",
      heading: "Digital Tools ",
      path: "/digital-tools",
      title: "Digital Tools ",
      img: tools,
      content:
        "Our advanced digital tools can help improve organization, efficiency, and productivity - all from the convenience of your home or office.",
    }, {
      key: "6",
      heading: "Target Sales Management",
      path: "/sales-target",
      title: "Target Sales Management",
      img: saleTarget,
      content:
        "Say goodbye to manual entry and tedious processes, the complete sales management solution that can help you reach your goals.",
    },
  ];


  return (
    <div>
      {/* <NavbarNewTwo /> */}
      {/* <Navbar /> */}
      <NavbarSand />
      {/* <YoutubeSrc /> */}
      {/* <PageHeader   headertitle="Services"
        content="Property Wallet is pleased to offer you a platform which will contribute to your property business success through fostering collaboration between agents."
        subheader="Services"
      /> */}
      {/* <PageHeader
        headertitle="We have the perfect tools to help your business grow!"
        content="Property Wallet is pleased to offer you a platform which will contribute to your property business success through fostering collaboration between agents."
        subheader="Services"
      /> */}
      <MoreServices />
      <ServicesPropertyWal type='service' heading='"Take your real estate agency to greater heights!"' title='Avail our services to manage your property business at your convenience.' content={items} />

      {/* <AnalyticContent /> */}

      {/* <TestimonialServicePage /> */}

      {/* <AboutV5 /> */}
      {/* <ServiceV1 /> */}

      {/* <BlogSlider sectionClass="pt-120" /> */}
      {/* <TestimonialV2/> */}
      {/* <CallToActionV1 /> */}

      <Footer />
    </div>
  );
};

export default Service_V1;
