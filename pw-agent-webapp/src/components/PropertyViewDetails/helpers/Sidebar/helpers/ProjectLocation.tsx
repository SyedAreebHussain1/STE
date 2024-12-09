import { useState } from "react";
import MapsLocation from "../../../../../helpers/Map/MapsLocation";

type Props = {
  lat: any;
  long: any;
};

const ProjectLocation = (props: Props) => {
  const [selectedPlace, setSelectedPlace] = useState({ address: "", city: "" });
  const [markers, setMarkers] = useState<any[]>([
    { lat: parseInt(props.lat), lng: parseInt(props.long), time: new Date() },
  ]);
  return (
    <div className="rounded-xl p-[1rem] mt-6">
      <h4 className="mb-4 text-[#1D2939] text-[1.44rem] font-semibold">
        Location
      </h4>
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
