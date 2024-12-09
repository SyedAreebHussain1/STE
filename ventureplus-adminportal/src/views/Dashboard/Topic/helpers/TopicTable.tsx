import React, { useEffect, useState, useCallback, useRef } from "react";
import { Input, Select, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { RootState } from "../../../../store/store";
import topicColumns from "../../../../utils/tableColumns/topicColumns.json";
import { debounce } from "lodash";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  deleteTopicApi,
  getAllTopicApi,
  getTopicAdminApi,
} from "../../../../services/api/Dashboard/Topic";
import { getAllChapterApi } from "../../../../services/api/Dashboard/Chatper";
import TopicUpdateModal from "./TopicUpdateModal";

const TopicTable: React.FC = () => {
  const dispatch = useDispatch();
  const apiCallRef = useRef(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const allChapters = useSelector((state: RootState) => state?.chapter);
  const topic = useSelector((state: RootState) => state?.topic);

  useEffect(() => {
    getTopicAdminApi(dispatch, { ...pageLimit }, null);
  }, [pageLimit]);

  useEffect(() => {
    getAllChapterApi(dispatch);
    getAllTopicApi(dispatch);
  }, []);

  const handleTopicSearch = useCallback(
    debounce((searchTerm, selectedChapterId) => {
      getTopicAdminApi(
        dispatch,
        { page: 1, limit: 1000 },
        selectedChapterId,
        searchTerm
      );
    }, 1000),
    []
  );

  useEffect(() => {
    handleTopicSearch(searchTerm, selectedChapterId);
  }, [searchTerm, selectedChapterId, handleTopicSearch]);

  useEffect(() => {
    if (topic?.data?.data?.items?.length > 0) {
      const data = topic?.data?.data?.items?.map((item: any) => {
        return {
          key: item.id,
          title: (
            <span className="font-normal text-[.75rem] flex items-center gap-1">
              {item.title}
            </span>
          ),
          description: (
            <span className="font-normal text-[.75rem]">
              {item.description}
            </span>
          ),
          createdAt: (
            <span className="font-normal text-[.75rem] ">
              {item.createdAt ? moment(item.createdAt).utc().format("LLL") : "-"}
            </span>
          ),
          minNoOfParas: (
            <span className="font-normal text-[.75rem] ">
              {item.minNoOfParas}
            </span>
          ),
          minNoOfLines: (
            <span className="font-normal text-[.75rem] ">
              {item.minNoOfLines}
            </span>
          ),
          isUsedForBMC: (
            <span className="font-normal text-[.75rem] ">
              {item.isUsedForBMC ? "true" : "false"}
            </span>
          ),
          isGPT: (
            <span className="font-normal text-[.75rem] ">
              {item.isGPT ? "true" : "false"}
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
                onClick={() => deleteTopicApi(dispatch, Number(item?.id))}
              />
            </div>
          ),
        };
      });

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [topic?.data, searchTerm]);

  const onChangeChapter = (value: number) => {
    setSelectedChapterId(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="flex justify-end gap-4">
        <Select
          className="rounded-[8px]"
          size="large"
          showSearch
          placeholder="Filter by chapters"
          onChange={onChangeChapter}
          disabled={!allChapters?.data?.data?.length}
        >
          {allChapters?.data?.data?.length > 0 &&
            allChapters?.data?.data?.map((opt: any, i: number) => (
              <Select.Option key={i} value={opt?.id}>
                {opt?.title}
              </Select.Option>
            ))}
        </Select>

        <Input
          placeholder="Search by topic"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: 20, width: 300 }}
          prefix={<SearchOutlined />}
          size="large"
        />
      </div>
      {modalData && (
        <TopicUpdateModal
          open={modalData}
          type={"update"}
          close={setModalData}
        />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={topicColumns}
          loading={topic?.loading}
          dataSource={dataSource}
          pagination={{
            total: topic?.data?.data?.meta?.totalItems,
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

export default TopicTable;
