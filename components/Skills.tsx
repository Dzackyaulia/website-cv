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
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
      <div className="animate-slide-in-up mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Keahlian</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6 animate-fade-in-up animate-delay-100">Skill dan teknologi yang telah saya kuasai</p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-underline-expand"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category}
            style={{ animationDelay: `${index * 150}ms` }}
            className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-in-up hover:scale-105 hover-lift"
          >
            <h3 className="text-lg font-bold text-blue-300 mb-5 group-hover:text-blue-200 transition-colors animate-fade-in-up">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/35 hover:to-purple-500/35 text-blue-200 hover:text-blue-100 rounded-lg text-sm font-semibold transition-all duration-300 border border-blue-400/30 hover:border-blue-400/60 cursor-default animate-fade-in-scale hover:scale-110"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 mb-8 animate-slide-in-up hover:scale-105 hover-lift" style={{ animationDelay: '400ms' }}>
        <h3 className="text-lg font-bold text-blue-300 mb-5 group-hover:text-blue-200 transition-colors animate-fade-in-up">🏆 Sertifikasi</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/35 hover:to-purple-500/35 text-blue-200 hover:text-blue-100 rounded-lg text-sm font-semibold transition-all duration-300 border border-blue-400/30 hover:border-blue-400/60 animate-fade-in-scale hover:scale-110">
            Microsoft AI-900: Azure AI Fundamentals
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-in-up hover-lift" style={{ animationDelay: '500ms' }}>
        <h3 className="text-lg font-bold text-blue-300 mb-5 group-hover:text-blue-200 transition-colors animate-fade-in-up">🎖️ Prestasi</h3>
        <div className="space-y-3.5">
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed animate-fade-in-up" style={{ animationDelay: '550ms' }}>🥉 Juara Harapan 1 – OSN Matematika Tingkat Nasional (Tangerang, Banten) 2020</p>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>🏕️ Peserta Pendidikan Dasar Pecinta Alam - DIKLATSAR MAPALA PERIMATRIK</p>
        </div>
      </div>
    </section>
  );
}
