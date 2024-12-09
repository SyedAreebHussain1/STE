import React, { useEffect, useState } from "react";
// import Navbar from "./global-components/navbar-v2";
import ServicesPropertyWal from "./V2/services-property";
import Footer from "./global-components/footer";
// import MoreServices from "./shop-components/more-services";
import NavbarSand from "./global-components/NavbarSand";
import MoreServiceCustomerVerification from "./shop-components/MoreServiceCustomerVerification";


import cnicServices from '../components/images/customer-services/cnicServices.jpg'
import biometricVerification from '../components/images/customer-services/biometricVerification.jpg'
import digitalImage from '../components/images/customer-services/digitalImage.jpg'
import digitalSignature from '../components/images/customer-services/digitalSignature.jpg'
import digitalVideo from '../components/images/customer-services/digitalVideo.jpg'




const CustomerVerificationAppService = (props) => {

    const [title, setTitle] = useState("Service | Property Wallet");
    useEffect(() => {
        if (props?.location?.pathname == "/verification-app") {
            setTitle("Customer Verification App | Property Wallet")
        } else {
            setTitle("Customer Verification App | Property Wallet")
        }
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    const items = [
        {
            key: "1",
            heading: "CNIC Verification",
            title: "CNIC Verification",
            img: cnicServices,
            content:
                "Verify customer identities swiftly and securely using their CNIC. Stay compliant with regulations while simplifying your verification process.",
            path: "/verification-app"
        },
        {
            key: "2",
            heading: "Biometric Verification",
            title: "Biometric Verification",
            img: biometricVerification,
            path: "/verification-app",
            content:
                "Effortlessly collect customer fingerprints through smartphones or compatible devices for a robust and user-friendly verification experience.",
        },
        {
            key: "3",
            heading: "Digital Signature",
            title: "Digital Signature",
            path: "/verification-app",
            img: digitalSignature,
            content:
                "Eliminate the need for physical signatures in property transactions while ensuring compliance with legal requirements through digital signature verification.",
        },
        {
            key: "4",
            heading: "Digital Image",
            title: "Digital Image",
            path: "/verification-app",
            img: digitalImage,
            content:
                "Seamlessly verify customers with advanced digital image technology, perfect for realtors seeking efficient documentation.",
        }, {
            key: "5",
            heading: "Digital Video",
            path: "/verification-app",
            title: "Digital Video ",
            img: digitalVideo,
            content:
                "Say goodbye to time-consuming paperwork with digital video verification, ensuring real-time authenticity checks for your customers.",
        },
    ];
    return (
        <div>
            {/* <Navbar /> */}
            <NavbarSand />
            <MoreServiceCustomerVerification />
            <ServicesPropertyWal type='verifiction' heading='"Trustworthy & Efficient Customer Verification"' title='Say goodbye to paperwork and hello to a seamless' content={items} />
            <Footer />
        </div>
    )
}

export default CustomerVerificationAppService