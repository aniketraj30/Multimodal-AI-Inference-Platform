import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts";
import { useEffect, useState } from "react";

interface ChartProps {
  title: string;
  type: "latency" | "throughput" | "errors";
}

const RealTimeChart = ({ title, type }: ChartProps) => {
  const [data, setData] = useState<Array<{ time: string; value: number; secondary?: number }>>([]);

  useEffect(() => {
    // Initialize with some data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 3000).toLocaleTimeString(),
      value: type === "latency" 
        ? Math.random() * 20 + 10
        : type === "throughput"
        ? Math.random() * 500 + 800
        : Math.random() * 10,
      secondary: type === "throughput" ? Math.random() * 300 + 600 : undefined
    }));
    setData(initialData);

    // Update data every 3 seconds
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), {
          time: new Date().toLocaleTimeString(),
          value: type === "latency" 
            ? Math.random() * 20 + 10
            : type === "throughput"
            ? Math.random() * 500 + 800
            : Math.random() * 10,
          secondary: type === "throughput" ? Math.random() * 300 + 600 : undefined
        }];
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [type]);

  const getColor = () => {
    switch (type) {
      case "latency": return "#00ff88";
      case "throughput": return "#3b82f6";
      case "errors": return "#ef4444";
      default: return "#3b82f6";
    }
  };

  return (
    <Card className="chart-container">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          {title}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            {type === "throughput" ? (
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="time" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={getColor()}
                  fill={`${getColor()}20`}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="secondary"
                  stroke="hsl(var(--accent))"
                  fill="hsl(var(--accent) / 0.1)"
                  strokeWidth={2}
                />
              </AreaChart>
            ) : (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="time" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={getColor()}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeChart;