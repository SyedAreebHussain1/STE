import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import { RootState } from "../../../redux/store";
import { getSupportTicketsApi } from "../../../services/api/RequestSupport";
import PreviousSupportModal from "./PreviousSupportModal";
import { noPreviousSupport } from "../../../assets";

interface Props {}

const RightSection = (props: Props) => {
  const [open, toggle] = useToggle();
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState<any>({});
  const supportTickets = useSelector(
    (state: RootState) => state.supportTickets
  );

  useEffect(() => {
    getSupportTicketsApi(dispatch);
  }, []);

  return (
    <div className="border border-strokes rounded-xl p-4 flex flex-col gap-2 min-w-[250px] sm:w-[250px] lg:w-[350px] h-fit max-h-[400px] overflow-y-auto custom-scrollbar">
      <h1 className="body-s font-semibold">Previous support</h1>
      {supportTickets?.data?.length > 0 ? (
        supportTickets?.data?.map((item: any, i: number) => (
          <div
            key={i}
            onClick={() => {
              toggle();
              setModalData(item);
            }}
            className="border border-[#CCCCB1] border-opacity-50 bg-[#F8FAFC] cursor-pointer rounded-xl p-4 flex justify-between gap-2"
          >
            <div className="flex flex-col gap-1">
              <p className="body-s text-body">
                Status: <span className="font-semibold">{item?.status}</span>{" "}
              </p>
              <p className="body-s text-body">
                Priority:{" "}
                <span
                  className={`font-semibold ${
                    item?.priority === "Low"
                      ? "text-green-500"
                      : item?.priority === "Medium"
                      ? "text-yellow-400"
                      : "text-red-600"
                  }`}
                >
                  {item?.priority}
                </span>{" "}
              </p>
              <p className="body-s text-body">
                Category:{" "}
                <span className="font-semibold">{item?.category}</span>{" "}
              </p>
            </div>
            <div className="text-para body-xs font-medium">
              {moment(item?.createdAt).local().fromNow()}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-1 justify-center items-center text-center p-2">
          <h1 className="text-[#667085] font-medium heading-xs">
            No Previous Support Requests
          </h1>
          <p className="text-[#667085] font-medium body-s mb-2">
            It looks like you haven't submitted any support requests yet. Reach
            out to us if you need assistance!
          </p>
          <img src={noPreviousSupport} alt="" />
        </div>
      )}

      <PreviousSupportModal
        isVisible={open}
        onCancel={toggle}
        data={modalData}
      />
    </div>
  );
};

export default RightSection;
