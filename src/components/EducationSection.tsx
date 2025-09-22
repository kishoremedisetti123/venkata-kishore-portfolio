import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Gayatri Vidya Parishad College of Engineering",
      location: "Visakhapatnam",
      period: "2022 - 2026",
      status: "Currently Pursuing",
      description: "Focusing on core computer science subjects, programming, and software development.",
      color: "border-primary/30 bg-primary/5"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Sri Chaitanya Junior College",
      location: "Visakhapatnam",
      period: "2020 - 2022",
      status: "97.2%",
      description: "Achieved outstanding academic performance with strong foundation in mathematics and sciences.",
      color: "border-success/30 bg-success/5"
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Z.P. High School",
      location: "M.Kodur",
      period: "2019 - 2020",
      status: "Completed",
      description: "Built strong academic foundation with focus on science and mathematics.",
      color: "border-warning/30 bg-warning/5"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous pursuit of knowledge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-success to-warning"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content card */}
                  <Card className={`flex-1 hover:shadow-lg transition-all duration-300 ${edu.color} border-2`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-primary mb-3">{edu.institution}</h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <p className="text-foreground leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;