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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-section-bg to-muted px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Venkata Kishore Medisetti
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Undergraduate Student | Tech Enthusiast
            </p>
          </div>
          
          <p className="text-lg text-text-light leading-relaxed">
            Passionate about technology and innovation, I'm on a journey to explore the depths of computer science and create impactful solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl blur-2xl transform rotate-6"></div>
            <img
              src={heroPortrait}
              alt="Venkata Kishore Medisetti"
              className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;