import React, { useEffect, useState, useRef } from "react";
import { Divider } from 'antd';
import { useDispatch } from "react-redux";
import { PageContainer } from "../../../components";
import MarketingFilter from "./helpers/MarketingFilter";
import PreviewFile from "./helpers/PreviewFile";
import MarketingTable from "./helpers/MarketingTable";
import { getMarketingApi } from "../../../services/api/Dashboard/marketing";

type Props = {};

const Marketing = (props: Props) => {
    const dispatch = useDispatch()
    const debounceTimer: any = useRef(null);
    const [toggle, setToggle] = useState<boolean>(false)
    const [searchByName, setSearchByName] = useState<string | null>(null)
    const [documentType, setDocumentType] = useState<string | null>(null)
    const [dateValue, setDateValue] = useState<any>(null)
    useEffect(() => {
        if (!documentType && !dateValue && !searchByName) {
            getMarketingApi(dispatch)
        }
    }, [documentType, dateValue, searchByName])

    useEffect(() => {
        setDocumentType(null)
        setSearchByName(null)
        setDateValue(null)
        getMarketingApi(dispatch)
    }, [toggle])

    const handleSearch = (e: any) => {
        const value = e.target.value;
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        setSearchByName(value)
        debounceTimer.current = setTimeout(() => {
            getMarketingApi(dispatch, { name: value, documentType: documentType, date: dateValue })
        }, 400);
    };

    useEffect(() => {
        if (documentType || dateValue || searchByName) {
            getMarketingApi(dispatch, { documentType: documentType, date: dateValue, name: searchByName })
        }
    }, [documentType, dateValue, searchByName])

    return <React.Fragment>
        <PageContainer>
            <div className="bg-[#FFFFFF] !h-[100vh]  rounded-lg">
                <MarketingFilter documentType={documentType} setDocumentType={setDocumentType} searchByName={searchByName} handleSearch={handleSearch} toggle={toggle} setToggle={setToggle} setDateValue={setDateValue} />
                <Divider className="mt-0 mb-2" />
                {!toggle ? <PreviewFile /> : <MarketingTable />}
            </div>
        </PageContainer>
    </React.Fragment>
};

export default Marketing;
