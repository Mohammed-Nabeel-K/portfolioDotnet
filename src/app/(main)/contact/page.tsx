"use client";

import { PageHeader } from '@/components/common/page-header';
import { SectionTitle } from '@/components/common/section-title';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Get in Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing."
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="order-2 md:order-1">
            <SectionTitle title="Send Me a Message" subtitle="Fill out the form and I'll get back to you." className="text-left mb-6" />
            <ContactForm />
          </div>

          {/* Contact Information Section */}
          <div className="order-1 md:order-2">
            <SectionTitle title="Contact Information" subtitle="Here's how you can reach me." className="text-left mb-6" />
            <Card className="shadow-lg rounded-xl border border-border">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <span className="text-muted-foreground">(Optional: +1 234 567 890)</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <span className="text-muted-foreground">City, Country (e.g., Remote)</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Connect on Social Media</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin className="w-6 h-6" /></a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Twitter className="w-6 h-6" /></a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
