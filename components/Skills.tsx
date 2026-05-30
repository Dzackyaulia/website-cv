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
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-slate-800/30">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="gradient-text">Keahlian</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600">
            <h3 className="text-xl font-semibold text-accent mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium hover:bg-accent/40 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-8 bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600">
        <h3 className="text-xl font-semibold text-accent mb-4">🏆 Sertifikasi</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
            Microsoft AI-900: Azure AI Fundamentals
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-8 bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600">
        <h3 className="text-xl font-semibold text-accent mb-4">🎖️ Prestasi</h3>
        <div className="space-y-2">
          <p className="text-gray-300">Juara Harapan 1 – OSN Matematika Tingkat Nasional (Tangerang, Banten) 2020</p>
          <p className="text-gray-300">Peserta Pendidikan Dasar Pecinta Alam - DIKLATSAR MAPALA PERIMATRIK</p>
        </div>
      </div>
    </section>
  );
}
