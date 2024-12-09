import React, { useEffect, useState } from "react"
// import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import CommissionServices from "./commission-services";
// import CommissionTestimonial from "./commission-testimonial";
import commissionVideo from '../../../images/CommissionVideo.m4v'
import PageHead from "../ServicesComponents/PageHead";
// import NavbarNewTwo from "../../../global-components/NavbarNewTwo";
import NavbarSand from "../../../global-components/NavbarSand";
const CommissionManagement = (props) => {
    const [title, setTitle] = useState("Commission Management | Property Wallet");

    useEffect(() => {
        if (props.location.pathname == "/commission-management") {
            setTitle("Commission Management | Property Wallet")
        } else {
            setTitle("Commission Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            {/* <NavbarV2 /> */}
            <NavbarSand />
            {/* <NavbarNewTwo /> */}
            <PageHead title={"Commission Management"} content={'Streamline Commission Management with Property Wallet'} video={commissionVideo} />
            <CommissionServices />
            {/* <CommissionTestimonial /> */}
            <Footer />
        </>
    )
}
export default CommissionManagement