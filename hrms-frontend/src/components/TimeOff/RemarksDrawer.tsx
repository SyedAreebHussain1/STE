import { Button, Drawer, Form, Input } from "antd";
import { IoMdClose } from "react-icons/io";
import { LeaveStatusEnum } from "./Overview";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  open: boolean;
  onClose: () => void;
  data: any;
  handleApproval: (
    status: string,
    item: any,
    remarks?: string,
    onSuccess?: () => void
  ) => void;
  onStatusChange: () => void;
};

export const RemarksDrawer: React.FC<Props> = ({
  open,
  onClose,
  data,
  handleApproval,
  onStatusChange,
}: Props) => {
  const approveOrRejectLeave = useSelector(
    (state: RootState) => state.approveOrRejectLeave
  );
  function onSuccess() {
    onClose();
    onStatusChange();
  }
  function onFinish(values: any) {
    handleApproval(LeaveStatusEnum.Reject, data, values.remarks, onSuccess);
  }
  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">Remarks</h2>}
      placement="right"
      width={400}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          padding: 0,
        },
      }}
      open={open}
      extra={
        <Button
          onClick={onClose}
          className="border-[0] text-[1rem] flex justify-center items-center"
        >
          <IoMdClose className="w-[30px] h-[30px]" />
        </Button>
      }
    >
      <div className="p-6">
        <Form name="remarks-form" onFinish={onFinish}>
          <label htmlFor="remarks">Remarks</label>
          <Form.Item name={"remarks"}>
            <Input.TextArea placeholder="Remarks" id="remarks" rows={4} />
          </Form.Item>
          <Button
            className="dark:bg-dark-primary bg-light-primary h-[48px] text-lg font-medium text-white rounded-full px-8 w-full"
            loading={approveOrRejectLeave.loading}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Drawer>
  );
};
