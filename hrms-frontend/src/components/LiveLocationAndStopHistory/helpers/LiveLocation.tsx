import { useEffect, useRef, useState } from "react";
import { socket } from "../../../utils/socket";
import Map from "./Map";

type Props = {
  id: string | undefined;
};

const LiveLocation = ({ id }: Props) => {
  const [mapData, setMapData] = useState<any>();
  const ref: any = useRef();
  const onConnect = (data: any) => {
    setMapData(data);
  };
  const onConnectcheck = () => {
    console.log("connect");
  };

  useEffect(() => {
    if (id) {
      socket.connect();

      const eventListenerName = `get-user-location-data-${id}`;
      socket.on("connect", onConnectcheck);
      socket.on(eventListenerName, onConnect);

      return () => {
        socket.disconnect();
        socket.off(eventListenerName, onConnect);
      };
    }
  }, [socket, id]);

  useEffect(() => {
    if (ref.current) {
      const height = window.innerHeight - (57 + 45);
      ref.current.style.height = `${height}px`;
    }
  }, [ref.current]);
  console.log(mapData);


  return (
    <div className="w-[100%]  pt-[20px] px-[20px]" ref={ref}>
      <Map data={mapData} />
    </div>
  );
};

export default LiveLocation;
