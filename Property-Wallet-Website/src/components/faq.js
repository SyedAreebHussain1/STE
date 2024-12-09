import React, { useEffect, useState } from "react";
// import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import Faq from "./section-components/faq-v1";
// import Counter from "./section-components/counter-v1";
// import BlogSlider from "./blog-components/blog-slider-v1";
// import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import NavbarNewTwo from "./global-components/NavbarNewTwo";
import CheckBoxCom from "./CheckBoxCom";
import NavbarSand from "./global-components/NavbarSand";

const FaqV1 = (props) => {
  const [title, setTitle] = useState("FAQ's | Property Wallet");
  const [isRadio, setIsRadio] = useState('general')
  useEffect(() => {
    if (props.location.pathname === "/faq") {
      setTitle("FAQ's | Property Wallet")
    } else {
      setTitle("FAQ's | Property Wallet")
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  const faqContent = {
    general: [
      {
        question: "What is Property Wallet?",
        answer: "Property Wallet is a comprehensive real estate management & selling app designed to assist real estate agents in efficiently managing inventories, commissions, leads, staff, and property sales. It offers both free and paid features to enhance your real estate business.",
        key: '2'
      },
      {
        question: "What are the features of Property Wallet?",
        answer: " Property Wallet provides a range of features, including inventory management, commission tracking, leads management, staff management, property listings, marketing tools, and more.",
        key: "3"
      },
      {
        question: "How do I access Property Wallet?",
        answer: "You can access Property Wallet through our mobile app, available for download on iOS and Android devices.",
        key: "4"
      },
      {
        question: "What are the marketing tools in the app?",
        answer: "The free marketing tools in Property Wallet are designed to help you promote your listings and reach a wider audience. These tools can assist in boosting your property sales and visibility.",
        key: "5"
      }
    ],
    ['inventory']: [
      {
        question: "What is inventory management in Property Wallet?",
        answer: "Inventory management allows you to keep track of various properties and projects within the app. You can add, edit, and manage property details, making it easier to showcase and share listings.",
        key: '2'
      },
      {
        question: "Is Inventory Management Paid?",
        answer: "Yes, Property Wallet offers paid inventory management features that provide enhanced functionalities and exclusive access to premium projects.",
        key: "3"
      },
    ],
    ['commission']: [
      {
        question: "How does commission management work in Property Wallet?",
        answer: "Property Wallet enables you to track commissions earned from property sales. Keep records of the commissions paid to the agents as well as the property they sold. This can also let you know the amount of money each employee brings in.",
        key: '2'
      },
      {
        question: "Does Property Wallet generate commission receipt? ",
        answer: "Yes, When a deal is finalized in Property Wallet, the system will generate a commission receipt automatically.",
        key: "3"
      },
    ],
    ['property Listings']: [
      {
        question: "What is the property listings feature in Property Wallet?",
        answer: "The property listings feature enables agents to showcase their properties to a wide network of other agents across Pakistan. It facilitates property sales and connections within the agent network.",
        key: '2'
      },
      {
        question: "How can I make my listing stand out?",
        answer: 'You can make your listing more prominent by using the "Hot Listing" feature. Hot listings get highlighted on the Property Wallet placement, increasing their visibility to potential buyers and agents.',
        key: "3"
      },
      {
        question: "What is the agent network feature in Property Wallet? ",
        answer: "The agent network feature allows agents to connect with each other, share their properties, and close deals collaboratively. It's a platform for agents to expand their network and increase their sales potential.",
        key: "4"
      },
      {
        question: "Can I communicate with agents outside of my region? ",
        answer: ' Yes, you can connect with agents from all over Pakistan through the agent network feature. This expands your reach and opens up opportunities for cross-region property sales.',
        key: "5"
      },
    ],
    ['hot Listing']: [
      {
        question: "How does the hot listing feature work? ",
        answer: "The hotlisting feature highlights your property listing on the Property Wallet placement, increasing its visibility to other agents and potential buyers. This can lead to quicker sales and more inquiries.",
        key: '2'
      },
      {
        question: "Can I make multiple listings hot at the same time? ",
        answer: 'Yes, you can choose to make multiple listings hot simultaneously. It depends on your subscription. This can be beneficial for promoting multiple properties and maximizing your sales efforts.',
        key: "3"
      },
    ],
    withdrawal: [
      {
        question: "How do I withdraw the commission amount from my Property Wallet account?",
        answer: " To withdraw your commission amount, go to the wallet section in the app. Follow the instructions to initiate the withdrawal process. The withdrawn amount will reflect in your account within 72 hours.",
        key: '2'
      },
      {
        question: "Are there any withdrawal fees?",
        answer: ' Property Wallet does not charge any withdrawal fees. The commission amount you withdraw will be transferred to your preferred payment method without any additional charges.',
        key: "3"
      },
    ],
    subscription: [
      {
        question: "Can I switch between subscription packages?",
        answer: "Yes, you can switch between subscription packages in Property Wallet. If you decide to upgrade or downgrade your subscription, you can do so within the app's subscription settings.",
        key: '2'
      },
      {
        question: "What happens if my subscription expires?",
        answer: ' If your subscription expires, you will no longer have access to the paid features of the app. You can renew your subscription to regain access to these features.',
        key: "3"
      },
    ],
    ['lead Center']: [
      {
        question: "How can I assign leads to my staff in the Lead Center?",
        answer: "Assigning leads to your staff is easy. Simply select the lead you want to assign, choose the staff member, and allocate the lead. This streamlines lead distribution and follow-up.",
        key: '2'
      },
      {
        question: "Can I track the status of leads in the Lead Center?",
        answer: "Yes, you can track the status of each lead in the Lead Center. This helps you monitor the progress of leads, from generation to conversion.",
        key: "3"
      },
    ],
    ['marketing Tools']: [
      {
        question: "What kind of marketing tools are available for free in Property Wallet?",
        answer: "Property Wallet offers free marketing tools that help you promote your listings. These tools include Payment Plan Calculator, Brochure Generator, Sale & Quotation Maker, Post Creator and Business Card Creator.",
        key: '2'
      },
      {
        question: "Can I customize the marketing materials I generate?",
        answer: "Yes, you can customize the marketing materials you generate using the app's tools. This allows you to tailor your promotional content to match your branding and style.",
        key: "3"
      },
    ],
    ['pw Inventory']: [
      {
        question: "What is PW Inventory in Property Wallet?",
        answer: "PW Inventory is a premium feature that provides agents with access to exclusive projects for selling. These projects can lead to additional commissions and earnings beyond regular listings.",
        key: '2'
      },
      {
        question: "How do I get access to PW Inventory?",
        answer: "To access PW Inventory, you need to subscribe to any subscription package. Once subscribed, you can explore and sell the exclusive projects available.",
        key: "3"
      },
    ],
    ['staff']: [
      {
        question: "How does staff management work in Property Wallet?",
        answer: "Property Wallet's staff management feature allows you to add and manage your team members. You can assign tasks, leads, and projects to specific staff members, facilitating better coordination and collaboration.",
        key: "2"
      },
    ]
  }
  const handleRadio = (e) => {
    setIsRadio(e)
  };
  return (
    <div>
      {/* <NavbarNewTwo /> */}
      <NavbarSand />
      <PageHeader headertitle="Frequently asked questions" subheader="FAQ" />
      <CheckBoxCom handleRadio={handleRadio} objKey={Object.keys(faqContent)} />
      <Faq faqContent={faqContent[isRadio]} />
      <Footer />
    </div>
  );
};

export default FaqV1;
