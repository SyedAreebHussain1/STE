import React from "react";
import { Button, Modal } from "antd";
import { successSubmitGif, wrongGif } from "../../../assets/comingSoonAssets";

const SubSuccessfullyOrWrongModal = ({ toggleOpen, open }: any) => {
  return (
    <React.Fragment>
      <Modal
        centered
        open={open !== ""}
        footer={null}
        width={492}
        onCancel={() => toggleOpen("")}
        bodyStyle={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="flex justify-center mt-10">
            {open === "success" ? (
              <img src={successSubmitGif} alt="" />
            ) : (
              <img src={wrongGif} alt="" />
            )}
          </div>
        </div>
        <div>
          <div className="text-center ">
            <div className="mt-6 mb-4">
              <h1 className="text-[#000000] font-bold dm-sans text-xl">
                {open === "success"
                  ? "You've joined our mailing list successfully!"
                  : "You're already a part of our community!"}
              </h1>
              <p className="text-[#000000] font-normal dm-sans ">
                {open === "success"
                  ? "Thank you for subscribing. Keep an eye on your inbox for the latest updates."
                  : "You have already joined our mailing list. Stay tuned for more updates!"}
              </p>
            </div>
            <div className="flex justify-center mb-2 gap-3 ">
              <Button
                onClick={() => toggleOpen("")}
                className="bg-[#016a70] rounded-full font-semibold text-[#ffffff]"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default SubSuccessfullyOrWrongModal;
