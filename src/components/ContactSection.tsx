import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kishore.medisetti@example.com",
      href: "mailto:kishore.medisetti@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/venkata-kishore",
      href: "https://linkedin.com/in/venkata-kishore"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/venkata-kishore",
      href: "https://github.com/venkata-kishore"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to connect with me, and let's make something extraordinary together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss opportunities? Drop me a message!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi!"
                    rows={6}
                    required
                    className="border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:from-primary group-hover:to-primary-light transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-primary hover:text-primary-dark transition-colors text-sm"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-success/20 bg-gradient-to-r from-success/5 to-green-100/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-success mb-3">Let's Collaborate!</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and connecting with fellow tech enthusiasts.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="border-success text-success hover:bg-success hover:text-white">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-success text-success hover:bg-success hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;