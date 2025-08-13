import React from 'react';
import { Link } from 'wouter';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Harshit Aggarwal</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              AI-powered email marketing expert helping businesses achieve exceptional results 
              through intelligent automation and personalization.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:harshit@example.com" className="text-muted-foreground hover:text-blue-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-blue-accent transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-blue-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-blue-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-blue-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Email Campaign Creation</span></li>
              <li><span className="text-muted-foreground">AI Automation</span></li>
              <li><span className="text-muted-foreground">Performance Analytics</span></li>
              <li><span className="text-muted-foreground">A/B Testing</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Harshit Aggarwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}