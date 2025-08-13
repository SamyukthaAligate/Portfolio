import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { SkillBadge } from './components/SkillBadge';
import { personalInfo, careerObjective, technicalSkills, expertise, internships, projects } from './data/portfolioData';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header name={personalInfo.name} contact={personalInfo.contact} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <section id="hero" className="text-center py-16">
          <img
            src={personalInfo.imageUrl}
            alt={`A portrait of ${personalInfo.name}`}
            className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-teal-400/80 shadow-xl"
            />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-teal-400 font-medium">
            {personalInfo.title}
          </p>
        </section>

        {/* Career Objective Section */}
        <Section title="Career Objective" id="objective">
          <p className="text-center text-lg text-slate-300 max-w-3xl mx-auto">
            {careerObjective}
          </p>
        </Section>
        
        {/* Education Section */}
        <Section title="Education" id="education">
          <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-teal-400">Kakatiya Institute of Technology and Sciences</h3>
            <p className="text-slate-200 mt-1">Bachelor of Technology in CSE(AIML)</p>
            <p className="text-slate-400 mt-2">Graduation: JUN 2024 | Cumulative GPA: 8.0</p>
            <p className="text-slate-400 mt-1">Relevant Coursework: Artificial Intelligence, Machine Learning</p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Skills & Expertise" id="skills">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {technicalSkills.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {expertise.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <Section title="Internships" id="internships">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map(internship => (
              <Card key={internship.title} {...internship} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <Section title="Projects" id="projects">
          <div className="grid grid-cols-1 gap-8">
            {projects.map(project => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        </section>

      </main>

      <Footer contact={personalInfo.contact} name={personalInfo.name} />
    </div>
  );
};

export default App;