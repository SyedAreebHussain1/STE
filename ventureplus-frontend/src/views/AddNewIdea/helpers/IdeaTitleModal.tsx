import React, { useState } from "react";
import { Modal, Button } from "antd";
import TextInput from "../../../components/inputs/TextInput";
import { useDispatch } from "react-redux";
import { ideaValidationApi } from "../../../services/api/AddNewIdea";
import { AppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

interface IdeaTitleModalProps {
  isVisible: boolean;
  onCancel: () => void;
}

const IdeaTitleModal: React.FC<IdeaTitleModalProps> = ({
  isVisible,
  onCancel,
}) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [title, setTitle] = useState<string>("");



    const sendTitle = () => {
        const body = { title };
        ideaValidationApi(body, dispatch, onSuccess);
    };

    const onSuccess = (res: any) => {
        onCancel();
        navigate(`/add-new-idea`, {
            state: {
                id: res?.id,
            },
        });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };

    const Title = "Add New Idea"

    return (
        <Modal
            open={isVisible}
            onCancel={onCancel}
            footer={null}
            centered
            width={700}
            bodyStyle={{ padding: '5px', textAlign: 'start' }}
            title={Title}
        >
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <p className='text-[#212838] font-semibold mb-1'>Idea Name</p>
            <TextInput
                name="answer"
                placeholder="Enter Idea Name"
                className="w-full sm:w-[100%] h-[50px]"
                value={title}
                onChange={handleInputChange}
            />
            <div className='flex justify-between'>
                <Button onClick={onCancel} className="mt-2 border border-red-500 text-red-500" style={{ borderRadius: '9999px' }}>
                    Cancel
                </Button>
                <Button onClick={sendTitle} className="mt-2 bg-[#016A70] text-gray-100" style={{ borderRadius: '9999px' }}>
                    Add and Start
                </Button>
            </div>
        </Modal>
    );
};

export default IdeaTitleModal;