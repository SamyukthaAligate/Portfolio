
import React from 'react';
import { EmailIcon } from './icons/EmailIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';

interface HeaderProps {
    name: string;
    contact: {
        email: string;
        linkedin: string;
        github: string;
    };
}

export const Header: React.FC<HeaderProps> = ({ name, contact }) => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="text-xl font-bold text-white tracking-wider">
                        {name.split(' ')[0]} <span className="text-teal-400">{name.split(' ')[1]}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href={`mailto:${contact.email}`} aria-label="Email" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <EmailIcon className="w-6 h-6" />
                        </a>
                        <a href={`https://linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                        <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <GitHubIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
