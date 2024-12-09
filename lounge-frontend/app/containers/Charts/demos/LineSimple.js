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

function LineSimple(props) {
  const [data, setData] = useState([]);

  const { classes } = props;
  const { data: earningHistory } = useSelector((state) =>
    state.getIn(["earningHistory"])
  );
  useEffect(() => {
    if (earningHistory.data.items.length > 0) {
      const dataArr = [];
      earningHistory.data.items.map((item, i) => {
        return dataArr.push({
          amount: item.amount,

          date: item.createdAt.split("T")[0],
        });
      });
      setData(dataArr);
    } else {
      setData([]);
    }
  }, [earningHistory]);
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
            dataKey="amount"
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
