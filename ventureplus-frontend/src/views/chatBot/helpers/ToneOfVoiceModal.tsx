import { Modal } from "antd";
import RoundedButton from "../../../components/button/RoundedButton";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { updateToneOfVoiceApi } from "../../../services/api/Chatbot";
import { useDispatch } from "react-redux";

const ToneOfVoiceModal = ({
  open,
  onClose,
  toneOfVoice,
  setToneOfVoice,
  selectedChatId,
}: {
  open: boolean;
  onClose: () => void;
  toneOfVoice: string;
  setToneOfVoice: React.Dispatch<React.SetStateAction<string>>;
  selectedChatId: number;
}) => {
  const [data, setData] = useState(toneOfVoice);
  const dispatch = useDispatch();

  const clickHandler = () => {
    updateToneOfVoiceApi(dispatch, selectedChatId, data, onSuccess);
  };

  const onSuccess = (result: string) => {
    setToneOfVoice(result);
    onClose();
  };
  return (
    <Modal
      centered
      footer={null}
      closable={false}
      closeIcon={false}
      open={open ? true : false}
      onCancel={() => onClose()}
      className="p-0 m-0 customModalAndClass"
    >
      <div className=" bg-[#F8FAFC] p-7 rounded-[30px] overflow-hidden">
        <h1 className="text-[#212838] text-[23px] font-semibold leading-[28.02px]">
          Tone of voice{" "}
        </h1>
        <p className="text-[#4A5366] text-[15px] font-medium leading-[20px] mt-[5px]">
          Define your brand voice so VentureKit can write like you. We use this
          when generating chat responses, copy, and report sections.
        </p>
        <TextArea
          rows={4}
          className="mt-[15px] border-[2px] border-[#97A1B5] bg-[#F8FAFC] text-[15px] text-[#212838] font-normal !leading-[18px] py-[10px]"
          name="description"
          placeholder="Description"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div className="flex justify-end mt-[20px]">
          <div className="flex items-center gap-2">
            <RoundedButton
              title={"Cancel"}
              type="white"
              sm
              onClick={() => onClose()}
              className="rounded-md"
            />
            <RoundedButton
              title={"Save"}
              type="primary"
              sm
              className="rounded-md"
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ToneOfVoiceModal;
