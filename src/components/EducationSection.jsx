import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Master of Science, Management Studies",
    institution: "Boston University, Questrom School of Business",
    location: "Boston, MA, United States",
    duration: "2023 - 2024",
    description: "Specialized in management studies with focus on business strategy and analytics"
  },
  {
    id: 2,
    degree: "Bachelor of Engineering",
    institution: "Birla Institute of Technology and Science (BITS), Pilani",
    location: "Pilani, India",
    duration: "2017 - 2021",
    description: "Engineering foundation with focus on technical and analytical skills"
  }
];

const certifications = [
  {
    id: 1,
    name: "Lean Six Sigma Green Belt",
    issuer: "Professional Certification",
    year: "2023"
  },
  {
    id: 2,
    name: "PMP (in progress)",
    issuer: "Project Management Institute",
    year: "2024"
  },
  {
    id: 3,
    name: "Google Data Analytics Professional",
    issuer: "Google",
    year: "2023"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education & <span className="text-primary"> Certifications</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                  <div className="grid grid-cols-[1fr_auto] items-center mb-3">
                    <h4 className="text-lg font-semibold text-primary text-left">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                  </div>


                  <p className="font-medium mb-2 text-left">{edu.institution}</p>

                  <div className="flex gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>

                  <p className="text-sm text-left text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-left">{cert.name}</h4>
                    <span className="text-sm text-primary font-medium text-right">{cert.year}</span>
                  </div>

                  <p className="text-muted-foreground text-left">{cert.issuer}</p>
                </div>
              ))}
            </div>

            {/* Additional Skills Summary */}
            <div className="mt-8 bg-card p-6 rounded-lg shadow-xs">
              <h4 className="text-lg font-semibold mb-4">Key Competencies</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <h5 className="font-medium text-primary mb-2 ml-4 text-left">Consulting & Strategy</h5>
                  <ul className="text-muted-foreground ml-4 space-y-1 text-left">
                    <li>• Business Strategy</li>
                    <li>• Strategic Planning</li>
                    <li>• Market Research</li>
                    <li>• Growth Strategy</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-primary mb-2 ml-10 text-left">Analytics & Tools</h5>
                  <ul className="text-muted-foreground ml-10 space-y-1 text-left">
                    <li>• Excel (Advanced)</li>
                    <li>• SQL & Python</li>
                    <li>• Power BI & Tableau</li>
                    <li>• Financial Modeling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
