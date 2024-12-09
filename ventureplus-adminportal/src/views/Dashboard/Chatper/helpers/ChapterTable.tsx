
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  deleteChapterApi,
  getChapterAdminApi,
} from "../../../../services/api/Dashboard/Chatper";
import { RootState } from "../../../../store/store";
import chatperColumns from "../../../../utils/tableColumns/chatperColumns.json";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { debounce } from "lodash";
import ChapterModal from "./ChapterModal";

const ChatperTable: React.FC = () => {
  const apiCallRef = useRef(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const chapter = useSelector((state: RootState) => state?.chapter);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    if (!apiCallRef.current) {
      apiCallRef.current = true;
      getChapterAdminApi(dispatch, { ...pageLimit });
    } else {
      apiCallRef.current = false;
    }
  }, []);

  const handleSearch = useCallback(
    debounce((term: string) => {
      getChapterAdminApi(dispatch, { page: 1, limit: 10 }, term);
    }, 1000),
    [dispatch]
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  function success() {
    getChapterAdminApi(dispatch, { page: 1, limit: 10 });
  }

  useEffect(() => {
    if (chapter?.data?.data?.items?.length > 0) {
      const data = chapter?.data?.data?.items?.map((item: any) => {
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
            <span className="font-normal text-[.75rem]">
              {item.createdAt
                ? moment(item.createdAt).utc().format("LLL")
                : "-"}
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
                  deleteChapterApi(dispatch, Number(item?.id), success)
                }
              />
            </div>
          ),
        };
      });

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [chapter?.data]);

  return (
    <>
      {modalData && (
        <ChapterModal open={modalData} type={"update"} close={setModalData} />
      )}
      <div className="flex justify-end">
        <Input
          placeholder="Search by chapter"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: 20, width: 300 }}
          prefix={<SearchOutlined />}
          size="large"
        />
      </div>

      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={chatperColumns}
          loading={chapter?.loading}
          dataSource={dataSource}
          pagination={{
            total: chapter?.data?.data?.meta?.totalItems,
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

export default ChatperTable;
