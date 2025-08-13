import React, { useState } from 'react';
import { Mail, Smartphone, Monitor, Eye, Code, Palette, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function EmailPreview() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [viewMode, setViewMode] = useState('desktop');

  const emailTemplates = [
    {
      name: 'AI-Powered Welcome Series',
      category: 'Onboarding',
      openRate: '68%',
      clickRate: '24%',
      subject: 'Welcome to the future of [Company Name] 🚀',
      preview: 'Your AI-powered journey starts here...',
      content: `
        <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Welcome to the Future!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your AI-powered journey starts here</p>
          </div>
          
          <div style="background: white; padding: 40px 30px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Hi {{first_name}},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Welcome to our community! We're thrilled to have you on board. Our AI has already started learning your preferences to provide you with personalized recommendations.
            </p>
            
            <div style="background: #f8f9ff; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #667eea; margin: 0 0 15px 0; font-size: 18px;">What's Next?</h3>
              <ul style="color: #555; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Complete your profile for better personalization</li>
                <li style="margin-bottom: 8px;">Explore our AI-powered features</li>
                <li style="margin-bottom: 8px;">Join our exclusive community</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block;">Get Started Now</a>
            </div>
            
            <p style="color: #666; font-size: 14px; line-height: 1.5; margin: 30px 0 0 0;">
              Best regards,<br>
              <strong>The {{company_name}} Team</strong>
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              You received this email because you signed up for {{company_name}}. 
              <a href="#" style="color: #667eea;">Unsubscribe</a>
            </p>
          </div>
        </div>
      `
    },
    {
      name: 'Smart Product Recommendation',
      category: 'E-commerce',
      openRate: '45%',
      clickRate: '18%',
      subject: 'Perfect picks just for you, {{first_name}} ✨',
      preview: 'AI-curated products based on your preferences...',
      content: `
        <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700;">Curated Just for You</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">AI-powered recommendations</p>
          </div>
          
          <div style="background: white; padding: 30px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Hi {{first_name}},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
              Our AI has been analyzing your preferences and found some products you'll love!
            </p>
            
            <div style="display: flex; gap: 15px; margin: 25px 0; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 150px; text-align: center; background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <div style="width: 100px; height: 100px; background: #ddd; border-radius: 8px; margin: 0 auto 15px;"></div>
                <h4 style="margin: 0 0 5px 0; font-size: 14px; color: #333;">Premium Headphones</h4>
                <p style="margin: 0; color: #ff6b6b; font-weight: 600;">$199</p>
              </div>
              
              <div style="flex: 1; min-width: 150px; text-align: center; background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <div style="width: 100px; height: 100px; background: #ddd; border-radius: 8px; margin: 0 auto 15px;"></div>
                <h4 style="margin: 0 0 5px 0; font-size: 14px; color: #333;">Smart Watch</h4>
                <p style="margin: 0; color: #ff6b6b; font-weight: 600;">$299</p>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block;">Shop Now</a>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>Limited Time:</strong> Use code SAVE20 for 20% off your order!
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      name: 'Re-engagement Campaign',
      category: 'Retention',
      openRate: '52%',
      clickRate: '21%',
      subject: 'We miss you, {{first_name}} - Come back for 30% off! 💙',
      preview: 'Special offer just for you...',
      content: `
        <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">We Miss You!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Come back and save big</p>
          </div>
          
          <div style="background: white; padding: 40px 30px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Hi {{first_name}},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              It's been a while since we've seen you! We've been working hard to improve our service and would love to welcome you back.
            </p>
            
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 30px; border-radius: 12px; text-align: center; margin: 25px 0;">
              <h2 style="color: white; margin: 0 0 10px 0; font-size: 32px; font-weight: 700;">30% OFF</h2>
              <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px;">Your exclusive welcome back offer</p>
              <div style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 25px; margin: 15px 0; display: inline-block;">
                <code style="color: white; font-size: 18px; font-weight: 600;">WELCOME30</code>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block;">Claim Your Offer</a>
            </div>
            
            <p style="color: #666; font-size: 14px; text-align: center; margin: 20px 0;">
              Offer expires in 7 days. Don't miss out!
            </p>
          </div>
        </div>
      `
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
              <Eye className="w-4 h-4 mr-2 text-purple-accent" />
              <span className="text-sm font-medium text-purple-accent">Live Email Templates</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-accent to-purple-accent bg-clip-text text-transparent">
              Email Preview Studio
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience my AI-powered email templates in action. See how intelligent design 
              and personalization create high-converting campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Email Preview Interface */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Template Selector */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold mb-6">Email Templates</h3>
                <div className="space-y-4">
                  {emailTemplates.map((template, index) => (
                    <Card 
                      key={index} 
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedTemplate === index 
                          ? 'border-blue-accent bg-blue-accent/5' 
                          : 'border-border hover:border-blue-accent/50'
                      }`}
                      onClick={() => setSelectedTemplate(index)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {template.category}
                          </Badge>
                          <Zap className="w-4 h-4 text-blue-accent" />
                        </div>
                        <CardTitle className="text-sm">{template.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Open: {template.openRate}</span>
                          <span>Click: {template.clickRate}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Email Preview */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">
                      {emailTemplates[selectedTemplate].name}
                    </h3>
                    
                    {/* View Mode Selector */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant={viewMode === 'desktop' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('desktop')}
                      >
                        <Monitor className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'mobile' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('mobile')}
                      >
                        <Smartphone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Email Metadata */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-card border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-muted-foreground">Subject Line</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {emailTemplates[selectedTemplate].subject}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    
                    <Card className="bg-card border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-muted-foreground">Preview Text</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {emailTemplates[selectedTemplate].preview}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                {/* Email Content */}
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="preview" className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </TabsTrigger>
                    <TabsTrigger value="code" className="flex items-center space-x-2">
                      <Code className="w-4 h-4" />
                      <span>HTML Code</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="preview" className="mt-6">
                    <div className={`mx-auto bg-gray-100 p-8 rounded-lg ${
                      viewMode === 'mobile' ? 'max-w-sm' : 'max-w-4xl'
                    }`}>
                      <div 
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        dangerouslySetInnerHTML={{ 
                          __html: emailTemplates[selectedTemplate].content 
                        }}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="code" className="mt-6">
                    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{emailTemplates[selectedTemplate].content}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Performance Metrics */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <Card className="bg-card border-border text-center">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-bold text-blue-accent">
                        {emailTemplates[selectedTemplate].openRate}
                      </CardTitle>
                      <CardDescription>Open Rate</CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-card border-border text-center">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-bold text-purple-accent">
                        {emailTemplates[selectedTemplate].clickRate}
                      </CardTitle>
                      <CardDescription>Click Rate</CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <Card className="bg-card border-border text-center">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-bold text-green-500">
                        A+
                      </CardTitle>
                      <CardDescription>AI Optimization Score</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-xl text-muted-foreground">
              Every template is optimized with advanced AI capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Dynamic Personalization',
                description: 'Content adapts based on user behavior, preferences, and engagement history'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Smart Send Times',
                description: 'AI determines optimal delivery times for each individual recipient'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Performance Optimization',
                description: 'Continuous A/B testing and optimization for maximum engagement'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-background border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-accent">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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
            Ready to Create High-Converting Emails?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build AI-powered email campaigns that deliver exceptional results for your business.
          </p>
          <Button size="lg" className="bg-white text-blue-accent hover:bg-white/90 px-8 py-3 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}