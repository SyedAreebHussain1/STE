import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FormContentT } from "../../initialChartData";

interface SemiCircleChartPreviewI {
  data: any;
  formContent: FormContentT;
}

const SemiCircleChartPreview = ({
  data,
  formContent,
}: SemiCircleChartPreviewI) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={800} height={260}>
        {formContent.showLegend && (
          <Legend
            align={formContent.align}
            verticalAlign={formContent.verticalAlignment}
            layout={formContent.layout}
          />
        )}
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="80%"
          startAngle={0}
          endAngle={180}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry: any, index: number) => (
            <Cell key={entry.key} fill={formContent.colors[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SemiCircleChartPreview;
