import { Col, Row } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SignupForm from "./helpers/SignupForm";
import LoginForm from "./helpers/LoginForm";
import Sidetab from "./helpers/Sidetab";

interface LoginSignupProps {
  isFlip?: boolean;
}

const LoginSignup = (props: LoginSignupProps) => {
  const [isFlipped, setIsFlipped] = useState(props.isFlip || false);
  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Row
      className={`h-100% border-2 rounded-md ${
        isFlipped && "bg-dark-purple"
      }`}
      style={{
        background: !isFlipped
          ? "linear-gradient(180deg, #10AAB1 0%, #3ED0D6 36.17%)"
          : "",
      }}
    >
      <Col sm={24} lg={12} md={12} className="z-[99] ">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isFlipped ? (isMobile ? 0 : "100%") : 0 }}
          transition={{ duration: 0.5 }}
          className=" bg-white  h-[100%] flex justify-center items-center p-5 rounded-lg z-[99]"
        >
          {isFlipped ? (
            <SignupForm handleButtonClick={handleButtonClick} />
          ) : (
            <LoginForm handleButtonClick={handleButtonClick} />
          )}
        </motion.div>
      </Col>

      <Col lg={12} md={12} sm={0}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isFlipped ? (isMobile ? 0 : "-100%") : 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            !isFlipped ? "text-black" : "text-white"
          } hidden md:block p-8`}
        >
          <Sidetab isFlipped={isFlipped} />
        </motion.div>
      </Col>
    </Row>
  );
};

export default LoginSignup;
