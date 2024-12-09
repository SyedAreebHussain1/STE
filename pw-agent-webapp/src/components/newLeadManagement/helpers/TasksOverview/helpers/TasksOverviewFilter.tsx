import { Col, Input, Row, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getTaskApi, getTaskByEnumApi } from '../../../../../redux/api/TaskOverview';
import { getFromStorage } from '../../../../../utils/storage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';

const TasksOverviewFilter = ({ enumValue }: any) => {
    const user = getFromStorage("user")
    const [title, setTitle] = useState<string>("")
    const [priority, setPriority] = useState<string>("")
    const [sortByOrder, setSortByOrder] = useState<string>("")
    const dispatch: AppDispatch = useDispatch();
    // useEffect(() => {
    //     getTaskApi(dispatch, { page: 1, limit: 20 }, title, priority, sortByOrder);
    // }, [
    //     dispatch,
    //     title, priority, sortByOrder
    // ]);

    useEffect(() => {
        if (user.role === "agentManager") {
            getTaskByEnumApi(
                dispatch,
                { page: 1, limit: 20 },
                enumValue === 0 ? "MyTasks" : "StaffTasks", title, priority, sortByOrder
            );
        } else {
            getTaskApi(dispatch, { page: 1, limit: 20 }, title, priority, sortByOrder);
        }
    }, [
        dispatch, title, priority, sortByOrder
    ]);
    return (
        <div className='flex justify-between'>
            <div>
                <Row gutter={10}>
                    <Col>
                        <Input name='title' className='h-[40px] rounded-[8px] mt-2' onChange={(e: any) => setTitle(e.target.value)} placeholder="Search Tasks" prefix={<SearchOutlined className='h-[13.5104px] w-[14px]' />} />
                    </Col>
                    <Col>
                        <Select
                            className='h-[40px] mt-2'
                            onChange={(e) => setPriority(e)}
                            style={{ width: 160 }}
                            allowClear
                            placeholder="Priority"
                            options={[
                                { value: 'High', label: 'High' },
                                { value: 'Medium', label: 'Medium' },
                                { value: 'Low', label: 'Low' },
                            ]}
                        />
                    </Col>
                </Row>
            </div>
            <div>
                <Col>
                    <Select
                        style={{ width: 160 }}
                        placeholder="Sort by"
                        onChange={(e) => setSortByOrder(e)}
                        allowClear
                        className='h-[40px] mt-2'
                        options={[
                            { value: 'Ascending', label: 'Ascending' },
                            { value: 'Descending', label: 'Descending' },
                        ]}
                    />
                </Col>
            </div>
        </div>
    )
}

export default TasksOverviewFilter