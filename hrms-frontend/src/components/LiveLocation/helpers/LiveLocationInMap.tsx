import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";
import { socket } from "../../../utils/socket";
import { getUserStopLocationApi } from "../../../redux/api/userStopLocation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CleargetUserStopPoint } from "../../../redux/slices/UserStopLocation/getUserStopPointSlice";

const LiveLocationInMap = ({ id, date }: any) => {
  const [mapData, setMapData] = useState<any[]>([]);

  const getUserStopPoint = useSelector(
    (state: RootState) => state.getUserStopPoint
  );

  const dispatch = useDispatch();
  useEffect(() => {
    setMapData([]);
    if (id) {
      getUserStopLocationApi(dispatch, id, date);
    }
    return () => {
      dispatch(CleargetUserStopPoint());
    };
  }, [id]);

  useEffect(() => {
    if (getUserStopPoint?.data?.length > 0) {
      const data = getUserStopPoint?.data?.map((item: any) => ({
        lat: Number(item?.latitude),
        lng: Number(item?.longitude),
      }));
      setMapData([...data]);
    }
  }, [getUserStopPoint]);

  return (
    <div className="w-[100%] h-[100vh]">
      <Map data={mapData} />
    </div>
  );
};

export default LiveLocationInMap;
