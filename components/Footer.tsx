export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Dzacky</h3>
            <p className="text-gray-400 text-sm">
              Informatics Student | Developer | Problem Solver
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>© {currentYear} Mhd Teuku Dzacky Aulia</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
