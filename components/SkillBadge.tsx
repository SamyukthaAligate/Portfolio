
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-slate-700 text-teal-300 text-sm font-medium px-4 py-2 rounded-full shadow-sm transition-all duration-300 hover:bg-slate-600 hover:text-teal-200">
      {skill}
    </span>
  );
};
