import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Globe, Heart, Users } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website showcasing my skills, experience, and projects. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      icon: Globe,
      color: "border-primary/30 bg-primary/5",
      status: "Live",
      type: "Web Development"
    },
    {
      title: "GrowTogether",
      description: "A comprehensive hobby and talent platform designed to connect people with similar interests and skills. Features user profiles, skill matching, and community building tools.",
      tech: ["Web Development", "UI/UX Design", "Community Features"],
      icon: Users,
      color: "border-success/30 bg-success/5",
      status: "In Development",
      type: "Social Platform"
    },
    {
      title: "FoodCompass",
      description: "An innovative food donation platform that connects food donors with those in need, reducing food waste while helping communities. Features real-time matching and location-based services.",
      tech: ["Social Impact", "Location Services", "Real-time Matching"],
      icon: Heart,
      color: "border-warning/30 bg-warning/5",
      status: "Concept",
      type: "Social Impact"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${project.color} border-2 group h-full flex flex-col`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-light">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        project.status === 'Live' ? 'border-success text-success' :
                        project.status === 'In Development' ? 'border-warning text-warning' :
                        'border-muted-foreground text-muted-foreground'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <p className="text-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-primary/10 border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
                      disabled={project.status === 'Concept'}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.status === 'Live' ? 'View' : 'Preview'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-light/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">More Projects Coming Soon</h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I'm constantly working on new ideas and projects. Stay tuned for more innovative 
                solutions and creative implementations!
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;