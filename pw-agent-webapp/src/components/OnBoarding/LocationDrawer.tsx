import { Button, Drawer } from "antd";
import { IoMdClose } from "react-icons/io";
import MapsLocation from "../../helpers/Map/MapsLocation";

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
      title={<h2 className="text-[1.25rem] font-bold">Select Location</h2>}
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
          <Button
            onClick={onClose}
            className="text-primary  font-semibold  border-[0] text-[1rem]"
          >
            Cancel
          </Button>
          <Button
            className="bg-primary text-[white] font-semibold px-4 w-[100px] text-[1rem]  h-[40px]"
            htmlType="submit"
            onClick={onSave}
            disabled={markers.length === 0}
          >
            Save
          </Button>
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
