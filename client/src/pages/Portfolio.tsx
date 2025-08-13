import React from 'react';
import { TrendingUp, Users, Mail, Target, ArrowUpRight, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const caseStudies = [
    {
      title: 'E-commerce Fashion Brand',
      industry: 'Fashion & Retail',
      challenge: 'Low email engagement and poor conversion rates from email campaigns',
      solution: 'Implemented AI-powered personalization and behavioral triggers',
      results: [
        { metric: 'Open Rate', before: '18%', after: '42%', improvement: '+133%' },
        { metric: 'Click Rate', before: '2.1%', after: '8.7%', improvement: '+314%' },
        { metric: 'Revenue', before: '$12K/month', after: '$48K/month', improvement: '+300%' }
      ],
      duration: '3 months',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'SaaS Technology Platform',
      industry: 'Technology',
      challenge: 'High churn rate and low user activation from email onboarding',
      solution: 'Created intelligent onboarding sequences with predictive analytics',
      results: [
        { metric: 'User Activation', before: '23%', after: '67%', improvement: '+191%' },
        { metric: 'Churn Reduction', before: '15%', after: '6%', improvement: '-60%' },
        { metric: 'LTV Increase', before: '$450', after: '$1,200', improvement: '+167%' }
      ],
      duration: '4 months',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Healthcare Services',
      industry: 'Healthcare',
      challenge: 'Poor patient engagement and low appointment booking rates',
      solution: 'Developed AI-driven patient communication and reminder systems',
      results: [
        { metric: 'Appointment Bookings', before: '12%', after: '34%', improvement: '+183%' },
        { metric: 'Patient Engagement', before: '28%', after: '71%', improvement: '+154%' },
        { metric: 'No-show Rate', before: '22%', after: '8%', improvement: '-64%' }
      ],
      duration: '5 months',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '250+', label: 'Campaigns Created' },
    { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Clients Served' },
    { icon: <Mail className="w-6 h-6" />, value: '1M+', label: 'Emails Delivered' },
    { icon: <Target className="w-6 h-6" />, value: '300%', label: 'Avg ROI Increase' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      content: 'Harshit transformed our email marketing completely. Our engagement rates increased by 200% and revenue from email campaigns tripled within 4 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthLab',
      content: 'The AI-powered segmentation strategy Harshit implemented helped us achieve our highest conversion rates ever. Absolutely phenomenal results.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'E-commerce Manager',
      company: 'StyleHub',
      content: 'Working with Harshit was a game-changer. His expertise in AI email marketing delivered results beyond our expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-navy via-darker to-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234285f4" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium text-green-500">Proven Results</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-accent to-purple-accent bg-clip-text text-transparent">
              Portfolio & Results
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Real case studies showcasing how AI-powered email marketing strategies 
              have transformed businesses and delivered exceptional ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-accent">{metric.icon}</div>
                </div>
                <div className="text-3xl font-bold text-blue-accent mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground">
              Detailed analysis of successful AI email marketing campaigns
            </p>
          </div>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-background border-border overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/20 to-purple-accent/20"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-blue-accent/10 text-blue-accent">
                        {study.industry}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Challenge:</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-accent mb-2">Solution:</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-500 mb-3">Results:</h4>
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-between p-3 bg-card rounded-lg">
                          <span className="text-sm font-medium">{result.metric}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">{result.before}</span>
                            <ArrowUpRight className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-semibold">{result.after}</span>
                            <Badge variant="secondary" className="bg-green-500/10 text-green-500 text-xs">
                              {result.improvement}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              What clients say about working with me
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-blue-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-accent to-purple-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help transform your email marketing and drive 
            exceptional growth for your business.
          </p>
          <Button size="lg" className="bg-white text-blue-accent hover:bg-white/90 px-8 py-3 text-lg">
            Start Your Success Story
          </Button>
        </div>
      </section>
    </div>
  );
}