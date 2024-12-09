import { Col } from "antd";
import PageLoading from "../../../../../helpers/loaders/PageLoading";
import Interview from "./Interview";

const InterviewList = ({ interviews, isUpcoming, loading }: any) => {
  return (
    <Col
      span={24}
      className={`${
        interviews?.data?.items?.length > 4 ? "h-[350px]" : "h-auto"
      } w-full overflow-auto custom-scrollbar p-2`}
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <PageLoading />
        </div>
      ) : interviews?.data?.items?.length > 0 ? (
        interviews?.data?.items.map((interview: any) => (
          <Interview
            key={interview.id}
            interviewDetails={interview}
            isUpcoming={isUpcoming}
          />
        ))
      ) : (
        <div className="dark:text-white">No Interviews</div>
      )}
    </Col>
  );
};

export default InterviewList;
