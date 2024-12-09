import React, { useEffect, useState } from "react";
import Product from "./AllInitialQuestion/Product";
import Equities from "./AllInitialQuestion/Equities";
import Services from "./AllInitialQuestion/Services";
import Staffings from "./AllInitialQuestion/Staffings";

const MainInitialQuestion = () => {
    const [currentComponent, setCurrentComponent] = useState(0);
    const steps = [
        { title: "Product", component: <Product setCurrentComponent={setCurrentComponent} /> },
        { title: "Services", component: <Services setCurrentComponent={setCurrentComponent} /> },
        { title: "Equities", component: <Equities setCurrentComponent={setCurrentComponent} /> },
        { title: "Staffings", component: <Staffings setCurrentComponent={setCurrentComponent} /> },
    ];
    return (
        <React.Fragment>
            {steps[currentComponent]?.component}
        </React.Fragment>
    );
}
export default MainInitialQuestion;
