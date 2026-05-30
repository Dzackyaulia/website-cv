export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
      <div className="animate-slide-in-up mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
          <span className="gradient-text">Tentang Saya</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6">Mengenal lebih jauh tentang perjalanan saya</p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-14 lg:gap-16">
        <div className="space-y-7 animate-fade-in">
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            Saya adalah mahasiswa Informatika di Telkom University yang bersemangat tentang 
            pengembangan perangkat lunak dan pemecahan masalah. Dengan latar belakang pendidikan 
            di Pondok Pesantren Daar El Qolam 3, saya terbiasa dalam lingkungan yang disiplin 
            dan terstruktur.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            Saya percaya pada kekuatan kerja tim, pembelajaran berkelanjutan, dan tanggung jawab 
            sosial. Saat ini saya fokus pada pengembangan full-stack dan cloud technology.
          </p>
          <div className="pt-2">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Mari Terhubung
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in-delay">
          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="text-4xl group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-300">🎯</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">Fokus</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">Full-stack development, Cloud Technology, dan Problem Solving</p>
              </div>
            </div>
          </div>
          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="text-4xl group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-300">💡</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">Keahlian</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">Java, Go, C++, Python, Linux, UI/UX design, Leadership</p>
              </div>
            </div>
          </div>
          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="text-4xl group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-300">🌱</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">Nilai</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">Disiplin, Tanggung Jawab, Kepedulian Lingkungan, Teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
