type LeadByStatusProps = {
  stats: any;
};

const LeadByStatus = ({ stats }: LeadByStatusProps) => {
  const array = [
    { color: "#BDB4FE", value: stats?.pendingLeads, type: "Pending" },
    { color: "#F04438", value: stats?.completedLeads, type: "Completed" },
    { color: "#2E90FA", value: stats?.interestedLeads, type: "Interested" },
    {
      color: "#F79009",
      value: stats?.notInterestedLeads,
      type: "Not Interested",
    },
    { color: "#475467", value: stats?.topPriorityLeads, type: "Top-Priority" },
    {
      color: "#12B76A",
      value: stats?.appointmentAlignedLeads,
      type: "Appointment",
    },
    {
      color: "#7a5af8",
      value:
        stats?.untouchedLeads +
        stats?.wrongNoLeads +
        stats?.inprogressLeads +
        stats?.notConnectedLeads,
      type: "Others",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-[#1D2939] dark:text-[#D0D5DD] text-[1rem] font-semibold">
          Lead by Status
        </h1>
      </div>
      <div className="mt-3 flex justify-between text-[.8125rem]">
        <h5 className="text-[#344054] dark:text-white font-semibold">Total:</h5>
        <p className="text-[#475467] dark:text-white font-medium">
          {stats?.totalLeadByStatusCount}
        </p>
      </div>
      <div>
        <div className="w-full flex h-[7px] rounded-lg border dark:bg-dark-primary">
          {array.map((item: any, i: number) => (
            <div
              key={i}
              style={{
                width: `${
                  (Number(item?.value) /
                    array.reduce((a: any, b: any) => a + b.value, 0)) *
                  100
                }%`,
                backgroundColor: item.color,
                color: item.color,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-evenly flex-wrap gap-1">
          {array.map((item, i) => {
            return (
              <div key={i}>
                <h2 className="text-[.8125rem] text-[#667085] dark:text-[#D0D5DD] font-medium">
                  <span
                    style={{
                      backgroundColor: item.color,
                    }}
                    className={`w-[8px] h-[8px]  rounded-[50%] inline-block`}
                  ></span>{" "}
                  {item.type}
                </h2>
                <p className="text-[#344054] dark:text-white text-[1rem] font-medium">
                  {item.value ? item.value : 0}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeadByStatus;
