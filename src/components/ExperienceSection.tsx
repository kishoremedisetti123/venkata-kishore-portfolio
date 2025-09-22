import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, BarChart3, Users, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "AICTE Internship",
      company: "AI-ML Program",
      duration: "Summer 2024",
      type: "Internship",
      icon: Brain,
      description: "Gained hands-on experience in Artificial Intelligence and Machine Learning through AICTE's specialized program. Worked on practical projects involving data analysis, model development, and AI applications.",
      skills: ["Python", "Machine Learning", "Data Analysis", "AI Tools"],
      color: "border-primary/30 bg-primary/5"
    },
    {
      role: "Data Analytics Intern",
      company: "Alteryx",
      duration: "2024",
      type: "Internship",
      icon: BarChart3,
      description: "Developed expertise in data analytics using Alteryx platform. Learned advanced data preparation, blending, and analytics techniques to derive meaningful insights from complex datasets.",
      skills: ["Alteryx", "Data Analytics", "SQL", "Data Visualization"],
      color: "border-success/30 bg-success/5"
    },
    {
      role: "Data Analytics Support Lead",
      company: "ASCI, GVPCE(A)",
      duration: "2024",
      type: "Leadership Role",
      icon: Users,
      description: "Led data analytics support initiatives within the college, providing guidance to fellow students and contributing to data-driven decision making processes. Collaborated with faculty on various analytical projects.",
      skills: ["Leadership", "Data Analytics", "Team Management", "Project Coordination"],
      color: "border-warning/30 bg-warning/5"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and hands-on learning experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${exp.color} border-2 group`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-primary to-primary-light`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {exp.type}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg font-semibold text-primary">{exp.company}</p>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.duration}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Skills Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-xs bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
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
      </div>
    </section>
  );
};

export default ExperienceSection;