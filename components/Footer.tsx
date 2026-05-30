import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold gradient-text mb-2">Dzacky</h3>
            <p className="text-gray-400 text-sm">
              Informatics Student | Developer | Problem Solver
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="https://github.com/Dzackyaulia" target="_blank" rel="noopener noreferrer" className="group p-2 bg-slate-800/50 hover:bg-blue-500 rounded-lg transition-all duration-300">
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/dzackyaulia" target="_blank" rel="noopener noreferrer" className="group p-2 bg-slate-800/50 hover:bg-blue-500 rounded-lg transition-all duration-300">
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:dzackyaulia005@gmail.com" className="group p-2 bg-slate-800/50 hover:bg-blue-500 rounded-lg transition-all duration-300">
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} Mhd Teuku Dzacky Aulia. All rights reserved.</p>
            <p className="text-center md:text-right">Built with <span className="text-red-500">❤️</span> using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
