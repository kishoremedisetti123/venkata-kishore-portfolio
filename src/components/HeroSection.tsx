import { Button } from '@/components/ui/button';
import { Download, MessageCircle } from 'lucide-react';
import heroPortrait from '@/assets/kishore-profile.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-section-bg to-muted px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight hover:scale-105 transition-transform duration-300 cursor-default">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-pulse">
                Venkata Kishore Medisetti
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Computer Science Undergraduate Student | Tech Enthusiast
            </p>
          </div>
          
          <p className="text-lg text-text-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Passionate about technology and innovation, I'm on a journey to explore the depths of computer science and create impactful solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-light/30 rounded-2xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 group-hover:blur-3xl"></div>
            <img
              src={heroPortrait}
              alt="Venkata Kishore Medisetti - Computer Science Student"
              className="relative w-80 h-96 object-cover object-top rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-all duration-500 hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;