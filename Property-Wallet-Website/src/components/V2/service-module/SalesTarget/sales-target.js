import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import SalesTargetServices from "./salesTarget-services";
import SalesTestimonial from "./salesTarget-testimonial";
import PageHead from "../ServicesComponents/PageHead";
import saleTargetVideo from '../../../images/SaleTargetVideo.m4v'
import NavbarNewTwo from "../../../global-components/NavbarNewTwo";
import NavbarSand from "../../../global-components/NavbarSand";


const SalesTarget = (props) => {
    const [title, setTitle] = useState("Sales Target Management | Property Wallet");
    useEffect(() => {
        if (props.location.pathname == "/sales-target") {
            setTitle("Sales Target Management | Property Wallet")
        } else {
            setTitle("Sales Target Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            {/* <NavbarV2 /> */}
            {/* <NavbarNewTwo /> */}
            {/* <SalesTargetHead /> */}
            <NavbarSand />

            <PageHead title={"Target Sales Management"} content={'Maximize Your Sales with Target Sales Management'} video={saleTargetVideo} />
            <SalesTargetServices />
            {/* <SalesTestimonial /> */}
            <Footer />
        </>
    )
}
export default SalesTarget