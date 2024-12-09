import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Rate } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import Tag from "../../../../../helpers/tag/tag";
import { deleteEvaluationApi } from "../../../../../redux/api/Recruitment";
import { useDispatch } from "react-redux";
import PageLoading from "../../../../../helpers/loaders/PageLoading";

const Evaluations = ({ evaluations, isRated, onSuccess, loading }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: any) => {
    deleteEvaluationApi(dispatch, id, onSuccess);
  };

  return (
    <Col span={24} className="h-[450px] overflow-y-auto custom-scrollbar p-2">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <PageLoading />
        </div>
      ) : evaluations?.data?.items?.length > 0 ? (
        evaluations?.data?.items.map((evaluation: any) => (
          <div className="flex gap-2 cursor-pointer mb-2">
            <div className="w-full rounded-md bg-white flex p-4 mb-2 gap-2">
              {!evaluation?.ratings ? (
                <>
                  <div className=" flex justify-center items-center">
                    <Avatar>
                      {evaluation?.interview?.candidate?.name
                        ?.toUpperCase()
                        ?.slice(0, 1)}
                    </Avatar>
                  </div>
                  <div className="flex justify-center items-center min-w-auto sm:min-w-[140px]">
                    <h1 className="font-bold text-lg w-full whitespace-nowrap overflow-hidden text-ellipsis">
                      {evaluation?.interview?.candidate?.name}
                    </h1>
                  </div>{" "}
                </>
              ) : (
                <div className="flex">
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <div className=" flex justify-center items-center">
                      <Avatar>
                        {evaluation?.interview?.candidate?.name
                          ?.toUpperCase()
                          ?.slice(0, 1)}
                      </Avatar>
                    </div>
                    <div className="flex justify-center items-center min-w-auto sm:min-w-[140px]">
                      <h1 className="font-bold text-lg w-full whitespace-nowrap overflow-hidden text-ellipsis">
                        {evaluation?.interview?.candidate?.name}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <Rate value={evaluation?.ratings} disabled />
                    <p>{evaluation?.comments}</p>
                  </div>
                </div>
              )}
              <div className="flex-1 flex w-full justify-evenly">
                <div className="flex items-center">
                  <div>
                    <h1 className="font-bold">Position</h1>
                    <p>{evaluation?.interview?.title}</p>
                  </div>
                </div>
                <Divider
                  type="vertical"
                  className="dark:bg-dark-borderColor bg-light-primary h-full w-[1px]"
                />
                <div className="flex items-center gap-1 justify-center flex-col">
                  <Tag
                    title={moment(evaluation?.createdAt).format("MMM D YYYY")}
                    bgColor={"light-primary"}
                    bgColorDark={"dark-purple"}
                    color={"text-white"}
                  />

                  <Tag title={moment(evaluation?.createdAt).format("h:mm a")} />
                </div>
                <Divider
                  type="vertical"
                  className="dark:bg-dark-borderColor bg-light-primary h-full w-[1px]"
                />
                <div className="flex items-center">
                  <div>
                    <h1 className="font-bold">
                      {evaluation?.interview?.interviewType}
                    </h1>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex flex-col gap-1">
              <AnimateButton
                title={"Edit"}
                icon={<EditOutlined />}
                sm
                onClick={() =>
                  navigate(`/recruitment/evaluation/update/${evaluation?.id}`)
                }
              />

              <AnimateButton
                title={"Delete"}
                icon={<DeleteOutlined />}
                sm
                onClick={() => {
                  handleDelete(evaluation?.id);
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="dark:text-white">No Evaluations</div>
      )}
    </Col>
  );
};

export default Evaluations;
