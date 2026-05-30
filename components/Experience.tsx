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
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="gradient-text">Pengalaman</span>
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-all card-hover"
          >
            <div className="flex gap-4">
              <div className="text-4xl">{exp.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-accent mb-1">{exp.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
