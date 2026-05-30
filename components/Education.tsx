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
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-slate-800/30">
      <div className="animate-slide-in-up mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">Pendidikan</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-underline-expand"></div>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group bg-gradient-to-r from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 animate-slide-in-up hover-lift-sm"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors animate-fade-in-up">{edu.school}</h3>
                <p className="text-gray-300 font-semibold mb-2 group-hover:text-white transition-colors animate-fade-in-up animate-delay-100">{edu.degree}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed animate-fade-in-up animate-delay-200">{edu.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-blue-400 font-semibold text-sm whitespace-nowrap group-hover:text-blue-300 transition-colors animate-fade-in-up animate-delay-100">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
