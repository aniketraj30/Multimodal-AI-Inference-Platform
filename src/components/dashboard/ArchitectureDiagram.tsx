import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, Zap, Globe, Brain, ArrowRight, Shield, BarChart3 } from "lucide-react";

const ArchitectureDiagram = () => {
  return (
    <Card className="chart-container col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <span>System Architecture</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-8">
          {/* Client Layer */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-primary">Client Applications</h3>
            <div className="flex justify-center space-x-4">
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[120px]">
                <Globe className="h-8 w-8 text-neon-blue" />
                <span className="text-sm">Web Dashboard</span>
              </div>
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[120px]">
                <Server className="h-8 w-8 text-neon-green" />
                <span className="text-sm">Mobile Apps</span>
              </div>
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[120px]">
                <Zap className="h-8 w-8 text-warning" />
                <span className="text-sm">API Clients</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-muted-foreground animate-pulse-slow" />
          </div>

          {/* Load Balancer & API Gateway */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-accent">Load Balancer & API Gateway</h3>
            <div className="flex justify-center space-x-4">
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[140px] neon-glow">
                <Shield className="h-8 w-8 text-accent" />
                <span className="text-sm">Go Service</span>
                <span className="text-xs text-muted-foreground">gRPC + HTTP</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-muted-foreground animate-pulse-slow" />
          </div>

          {/* Processing Layer */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-neon-green">AI Processing Layer</h3>
            <div className="flex justify-center space-x-4">
              <div className="bg-card border rounded-lg p-6 flex flex-col items-center space-y-2 min-w-[140px] success-glow">
                <Brain className="h-10 w-10 text-neon-green animate-pulse-slow" />
                <span className="text-sm font-semibold">Python ML Service</span>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• Text Summarization</div>
                  <div>• Audio Transcription</div>
                  <div>• Video Classification</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-muted-foreground animate-pulse-slow" />
          </div>

          {/* Data Layer */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-warning">Data & Cache Layer</h3>
            <div className="flex justify-center space-x-6">
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[120px]">
                <Database className="h-8 w-8 text-warning" />
                <span className="text-sm">Redis Cache</span>
                <span className="text-xs text-muted-foreground">Results Buffer</span>
              </div>
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[120px]">
                <Zap className="h-8 w-8 text-neon-blue" />
                <span className="text-sm">Kafka Stream</span>
                <span className="text-xs text-muted-foreground">Real-time Ingestion</span>
              </div>
              <div className="bg-card border rounded-lg p-4 flex flex-col items-center space-y-2 min-w-[120px]">
                <BarChart3 className="h-8 w-8 text-accent" />
                <span className="text-sm">Monitoring</span>
                <span className="text-xs text-muted-foreground">Prometheus + Grafana</span>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-neon-green">&lt; 15ms</div>
              <div className="text-sm text-muted-foreground">Average Latency</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Requests/sec</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-success">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-warning">50+</div>
              <div className="text-sm text-muted-foreground">Global Nodes</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArchitectureDiagram;