import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useIntersectionObserver } from "./../../hooks/useIntersectionObserver";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useSelector } from "react-redux";

const Slider = ({ children, gap, totalItems = 0, itemsPerScreen }) => {
  const primaryColor = useSelector(
    (state) =>
      state.getAgencyDetails.data?.data?.agencyDigitalCatalogue?.primaryColor
  );
  const fontColor = useSelector(
    (state) =>
      state.getAgencyDetails.data?.data?.agencyDigitalCatalogue?.fontColor
  );
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
  const slideContainer = useRef();
  const [mouseDownAt, setMouseDownAt] = useState({
    x: 0,
    y: 0,
  });
  const itemContainer = useRef();

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    setTranslateX((prevTranslateX) => prevTranslateX - diffX * 1.5);
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleOnClick = (e) => {
    e.stopPropagation();
    setMouseDownAt({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleOnUp = (e) => {
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

  function extractNumbersFromString(inputString) {
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
    if(itemsPerScreen && !isSmallDevice){
      const containerWidth = (slideContainer?.current?.clientWidth - (gap * (itemsPerScreen - 1)))
      const calculatedItemWidth = containerWidth / itemsPerScreen
      const items = itemContainer.current?.childNodes
      const offset = 0.06
      items.forEach(item => {
        item.style.width = `${calculatedItemWidth - (calculatedItemWidth * offset)}px`
      })
    }
  }, [itemsPerScreen, isSmallDevice])
  return (
    <div className="relative" ref={ref}>
      <Container>
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
            }}
            className="flex select-none"
            ref={itemContainer}
          >
            {children}
          </div>
        </div>
      </Container>
      {totalItems >= 3 && (
        <>
          <div className="absolute top-[50%] translate-y-[-50%] left-0 xl:left-[50px] z-20 invisible md:!visible">
            <button
              onClick={prev}
              style={{
                backgroundColor: primaryColor ? `#${primaryColor}` : "#7C47FF",
              }}
              className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
            >
              <GrPrevious color={`#${fontColor}`} size={"20px"} />
            </button>
          </div>
          <div className="absolute top-[50%] translate-y-[-50%] right-0 xl:right-[50px] z-20 invisible md:!visible">
            <button
              onClick={next}
              style={{
                backgroundColor: primaryColor ? `#${primaryColor}` : "#7C47FF",
              }}
              className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
            >
              <GrNext color={`#${fontColor}`} size={"20px"} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
