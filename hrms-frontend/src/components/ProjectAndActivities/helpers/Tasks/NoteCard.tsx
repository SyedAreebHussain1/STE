import { Avatar, Col, Input, Row } from "antd";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskNoteApi,
  editTaskNoteApi,
  getProjectTaskByIdApi,
} from "../../../../redux/api/ProjectAndActivities/Task";
import { RootState } from "../../../../redux/store";
import deleteIcon from "./../../../../assets/deleteFilledIcon.svg";
import editIcon from "./../../../../assets/editFilledIcon.svg";
import editWhiteIcon from "./../../../../assets/editFilledWhiteIcon.svg";

interface DataType {
  note: any;
  id: any;
}

const NoteCard = ({ note, id }: DataType) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState(note?.description || "");
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const onSuccess = () => {
    getProjectTaskByIdApi(dispatch, id);
    setIsEditMode(false);
  };

  const onDelete = () => {
    getProjectTaskByIdApi(dispatch, id);
  };

  return (
    <Row className="bg-[#3E54AC] bg-opacity-10 dark:bg-dark-grayLight p-4 rounded-md mb-2">
      <Col span={3}>
        <Avatar>
          {note?.createdByUser?.companyUserProfile?.name
            ?.toUpperCase()
            ?.slice(0, 1)}
        </Avatar>
      </Col>
      <Col span={17}>
        <div className="flex items-center">
          <h1 className="text-graySecondary dark:text-white text-md font-semibold mr-1">
            {note?.createdByUser?.companyUserProfile?.name}{" "}
          </h1>
          <p
            className="text-graySecondary dark:text-lightGray font-bold mr-1
          "
          >
            .
          </p>
          <p className="text-graySecondary dark:text-lightGray ">
            {moment.utc(note?.createdAt).local().startOf("seconds").fromNow()}
          </p>
        </div>
        {isEditMode ? (
          <Input
            className="h-[48px] dark-input mb-3"
            placeholder="Add a note..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTaskNoteApi(dispatch, note?.id, { description }, onSuccess);
              }
            }}
            prefix={<Avatar className="mr-1">J</Avatar>}
            suffix={
              isEditMode && (
                <p
                  className="cursor-pointer font-bold"
                  onClick={() => setIsEditMode(false)}
                >
                  X
                </p>
              )
            }
          />
        ) : (
          <p className="text-graySecondary dark:text-lightGray ">
            {note?.description}
          </p>
        )}
      </Col>
      <Col span={4}>
        {!isEditMode && (
          <div className="flex items-center gap-2">
            <div className="circle-icon border-red">
              <img
                src={deleteIcon}
                alt=""
                onClick={() => {
                  deleteTaskNoteApi(dispatch, note?.id, onDelete);
                }}
              />
            </div>
            <div
              className={`circle-icon ${
                darkMode === "dark" ? "border-white" : "border-graySecondary"
              }`}
            >
              <img
                src={darkMode === "dark" ? editWhiteIcon : editIcon}
                alt=""
                onClick={() => setIsEditMode(true)}
              />
            </div>
          </div>
        )}
      </Col>
    </Row>
  );
};
export default NoteCard;
