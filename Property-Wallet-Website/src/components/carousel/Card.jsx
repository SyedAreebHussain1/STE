import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.02)" : "scale(1)",
    // borderTopLeftRadius: "80px",
    // marginLeft: "4%",
    // borderRadius: "50px",

    // boxShadow: show
    //   ? "0 20px 25px rgb(0 0 0 / 25%)"
    //   : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" style={{ width: "auto", height: "30rem" }} />
      {/* <h2>Title</h2> */}
      {/* <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p> */}
    </animated.div>
  );
}

export default Card;