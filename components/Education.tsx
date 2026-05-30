export default function Education() {
  const education = [
    {
      school: 'Telkom University',
      degree: 'S1 Informatika',
      period: '2023 - Sekarang',
      description: 'Program studi Informatika dengan fokus pada software development dan cloud technology.',
    },
    {
      school: 'Pondok Pesantren Daar El Qolam 3',
      degree: 'Biologi',
      period: '2019 - 2023',
      description: 'Pendidikan menengah di pondok pesantren dengan lingkungan disiplin dan terstruktur.',
    },
    {
      school: 'Pondok Pesantren Daar El Qolam 1',
      degree: 'Pendidikan Dasar',
      period: '2018 - 2019',
      description: 'Kelas persiapan di pondok pesantren Daar El Qolam.',
    },
    {
      school: 'Madrasah Ibtidaiyah Istiqomah',
      degree: 'Sekolah Dasar',
      period: '2013 - 2018',
      description: 'Pendidikan dasar dengan kurikulum Islam.',
    },
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-slate-800/30">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="gradient-text">Pendidikan</span>
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-all card-hover"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-accent mb-1">{edu.school}</h3>
                <p className="text-gray-300 font-medium mb-2">{edu.degree}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
              </div>
              <div className="text-right">
                <p className="text-accent font-semibold text-sm whitespace-nowrap">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
