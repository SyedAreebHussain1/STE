import React, { useEffect, useState, useCallback } from "react";
import { Table, Input, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { RootState } from "../../../../store/store";
import ideaColumns from "../../../../utils/tableColumns/ideaColumns.json";
import { getIdeaValidationsApi } from "../../../../services/api/Dashboard/IdeaValidations";
import { debounce } from "lodash";

const IdeaTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchScore, setSearchScore] = useState<number>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any[]>([]);
  const [modalTitle, setModalTitle] = useState("");
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const users = useSelector((state: RootState) => state?.getIdeaValidations);

  const fetchIdeas = useCallback(
    debounce((pageLimit, searchScore, searchTerm) => {
      getIdeaValidationsApi(dispatch, { ...pageLimit }, searchScore, searchTerm);
    }, 1000),
    [dispatch]
  );

  useEffect(() => {
    fetchIdeas(pageLimit, searchScore, searchTerm);
    return fetchIdeas.cancel;
  }, [pageLimit, searchTerm, searchScore, fetchIdeas]);

  useEffect(() => {
    if (users?.data?.data?.data?.length > 0) {
      const data = users?.data?.data?.data?.map((item: any) => ({
        key: item.id,
        name: (
          <span className="font-normal text-[.75rem] flex max-w-[250px] w-full overflow-hidden">
            {item?.ideaValidation?.title || "-"}
          </span>
        ),
        userName: (
          <span className="font-normal text-[.75rem]">
            {item.ideaValidation?.createdByUser?.name || "-"}
          </span>
        ),
        score: (
          <span className="font-normal text-[.75rem]">
            {item.ideaValidation?.score || "-"}
          </span>
        ),
        praise: (
          <Button type="link" onClick={() => handleViewModal("Praise", item.praise)}>
            View
          </Button>
        ),
        critique: (
          <Button type="link" onClick={() => handleViewModal("Critique", item.critque)}>
            View
          </Button>
        ),
        suggestion: (
          <Button type="link" onClick={() => handleViewModal("Suggestion", item.suggestion)}>
            View
          </Button>
        ),
      }));
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [users?.data, searchTerm]);

  const handleViewModal = (title: string, data: any[]) => {
    setModalTitle(title);
    setModalData(data);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchScore(Number(e.target.value));
  };

  return (
    <>
      <div className="flex gap-5 justify-end">
        <Input
          placeholder="Search by Idea"
          value={searchTerm}
          onChange={handleSearchTermChange}
          style={{ marginBottom: 20, width: 300 }}
          prefix={<SearchOutlined />}
          size="large"
        />
        <Input
          placeholder="Search by Score"
          value={searchScore}
          onChange={handleSearchScoreChange}
          style={{ marginBottom: 20, width: 300 }}
          prefix={<SearchOutlined />}
          size="large"
        />
      </div>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: 900 }}
          columns={ideaColumns}
          loading={users?.loading}
          dataSource={dataSource}
          pagination={{
            total: users?.data?.data?.meta?.totalItems,
            onChange: (page: number, limit: number) => {
              setPageLimit({ page, limit });
            },
          }}
        />
      </div>

      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {modalData?.length > 0 ? (
          modalData.map((item, index) => (
            <div key={index} className="p-4 rounded-md ">
              <h1 className="text-lg font-bold">{item?.title || "-"}</h1>
              <p>{item?.value || "-"}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </Modal>
    </>
  );
};

export default IdeaTable;
