import React from 'react';
import { Mail, Brain, TrendingUp, Users, Zap, Target, BarChart3, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Campaign Creation',
      description: 'Intelligent email campaigns powered by machine learning algorithms that adapt to your audience behavior and preferences.',
      features: ['Smart subject line generation', 'Content personalization', 'Send time optimization', 'Behavioral triggers'],
      price: 'From $2,500',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Advanced Segmentation',
      description: 'Precision audience targeting using AI to identify high-value customers and create micro-segments for maximum engagement.',
      features: ['Predictive analytics', 'Customer lifetime value', 'Behavioral segmentation', 'Dynamic list management'],
      price: 'From $1,800',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Continuous A/B testing and optimization using AI to maximize open rates, click-through rates, and conversions.',
      features: ['Real-time optimization', 'Multivariate testing', 'Performance analytics', 'ROI tracking'],
      price: 'From $2,200',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Marketing Automation',
      description: 'Complete automation workflows that nurture leads, retain customers, and drive revenue on autopilot.',
      features: ['Drip campaigns', 'Lead nurturing', 'Customer onboarding', 'Win-back sequences'],
      price: 'From $3,000',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking with AI-powered insights and actionable recommendations.',
      features: ['Custom dashboards', 'Predictive insights', 'Revenue attribution', 'Competitor analysis'],
      price: 'From $1,500',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Strategy Consulting',
      description: 'One-on-one strategic guidance to develop comprehensive email marketing strategies aligned with your business goals.',
      features: ['Strategy development', 'Platform selection', 'Team training', 'Implementation roadmap'],
      price: 'From $500/hour',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business, audience, and current email performance to identify opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive AI-powered email marketing strategy tailored to your specific goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Set up campaigns, automation workflows, and tracking systems for optimal performance.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, testing, and refinement to maximize results and ROI.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-navy via-darker to-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234285f4" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-accent/10 border border-blue-accent/20 mb-8">
              <Target className="w-4 h-4 mr-2 text-blue-accent" />
              <span className="text-sm font-medium text-blue-accent">Premium AI Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-accent to-purple-accent bg-clip-text text-transparent">
              AI Email Marketing Services
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your email marketing with cutting-edge AI technology and proven strategies 
              that deliver exceptional results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`bg-card border-border hover:border-blue-accent/50 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-blue-accent/20' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-accent text-white px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-accent">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-accent">{service.price}</div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full bg-blue-accent hover:bg-blue-accent/90">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers consistent results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-accent/50 to-transparent transform -translate-x-8"></div>
                )}
              </div>
            ))}
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
            Let's discuss how AI-powered email campaigns can drive growth for your business. 
            Schedule a free consultation to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-accent hover:bg-white/90 px-8 py-3 text-lg">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-accent px-8 py-3 text-lg">
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}