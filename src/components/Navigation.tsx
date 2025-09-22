import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = ['home', 'about', 'education', 'experience', 'skills', 'certifications', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Venkata Kishore
          </div>
          
          <div className="hidden md:flex space-x-1">
            {sections.map((section) => (
              <Button
                key={section}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {section}
              </Button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            size="sm"
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;