import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DownLoadPdf = () => {
  const handleDownload = () => {
    const input: any = document.getElementById("attendance-sheet");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf: any = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("attendance-sheet.pdf");
    });
  };

  return <button onClick={handleDownload}>Download PDF</button>;
};

export default DownLoadPdf;
