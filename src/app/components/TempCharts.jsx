"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TempChart({ forecast }) {
  if (!forecast) return null;

  const chartData = forecast.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className="w-[90%] max-w-4xl mx-auto mt-10 bg-white/50 backdrop-blur-xl p-6 rounded-3xl border border-white/30">
      <h3 className="text-center text-xl font-semibold mb-4">Temperature Trend</h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#fff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
