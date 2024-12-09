import React, { useState, useEffect } from "react";

import { Carousel, Modal } from "antd";
const CarouselModal = ({ visible, toggle, photos }) => {
  return (
    <div>
      <Modal
        title="Inventory images"
        visible={visible}
        onCancel={toggle}
        footer={null}
        centered={true}
        zIndex={9999}
        width={1000}
      >
        <Carousel autoplay dotPosition="bottom" dots>
          {photos.map((item, i) => {
            return <img style={{ width: "100%" }} src={item.photo} alt="img" />;
          })}
        </Carousel>
      </Modal>
    </div>
  );
};
export default CarouselModal;
