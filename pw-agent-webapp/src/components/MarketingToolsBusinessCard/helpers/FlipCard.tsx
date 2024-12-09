import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAgencyDetailsApi } from "../../../redux/api/WebEstate";
import { CardFormatList } from "./CardFormats";

interface FlipProps {
  form: any;
  index: number;
  previewImg: any;
  customPrintRef: any;
  currSlide: any;
}

const FlipCard: React.FC<FlipProps> = ({
  form,
  index,
  previewImg,
  customPrintRef,
  currSlide,
}) => {
  const [flipped, setFlipped] = useState(false);

  const getAgencyDetails = useSelector((state: any) => state.getAgencyDetails);
  const dispatch = useDispatch();

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    getAgencyDetailsApi(dispatch);
  }, []);

  const formValues = Form.useWatch((values: any) => values || {}, form);
  const CardFormats = CardFormatList(
    formValues,
    previewImg,
    getAgencyDetails?.data?.primaryColor,
    getAgencyDetails?.data?.secondaryColor
  );

  return (
    <>
      <motion.div
        className="w-[400px] h-[200px] relative"
        onClick={handleFlip}
        initial={{ rotateY: 0 }}
        animate={flipped ? { rotateY: 360 } : { rotateY: 0 }}
        transition={{ duration: 3 }}
      >
        <motion.div
          className="h-[200px] "
          initial={{ opacity: 1, scale: 1 }}
          animate={
            flipped ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.6 }}
        >
          {CardFormats[index].front}
        </motion.div>
        <motion.div
          className="h-[200px] absolute top-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            flipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6 }}
        >
          {CardFormats[index].back}
        </motion.div>
      </motion.div>

      {/* For pdf */}
      <div
        className="p-4 d-print-block w-full h-screen bg-transparent"
        ref={customPrintRef}
      >
        <div className="w-[400px]">
          <div className="h-[200px]">{CardFormats?.[currSlide]?.front}</div>

          <div className="h-[200px] w-full relative mt-4">
            {CardFormats?.[currSlide]?.back}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
