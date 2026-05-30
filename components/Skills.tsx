export default function Skills() {
  const skills = {
    'Programming Languages': [
      'Java',
      'Go',
      'C++',
      'Python',
    ],
    'Technologies & Tools': [
      'Linux',
      'Microsoft Office',
      'UI/UX Design',
      'Git',
    ],
    'Soft Skills': [
      'Leadership',
      'Teamwork',
      'Problem Solving',
      'Quick Adaptation',
    ],
    'Languages': [
      'Bahasa Indonesia (Aktif)',
      'Bahasa Inggris (EPRT 490)',
      'Bahasa Arab (Aktif)',
    ],
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-slate-800/30">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Keahlian</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-700/60 hover:to-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-up"
          >
            <h3 className="text-lg font-bold text-blue-400 mb-5 group-hover:text-blue-300 transition-colors">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 text-blue-300 hover:text-blue-200 rounded-full text-sm font-semibold transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="group bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-700/60 hover:to-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20 mb-8 animate-slide-in-up" style={{ animationDelay: '400ms' }}>
        <h3 className="text-lg font-bold text-blue-400 mb-5 group-hover:text-blue-300 transition-colors">🏆 Sertifikasi</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/40 hover:to-emerald-500/40 text-green-300 hover:text-green-200 rounded-full text-sm font-semibold transition-all duration-300 border border-green-500/30 hover:border-green-500/60">
            Microsoft AI-900: Azure AI Fundamentals
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="group bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-700/60 hover:to-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-up" style={{ animationDelay: '500ms' }}>
        <h3 className="text-lg font-bold text-blue-400 mb-5 group-hover:text-blue-300 transition-colors">🎖️ Prestasi</h3>
        <div className="space-y-3">
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">🥉 Juara Harapan 1 – OSN Matematika Tingkat Nasional (Tangerang, Banten) 2020</p>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">🏕️ Peserta Pendidikan Dasar Pecinta Alam - DIKLATSAR MAPALA PERIMATRIK</p>
        </div>
      </div>
    </section>
  );
}
