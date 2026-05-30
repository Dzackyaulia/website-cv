import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Mhd Teuku<br />
              <span className="gradient-text">Dzacky Aulia</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Informatics Student | Passionate Developer | Problem Solver
            </p>
            <p className="text-gray-300 mb-8 max-w-lg">
              Saya mahasiswa Informatika yang terbiasa dengan lingkungan disiplin dan terstruktur. 
              Mampu bekerja sama dalam tim, cepat beradaptasi, dan memiliki etos kerja yang baik.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={20} className="text-accent" />
              <span>Bandung, Jawa Barat, Indonesia</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={20} className="text-accent" />
              <span>+62 823-3748-1312</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={20} className="text-accent" />
              <span>dzackyaulia005@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent text-accent hover:text-white flex items-center justify-center transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent text-accent hover:text-white flex items-center justify-center transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dzackyaulia005@gmail.com"
              className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent text-accent hover:text-white flex items-center justify-center transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center border border-accent/30">
            <div className="text-center">
              <div className="text-6xl mb-2">💻</div>
              <p className="text-sm text-gray-400">Developer & Problem Solver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
