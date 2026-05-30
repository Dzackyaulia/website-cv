export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="gradient-text">Tentang Saya</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Saya adalah mahasiswa Informatika di Telkom University yang bersemangat tentang 
            pengembangan perangkat lunak dan pemecahan masalah. Dengan latar belakang pendidikan 
            di Pondok Pesantren Daar El Qolam 3, saya terbiasa dalam lingkungan yang disiplin 
            dan terstruktur.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Saya percaya pada kekuatan kerja tim, pembelajaran berkelanjutan, dan tanggung jawab 
            sosial. Saat ini saya fokus pada pengembangan full-stack dan cloud technology.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-colors">
            <h3 className="text-accent font-semibold mb-2">🎯 Fokus</h3>
            <p className="text-gray-300">Full-stack development, Cloud Technology, dan Problem Solving</p>
          </div>
          <div className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-colors">
            <h3 className="text-accent font-semibold mb-2">💡 Keahlian</h3>
            <p className="text-gray-300">Java, Go, C++, Python, Linux, UI/UX design, Leadership</p>
          </div>
          <div className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-colors">
            <h3 className="text-accent font-semibold mb-2">🌱 Nilai</h3>
            <p className="text-gray-300">Disiplin, Tanggung Jawab, Kepedulian Lingkungan, Teamwork</p>
          </div>
        </div>
      </div>
    </section>
  );
}
