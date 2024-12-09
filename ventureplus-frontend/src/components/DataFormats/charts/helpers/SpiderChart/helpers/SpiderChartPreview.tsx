import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ColType, FormContentT } from "../../initialChartData";
interface SpiderChartPreviewI {
  data: any;
  tableColumns: ColType[];
  formContent: FormContentT;
}

const SpiderChartPreview = ({
  data,
  tableColumns,
  formContent,
}: SpiderChartPreviewI) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
        width={500}
        height={260}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis
          domain={[Number(formContent.minimum), Number(formContent.maximum)]}
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
            column.key !== "name" && (
              <Radar
                dataKey={column.key}
                stroke={formContent.colors[column.key]}
                fill={formContent.colors[column.key]}
                fillOpacity={0.5}
              />
            )
        )}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SpiderChartPreview;
