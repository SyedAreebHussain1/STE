import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data1 } from "./sampleData";
import styles from "./fluidChart-jss";
import { useSelector } from "react-redux";
import moment from "moment";

function LineSimple(props) {
  const [data, setData] = useState([]);

  const { classes } = props;

  const getSaleOrderGraphData = useSelector((state) =>
    state.getIn(["getSaleOrderGraphData"])
  );
  useEffect(() => {
    if (getSaleOrderGraphData?.data) {
      const dataArr = getSaleOrderGraphData?.data?.data.map((item, i) => {
        return {
          saleOrderCount: Number(item?.saleOrderCount),
          date: moment(item?.date).format("DD-MM-YYYY"),
        }
      });
      setData(dataArr);
    } else {
      setData([]);
    }
  }, [getSaleOrderGraphData?.data]);
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={800}
          height={450}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" tickLine={false} />
          <YAxis
            axisLine={false}
            tickSize={3}
            tickLine={false}
            tick={{ stroke: "none" }}
          />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend iconType="circle" verticalALign="bottom" iconSize={10} />
          <Line
            type="monotone"
            dataKey="saleOrderCount"
            strokeWidth={5}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" strokeWidth={5} stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineSimple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineSimple);
