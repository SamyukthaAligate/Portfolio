
import React from 'react';
import type { CardData } from '../data/portfolioData';

export const Card: React.FC<CardData> = ({ title, subtitle, date, details }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-teal-400/20 hover:border-teal-400/30 hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {date && <span className="text-sm text-slate-400 mt-1 sm:mt-0">{date}</span>}
      </div>
      <p className="text-md font-semibold text-teal-400 mb-4">{subtitle}</p>
      <ul className="list-disc list-inside text-slate-300 space-y-2 marker:text-teal-400">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};
