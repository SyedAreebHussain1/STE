import { Col, FormInstance } from "antd";
import TextInput from "../../helpers/inputs/TextInput";
import { MdMyLocation } from "react-icons/md";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import { LocationDrawer } from "./LocationDrawer";

type Props = {
  form: FormInstance;
};

const SelectAgencyLocation = ({ form }: Props) => {
  const [selectedPlace, setSelectedPlace] = useState({ address: "", city: "" });
  const [markers, setMarkers] = useState<any[]>([]);
  const [open, toggle] = useToggle();
  function onSave() {
    if (selectedPlace) {
      if (selectedPlace?.address !== "") {
        form.setFieldsValue({
          address: selectedPlace.address,
          city: selectedPlace.city,
        });
      }
      if (markers.length > 0) {
        form.setFieldsValue({
          location: markers[0].lat + "," + markers[0].lng,
        });
      }
      toggle();
    }
  }

  return (
    <Col xs={24} sm={24} xl={12}>
      <LocationDrawer
        open={open}
        onClose={toggle}
        markers={markers}
        setMarkers={setMarkers}
        setSelectedPlace={setSelectedPlace}
        onSave={onSave}
      />
      <span className="font-medium text-[.975rem] text-[#344054]">
        Registered Agency Location
      </span>
      <span className="text-[red] ml-2">*</span>
      <TextInput
        name="address"
        suffix={<MdMyLocation />}
        onClick={toggle}
        placeholder="Enter your Agency Location"
        onKeyPress={(e) => e.preventDefault()}
        rules={[
          {
            required: true,
            message: "Please input your Agency Location!",
          },
        ]}
        className="w-full h-[50px]  "
      />

      <TextInput
        name="location"
        hidden
        suffix={<MdMyLocation />}
        onClick={toggle}
        placeholder="Enter your Agency Location"
        className="w-full h-[50px] hidden"
      />
    </Col>
  );
};

export default SelectAgencyLocation;
