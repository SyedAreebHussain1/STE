import { Button, Drawer } from "antd";
import { IoMdClose } from "react-icons/io";
import MapsLocation from "../../helpers/Map/MapsLocation";
import RoundedButton from "../../helpers/button/RoundedButton";
import { patchCompanyLocationApi } from "../../redux/api/Location";

type Props = {
  open: boolean;
  onClose: () => void;
  markers: any;
  setMarkers: any;
  setSelectedPlace: any;
  onSave: () => void;
};

export const LocationDrawer: React.FC<Props> = ({
  open,
  onClose,
  markers,
  setMarkers,
  setSelectedPlace,
  onSave,
}: Props) => {
  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">Location</h2>}
      placement="right"
      width={window.innerWidth}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          padding: 0,
        },
      }}
      open={open}
      extra={
        <Button
          onClick={onClose}
          className="border-[0] text-[1rem] flex justify-center items-center shadow-none"
        >
          <IoMdClose className="w-[30px] h-[30px]" />
        </Button>
      }
      footer={
        <div className="flex justify-end gap-1">
          <RoundedButton
            onClick={onClose}
            title={"Cancel"}
            className="dark:bg-dark-primary dark:text-white"
            sm
          />
          <RoundedButton
            onClick={onSave}
            title={"Save"}
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
            sm
          />
        </div>
      }
    >
      <MapsLocation
        markers={markers}
        setMarkers={setMarkers}
        setSelectedPlace={setSelectedPlace}
      />
    </Drawer>
  );
};
