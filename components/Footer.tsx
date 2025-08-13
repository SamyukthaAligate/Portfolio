
import React from 'react';
import { EmailIcon } from './icons/EmailIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface FooterProps {
    name: string;
    contact: {
        email: string;
        linkedin: string;
        github: string;
        phone: string;
    };
}

export const Footer: React.FC<FooterProps> = ({ name, contact }) => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="flex justify-center items-center space-x-6 mb-6">
                         <a href={`tel:${contact.phone}`} aria-label="Phone" className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <PhoneIcon className="w-5 h-5" />
                            <span>{contact.phone}</span>
                        </a>
                        <a href={`mailto:${contact.email}`} aria-label="Email" className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <EmailIcon className="w-5 h-5" />
                            <span>{contact.email}</span>
                        </a>
                    </div>
                    <div className="flex justify-center items-center space-x-6 mb-8">
                        <a href={`https://linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <LinkedInIcon className="w-7 h-7" />
                        </a>
                        <a href={`https://github.com/${contact.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                            <GitHubIcon className="w-7 h-7" />
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
