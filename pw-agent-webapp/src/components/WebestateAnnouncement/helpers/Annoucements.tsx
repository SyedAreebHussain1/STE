import { useEffect, useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import { Col, Pagination, Row } from "antd";
import useToggle from "../../../hooks/useToggle";
import EditNewAnnouncementDrawer from "./EditNewAnnouncementDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAnnouncementsApi,
  getAllAnnouncementsApi,
} from "../../../redux/api/WebEstate";

type Props = {};

const Annoucements = (props: Props) => {
  const [open, toggle] = useToggle();
  const [editData, setEditData] = useState<any>(null);
  const [isLoadingKey, setIsLoadingKey] = useState<any>(null);
  const dispatch = useDispatch();
  const getAllAnnouncements = useSelector(
    (state: any) => state.getAllAnnouncements
  );
  const deleteAnnouncements = useSelector(
    (state: any) => state.deleteAnnouncements
  );
  const addAnnouncements = useSelector((state: any) => state.addAnnouncements);
  const editAnnouncements = useSelector(
    (state: any) => state.editAnnouncements
  );
  function onEditClick(data: any) {
    setEditData(data);
    toggle();
  }
  function onDeleteClick(id: number) {
    deleteAnnouncementsApi(dispatch, id);
  }
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 8,
  });
  useEffect(() => {
    getAllAnnouncementsApi(dispatch, pageLimit);
  }, [
    dispatch,
    pageLimit,
    deleteAnnouncements.data,
    addAnnouncements.data,
    editAnnouncements.data,
  ]);
  return (
    <Row gutter={16}>
      {open && (
        <EditNewAnnouncementDrawer close={toggle} open={open} data={editData} />
      )}
      {getAllAnnouncements?.data?.data?.items?.map((item: any, i: number) => {
        return (
          <AnnouncementCard
            description={item.description}
            title={item.heading}
            index={i}
            editButtonProps={{
              onClick: () => [onEditClick(item), setIsLoadingKey(i)],
            }}
            isLoadingKey={isLoadingKey}
            deleteButtonProps={{
              onClick: () => [onDeleteClick(item.id), setIsLoadingKey(i)],
            }}
            loadingForDelete={deleteAnnouncements.loading}
            loadingForEdit={editAnnouncements.loading}
          />
        );
      })}

      <Col sm={24}>
        <div className="flex justify-center py-[20px] mt-6">
          <Pagination
            showSizeChanger={false}
            current={pageLimit.page}
            pageSize={pageLimit.limit}
            total={getAllAnnouncements?.data?.data?.meta?.totalItems}
            onChange={(page) =>
              setPageLimit({ page: page, limit: pageLimit.limit })
            }
          />
        </div>
      </Col>
    </Row>
  );
};

export default Annoucements;
