import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { ColType, FormContentT, initialColors } from "../../initialChartData";

interface PieChartPreviewI {
  data: any;
  formContent: FormContentT;
}

const PieChartPreview = ({
  data,
  formContent,
}: PieChartPreviewI) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={800} height={300}>
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
          cy="50%"
  
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

export default PieChartPreview;
