import { Card, CardContent } from '@/components/ui/card';
import { Code, BookOpen, Music, PlayCircle } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: Code, name: 'Programming', color: 'text-primary' },
    { icon: BookOpen, name: 'Reading', color: 'text-success' },
    { icon: Music, name: 'Music', color: 'text-warning' },
    { icon: PlayCircle, name: 'Movies', color: 'text-primary-light' },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-default">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passions, and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate Computer Science undergraduate student at GVPCE, Visakhapatnam, 
                with a deep interest in technology and innovation. My academic journey has been 
                marked by consistent excellence, achieving 97.2% in my 12th grade.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Through various internships in AI-ML and Data Analytics, I've gained practical 
                experience and developed a strong foundation in programming and problem-solving. 
                I believe in continuous learning and applying technology to create meaningful solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Personal Mission</h3>
              <p className="text-lg leading-relaxed text-foreground">
                To leverage technology and innovation to create impactful solutions that make a 
                positive difference in people's lives while continuously growing as a tech professional.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-primary mb-6">My Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-1 border-2 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <interest.icon className={`w-8 h-8 mx-auto mb-3 ${interest.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{interest.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6 border-primary/20 bg-primary/5 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2 group-hover:animate-pulse">Fun Fact</h4>
                <p className="text-foreground">
                  When I'm not coding, you'll find me playing badminton, exploring new music, 
                  or diving into a good book. I believe in maintaining a balanced lifestyle 
                  that fuels both creativity and productivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;