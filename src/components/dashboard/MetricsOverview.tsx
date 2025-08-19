import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clock, Zap, Users, Server, Database } from "lucide-react";
import { useEffect, useState } from "react";

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "stable";
  icon: React.ReactNode;
  color: string;
}

const MetricsOverview = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: "Avg Latency",
      value: "12.4ms",
      change: "-2.1ms",
      trend: "down",
      icon: <Clock className="h-5 w-5" />,
      color: "text-neon-green"
    },
    {
      label: "Requests/sec",
      value: "1,247",
      change: "+156",
      trend: "up",
      icon: <Activity className="h-5 w-5" />,
      color: "text-primary"
    },
    {
      label: "Success Rate",
      value: "99.94%",
      change: "+0.02%",
      trend: "up",
      icon: <Zap className="h-5 w-5" />,
      color: "text-success"
    },
    {
      label: "Active Users",
      value: "4,832",
      change: "+287",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
      color: "text-neon-blue"
    },
    {
      label: "Edge Nodes",
      value: "47/50",
      change: "2 offline",
      trend: "stable",
      icon: <Server className="h-5 w-5" />,
      color: "text-warning"
    },
    {
      label: "Cache Hit Rate",
      value: "94.7%",
      change: "+1.2%",
      trend: "up",
      icon: <Database className="h-5 w-5" />,
      color: "text-accent"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.label === "Avg Latency" 
          ? `${(Math.random() * 5 + 10).toFixed(1)}ms`
          : metric.label === "Requests/sec"
          ? `${Math.floor(Math.random() * 200 + 1100).toLocaleString()}`
          : metric.value
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="chart-container hover:shadow-glow transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.label}
            </CardTitle>
            <div className={metric.color}>
              {metric.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {metric.value}
            </div>
            <p className={`text-sm flex items-center ${
              metric.trend === "up" ? "text-success" : 
              metric.trend === "down" ? "text-neon-green" : 
              "text-muted-foreground"
            }`}>
              <span className="mr-1">
                {metric.trend === "up" ? "↗" : metric.trend === "down" ? "↘" : "→"}
              </span>
              {metric.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsOverview;