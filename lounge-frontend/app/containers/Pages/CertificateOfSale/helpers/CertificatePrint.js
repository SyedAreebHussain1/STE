import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import CertificatePrintAchievement from "./CertificatePrintAchievement";
const CertificatePrint = () => {
  const [printdata, setPrintData] = useState(null);
  const customPrintRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    onAfterPrint: () => setPrintData(null),
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });
  useEffect(() => {
    if (printdata !== null) {
      handlePrint();
    }
  }, [printdata]);
  return (
    <div>
      <button
        onClick={() => {
          setPrintData("Azlan Tariq");
        }}
      >
        Print Certificate
      </button>

      <div className="hidden d-print-block" ref={customPrintRef}>
        {printdata !== null && <CertificatePrintAchievement data={printdata} />}
      </div>
    </div>
  );
};

export default CertificatePrint;
