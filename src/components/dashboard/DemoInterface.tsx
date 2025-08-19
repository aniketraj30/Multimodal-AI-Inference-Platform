import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FileText, Mic, Video, Upload, Play, Brain, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoInterface = () => {
  const [textInput, setTextInput] = useState("");
  const [textOutput, setTextOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState({ text: false, audio: false, video: false });
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioResult, setAudioResult] = useState("");
  const [videoResult, setVideoResult] = useState("");
  const { toast } = useToast();

  const processText = async () => {
    if (!textInput.trim()) return;
    
    setIsProcessing(prev => ({ ...prev, text: true }));
    
    // Simulate AI processing
    setTimeout(() => {
      const mockSummary = `ANALYSIS COMPLETE:\n\n• Key themes: ${Math.floor(Math.random() * 5) + 3} identified\n• Sentiment: ${['Positive', 'Neutral', 'Mixed'][Math.floor(Math.random() * 3)]}\n• Confidence: ${(Math.random() * 0.3 + 0.7).toFixed(2)}\n• Processing time: ${(Math.random() * 50 + 10).toFixed(1)}ms\n\nSUMMARY:\n${textInput.slice(0, 100)}... [AI-generated insights and key points extracted]`;
      setTextOutput(mockSummary);
      setIsProcessing(prev => ({ ...prev, text: false }));
      toast({
        title: "Text Analysis Complete",
        description: "Successfully analyzed and summarized your text input."
      });
    }, 2000);
  };

  const processAudio = async () => {
    if (!audioFile) return;
    
    setIsProcessing(prev => ({ ...prev, audio: true }));
    
    setTimeout(() => {
      const mockTranscription = `TRANSCRIPTION COMPLETE:\n\n• Duration: ${(Math.random() * 120 + 30).toFixed(1)}s\n• Language: English (confidence: 0.97)\n• Speakers: ${Math.floor(Math.random() * 3) + 1} detected\n• Processing time: ${(Math.random() * 200 + 50).toFixed(1)}ms\n\nTRANSCRIPT:\n"Thank you for using CogniMesh AI. This is a simulated transcription of your audio file. Our real-time speech recognition would provide accurate text conversion with speaker identification and sentiment analysis..."`;
      setAudioResult(mockTranscription);
      setIsProcessing(prev => ({ ...prev, audio: false }));
      toast({
        title: "Audio Transcription Complete",
        description: `Successfully transcribed ${audioFile.name}`
      });
    }, 3000);
  };

  const processVideo = async () => {
    if (!videoFile) return;
    
    setIsProcessing(prev => ({ ...prev, video: true }));
    
    setTimeout(() => {
      const mockClassification = `VIDEO ANALYSIS COMPLETE:\n\n• Resolution: 1920x1080 @ 30fps\n• Duration: ${(Math.random() * 300 + 60).toFixed(1)}s\n• Frames analyzed: ${Math.floor(Math.random() * 500 + 100)}\n• Processing time: ${(Math.random() * 1000 + 200).toFixed(1)}ms\n\nCLASSIFICATION RESULTS:\n🎯 Primary content: ${['Technology Demo', 'Business Meeting', 'Educational Content', 'Entertainment'][Math.floor(Math.random() * 4)]}\n📊 Confidence: ${(Math.random() * 0.2 + 0.8).toFixed(2)}\n👥 People detected: ${Math.floor(Math.random() * 5) + 1}\n🎬 Scene changes: ${Math.floor(Math.random() * 20) + 5}\n\nKEY INSIGHTS:\nAdvanced computer vision analysis detected multiple objects, scenes, and activities with high confidence scores...`;
      setVideoResult(mockClassification);
      setIsProcessing(prev => ({ ...prev, video: false }));
      toast({
        title: "Video Analysis Complete",
        description: `Successfully analyzed ${videoFile.name}`
      });
    }, 4000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Text Processing */}
        <Card className="chart-container">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Text Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter text for summarization and analysis..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="min-h-[100px] bg-muted/50"
            />
            <Button
              onClick={processText}
              disabled={!textInput.trim() || isProcessing.text}
              className="w-full neon-glow"
            >
              {isProcessing.text ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Analyze Text
                </>
              )}
            </Button>
            {textOutput && (
              <div className="mt-4 p-3 bg-muted/30 rounded-lg border">
                <pre className="text-xs whitespace-pre-wrap text-muted-foreground">
                  {textOutput}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Audio Processing */}
        <Card className="chart-container">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mic className="h-5 w-5 text-neon-green" />
              <span>Audio Transcription</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
              <Input
                type="file"
                accept="audio/*"
                onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                className="hidden"
                id="audio-upload"
              />
              <label htmlFor="audio-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {audioFile ? audioFile.name : "Upload audio file"}
                </p>
              </label>
            </div>
            <Button
              onClick={processAudio}
              disabled={!audioFile || isProcessing.audio}
              className="w-full success-glow"
            >
              {isProcessing.audio ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Transcribing...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Transcribe Audio
                </>
              )}
            </Button>
            {audioResult && (
              <div className="mt-4 p-3 bg-muted/30 rounded-lg border">
                <pre className="text-xs whitespace-pre-wrap text-muted-foreground">
                  {audioResult}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Video Processing */}
        <Card className="chart-container">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="h-5 w-5 text-neon-blue" />
              <span>Video Classification</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
              <Input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                className="hidden"
                id="video-upload"
              />
              <label htmlFor="video-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {videoFile ? videoFile.name : "Upload video file"}
                </p>
              </label>
            </div>
            <Button
              onClick={processVideo}
              disabled={!videoFile || isProcessing.video}
              className="w-full"
              style={{ boxShadow: "0 0 20px hsl(200 100% 50% / 0.5)" }}
            >
              {isProcessing.video ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Classify Video
                </>
              )}
            </Button>
            {videoResult && (
              <div className="mt-4 p-3 bg-muted/30 rounded-lg border">
                <pre className="text-xs whitespace-pre-wrap text-muted-foreground">
                  {videoResult}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DemoInterface;