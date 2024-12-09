import { Button, DatePicker, Input, Select, Space, theme } from 'antd';
import type { DatePickerProps } from 'antd';
import calenderIcon from "../../../../assets/marketing/calenderIcon.png"
import squareIconWithBg from "../../../../assets/marketing/squareIconWithBg.png"
import listIconwithoutBg from "../../../../assets/marketing/listIconwithoutBg.png"
import squareIconWithoutBg from "../../../../assets/marketing/squareIconWithoutBg.png"
import listIconwithBg from "../../../../assets/marketing/listIconwithBg.png"

const MarketingFilter = ({ setToggle, toggle, handleSearch, setDocumentType, searchByName, documentType, setDateValue }: any) => {
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
                <div>
                    <h1 className='text-[#01555A] font-medium text-[1.125rem] '>All Files</h1>
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
                            style={{ width: 152 }}
                            placeholder="Select type"
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
                        {/* <Button className='bg-[#f8fafc] h-[40px]'> <img src={calenderIcon} alt="" /> Date </Button> */}
                        <DatePicker placeholder='Date'
                            cellRender={cellRender}
                            onChange={(e) => setDateValue(e)}
                            className='h-[40px] bg-[#f8fafc]'
                        />
                        <div className='flex border rounded-lg p-[7px]'>
                            {!toggle ? <div className='flex w-full gap-1 justify-between cursor-pointer items-center'>
                                <span>
                                    <img className='w-[70px]' src={squareIconWithBg} alt="" />
                                </span>
                                <span onClick={() => setToggle(true)}>
                                    <img className='w-[70px]' src={listIconwithoutBg} alt="" />
                                </span>
                            </div> :
                                <div className='flex w-full gap-1 justify-between cursor-pointer items-center'>
                                    <span onClick={() => setToggle(false)}>
                                        <img className='w-[70px]' src={squareIconWithoutBg} alt="" />
                                    </span>
                                    <span>
                                        <img className='w-[70px]' src={listIconwithBg} alt="" />
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingFilter