export default function Experience() {
  const experiences = [
    {
      title: 'Dorm Team (DT) - Asrama Telkom University',
      period: '2023 - 2024',
      description: 'Memimpin dan membimbing kelompok mahasiswa dalam kegiatan asrama. Mengelola organisasi internal dan menjalin hubungan baik antar penghuni.',
      icon: '👥',
    },
    {
      title: 'Mentor Agama - Badan Mentoring',
      period: '2023 - Sekarang',
      description: 'Membimbing mahasiswa dalam aspek agama dan moral. Memfasilitasi diskusi dan pembelajaran berkelanjutan.',
      icon: '📚',
    },
    {
      title: 'Relawan Bencana Banjir',
      period: 'Bandung/Bojongsoang',
      description: 'Partisipasi dalam kegiatan tanggap darurat dan pemulihan pasca banjir. Memberikan bantuan kepada masyarakat yang terdampak.',
      icon: '🤝',
    },
    {
      title: 'Peserta GoZero% - Manage Waste, Manifest Change',
      period: 'Telkom Indonesia',
      description: 'Program kepedulian lingkungan dari Telkom Indonesia. Belajar dan menerapkan praktik berkelanjutan.',
      icon: '🌱',
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Pengalaman</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group bg-gradient-to-r from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 animate-slide-in-up"
          >
            <div className="flex gap-4">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{exp.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">{exp.title}</h3>
                <p className="text-blue-500 text-sm font-semibold mb-2 group-hover:text-blue-400 transition-colors">{exp.period}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
