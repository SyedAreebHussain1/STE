import React from "react";
import "./sellwithus.css"

const MobileShow = (props) => {
    const headingLarge = 'Got Questions?'
    const pera = 'Learn everything about Property Wallet and the most frequently asked questions. '
    let CustomClass = props.customClass ? props.customClass : ""
    const items = [
        {
            key: "1",
            heading: "Inventory Managment",
            title: "What is a Property Wallet CRM?",
            
            content: "A Property Wallet CRM, or customer relationship management system, is a software tool designed to help real estate professionals manage and organize their interactions with clients, leads, and prospects. It typically includes features such as contact management, property management, lead management, and marketing automation."
        },
        {
            key: "2",
            heading: "Add Inventory",
            title: "What are the benefits of using a Property Wallet CRM?",
            // img: addInventeryIcon,
            // mainImg: addImg,
            content: "A property wallet CRM can help real estate professionals to streamline their workflow, automate repetitive tasks, and manage their leads and clients more effectively. It can also provide insights and analytics to help them identify new sales opportunities and improve their marketing and sales strategies."
        },
        {
            key: "3",
            heading: "Inventory Details",
            title: "How can a property wallet CRM help me to increase sales?",
           
            content: "A property wallet CRM can help to increase sales by automating repetitive tasks such as tracking leads and client interactions, and providing insights and analytics on sales trends and opportunities. It can also help to identify potential sales opportunities, and help real estate professionals to target the right clients and prospects with personalized marketing campaigns."
        },
        {
            key: "4",
            heading: "Inventory Filter",
            title: "Is there a difference between a property wallet CRM and a general CRM?",
            
            content: "A property wallet CRM is specifically designed for the real estate industry and typically includes features such as property management and real estate-specific analytics. A general CRM, on the other hand, is designed for a wide range of businesses and industries and may not include these specific features."
        },
        {
            key: "5",
            heading: "Sold Inventories",
            title: "How does a property wallet CRM help in managing property listings?",
           
            content: "A property wallet CRM allows real estate professionals to store and manage information on properties, including listings, showings, and transactions. It can also provide a centralized location for all property-related data and documents, making it easy for agents to access and share property information with clients and other agents."
        },

    ];


    return (
        <>
            <div className="container ltn__faq-area mb-100 faq-mobile-show" style={{ display: 'none' }}>
                    <div className=" row ltn__custom-gutter--- justify-content-center " style={{ border: '', marginLeft: "", marginRight: '' }}
                    >

                        <div className="ltn__feature-item" >
                            <div style={{}}>
                                <h1
                                    className="text_Quick"
                                    style={{ fontSize: "1.6rem", color: "#053857" }}
                                // to="/service-details"
                                >
                                    {headingLarge}
                                    {/* <div className="curve"></div> */}
                                </h1>
                                <p className="" style={{ fontSize: "1rem", marginTop: '', color: "black" }}>
                                    {pera}
                                </p>
                                <div className="">
                                    <h6 style={{ color: "#053857" }}> Drop us email at:</h6>  info@propertywallet.pk
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginLeft: "", marginRight: "" }} className="row">
                        <div className="col-lg-12">
                            <div className="ltn__faq-inner ltn__faq-inner-2">
                                <div id="accordion_2">
                                    <div className="card">
                                        <div
                                            className="ltn__card-title text-gray-ad bold"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-11"
                                            aria-expanded="true"
                                            style={{color: "#053857"}}
                                        >
                                            {/* <img src={items[0].img} />&nbsp; */}
                                            {items[0].title}
                                        </div>
                                        <div
                                            id="faq-item-2-11"
                                            className="collapse show"
                                            data-bs-parent="#accordion_2"
                                        >
                                            <div className="card-body">
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    {/* <img style={{ width: '50%' }} src={items[0].mainImg} /> */}
                                                </div>
                                                <div className="text-gray-ad">
                                                    {items[0].content}

                                                </div>
                                            </div>
                                        </div>
                                        {/* card */}
                                        <div className="card">
                                            <div
                                                className="collapsed ltn__card-title text-gray-ad bold"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq-item-2-12"
                                                aria-expanded="false"style={{color: "#053857"}}
                                            >
                                                {/* <img src={items[1].img} />&nbsp; */}

                                                {items[1].title}

                                            </div>
                                            <div
                                                id="faq-item-2-12"
                                                className="collapse"
                                                data-bs-parent="#accordion_2"
                                            >
                                                <div className="card-body">
                                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                                        {/* <img style={{ width: '50%' }} src={items[1].mainImg} /> */}
                                                    </div>
                                                    <div className="text-gray-ad">
                                                        {items[1].content}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* card */}
                                        <div className="card">
                                            <div
                                                className="collapsed ltn__card-title text-gray-ad bold"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq-item-2-13"
                                                aria-expanded="false"style={{color: "#053857"}}
                                            >
                                                {/* <img src={items[2].img} />&nbsp; */}

                                                {items[2].title}
                                            </div>
                                            <div
                                                id="faq-item-2-13"
                                                className="collapse"
                                                data-bs-parent="#accordion_2"
                                            >
                                                <div className="card-body">
                                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                                        {/* <img style={{ width: '50%' }} src={items[2].mainImg} /> */}
                                                    </div>
                                                    <div className="text-gray-ad">
                                                        {items[2].content}

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="card">
                                            <div
                                                className="collapsed ltn__card-title text-gray-ad bold"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq-item-2-14"
                                                aria-expanded="false"style={{color: "#053857"}}
                                            >
                                                {/* <img src={items[3].img} />&nbsp; */}

                                                {items[3].title}
                                            </div>
                                            <div
                                                id="faq-item-2-14"
                                                className="collapse"
                                                data-bs-parent="#accordion_2"
                                            >
                                                <div className="card-body">
                                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                                        {/* <img style={{ width: '50%' }} src={items[3].mainImg} /> */}
                                                    </div>
                                                    <div className="text-gray-ad">
                                                        {items[3].content}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* card */}
                                        {/* card */}
                                        <div className="card">
                                            <div
                                                className="collapsed ltn__card-title text-gray-ad bold"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq-item-2-15"
                                                aria-expanded="false"style={{color: "#053857"}}
                                            >
                                                {/* <img src={items[4].img} />&nbsp; */}

                                                {items[4].title}
                                            </div>
                                            <div
                                                id="faq-item-2-15"
                                                className="collapse"
                                                data-bs-parent="#accordion_2"
                                            >
                                                <div className="card-body">
                                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                                        {/* <img style={{ width: '50%' }} src={items[4].mainImg} /> */}
                                                    </div>
                                                    <div className="text-gray-ad">
                                                        {items[4].content}

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}
            export default MobileShow