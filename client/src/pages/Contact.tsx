import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'harshit@aiemailexpert.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Mumbai, India',
      description: 'Available for remote work globally'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'Quick response guaranteed'
    }
  ];

  const services = [
    'AI Campaign Creation',
    'Email Automation',
    'Performance Optimization',
    'Strategy Consulting',
    'Analytics & Reporting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-navy via-darker to-dark-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234285f4" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <Send className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium text-green-500">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-accent to-purple-accent bg-clip-text text-transparent">
              Get In Touch
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your email marketing with AI? Let's discuss how I can help 
              drive exceptional growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Start Your Project</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and I'll get back to you within 24 hours with a 
                  personalized strategy for your email marketing needs.
                </p>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>
                      Tell me about your business and email marketing goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for reaching out. I'll get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            placeholder="Your company name"
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Service Needed</Label>
                            <Select onValueChange={(value) => handleChange('service', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Budget Range</Label>
                            <Select onValueChange={(value) => handleChange('budget', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            placeholder="Tell me about your current email marketing challenges, goals, and what you'd like to achieve..."
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button type="submit" size="lg" className="w-full bg-blue-accent hover:bg-blue-accent/90">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here are all the ways you can connect with me.
                </p>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="text-blue-accent">{info.icon}</div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-blue-accent font-medium mb-1">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Connect on Social</CardTitle>
                    <CardDescription>
                      Follow me for email marketing tips and AI insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Newsletter</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card className="bg-card border-border mt-6">
                  <CardHeader>
                    <CardTitle>Quick FAQ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How quickly can you start?</h4>
                      <p className="text-sm text-muted-foreground">
                        Most projects can begin within 1-2 weeks after our initial consultation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Do you work with small businesses?</h4>
                      <p className="text-sm text-muted-foreground">
                        Absolutely! I work with businesses of all sizes, from startups to enterprises.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What's included in your service?</h4>
                      <p className="text-sm text-muted-foreground">
                        Strategy, implementation, optimization, and ongoing support tailored to your needs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-accent to-purple-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to see what AI-powered email marketing can do for your business? 
            Let's schedule a free consultation.
          </p>
          <Button size="lg" className="bg-white text-blue-accent hover:bg-white/90 px-8 py-3 text-lg">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}