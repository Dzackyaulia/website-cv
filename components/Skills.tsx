import { useInView } from '@/hooks/useInView';

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

  const { ref, isInView } = useInView({ once: true, threshold: 0.2 });

  return (
    <section 
      id="skills" 
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40"
      ref={ref}
    >
      <div className={`section-enter mb-16 ${isInView ? 'active' : ''}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 section-header-enter ${isInView ? 'active' : ''}`}>
          <span className="gradient-text">Keahlian</span>
        </h2>
        <p className={`text-gray-400 text-lg mb-6 content-fade-enter ${isInView ? 'active' : ''} delay-100`}>Skill dan teknologi yang telah saya kuasai</p>
        <div className={`w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full content-fade-enter ${isInView ? 'active' : ''} delay-200`}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category}
            className={`group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 card-enter ${isInView ? 'active' : ''} hover-lift-animation`}
            style={{ animationDelay: isInView ? `${index * 150}ms` : '0ms' }}
          >
            <h3 className="text-lg font-bold text-blue-300 mb-5 group-hover:text-blue-200 transition-colors">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/35 hover:to-purple-500/35 text-blue-200 hover:text-blue-100 rounded-lg text-sm font-semibold transition-all duration-300 border border-blue-400/30 hover:border-blue-400/60 cursor-default hover:scale-110"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 mb-8 card-enter ${isInView ? 'active' : ''} hover-lift-animation`} style={{ animationDelay: isInView ? '400ms' : '0ms' }}>
        <h3 className="text-lg font-bold text-blue-300 mb-5 group-hover:text-blue-200 transition-colors">🏆 Sertifikasi</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/35 hover:to-purple-500/35 text-blue-200 hover:text-blue-100 rounded-lg text-sm font-semibold transition-all duration-300 border border-blue-400/30 hover:border-blue-400/60 hover:scale-110">
            Microsoft AI-900: Azure AI Fundamentals
          </div>
        </div>
      </div>

      <div className={`group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 card-enter ${isInView ? 'active' : ''} hover-lift-animation`} style={{ animationDelay: isInView ? '500ms' : '0ms' }}>
        <h3 className="text-lg font-bold text-blue-300 mb-5 group-hover:text-blue-200 transition-colors">🎖️ Prestasi</h3>
        <div className="space-y-3.5">
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">🥉 Juara Harapan 1 – OSN Matematika Tingkat Nasional (Tangerang, Banten) 2020</p>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">🏕️ Peserta Pendidikan Dasar Pecinta Alam - DIKLATSAR MAPALA PERIMATRIK</p>
        </div>
      </div>
    </section>
  );
}
