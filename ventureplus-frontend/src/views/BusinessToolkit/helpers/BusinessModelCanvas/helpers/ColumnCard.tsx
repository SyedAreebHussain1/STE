import { useEffect, useState } from "react";
import { deleteGrayFilledIcon } from "../../../../../assets/BusinessToolkit";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import RoundedButton from "../../../../../components/button/RoundedButton";
import {
  deleteCanvasColumnItemByIdApi,
  editCanvasColumnItemApi,
  getBusinessModelCanvasColumnsApi,
} from "../../../../../services/api/BusinessToolkit";
import { useDispatch } from "react-redux";
import { errorMessage } from "../../../../../utils/message";

interface Props {
  data: {
    id: number;
    title: string;
    value: string;
  };
  bgColor: string;
  bgOpacity: boolean;
  route: string;
  bpdAndCanvasIds: {
    bpdResourcesId: number | null;
    businessModalCanvasId: number | null;
  };
}

const ColumnCard = ({
  data,
  bgColor,
  bgOpacity,
  route,
  bpdAndCanvasIds,
}: Props) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const [editModeForName, setEditModeForName] = useState(false);

  const [cardData, setCardData] = useState({
    name: "",
    value: "",
  });

  const handleEdit = () => {
    if (!cardData.name) {
      errorMessage("Title should not be empty");
      return;
    }
    if (!cardData.value) {
      errorMessage("Description should not be empty");
      return;
    }
    editCanvasColumnItemApi(
      dispatch,
      data.id,
      route,
      { title: cardData.name, value: cardData.value },
      onSuccess
    );
  };

  const handleDelete = () => {
    deleteCanvasColumnItemByIdApi(dispatch, route, data.id, onSuccess);
  };

  const onSuccess = () => {
    if (bpdAndCanvasIds.bpdResourcesId) {
      getBusinessModelCanvasColumnsApi(
        dispatch,
        bpdAndCanvasIds.bpdResourcesId
      );
    }
  };
  useEffect(() => {
    setCardData({
      name: data?.title,
      value: data.value,
    });
  }, [data?.title, data?.value]);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`relative min-h-[180px] rounded-lg p-4 flex flex-col gap-1 w-full mb-4 bg-[${bgColor}] ${
        bgOpacity ? "bg-opacity-40" : ""
      }`}
    >
      <Form form={form} onFinish={handleEdit}>
        <div className="flex flex-col gap-2 h-full ">
          {editModeForName ? (
            <input
              className="body-s z-20 text-body font-medium bg-transparent border-none outline-none min-h-[24px]"
              onBlur={() => setEditModeForName(false)}
              value={cardData.name}
              autoFocus
              onChange={(e) => {
                setCardData((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
          ) : (
            <h1
              className="body-s z-20 text-body font-medium break-words min-h-[24px] cursor-pointer"
              onClick={() => setEditModeForName(true)}
            >
              {cardData.name}
            </h1>
          )}

          <textarea
            className="body-xs text-para z-20 bg-transparent border-none outline-none h-[100px] custom-scrollbar resize-none"
            value={cardData.value}
            autoFocus
            onChange={(e) => {
              setCardData((pre) => {
                return { ...pre, value: e.target.value };
              });
            }}
          />

          <div className="flex justify-end items-end gap- h-full  absolute bottom-3 right-3">
            <div className="flex items-center gap-1">
              {cardData.name !== data?.title ||
              cardData.value !== data?.value ? (
                <RoundedButton
                  title="Reset"
                  onClick={() =>
                    setCardData({ name: data?.title, value: data?.value })
                  }
                  htmlType="button"
                  type="secondary"
                  className=" text-[10px] p-[10px] !h-[18px] "
                />
              ) : null}
              {cardData.name !== data?.title ||
              cardData.value !== data?.value ? (
                <RoundedButton
                  title="Save"
                  type="primary"
                  htmlType="submit"
                  className="text-[10px]  p-[10px] !h-[18px] "
                />
              ) : null}

              <img
                src={deleteGrayFilledIcon}
                alt=""
                className="cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ColumnCard;
