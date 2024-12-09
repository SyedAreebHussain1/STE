import { Modal } from "antd";
import { useState } from "react";
import MapsLocation from "../../../../utils/googleMap";
import RoundedButton from "../../../../components/button/RoundedButton";

interface Props {
  closeHandler: () => void;
  open: boolean;
  place: any;
  setPlace: any;
}

const MapModal = ({ closeHandler, open, place, setPlace }: Props) => {
  const [marker, setMarker] = useState<any[]>([]);
  const [selectPlace, setSelectedPlace] = useState<any>();
  function saveHandler() {
    setPlace(selectPlace);
    closeHandler();
  }
  return (
    <Modal
      title="Location"
      open={open}
      onCancel={closeHandler}
      footer={
        <div className="flex justify-between">
          <RoundedButton
            title={"Close"}
            type="secondary"
            sm
            onClick={closeHandler}
          />
          <RoundedButton
            title={"Save"}
            type="primary"
            sm
            disabled={!selectPlace?.address}
            onClick={saveHandler}
          />
        </div>
      }
    >
      <div className="h-[50vh] w-full">
        <MapsLocation
          markers={marker}
          setMarkers={setMarker}
          setSelectedPlace={setSelectedPlace}
        />
      </div>
    </Modal>
  );
};

export default MapModal;
