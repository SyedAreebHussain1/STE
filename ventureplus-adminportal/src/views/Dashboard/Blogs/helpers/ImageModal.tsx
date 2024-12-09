import { Modal, Form, Tooltip } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import {
  deleteAllBlogPicturesApi,
  getAllBlogsApi,
} from "../../../../services/api/Dashboard/Blogs/allBlogs";

interface Props {
  open: any;
  close: (e: any) => void;
  type?: string;
}
export interface BodyType {}

const ImageModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null); 
  function onSuccess() {
    close(null);
    getAllBlogsApi(dispatch, { page: 1, limit: 10 });
    form.resetFields();
  }

  useEffect(() => {
    if (type) {
      form.setFieldsValue(open);
    }
  }, [open]);

  function handleDeleteImage(imageId: number) {
    deleteAllBlogPicturesApi(dispatch, imageId, onSuccess);
  }

  return (
    <Modal
      width={"600px"}
      title={<h3 className="text-[18px] font-semibold">Image</h3>}
      open={open}
      onCancel={() => close(null)}
      footer={null}
      centered={true}
    >
      <Form autoComplete="off" form={form}>
        <div className="flex gap-3 grid md:grid-cols-2 grid-col-1">
          {open?.blogPictures?.map((imageItems: any, index: number) => {
            return (
              <div
                key={index}
                className="relative my-3 flex items-center justify-center"
                onMouseEnter={() => setHoveredImageId(imageItems?.id)} 
                onMouseLeave={() => setHoveredImageId(null)} 
              >
                <img
                  src={imageItems?.url}
                  className="h-[250px] w-[350px] items-center justify-center"
                  alt="Blog"
                />
                {hoveredImageId === imageItems?.id && ( 
                  <Tooltip title="Delete">
                    <DeleteOutlined
                      className="absolute top-3 right-3 text-xl text-red-600 cursor-pointer"
                      onClick={() => handleDeleteImage(imageItems?.id)} 
                    />
                  </Tooltip>
                )}
              </div>
            );
          })}
        </div>
      </Form>
    </Modal>
  );
};

export default ImageModal;
