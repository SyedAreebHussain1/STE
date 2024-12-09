import { Col, Row } from "antd";
import LocationsSearch from "./LocationsSearch";
import RadiusButton from "./RadiusButton";
import SelectMapOrList, { ContentType } from "./SelectMapOrList";
import RoundedButton from "../../helpers/button/RoundedButton";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import { infoMessage } from "../../utils/message";
import { LocationDrawer } from "./LocationDrawer";
import { useDispatch } from "react-redux";
import {
  getCompanyLocationApi,
  patchCompanyLocationApi,
} from "../../redux/api/Location";

const LocationHeader = ({ data }: any) => {
  const [open, troggle] = useToggle();
  const [markers, setMarkers] = useState<any[]>([
    {
      lat: Number(data?.lat),
      lng: Number(data?.lng),
    },
  ]);
  const [selectedPlace, setSelectedPlace] = useState({
    address: data?.address,
  });
  const dispatch = useDispatch();
  function onSave() {
    if (selectedPlace) {
      if (!selectedPlace?.address) {
        infoMessage("");
        return;
      }
      if (!markers[0].lat && !markers[0].lng) {
        infoMessage("");
        return;
      }
      const formData = new FormData();
      formData.append("address", selectedPlace.address);
      formData.append("latitude", markers[0].lat);
      formData.append("longitude", markers[0].lng);
      patchCompanyLocationApi(formData, dispatch, onSuccess);
      setMarkers([]);
    }
  }
  const onSuccess = () => {
    getCompanyLocationApi(dispatch);
    troggle();
  };
  return (
    <>
      {open && (
        <LocationDrawer
          open={open}
          onClose={troggle}
          markers={markers}
          setMarkers={setMarkers}
          setSelectedPlace={setSelectedPlace}
          onSave={onSave}
        />
      )}

      <div className="bg-[#FAFAFA] border border-borderColor py-4 px-4 flex justify-between dark:bg-dark-primary dark:border-dark-primary">
        <RadiusButton radiusValue={data?.locationRadius} />
        <RoundedButton
          onClick={troggle}
          title={
            <span className="flex items-center">
              <span className="text-[16px] pr-1">+</span>
              Add New Location
            </span>
          }
          className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
          sm
        />
      </div>
    </>
  );
};

export default LocationHeader;
