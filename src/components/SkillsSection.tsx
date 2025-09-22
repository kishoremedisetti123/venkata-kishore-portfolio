import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-primary to-primary-light",
      skills: ["C", "Java", "Basic C++", "Basic Python"],
      description: "Core programming languages with strong foundation in problem-solving"
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      color: "from-success to-green-400",
      skills: ["Git", "Linux", "SQL", "AI Tools", "Alteryx"],
      description: "Essential development tools and data analytics platforms"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-warning to-orange-400",
      skills: ["HTML", "CSS", "React (Learning)", "JavaScript (Basics)"],
      description: "Frontend web development technologies and frameworks"
    },
    {
      title: "Foundations",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Software Design"],
      description: "Core computer science concepts and methodologies"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="justify-center py-2 px-4 text-sm bg-primary/5 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-light/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Always Learning</h3>
              <p className="text-lg text-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently exploring advanced web development, cloud technologies, and diving deeper 
                into AI/ML applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;