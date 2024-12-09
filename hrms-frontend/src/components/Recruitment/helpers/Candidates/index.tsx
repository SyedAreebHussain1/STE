import { SearchOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Col, Input, Pagination, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import downloadIcon from "./../../../../assets/downloadIcon.svg";
import scheduleIcon from "./../../../../assets/scheduleIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  deleteCandidateApi,
  getAllCandidatesByJobIdApi,
} from "../../../../redux/api/Recruitment";
import ButtonWithSvg from "../../../../helpers/button/ButtonWithSvg";
import AnimateButton from "../../../../helpers/button/AnimateButton";
const CandidateDetails = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const { id } = useParams();
  const [selectedCandidate, setSelectedCandidate] = useState<any>({});
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const getCandidateList = useSelector(
    (state: RootState) => state.getAllCandidatesByJobId
  );

  const onScheduleInterview = () => {
    navigate(`/recruitment/schedule-interview/${selectedCandidate?.id}`);
  };

  const onSuccess = () => {
    getAllCandidatesByJobIdApi(dispatch, id, { page: 1, limit: 10 });
  };

  const handleDeleteCandidate = () => {
    deleteCandidateApi(dispatch, selectedCandidate?.id, onSuccess);
  };

  useEffect(() => {
    if (id) getAllCandidatesByJobIdApi(dispatch, id, { page: 1, limit: 10 });
  }, []);

  useEffect(() => {
    if (getCandidateList?.data?.data?.items?.length) {
      setSelectedCandidate(getCandidateList?.data?.data?.items?.[0]);
    }
  }, [getCandidateList]);

  const handlePageChange = (e: any) => {
    getAllCandidatesByJobIdApi(
      dispatch,
      id,
      { page: e, limit: 10 },
      searchValue
    );
  };

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getAllCandidatesByJobIdApi(dispatch, id, { page: 1, limit: 10 }, value);
    }, 500);
  }

  return (
    <>
      <Row className="p-4" gutter={[0, 20]}>
        <Col span={24}>
          <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-2">
            Candidate Details
          </h1>
        </Col>

        <Col
          span={24}
          className="flex flex-col justify-center items-center gap-2"
        >
          <Input
            className="h-[40px] rounded-full w-[40%] mx-auto"
            placeholder="Search"
            value={searchValue || ""}
            onChange={(e) => onSearch(e.target.value)}
            prefix={<SearchOutlined className="h-[13.51px] w-[13.51px]" />}
          />
          <p className="text-lg font-semibold dark:text-white">
            You’ve got{" "}
            {getCandidateList?.data?.data?.items?.length
              ? getCandidateList?.data?.data?.items?.length
              : 0}{" "}
            {getCandidateList?.data?.data?.items?.length > 1
              ? "applicants"
              : "applicant"}{" "}
            on your job opening
          </p>
        </Col>

        {getCandidateList?.data?.data?.items?.length > 0 ? (
          <>
            <Col
              span={24}
              className="flex gap-1 overflow-auto w-[500px] no-scrollbar"
            >
              {getCandidateList?.data?.data?.items?.map((candidate: any) => (
                <div
                  key={candidate?.id}
                  onClick={() => setSelectedCandidate(candidate)}
                  className={`bg-light-primary rounded-full py-2 px-3 text-white dark:bg-dark-purple w-fit whitespace-nowrap cursor-pointer ${
                    candidate?.id === selectedCandidate?.id
                      ? "border-dark-borderColor border-[2px]  dark:border-dark-secondary "
                      : ""
                  } `}
                >
                  {candidate?.name}
                </div>
              ))}
            </Col>
            <Col span={24} className="flex justify-end">
              <Pagination
                current={getCandidateList?.data?.data?.meta?.currentPage}
                hideOnSinglePage
                pageSize={getCandidateList?.data?.data?.meta?.itemsPerPage}
                total={getCandidateList?.data?.data?.meta?.totalItems}
                onChange={handlePageChange}
                responsive={true}
                simple
              ></Pagination>
            </Col>
            <Col span={24} className="flex flex-col gap-4 dark:text-white">
              <h1 className="font-bold text-lg">{selectedCandidate?.name}</h1>
              <h1 className="font-bold text-lg">{selectedCandidate?.email}</h1>
              <h1 className="font-bold text-lg">{selectedCandidate?.phone}</h1>
              <div className="flex gap-2  items-center text-lg">
                <h1 className="font-bold ">Expected Salery:</h1>{" "}
                <p> {selectedCandidate?.expectedSalary}</p>
              </div>

              {selectedCandidate?.coverLetterUrl && (
                <div className="flex gap-3 items-center">
                  <p className="text-lg font-bold">Cover Letter:</p>
                  <a href={selectedCandidate?.coverLetterUrl}>
                    <ButtonWithSvg sm icon={downloadIcon} title={"Download"} />
                  </a>
                </div>
              )}
              <div className="flex gap-3 items-center">
                <p className="text-lg font-bold">CV:</p>
                <a href={selectedCandidate?.cvUrl}>
                  <ButtonWithSvg sm icon={downloadIcon} title={"Download"} />
                </a>
              </div>
              {selectedCandidate?.portFoliouUrl && (
                <div className="flex gap-3 items-center">
                  <p className="text-lg font-bold">Portfolio:</p>
                  <a href={selectedCandidate?.portFoliouUrl}>
                    <ButtonWithSvg sm icon={downloadIcon} title={"Download"} />
                  </a>
                </div>
              )}
              <div className=" text-lg gap-3 flex items-center">
                <p className="font-bold"> Working Experience:</p>
                <span> {selectedCandidate?.workingExperience} years</span>
              </div>
              <div className=" text-lg gap-3 flex items-center">
                <p className="font-bold"> Opening ID: #</p>
                <span> {selectedCandidate?.id}</span>
              </div>
              <div className="flex text-lg gap-3 items-center">
                <p className="font-bold">Candidate Source:</p>
                <span> {selectedCandidate?.candidatSource}</span>
              </div>
            </Col>
            <Col span={24} className="flex justify-center items-center gap-2">
              <ButtonWithSvg
                onClick={onScheduleInterview}
                icon={scheduleIcon}
                title={"Schedule Interview"}
              />
              <AnimateButton
                icon={<UserDeleteOutlined />}
                title={"Reject Candidate"}
                onClick={handleDeleteCandidate}
              />
            </Col>{" "}
          </>
        ) : (
          <></>
        )}
      </Row>
    </>
  );
};

export default CandidateDetails;
