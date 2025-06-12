import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Jan", Sales: 4000 },
  { name: "Feb", Sales: 3000 },
  { name: "Mar", Sales: 5000 },
  { name: "Apr", Sales: 4000 },
  { name: "May", Sales: 6000 },
];

const pieData = [
  { name: "Cost", value: 4000 },
  { name: "Net Revenue", value: 10000 },
  { name: "Profit", value: 6000 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">FlowOS Dashboard</h1>

      {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Financial Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sales" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        
      </div>
    </div>
  );
}
