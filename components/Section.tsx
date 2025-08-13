
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
          <span className="text-white">{title}</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal-400 rounded-full"></span>
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
};
