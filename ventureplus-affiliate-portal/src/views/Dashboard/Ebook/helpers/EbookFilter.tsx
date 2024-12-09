import { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Input, Select, Space, theme } from 'antd';
import calenderIcon from "../../../../assets/marketing/calenderIcon.png"
import folderIcon from "../../../../assets/marketing/folderIcon.png"

const EbookFilter = ({ searchByName, setDocumentType, handleSearch, documentType, setDateValue }: any) => {
    const { token } = theme.useToken();
    const style: React.CSSProperties = {
        border: `1px solid ${token.colorPrimary}`,
        borderRadius: '50%',
    };
    const cellRender: DatePickerProps<any>['cellRender'] = (current, info) => {
        if (info.type !== 'date') {
            return info.originNode;
        }
        if (typeof current === 'number' || typeof current === 'string') {
            return <div className="ant-picker-cell-inner">{current}</div>;
        }
        return (
            <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
                {current.date()}
            </div>
        );
    };
    return (
        <div className='p-[15px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <div>
                        <img src={folderIcon} alt="" />
                    </div>
                    <h1 className='text-[#01555A] font-medium text-[1.125rem] '>All PDF</h1>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <Input
                            className='h-[40px]'
                            value={searchByName}
                            onChange={(e) => handleSearch(e)}
                            placeholder="Search File" />
                        <Select
                            className='h-[40px] bg-[#f8fafc]'
                            placeholder="Select type"
                            style={{ width: 152 }}
                            value={documentType}
                            onChange={(e) => setDocumentType(e)}
                            options={[
                                { value: 'Pdf', label: 'PDF' },
                                { value: 'Picture', label: 'Picture' },
                                { value: 'Video', label: 'Video' },
                                { value: 'Links', label: 'Links' },
                            ]}
                            allowClear
                        />
                        <DatePicker placeholder='Date'
                            cellRender={cellRender}
                            onChange={(e) => setDateValue(e)}
                            className='h-[40px] bg-[#f8fafc]'
                        />
                        {/* <Button className='bg-[#f8fafc] h-[40px]'> <img src={calenderIcon} alt="" /> Date </Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EbookFilter