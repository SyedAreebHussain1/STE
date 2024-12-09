import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { GrNext, GrPrevious } from "react-icons/gr";

interface props {
  children: React.ReactNode;
  gap: number;
  totalItems: number;
  itemsPerScreen?: number;
}

const Slider = ({ children, gap, totalItems = 0, itemsPerScreen }: props) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const isSmallDevice = useMediaQuery(
    "only screen and (max-width : 768px)"
  ).getSnapshot();
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const slideContainer = useRef<any>();
  const [mouseDownAt, setMouseDownAt] = useState({
    x: 0,
    y: 0,
  });
  const itemContainer = useRef<any>();

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    setTranslateX((prevTranslateX) => prevTranslateX - diffX * 1.5);
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleOnClick = (e: any) => {
    e.stopPropagation();
    setMouseDownAt({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleOnUp = (e: any) => {
    const mouseDownEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const deltaX = mouseDownAt.x - mouseDownEnd.x;
    const deltaY = mouseDownAt.y - mouseDownEnd.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX) {
        if (-deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
    }
  };

  function extractNumbersFromString(inputString: any) {
    let numbers = inputString.match(/\d+/g);
    let result = numbers ? numbers.map(Number) : [];

    return result;
  }

  function next() {
    const itemsContainer = itemContainer?.current;
    if (itemsContainer?.childNodes?.length) {
      const totalParentWidth =
        slideContainer?.current?.parentNode?.clientWidth -
        extractNumbersFromString(
          window
            .getComputedStyle(slideContainer?.current?.parentNode, null)
            .getPropertyValue("padding-left")
        ) *
          2;
      const limit = totalParentWidth - itemContainer.current.clientWidth;
      const itemWidth = itemsContainer?.childNodes[0]?.clientWidth;
      if (translateX > limit) {
        setTranslateX(translateX - (itemWidth + gap));
      } else {
        setTranslateX(0);
      }
    }
  }
  function prev() {
    const itemsContainer = itemContainer?.current;
    if (itemsContainer?.childNodes?.length) {
      const totalParentWidth =
        slideContainer?.current?.parentNode?.clientWidth -
        extractNumbersFromString(
          window
            .getComputedStyle(slideContainer?.current?.parentNode, null)
            .getPropertyValue("padding-left")
        ) *
          2;
      const limit = totalParentWidth - itemContainer.current.clientWidth;
      const itemWidth = itemsContainer?.childNodes[0]?.clientWidth;
      if (translateX < 0) {
        setTranslateX((prev) => prev + (itemWidth + gap));
      } else {
        setTranslateX(limit);
      }
    }
  }
  useEffect(() => {
    if (entry && entry.isIntersecting && isSmallDevice) {
      next();
    }
  }, [entry, isSmallDevice]);

  useEffect(() => {
    if (itemsPerScreen && !isSmallDevice) {
      const containerWidth =
        slideContainer?.current?.clientWidth - gap * (itemsPerScreen - 1);
      const calculatedItemWidth = containerWidth / itemsPerScreen;
      const items = itemContainer.current.childNodes;
      const offset = 0.06;
      items.forEach((item: any) => {
        item.style.width = `${
          calculatedItemWidth - calculatedItemWidth * offset
        }px`;
      });
    }
  }, [itemsPerScreen, isSmallDevice]);
  return (
    <div className="relative sliderHoverEffect overflow-hidden" ref={ref}>
      <div className={`w-full m-auto h-full`}>
        <div
          className="overflow-hidden relative"
          ref={slideContainer}
          onTouchStart={handleOnClick}
          onTouchEnd={handleOnUp}
        >
          <div
            style={{
              display: "flex",
              gap: gap || "8px",
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.5s ease",
              width: "fit-content",
              justifyContent: itemsPerScreen === 1 ? "center" : "left",
            }}
            className="flex select-none"
            ref={itemContainer}
          >
            {children}
          </div>
        </div>
      </div>
      {totalItems >= 3 && (
        <>
          <div className="absolute top-[50%] translate-y-[-50%] left-0 xl:left-[-50px] z-20 invisible  preButton">
            <button
              onClick={prev}
              className="  w-10 h-10 flex justify-center items-center rounded-full border-[1.5px] border-[#27A3A3] bg-primary"
            >
              <GrPrevious color="#fff" size={"20px"} />
            </button>
          </div>
          <div className="absolute top-[50%] translate-y-[-50%] right-0 xl:right-[-50px] z-20 invisible  nextButton">
            <button
              onClick={next}
              className="  w-10 h-10 flex justify-center items-center rounded-full border border-primary bg-primary"
            >
              <GrNext color="#fff" size={"20px"} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
