import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Venkata Kishore Medisetti</h3>
            <p className="text-primary-foreground/80">
              Computer Science Student | Tech Enthusiast | Problem Solver
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4" />
            <span>by Venkata Kishore</span>
          </div>
          
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Venkata Kishore Medisetti. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;