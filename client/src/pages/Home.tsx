import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Mail, TrendingUp, Users, Zap, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-navy via-darker to-dark-navy">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234285f4" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-accent/10 border border-blue-accent/20 mb-8">
              <Zap className="w-4 h-4 mr-2 text-blue-accent" />
              <span className="text-sm font-medium text-blue-accent">AI-Powered Email Marketing Expert</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-accent to-purple-accent bg-clip-text text-transparent leading-tight">
              Harshit Aggarwal
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses with AI-driven email campaigns that deliver 
              <span className="text-blue-accent font-semibold"> 40%+ higher engagement</span> and 
              <span className="text-purple-accent font-semibold"> 3x better ROI</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-blue-accent hover:bg-blue-accent/90 text-white px-8 py-3 text-lg">
                <Link href="/portfolio">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View My Results
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-white px-8 py-3 text-lg">
                <Link href="/email-preview">
                  <Play className="w-5 h-5 mr-2" />
                  Live Email Preview
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: 250, suffix: '+', label: 'Campaigns Created' },
                { value: 40, suffix: '%', label: 'Avg. Open Rate' },
                { value: 15, suffix: '%', label: 'Avg. Click Rate' },
                { value: 300, suffix: '%', label: 'ROI Increase' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-accent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Email Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge AI to create personalized, high-converting email campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Smart Campaign Creation',
                description: 'AI-generated subject lines and content that adapt to your audience behavior'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Advanced Segmentation',
                description: 'Machine learning algorithms to identify and target your most valuable customers'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Performance Optimization',
                description: 'Real-time A/B testing and optimization for maximum engagement and conversions'
              }
            ].map((service, index) => (
              <Card key={index} className="bg-background border-border hover:border-blue-accent/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-accent/20 transition-colors">
                    <div className="text-blue-accent">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-accent to-purple-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI-powered email campaigns can drive growth for your business
          </p>
          <Button asChild size="lg" className="bg-white text-blue-accent hover:bg-white/90 px-8 py-3 text-lg">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}