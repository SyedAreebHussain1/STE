import FacebookLogin from "@greatsumini/react-facebook-login";
import { Button, Col, Form, Modal, Row, Select } from "antd";
declare const window: any;

type Props = {
  open: boolean;
  close: () => void;
  front: any;
  back: any;
  save: any;
  imageRef: any;
};

const SaveAsImageModal = ({
  open,
  close,
  front,
  back,
  save,
  imageRef,
}: Props) => {
  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          Save As Image
        </span>
      }
      width={1000}
      open={open}
      onCancel={close}
      footer={false}
    >
      <div
        className="flex gap-4 p-4 flex-col justify-center items-center h-full overflow-auto"
        ref={imageRef}
      >
        <div className="w-[400px]">{front}</div>

        <div className="h-[200px] relative w-[400px]">{back}</div>
      </div>
      <div className="flex justify-end w-[100%] mt-10">
        <Button
          htmlType="submit"
          type="primary"
          onClick={() => save(imageRef)}
          className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};
export default SaveAsImageModal;
