import { SearchOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";

interface DataType {
  onSearch: any;
  searchValue: any;
  priority: any;
  setPriority: any;
  status: any;
  setStatus: any;
  dueDate: any;
  setDueDate: any;
  onReset: any;
  form: any;
}

const taskPriority = ["Low", "Medium", "High"];
const taskStatus = ["Pending", "Inprogress", "Completed"];

const TaskFilters = ({
  onSearch,
  searchValue,
  priority,
  setPriority,
  status,
  setStatus,
  dueDate,
  setDueDate,
  onReset,
  form,
}: DataType) => {
  function onDateChange(date: any) {
    setDueDate(date);
  }

  const onFinish = (values: any) => { };

  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  return (
    <Form
      onFinish={onFinish}
      name="createProject"
      form={form}
      autoComplete="off"
      initialValues={{ remember: true }}
    >
      <Row gutter={10}>
        <Col span={24} className="flex justify-end ">
          <p
            onClick={onReset}
            className="flex my-3 text-grayPrimary font-bold text-md hover:text-light-primary dark:hover:text-white cursor-pointer"
          >
            Reset
          </p>
        </Col>

        <Col md={6} sm={12} xs={24}>
          <span className="text-grayPrimary font-medium text-base dark-input-label">
            Search
          </span>
          <Form.Item className="h-[40px] dark-input" name="search">
            <Input
              className="h-[40px] dark-input"
              placeholder="Search"
              value={searchValue || ""}
              onChange={(e) => onSearch(e.target.value)}
              prefix={
                <SearchOutlined className="h-[13.51px] w-[13.51px] text-gray-500" />
              }
            />
          </Form.Item>
        </Col>

        <Col md={6} sm={12} xs={24}>
          <span className="text-grayPrimary font-medium text-base dark-input-label">
            Priority
          </span>
          <Form.Item className="h-[40px] dark-input" name="priority">
            <Select
              value={priority}
              allowClear
              onChange={(e) => setPriority(e)}
              placeholder={<p className="text-gray-500">Select Priority</p>}
              className="h-[40px] dark-input"
            >
              {taskPriority.map((priority) => (
                <Select.Option key={priority} value={priority}>
                  {priority}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col md={6} sm={12} xs={24}>
          <span className="text-grayPrimary font-medium text-base dark-input-label">
            Progress
          </span>
          <Form.Item className="h-[40px] dark-input" name="progress">
            <Select
              value={status}
              allowClear
              onChange={(e) => setStatus(e)}
              placeholder={<p className="text-gray-500">Select Progress</p>}
              className="h-[40px] dark-input"
            >
              {taskStatus.map((status) => (
                <Select.Option key={status} value={status}>
                  {status === "Inprogress" ? "In Progress" : status}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col md={6} sm={12} xs={24}>
          <span className="text-grayPrimary font-medium text-base dark-input-label">
            Due Date
          </span>
          <Form.Item name="dueDate">
            <DatePicker
              className="w-full h-[40px] dark-input "
              onChange={(e) => onDateChange(e)}
              disabledDate={disabledEndDate}
              value={dueDate}
              // showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default TaskFilters;
