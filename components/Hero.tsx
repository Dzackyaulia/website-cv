import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const handleDownloadCV = () => {
    // Buat link untuk download
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV Mhd Teuku Dzacky Aulia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 animate-fade-in">
          <div className="mb-8">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent font-medium hover:bg-accent/20 transition-colors">
              ✨ Selamat datang di portfolio saya
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Mhd Teuku<br />
              <span className="gradient-text animate-pulse">Dzacky Aulia</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
              Informatics Student | Passionate Developer | Problem Solver
            </p>
            <p className="text-gray-400 mb-10 max-w-lg leading-relaxed text-base md:text-lg">
              Mahasiswa Informatika bersemangat dengan lingkungan disiplin dan terstruktur. 
              Mampu bekerja sama dalam tim, cepat beradaptasi, dan memiliki etos kerja yang baik.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={handleDownloadCV}
              className="group px-8 py-4 bg-gradient-to-r from-accent to-purple-600 hover:shadow-lg hover:shadow-accent/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#projects" className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-accent flex items-center justify-center gap-2">
              Lihat Project
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Contact Info - Improved Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-700">
            <div className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
              <div className="p-2 bg-accent/10 rounded-lg">
                <MapPin size={18} className="text-accent" />
              </div>
              <span className="text-sm md:text-base">Bandung, Jawa Barat</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Phone size={18} className="text-accent" />
              </div>
              <span className="text-sm md:text-base">+62 823-3748-1312</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Mail size={18} className="text-accent" />
              </div>
              <span className="text-sm md:text-base">dzackyaulia005@gmail.com</span>
            </div>
          </div>

          {/* Social Links - Enhanced */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent text-accent hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent text-accent hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dzackyaulia005@gmail.com"
              className="group w-12 h-12 rounded-full bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent text-accent hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex-1 flex justify-center animate-fade-in-delay">
          <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-accent/30 to-purple-500/30 flex items-center justify-center border border-accent/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
            <div className="text-center">
              <div className="text-7xl mb-4 animate-bounce">💻</div>
              <p className="text-base text-gray-300 font-semibold">Developer & Problem Solver</p>
              <p className="text-xs text-gray-500 mt-2">Full-stack | Cloud Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
