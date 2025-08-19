import SystemHeader from "@/components/dashboard/SystemHeader";
import MetricsOverview from "@/components/dashboard/MetricsOverview";
import RealTimeChart from "@/components/dashboard/RealTimeChart";
import DemoInterface from "@/components/dashboard/DemoInterface";
import ArchitectureDiagram from "@/components/dashboard/ArchitectureDiagram";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <SystemHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Real-Time Multimodal AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distributed low-latency inference system for text, audio, and video streams with sub-second response times
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
              <span className="text-success">System Operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
              <span className="text-primary">47 Edge Nodes Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
              <span className="text-accent">Global Coverage</span>
            </div>
          </div>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              System Overview
            </TabsTrigger>
            <TabsTrigger value="demo" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Live Demo
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Real-Time Monitoring
            </TabsTrigger>
            <TabsTrigger value="architecture" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Architecture
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <MetricsOverview />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RealTimeChart title="Response Latency" type="latency" />
              <RealTimeChart title="Throughput" type="throughput" />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Live AI Inference Demo</h2>
              <p className="text-muted-foreground">
                Test our multimodal AI capabilities with real-time processing
              </p>
            </div>
            <DemoInterface />
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Real-Time System Monitoring</h2>
              <p className="text-muted-foreground">
                Live performance metrics and system health monitoring
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RealTimeChart title="Request Latency (ms)" type="latency" />
              <RealTimeChart title="Requests per Second" type="throughput" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RealTimeChart title="Error Rate" type="errors" />
              <RealTimeChart title="System Load" type="latency" />
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">System Architecture</h2>
              <p className="text-muted-foreground">
                Distributed microservices architecture with Go, Python, and Kubernetes
              </p>
            </div>
            <ArchitectureDiagram />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground text-sm border-t border-border">
          <p>CogniMesh AI - Real-Time Multimodal Inference System</p>
          <p>Powered by Go microservices, Python ML models, Redis, Kafka, and Kubernetes</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;