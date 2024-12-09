import { useState } from "react";
import { usePDF } from "react-to-pdf";
import DragDropMain from "./helpers/DragDropMain";
import { useLocation } from "react-router-dom";
interface Props {}
const ViewPlan = (props: Props) => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [arr, setArray] = useState([]);

  return (
    <div>
      <DragDropMain />
    </div>
  );
};
export default ViewPlan;
