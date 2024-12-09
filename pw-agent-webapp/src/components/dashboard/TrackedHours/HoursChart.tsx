import { Column } from "@ant-design/plots";
import { useEffect, useState } from "react";

type Props = {};

const HoursChart = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    isStack: true,
    xField: "year",
    yField: "value",
    seriesField: "type",
    color: ["#27a3a373", "#27A3A3"],
    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column {...config} />;
};

export default HoursChart;
