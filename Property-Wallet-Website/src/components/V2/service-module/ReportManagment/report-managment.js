import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import ReportServices from "./report-services";
import ReportTestimonial from "./report-testimonial";
import PageHead from "../ServicesComponents/PageHead";
import reportVideo from '../../../images/ReportVideo.m4v'
import NavbarNewTwo from "../../../global-components/NavbarNewTwo";
import NavbarSand from "../../../global-components/NavbarSand";

const ReportManagement = (props) => {

    const [title, setTitle] = useState("Report Management | Property Wallet");
    useEffect(() => {
        if (props.location.pathname == "/report-management") {
            setTitle("Report Management | Property Wallet")
        } else {
            setTitle("Report Management | Property Wallet")
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
            {/* <ReportPageHead /> */}
            <PageHead title={"Report Management"} content={'Streamline Your Report Management with Property Wallet'} video={reportVideo} />
            <ReportServices />
            {/* <ReportTestimonial /> */}
            <Footer />
        </>
    )
}
export default ReportManagement