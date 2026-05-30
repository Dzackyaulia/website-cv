export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Website portfolio modern dengan Next.js, Tailwind CSS, dan deployment di Vercel. Menampilkan profil, pengalaman, dan kontak.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Data Processing with Python',
      description: 'Aplikasi pemrosesan data menggunakan Python untuk analisis dataset dan visualisasi hasil.',
      tech: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Java Application Development',
      description: 'Aplikasi desktop menggunakan Java dengan antarmuka user yang intuitif dan fitur lengkap.',
      tech: ['Java', 'Swing', 'MySQL', 'Database'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Proyek</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-700/60 hover:to-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 flex flex-col animate-slide-in-up"
          >
            <h3 className="text-lg font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
            
            <div className="mb-5 pb-5 border-b border-slate-600/50">
              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 text-xs rounded-full font-medium border border-blue-500/30 group-hover:border-blue-500/60 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex-1 text-center py-2 bg-slate-600/50 hover:bg-blue-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-semibold"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="flex-1 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 text-white rounded-lg transition-all duration-300 text-sm font-semibold"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
