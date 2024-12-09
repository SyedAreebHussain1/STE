import React, { useEffect, useState, useRef } from "react";
import { Divider } from 'antd';
import { PageContainer } from "../../../components";
import EbookFilter from "./helpers/EbookFilter";
import PreviewFile from "./helpers/PreviewFile";
import { useDispatch } from "react-redux";
import { getEbooksApi } from "../../../services/api/Dashboard/Ebooks";

type Props = {};

const Ebook = (props: Props) => {
    const dispatch = useDispatch()
    const debounceTimer: any = useRef(null);
    const [searchByName, setSearchByName] = useState<string>("")
    const [documentType, setDocumentType] = useState<string | null>(null)
    const [dateValue, setDateValue] = useState<any>(null)

    useEffect(() => {
        if (!documentType && !dateValue) {
            getEbooksApi(dispatch)
        }
    }, [documentType, dateValue])

    const handleSearch = (e: any) => {
        const value = e.target.value;
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        setSearchByName(value)
        debounceTimer.current = setTimeout(() => {
            getEbooksApi(dispatch, { name: value, documentType: documentType, date: dateValue })
        }, 400);
    };

    useEffect(() => {
        if (documentType || dateValue) {
            getEbooksApi(dispatch, { documentType: documentType, date: dateValue })
        }
    }, [documentType, dateValue, searchByName])

    return <React.Fragment>
        <PageContainer>
            <div className="bg-[#FFFFFF] !h-[100vh]  rounded-lg">
                <EbookFilter setDateValue={setDateValue} documentType={documentType} setDocumentType={setDocumentType} handleSearch={handleSearch} searchByName={searchByName} />
                <Divider className="mt-0 mb-2" />
                <PreviewFile />
            </div>
        </PageContainer>
    </React.Fragment>
};

export default Ebook;
