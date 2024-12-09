import React, { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { verticalDotsIcon } from "../../../assets/viewPlanAssets";
import { deleteIcon, editIcon, handIcon } from "../../../assets";
import {
  binIcon,
  dragIcon,
  editComponentIcon,
} from "../../../assets/ReusableComponents";

interface Props {
  item: any;
  setPushObject: React.Dispatch<React.SetStateAction<any[]>>;
  toggle: React.Dispatch<React.SetStateAction<any>>;
  children: ReactElement | null;
  index: number;
  allowEdit: boolean;
  allowDelete: boolean;
  allowMove: boolean;
}

const AnimatedOption = ({
  item,
  setPushObject,
  children,
  toggle,
  index,
  allowEdit,
  allowDelete,
  allowMove,
  ...restProps
}: Props) => {
  const [mouseHoverOnMain, setMouseHoverOnMain] = useState(false);
  const [showBox, setShowBox] = useState(false);
  function deleteHandler() {
    setPushObject((pre: any) =>
      pre?.map((val: any, i: any) =>
        i == index
          ? val?.filter((innerValarr: any) => innerValarr.id !== item.id)
          : val
      )
    );
  }

  return (
    <div
      className="relative w-full pdfComponentHoverEffectonBorder py-[8px] px-[10px] cursor-default"
      onMouseEnter={() => setMouseHoverOnMain(true)}
      onMouseLeave={() => setMouseHoverOnMain(false)}
    >

      {children}
      {mouseHoverOnMain && (
        <div
          className="absolute -right-3 top-1/2 -translate-y-1/2 h-[20px] flex items-center z-[100]"
          style={{
            width: showBox ? "auto" : "20px",
            transition: "width 0.3s ease",
          }}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
        >
          <div
            className={`flex items-center overflow-hidden cursor-pointer  flex-row-reverse gap-1  p-[2px] ${
              showBox ? "pl-[10px]" : ""
            } h-[30px]`}
          >
            <div className="flex justify-center w-[20px] ">
              <img src={verticalDotsIcon} alt="Options" width={14} />
            </div>

            {showBox && (
              <div className="flex gap-2 bg-[white] p-3 rounded-lg ">
                {allowDelete && (
                  <div onClick={deleteHandler}>
                    <motion.div
                      className="h-[20px] w-[20px]  cursor-pointer"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={binIcon} />
                    </motion.div>
                  </div>
                )}
                {allowMove && (
                  <div {...restProps}>
                    <motion.div
                      className="h-[20px] w-[20px]  cursor-move"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={dragIcon} />
                    </motion.div>
                  </div>
                )}
                {allowEdit && (
                  <div>
                    <motion.div
                      className="h-[20px] w-[20px]  cursor-pointer"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      onClick={toggle}
                    >
                      <img src={editComponentIcon} />
                    </motion.div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedOption;
