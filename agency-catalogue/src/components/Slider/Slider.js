import React, { useRef, useState } from "react";

const Slider = ({ children, gap }) => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const slideContainer = useRef();
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const itemContainer = useRef();

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    setTranslateX((prevTranslateX) => prevTranslateX - diffX);
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleOnClick = (e) =>
    setMouseDownAt(e.touches ? e.touches[0].clientX : e.clientX);

  function handleOnMove(e) {
    if (mouseDownAt === 0) {
      return;
    }
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const mouseDelta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);

    itemContainer.current.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 500, fill: "forwards" }
    );
  }

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  return (
    <div
      className="overflow-hidden relative lg:ml-[230px]"
      ref={slideContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleOnClick}
      onMouseMove={handleOnMove}
      onMouseUp={handleOnUp}
      onMouseLeave={handleOnUp}
    >
      <div
        style={{
          display: "flex",
          gap: gap || "8px",
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? "none" : "transform 0.5s ease",
        }}
        className="flex select-none"
        ref={itemContainer}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
