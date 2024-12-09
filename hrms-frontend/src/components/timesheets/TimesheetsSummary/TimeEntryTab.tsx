import { ReactElement, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Select, TimePicker, Input, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { Form } from "antd";
import { IoMdClose } from "react-icons/io";
import { manualLogEntryApi } from "../../../redux/api/TimeSheet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const { TextArea } = Input;

dayjs.extend(customParseFormat);

const TimeEntryTab = ({ onClose }: any) => {
  const activeClasses = "bg-secondary text-primary";
  const [active, setActive] = useState("In");
  function onClickTab(val: string) {
    setActive(val);
  }
  const tabsComponent: {
    [In: string]: ReactElement;
    Out: ReactElement;
    Break: ReactElement;
  } = {
    In: <InTab onClose={onClose} />,
    Out: <OutTab />,
    Break: <BreakTab />,
  };
  return (
    <div>
      {/* <div className="flex items-center">
        <button
          onClick={() => onClickTab("In")}
          className={`flex-1 h-[3rem] border border-borderColor font-bold hover:bg-[#F1F1F1] transition-colors ${active === "In" ? activeClasses : ""
            }`}
        >
          In
        </button>
        <button
          onClick={() => onClickTab("Break")}
          className={`flex-1 h-[3rem] border border-borderColor font-bold hover:bg-[#F1F1F1] transition-colors ${active === "Break" ? activeClasses : ""
            }`}
        >
          Break
        </button>
        <button
          onClick={() => onClickTab("Out")}
          className={`flex-1 h-[3rem] border border-borderColor font-bold hover:bg-[#F1F1F1] transition-colors ${active === "Out" ? activeClasses : ""
            }`}
        >
          Out
        </button>
      </div> */}
      <div>{tabsComponent[active]}</div>
    </div>
  );
};

function InTab({ onClose }: any) {
  const { Option } = Select;
  const dispatch = useDispatch()
  const { companyUserId } = useParams()
  const manualLogEntry = useSelector((state: any) => state?.manualLogEntry)

  const [form] = useForm()
  function onFinish(values: any) {
    if (companyUserId) {
      const body = {
        ...values,
        "companyUserId": companyUserId,
      }
      manualLogEntryApi(dispatch, body, onSuccess)
    }
  }
  function onSuccess() {
    onClose()
  }
  return (
    <Form
      onFinish={onFinish}
      form={form}
      name="timeEntry"
      initialValues={{ remember: true }}
    >
      <div>
        <Form.Item name="attendanceDate"
          rules={[
            {
              required: true,
              message: "Please Select Date",
            },
          ]}
        >
          <DatePicker className="w-full mt-2 h-[3rem]" />
        </Form.Item>
        <Form.Item name="status" rules={[
          {
            required: true,
            message: "Please Select Status",
          },
        ]}>
          <Select
            className="w-full mt-2 h-[3rem]"
            placeholder="Select an option"
          >
            {[
              { label: "Check in", value: "checkIn" },
              { label: "Check out", value: "checkOut" },
              { label: "Break in", value: "breakIn" }, // corrected "break in" to "Break in"
              { label: "Break out", value: "BreakOut" } // corrected "break out" to "Break out"
            ].map((option, index) => (
              <Option key={index} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <div className="flex justify-end gap-1 absolute right-0">
          <Button
            onClick={onClose}
            className="text-primary  font-semibold  border-[0] text-[1rem]"
          >
            Cancel
          </Button>
          <Button
            loading={manualLogEntry?.loading}
            className="dark:bg-dark-primary bg-light-primary text-[white] font-semibold px-4 w-[100px] text-[1rem]  h-[40px]"
            htmlType="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
}

function OutTab() {
  return (
    <div>
      <TimePicker
        defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
        className="w-full mt-2 h-[3rem] flex-1"
      />
      <DatePicker className="w-full mt-2 h-[3rem]" />
      <TextArea rows={4} className="w-full mt-2" placeholder="Add a note" />
    </div>
  );
}

function BreakTab() {
  return (
    <div>
      <DatePicker className="w-full mt-2 h-[3rem]" />
      <div className="flex gap-1">
        <TimePicker
          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
          className="w-full mt-2 h-[3rem] flex-1"
        />
        <TimePicker
          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
          className="w-full mt-2 h-[3rem] flex-1"
        />
      </div>
      <TextArea rows={4} className="w-full mt-2" placeholder="Add a note" />
      <Select
        options={[]}
        className="w-full mt-2 h-[3rem]"
        placeholder="Select an activity"
      />
      <Select
        options={[]}
        className="w-full mt-2 h-[3rem]"
        placeholder="Select a project"
      />
      <TextArea rows={4} className="w-full mt-2" placeholder="Add a note" />
    </div>
  );
}
export default TimeEntryTab;
