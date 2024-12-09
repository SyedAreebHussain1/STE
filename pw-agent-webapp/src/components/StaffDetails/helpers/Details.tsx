const Details = ({ data }: { data: any }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-xl p-[20px]">
      <div>
        <h1 className="text-[1rem] font-medium">Staff Details</h1>
        <div className="flex items-center flex-col mt-[20px]">
          <span className="w-[100px] h-[100px] text-[4.8rem] rounded-full bg-gray-500 text-center text-[white] align-middle leading-[100px]">
            {data?.profile?.fullName.substring(0, 1).toUpperCase()}
          </span>
          <h2 className="text-[1.25rem] mt-[10px]">
            {data?.profile?.fullName}
          </h2>
          <p className="text-[#344054] text-[1rem]">{data?.phone}</p>
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="grid grid-cols-1 text-center gap-1 xl:text-left xl:grid-cols-2 xl:gap-8">
          <div className="text-[rgb(102,112,133)] text-[1rem] mt-[10px] xl:mt-0">
            Designation
          </div>
          <div className="text-[#27A3A3] text-[1rem] ">
            <span className="py-[2px] px-[10px] rounded-xl border-[#27A3A3] bg-[#27A3A308]">
              {data?.role?.title ? data?.role?.title?.replace("agent", "") : ""}
            </span>
          </div>
          {data?.role?.title == "agentStaff" && (
            <>
              <div className="text-[#667085] text-[1rem] mt-[10px] xl:mt-0">
                Manager
              </div>
              <div className="text-[#1D2939] font-semibold text-[1rem] ">
                {data?.createdByUser?.profile?.fullName}
              </div>
            </>
          )}

          <div className="text-[#667085] text-[1rem] mt-[10px] xl:mt-0">
            Email
          </div>
          <div className="text-[#1D2939] font-semibold text-[1rem]  break-words">
            {data?.email}
          </div>
          <div className="text-[#667085] text-[1rem] mt-[10px] xl:mt-0">
            CNIC
          </div>
          <div className="text-[#1D2939] font-semibold text-[1rem] ">
            {data?.cnic
              ? `${data?.cnic?.substring(0, 5)}-${data?.cnic?.substring(
                  5,
                  12
                )}-${data?.cnic?.substring(12, 13)}`
              : "-"}
          </div>
          <div className="text-[#667085] text-[1rem] mt-[10px] xl:mt-0">
            Whatsapp No
          </div>
          <div className="text-[#1D2939] font-semibold text-[1rem] ">
            {data?.profile?.whatsapp_no}
          </div>
          <div className="text-[#667085] text-[1rem] mt-[10px] xl:mt-0">
            Joining Date
          </div>

          <div className="text-[#1D2939] font-semibold text-[1rem] ">
            24-12-2023
          </div>
          <div className="text-[#667085] text-[1rem] mt-[10px] xl:mt-0">
            Experience
          </div>
          <div className="text-[#1D2939] font-semibold text-[1rem] ">
            {data?.profile?.yearOfExperience} Years
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
