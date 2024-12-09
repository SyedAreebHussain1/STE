import {
  Area,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ColType, FormContentT } from "../../initialChartData";
interface BarChartPreviewI {
  data: any;
  tableColumns: ColType[];
  formContent: FormContentT;
}

const BarChartPreview = ({
  data,
  tableColumns,
  formContent,
}: BarChartPreviewI) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        title="BarChart"
        height={150}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label
            value={formContent.xLabel}
            offset={0}
            position="insideBottom"
          />
        </XAxis>
        <YAxis
          type="number"
          domain={[Number(formContent.minimum), Number(formContent.maximum)]}
          label={{
            value: formContent.yLabel,
            angle: -90,
            position: "insideBottomLeft",
          }}
        />
        <Tooltip />
        {formContent.showLegend && (
          <Legend
            align={formContent.align}
            verticalAlign={formContent.verticalAlignment}
            layout={formContent.layout}
          />
        )}
        {tableColumns.map(
          (column, i) =>
            column.key !== "name" &&
            (formContent.series[column.key] === "bar" ? (
              <Bar
                key={column.key}
                dataKey={column.key}
                fill={formContent.colors[column.key]}
                stroke={formContent.colors[column.key]}
                stackId={formContent.stackId}
              />
            ) : formContent.series[column.key] === "area" ? (
              <Area
                key={column.key}
                dataKey={column.key}
                fill={formContent.colors[column.key]}
                stroke={formContent.colors[column.key]}
                stackId={formContent.stackId}
              />
            ) : (
              <Line
                key={column.key}
                dataKey={column.key}
                fill={formContent.colors[column.key]}
                stroke={formContent.colors[column.key]}
              />
            ))
        )}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarChartPreview;
