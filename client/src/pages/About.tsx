import React from 'react';
import { GraduationCap, Award, Target, Brain, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const skills = [
    'AI & Machine Learning',
    'Email Marketing Automation',
    'Customer Segmentation',
    'A/B Testing & Optimization',
    'Data Analytics',
    'Marketing Psychology',
    'CRM Integration',
    'Performance Marketing'
  ];

  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '300% ROI Increase',
      description: 'Average return on investment improvement across client campaigns'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '1M+ Emails Sent',
      description: 'Successfully delivered personalized email campaigns'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: '45% Open Rate',
      description: 'Industry-leading email open rates through AI optimization'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-navy via-darker to-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234285f4" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-accent/10 border border-purple-accent/20 mb-8">
              <Brain className="w-4 h-4 mr-2 text-purple-accent" />
              <span className="text-sm font-medium text-purple-accent">AI Marketing Strategist</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-accent to-purple-accent bg-clip-text text-transparent">
              About Harshit
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              PGDM student and AI email marketing specialist with a passion for transforming 
              businesses through intelligent automation and data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a PGDM student specializing in marketing, I discovered the transformative 
                    power of AI in email marketing early in my academic journey. What started as 
                    curiosity about machine learning applications quickly evolved into expertise 
                    in creating intelligent email campaigns.
                  </p>
                  <p>
                    I've helped over 50+ businesses achieve remarkable results through AI-powered 
                    email marketing strategies, combining academic knowledge with practical 
                    implementation to deliver measurable growth.
                  </p>
                  <p>
                    My approach focuses on understanding customer psychology, leveraging data 
                    analytics, and implementing cutting-edge AI tools to create personalized 
                    experiences that drive engagement and conversions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-accent/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-blue-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Education</CardTitle>
                        <CardDescription>PGDM in Marketing</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-accent/10 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Specialization</CardTitle>
                        <CardDescription>AI Email Marketing</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Experience</CardTitle>
                        <CardDescription>250+ Successful Campaigns</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Specialized skills in AI-powered marketing and automation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-16">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-blue-accent/10 text-blue-accent border-blue-accent/20 hover:bg-blue-accent/20 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-background border-border text-center hover:border-blue-accent/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-accent">{achievement.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-blue-accent to-purple-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">My Philosophy</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              "Email marketing isn't just about sending messages—it's about creating meaningful 
              connections through intelligent automation. Every campaign should tell a story, 
              solve a problem, and deliver value that transforms businesses and delights customers."
            </p>
            <div className="text-lg text-white/80 font-medium">
              — Harshit Aggarwal
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}