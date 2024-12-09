import { Modal } from "antd";
import moment from "moment";

interface Props {
  isVisible: boolean;
  onCancel: () => void;
  data: any;
}

export enum TicketStatus {
  open = "Open",
  in_progress = "In Progress",
  closed = "Closed",
}

const PreviousSupportModal = ({ isVisible, onCancel, data }: Props) => {
  return (
    <Modal
      open={isVisible}
      onCancel={onCancel}
      footer={null}
      centered
      width={550}
    >
      <div className="flex items-center justify-between mt-6 pb-2 border-b border-para mb-4">
        <h1 className="paragraph text-body font-semibold whitespace-nowrap">
          Existing Support Ticket
        </h1>
        <div className="w-full flex items-center justify-end gap-4">
          <p className="body-s text-para font-normal">
            Status:{" "}
            <span
              className={`${
                data?.status === TicketStatus.open
                  ? "text-[#01B847]"
                  : data?.status === TicketStatus.in_progress
                  ? "text-yellow-300"
                  : "text-danger"
              }`}
            >
              {data?.status}
            </span>{" "}
          </p>
          <p className="body-s text-para font-normal">
            Created: {moment(data?.createdAt).local().fromNow()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full">
        <div className="flex flex-col gap-1 w-[50%]">
          <h1 className="body-s font-medium text-para">Category</h1>
          <div className="bg-foreground text-para p-3 w-full rounded-lg">
            {data?.category}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-[50%]">
          <h1 className="body-s font-medium text-para">Priority</h1>
          <div className="bg-foreground text-para p-3 w-full rounded-lg">
            {data?.priority}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full mt-4">
        <h1 className="body-s font-medium text-para">Description</h1>
        <div className="bg-foreground text-para p-3 w-full rounded-lg min-h-[150px]">
          {data?.description}
        </div>
      </div>
    </Modal>
  );
};

export default PreviousSupportModal;
