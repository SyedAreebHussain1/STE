import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import VennModule from "highcharts/modules/venn";
import HighchartsReact from "highcharts-react-official";

const VennDiagramComponent = ({
  customStyle,
}: {
  customStyle: Highcharts.Options;
}) => {
  VennModule(Highcharts);
  return (
    <div className="w-full flex justify-center">
      <HighchartsReact highcharts={Highcharts} options={customStyle} />
    </div>
  );
};

export default VennDiagramComponent;
