import React, { useEffect, useState } from "react";
import { Button, Input, Select, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import blogsColumn from "../../../../utils/tableColumns/blogsColumn.json";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getBlogsCategoryApi } from "../../../../services/api/Dashboard/Blogs/blogsCategory";
import {
  deleteAllBlogsApi,
  getAllBlogsApi,
} from "../../../../services/api/Dashboard/Blogs/allBlogs";
import ImageModal from "./ImageModal";
import BlogsUpdateModal from "./BlogsUpdateModal";
import { useNavigate } from "react-router-dom";

const BlogsTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  const [imageModal, setImageModal] = useState<any>(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const createPackage = useSelector((state: RootState) => state?.allBlogs);
  const blogsCategory = useSelector((state: RootState) => state?.blogsCategory);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const navigate = useNavigate()
  useEffect(() => {
    getAllBlogsApi(dispatch, { ...pageLimit });
  }, [pageLimit]);

  useEffect(() => {
    if (selectedCategoryId) {
      getAllBlogsApi(dispatch, { page: 1, limit: 10 }, selectedCategoryId);
    }
  }, [pageLimit, selectedCategoryId]);

  useEffect(() => {
    getBlogsCategoryApi(dispatch);
  }, []);


  useEffect(() => {
    if (createPackage?.data?.data?.items?.length > 0) {
      const data = createPackage?.data?.data?.items?.map((item: any) => {

        return {
          key: item.id,
          title: (
            <span className="font-normal text-[.75rem]  flex items-center gap-1">
              {item.title}
            </span>
          ),
          description: (
            <span className="font-normal text-[.75rem]"> {item.blog}</span>
          ),
          blogCategory: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item?.blogCategory.title}
            </span>
          ),
          type: <span className="font-normal text-[.75rem]"> {item.type}</span>,
          author: (
            <span className="font-normal text-[.75rem]"> {item.author}</span>
          ),
          action: (
            <div className="flex gap-2">
              <EditOutlined
                className="text-[20px]"
                onClick={() => navigate(`/update-blog/${item?.id}`, { state: item })}
              />
              <DeleteOutlined
                className="text-[20px]"
                onClick={() =>
                  deleteAllBlogsApi(dispatch, Number(item?.id), onSuccess())
                }
              />
              <Button onClick={() => setImageModal(item)}>View Image</Button>
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [createPackage?.data]);

  function onSuccess() {
    getAllBlogsApi(dispatch, { page: 1, limit: 10 });
  };

  const onChangeCategory = (value: number) => {
    setSelectedCategoryId(value);
  };

  return (
    <>
      {modalData && (
        <BlogsUpdateModal open={modalData} type={"update"} close={setModalData} />
      )}
      {imageModal && (
        <ImageModal open={imageModal} type={"update"} close={setImageModal} />
      )}
      <div className="flex justify-end">
        <Select
          className="rounded-[8px]"
          size="large"
          showSearch
          placeholder="Filter by Categorys"
          onChange={onChangeCategory}
          disabled={!blogsCategory?.data?.data?.length}
        >
          {blogsCategory?.data?.data?.length > 0 &&
            blogsCategory?.data?.data?.map((opt: any, i: number) => (
              <Select.Option key={i} value={opt?.id}>
                {opt?.title}
              </Select.Option>
            ))}
        </Select>
      </div>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={blogsColumn}
          loading={createPackage?.loading}
          dataSource={dataSource}
          pagination={{
            total: createPackage?.data?.data?.meta?.totalItems,
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

export default BlogsTable;
