import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Basic C++",
      issuer: "Programming Institute",
      date: "2023",
      status: "Completed",
      description: "Comprehensive course covering C++ fundamentals, object-oriented programming, and data structures.",
      skills: ["C++", "OOP", "Data Structures"],
      color: "border-primary/30 bg-primary/5"
    },
    {
      title: "Python Foundation",
      issuer: "Tech Academy",
      date: "2023",
      status: "Completed",
      description: "Foundation course covering Python syntax, programming concepts, and basic application development.",
      skills: ["Python", "Programming Logic", "Problem Solving"],
      color: "border-success/30 bg-success/5"
    },
    {
      title: "AI Tools Workshop",
      issuer: "Technology Institute",
      date: "2024",
      status: "Completed",
      description: "Hands-on workshop exploring various AI tools and their practical applications in modern development.",
      skills: ["AI Tools", "Automation", "Machine Learning"],
      color: "border-warning/30 bg-warning/5"
    },
    {
      title: "Generative AI",
      issuer: "AI Learning Platform",
      date: "2024",
      status: "Completed",
      description: "Advanced course on generative AI technologies, including GPTs, image generation, and AI applications.",
      skills: ["Generative AI", "GPT", "AI Applications"],
      color: "border-purple-300 bg-purple-50"
    },
    {
      title: "Python Basics for Data Science",
      issuer: "Data Science Academy",
      date: "2024",
      status: "Completed",
      description: "Specialized course focusing on Python applications in data science, analytics, and visualization.",
      skills: ["Python", "Data Science", "Analytics", "Visualization"],
      color: "border-blue-300 bg-blue-50"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${cert.color} border-2 group`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-light">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs font-semibold">{cert.status}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>
                
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wide">
                    Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-xs bg-primary/10 border-primary/20 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-xl mx-auto border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-light/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Continuous Learning</h3>
              <p className="text-foreground">
                I'm committed to staying current with technology trends and continuously 
                expanding my skill set through professional certifications and hands-on learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;