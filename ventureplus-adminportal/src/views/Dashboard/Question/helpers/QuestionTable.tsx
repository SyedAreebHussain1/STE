import React, { useEffect, useState, useCallback } from "react";
import { Table, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { debounce } from "lodash";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { RootState } from "../../../../store/store";
import questionColumns from "../../../../utils/tableColumns/questionColumns.json";
import QuestionUpdateModal from "./QuestionUpdateModal";
import {
  deleteQuestionApi,
  getQuestionAdminApi,
} from "../../../../services/api/Dashboard/Question";
import { getAllChapterApi } from "../../../../services/api/Dashboard/Chatper";
import { getTopicByChapterIdApi } from "../../../../services/api/Dashboard/Topic";

const QuestionTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState<any>(null);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [topics, setTopics] = useState<any>([]);
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);

  const dispatch = useDispatch();
  const question = useSelector((state: RootState) => state?.question);
  const allChapters = useSelector((state: RootState) => state?.chapter);
  const allTopics = useSelector((state: RootState) => state?.topic);

  useEffect(() => {
    getQuestionAdminApi(dispatch, { ...pageLimit }, selectedTopicId, searchTerm);
  }, [dispatch, pageLimit, selectedTopicId, searchTerm]);

  useEffect(() => {
    getAllChapterApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (selectedChapterId) {
      getTopicByChapterIdApi(dispatch, selectedChapterId);
    } else {
      setTopics([]);
    }
  }, [dispatch, selectedChapterId]);

  useEffect(() => {
    if (allTopics?.data) {
      setTopics(allTopics?.data);
    } else {
      setTopics([]);
    }
  }, [allTopics]);

  useEffect(() => {
    if (question?.data?.data?.items?.length > 0) {
      const data = question.data.data.items.map((item: any) => ({
        key: item.id,
        question: (
          <span className="font-normal text-[.75rem] flex items-center gap-1">
            {item.question || "-"}
          </span>
        ),
        preferredAnswer: (
          <span className="font-normal text-[.75rem]">
            {item.preferredAnswer || "-"}
          </span>
        ),
        mcqType: (
          <span className="font-normal text-[.75rem]">
            {item.mcqType || "-"}
          </span>
        ),
        isTabular: (
          <span className="font-normal text-[.75rem]">
            {item.isTabular ? "true" : "false"}
          </span>
        ),
        isMCQ: (
          <span className="font-normal text-[.75rem]">
            {item.isMCQ ? "true" : "false"}
          </span>
        ),
        isLinked: (
          <span className="font-normal text-[.75rem]">
            {item.isLinked ? "true" : "false"}
          </span>
        ),
        bpElement: (
          <span className="font-normal text-[.75rem]">
            {item.bpElement || "-"}
          </span>
        ),
        OptionsBPElement: (
          <span className="font-normal text-[.75rem]">
            {item.OptionsBPElement || "-"}
          </span>
        ),
        autoSuggestion: (
          <span className="font-normal text-[.75rem]">
            {item.autoSuggestion ? "true" : "false"}
          </span>
        ),
        autoFill: (
          <span className="font-normal text-[.75rem]">
            {item?.autoFill ? "true" : "false"}
          </span>
        ),
        createdAt: (
          <span className="font-normal text-[.75rem]">
            {item.createdAt ? moment(item.createdAt).utc().format("LLL") : "-"}
          </span>
        ),
        action: (
          <div className="flex gap-2">
            <EditOutlined
              className="text-[20px]"
              onClick={() => setModalData(item)}
            />
            <DeleteOutlined
              className="text-[20px]"
              onClick={() =>
                deleteQuestionApi(dispatch, Number(item?.id), () =>
                  getQuestionAdminApi(dispatch, { page: 1, limit: 10 })
                )
              }
            />
          </div>
        ),
      }));

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [question?.data]);

  const onChangeChapter = (value: number) => {
    setSelectedChapterId(value);
    setSelectedTopicId(null);
  };

  const onTopicChange = (value: number) => {
    setSelectedTopicId(value);
  };

  const handleSearchChange = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 1000),
    []
  );

  return (
    <>
      <div className="flex justify-end gap-4">
        <Select
          className="rounded-[8px]"
          size="large"
          showSearch
          allowClear
          placeholder="Filter by chapters"
          value={selectedChapterId}
          onChange={onChangeChapter}
          disabled={!allChapters?.data?.data?.length}
          style={{ minWidth: 200 }}
        >
          {allChapters?.data?.data?.length > 0 &&
            allChapters?.data?.data?.map((opt: any) => (
              <Select.Option key={opt.id} value={opt.id}>
                {opt.title}
              </Select.Option>
            ))}
        </Select>

        {topics?.length > 0 && (
          <Select
            className="rounded-[8px]"
            size="large"
            placeholder="Select Topic"
            onChange={onTopicChange}
            allowClear
            disabled={!allTopics?.data?.length}
            style={{ minWidth: 200 }}
          >
            {topics?.map((topic: any) => (
              <Select.Option key={topic.id} value={topic.id}>
                {topic.title}
              </Select.Option>
            ))}
          </Select>
        )}

        <Input
          placeholder="Search by question"
          onChange={(e) => handleSearchChange(e.target.value)}
          style={{ marginBottom: 20, width: 200 }}
          prefix={<SearchOutlined />}
          size="large"
        />
      </div>
      {modalData && (
        <QuestionUpdateModal
          open={modalData}
          type={"update"}
          close={setModalData}
          pageLimit={pageLimit}
          selectedTopicId={selectedTopicId}
        />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: 1200 }}
          columns={questionColumns}
          loading={question?.loading}
          dataSource={dataSource}
          pagination={{
            total: question?.data?.data?.meta?.totalItems,
            onChange: (total: number, range: number) => {
              setPageLimit({
                page: total,
                limit: range,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default QuestionTable;
