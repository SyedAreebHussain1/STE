import React, { useEffect, useState } from "react";
import InitialPlanSetup from "./AllInitialQuestion/InitialPlanSetup";
import Product from "./AllInitialQuestion/Product";
import Equities from "./AllInitialQuestion/Equities";
import Staffings from "./AllInitialQuestion/Staffings";
import Service from "./AllInitialQuestion/Service";
import { errorMessage } from '../../../utils/message';
import { getFromStorage } from "../../../utils/storage";
import { scrollToTop } from "../../../hooks/scrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { getBusinessPlanInfoApi } from "../../../services/api/PlanSetup";

const MainInitialQuestion = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [current, setCurrent] = useState<number>(0);
    const [selected, setSelected] = useState<any>("")
    const [dataSource, setDataSource] = useState<any[]>([])
    const [selectedProductItems, setSelectedProductItems] = useState<any[]>([]);
    const [selectedServiceItems, setSelectedServiceItems] = useState<any[]>([]);
    const [chooseForProduct, setChooseForProduct] = useState<string[]>([]);
    const [chooseForServices, setChooseForServices] = useState<string[]>([]);
    const [textProduct, setTextProduct] = useState<string>("");
    const [textService, setTextService] = useState<string>("");
    const [pleaseSpecifyForProduct, setPleaseSpecifyForProduct] = useState<boolean>(false);
    const [pleaseSpecifyForService, setPleaseSpecifyForService] = useState<boolean>(false);
    const [componentsChosse, setComponentsChosse] = useState<boolean>(false);
    const business = { business: getFromStorage("business") }
    const getBusinessPlanInfo = useSelector(
        (state: RootState) => state.getBusinessPlanInfo
    );
    const getSelectedBusinessPlanId = useSelector(
        (state: RootState) => state?.currentSelectedBusinessPlan?.businessPlan?.id
    );

    useEffect(() => {
        if (getSelectedBusinessPlanId) {
            getBusinessPlanInfoApi(getSelectedBusinessPlanId, dispatch);
        }
    }, [getSelectedBusinessPlanId, dispatch]);


    function handleAddTextProductClick() {
        if (textProduct) {
            setSelectedProductItems((pre: any) => [...pre, textProduct]);
            setTextProduct("");
            setPleaseSpecifyForProduct(false);
        }
    }
    function handleAddTextServiceClick() {
        if (textService) {
            setSelectedServiceItems((pre: any) => [...pre, textService]);
            setTextService("");
            setPleaseSpecifyForService(false);
        }
    }
    const handleSelectProduct = (opt: string) => {
        setChooseForProduct((prev) =>
            prev.includes(opt)
                ? prev.filter((item) => item !== opt)
                : [...prev, opt]
        );
    };
    const handleSelectService = (opt: string) => {
        setChooseForServices((prev) =>
            prev.includes(opt)
                ? prev.filter((item) => item !== opt)
                : [...prev, opt]
        );

    };
    function next() {
        setCurrent((prevCurrent: number) => prevCurrent + 1);
    }
    function prev() {
        setCurrent((prevCurrent: number) => prevCurrent - 1);
    }
    useEffect(() => {
        if (selected === "Services") {
            setSelectedProductItems([])
            setChooseForServices([])
            setPleaseSpecifyForProduct(false)
            suggestWithAIForProduct("Services")
        } else if (selected === "Products") {
            setSelectedServiceItems([])
            setChooseForProduct([])
            setPleaseSpecifyForService(false)
            suggestWithAIForProduct("Products")
        } else if (selected === "Both") {
            setSelectedProductItems([])
            setChooseForServices([])
            setSelectedServiceItems([])
            setChooseForProduct([])
            setPleaseSpecifyForService(false)
            setPleaseSpecifyForProduct(false)
            suggestWithAIForProduct("Both")
        }
    }, [selected])


    function initialPlanSetupNext() {
        if (chooseForProduct.length > 0 || chooseForServices.length > 0) {
            setComponentsChosse(true)
        } else {
            errorMessage("Select atleast one option")
        }
    }
    function suggestWithAIForProduct(e: string) {
        if (business) {
            const body = {
                answers: {
                    "element": e,
                    businessIndustry: business?.business?.industry,
                    businessName: business?.business?.name,
                    businessDescription: business?.business?.description,
                },
            };
            if (body?.answers?.element === "Products") {
                fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestproduct`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                })
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (res) {
                        const stringValues: any[] = Object.values(res);
                        if (Object.keys(res)?.[0] !== "detail") {
                            let array = []
                            for (let i = 0; i < stringValues.length; i++) {
                                const element = stringValues[i];
                                if (element) {
                                    array.push(element)
                                }
                            }
                            setSelectedProductItems(array)
                        } else {
                            errorMessage(stringValues?.[0])
                        }
                    })
                    .catch(function (res) {
                    });
            } else if (body?.answers?.element === "Services") {
                fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestproduct`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                })
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (res) {
                        const stringValues: any[] = Object.values(res);
                        if (Object.keys(res)?.[0] !== "detail") {
                            let array = []
                            for (let i = 0; i < stringValues.length; i++) {
                                const element = stringValues[i];
                                if (element) {
                                    array.push(element)
                                }
                            }
                            setSelectedServiceItems(array)
                        } else {
                            errorMessage(stringValues?.[0])
                        }
                    })
                    .catch(function (res) {
                    });
            } else {
                if (e === "Both") {
                    const bodyProduct = {
                        answers: {
                            "element": "Products",
                            businessIndustry: business?.business?.industry,
                            businessName: business?.business?.name,
                            businessDescription: business?.business?.description,
                        },
                    };
                    const bodyServices = {
                        answers: {
                            "element": "Services",
                            businessIndustry: business?.business?.industry,
                            businessName: business?.business?.name,
                            businessDescription: business?.business?.description,
                        },
                    };
                    fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestproduct`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(bodyProduct),
                    })
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (res) {
                            const stringValues: any[] = Object.values(res);
                            if (Object.keys(res)?.[0] !== "detail") {
                                let array = []
                                for (let i = 0; i < stringValues.length; i++) {
                                    const element = stringValues[i];
                                    if (element) {
                                        array.push(element)
                                    }
                                }
                                setSelectedProductItems(array)
                            } else {
                                errorMessage(stringValues?.[0])
                            }
                        })
                        .catch(function (res) {
                        });

                    fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestproduct`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(bodyServices),
                    })
                        .then(function (res) {
                            return res.json();
                        })
                        .then(function (res) {
                            const stringValues: any[] = Object.values(res);
                            if (Object.keys(res)?.[0] !== "detail") {
                                let array = []
                                for (let i = 0; i < stringValues.length; i++) {
                                    const element = stringValues[i];
                                    if (element) {
                                        array.push(element)
                                    }
                                }
                                setSelectedServiceItems(array)
                            } else {
                                errorMessage(stringValues?.[0])
                            }
                        })
                        .catch(function (res) {
                        });

                }
            }
        }
    }

    let steps: any = [
        {
            component: <InitialPlanSetup
                title={"Initial Plan Setup"}
                current={current} next={() => [initialPlanSetupNext(), scrollToTop()]} prev={() => setComponentsChosse(false)}
                setSelected={setSelected} selected={selected}
                selectedProductItems={selectedProductItems}
                selectedServiceItems={selectedServiceItems}
                handleSelectProduct={handleSelectProduct}
                handleSelectService={handleSelectService}
                handleAddTextServiceClick={handleAddTextServiceClick}
                handleAddTextProductClick={handleAddTextProductClick}
                pleaseSpecifyForProduct={pleaseSpecifyForProduct}
                setPleaseSpecifyForProduct={setPleaseSpecifyForProduct}
                pleaseSpecifyForService={pleaseSpecifyForService}
                setPleaseSpecifyForService={setPleaseSpecifyForService}
                textProduct={textProduct} setTextProduct={setTextProduct}
                textService={textService} setTextService={setTextService}
                chooseForProduct={chooseForProduct}
                chooseForServices={chooseForServices}
            />
        }
    ];

    useEffect(() => {
        handleCompo(chooseForProduct, chooseForServices)
    }, [chooseForProduct, chooseForServices])

    function handleCompo(p: any, s: any) {
        let fixedCompo: any = [
            {
                type: "Equities",
                component: <Equities next={next} prev={prev} />
            },
            {
                type: "Staffings",
                component: <Staffings next={next} prev={prev} />
            },
        ]
        let arr: any = []
        if (p.length > 0) {
            for (let i = 0; i < p.length; i++) {
                const element = p[i];
                if (element) {
                    arr.push({
                        selectName: element,
                        type: "Product",
                        component: <Product current={current} element={element} next={next} prev={prev} />
                    })
                }
            }
        }
        if (s.length > 0) {
            for (let j = 0; j < s.length; j++) {
                const element = s[j];
                if (element) {
                    arr.push({
                        selectName: element,
                        type: "Service",
                        component: <Service current={current} element={element} next={next} prev={prev} />
                    })
                }
            }
        }
        setDataSource([...arr, ...fixedCompo])
    }



    // bpelement is exist skiped question 
    // useEffect(() => {
    //     if (getBusinessPlanInfo?.data?.equity?.length > 0 || getBusinessPlanInfo?.data?.staffing?.length > 0 || getBusinessPlanInfo?.data?.product?.length > 0 || getBusinessPlanInfo?.data?.services?.length > 0) {
    //         setComponentsChosse(true)
    //     }
    // }, [getBusinessPlanInfo?.data])

    // useEffect(() => {
    //     if (getBusinessPlanInfo?.data?.product?.length === 0 && getBusinessPlanInfo?.data?.services?.length === 0 && getBusinessPlanInfo?.data?.equity?.length === 0 && getBusinessPlanInfo?.data?.staffing?.length === 0) {
    //     } else {
    //         if (componentsChosse) {
    //             if (getBusinessPlanInfo?.data?.equity?.length === 0 && getBusinessPlanInfo?.data?.staffing?.length === 0) {
    //                 setCurrent(0)
    //                 return
    //             } else if (getBusinessPlanInfo?.data?.equity?.length > 0 && getBusinessPlanInfo?.data?.staffing?.length > 0) {
    //                 navigate("/dashboard")
    //                 return
    //             } else if (getBusinessPlanInfo?.data?.staffing?.length > 0 && getBusinessPlanInfo?.data?.equity?.length === 0) {
    //                 setCurrent(0)
    //                 return
    //             }
    //             else if (getBusinessPlanInfo?.data?.staffing?.length === 0 && getBusinessPlanInfo?.data?.equity?.length > 0) {
    //                 setCurrent(1)
    //                 return
    //             }
    //             else if (getBusinessPlanInfo?.data?.staffing?.length > 0) {
    //                 navigate("/dashboard")
    //                 return
    //             }
    //             else if (getBusinessPlanInfo?.data?.equity?.length > 0) {
    //                 setCurrent(1)
    //                 return
    //             }
    //             else if (getBusinessPlanInfo?.data?.equity?.length === 0) {
    //                 setCurrent(0)
    //                 return

    //             } else if (getBusinessPlanInfo?.data?.staffing?.length === 0) {
    //                 setCurrent(1)
    //                 return
    //             }
    //         }
    //     }
    // }, [componentsChosse])
    return (
        <React.Fragment>
            {componentsChosse ? dataSource?.[current]?.component : steps?.[0]?.component}
        </React.Fragment>
    );
}
export default MainInitialQuestion;
