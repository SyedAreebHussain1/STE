import { useState } from "react";
import MapsLocation from "../../../../../helpers/Map/MapsLocation";

type Props = { lat: any; lng: any };

const ProjectLocation = (props: Props) => {
  const [selectedPlace, setSelectedPlace] = useState({ address: "", city: "" });

  const [markers, setMarkers] = useState<any[]>([
    { lat: parseInt(props.lat), lng: parseInt(props.lng), time: new Date() },
    ,
  ]);
  return (
    <div className="border border-borderColor rounded-xl p-[1rem]">
      <h4 className="mb-4 text-[#1D2939] text-base font-medium">Location</h4>
      <MapsLocation
        markers={markers}
        setMarkers={setMarkers}
        setSelectedPlace={setSelectedPlace}
        hideSearch
        notClickable
      />
    </div>
  );
};

export default ProjectLocation;
